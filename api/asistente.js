// Función de Vercel: Mage, la asistente del curso, con Gemini.
// Necesita la variable de entorno GEMINI_API_KEY (Vercel → Settings → Environment Variables).
// Opcional: GEMINI_MODEL (por defecto gemini-3.8-flash; si falla, usa gemini-3.5-flash-lite).
import { CONOCIMIENTO } from "./_conocimiento.js";

const MODELO = process.env.GEMINI_MODEL || "gemini-3.8-flash";
const RESPALDO = "gemini-3.5-flash-lite";
const MAX_MENSAJES = 12;
const MAX_CARACTERES = 1500;

const INSTRUCCIONES = `Eres Mage, la asistente del curso "IA aplicada a la evaluación del talento humano", creada por Zahayra López (MagentE, consultoría organizacional) para alumnos de maestría en Honduras. Tu nombre viene de MagentE, de "magic" y de "mageek": magia y tecnología. Hablas de ti en femenino ("estoy lista", "soy tu asistente"). Si te preguntan quién eres o qué significa tu nombre, explícalo con calidez y en una o dos frases.

Tu función: resolver dudas sobre los temas del curso, explicar conceptos con ejemplos de Recursos Humanos y ayudar a los alumnos a redactar mejores prompts.

Reglas:
- Responde siempre en español, con tono profesional, cálido y claro. Sé breve: de 2 a 6 párrafos cortos o una lista. Usa **negritas** para lo clave.
- Basa tus respuestas en la guía de estudio de abajo. Cuando sea útil, menciona el tema de la guía donde pueden profundizar (por ejemplo, "Tema 3. Ingeniería de prompts").
- Si preguntan algo relacionado con RR. HH. o IA que no está en la guía, puedes responder con conocimiento general, aclarando que no forma parte del material del curso.
- Si la pregunta no tiene relación con el curso, explica amablemente que solo puedes ayudar con los temas del curso.
- No inventes datos, leyes, cifras ni fuentes. Si no sabes algo, dilo. Para temas legales, recuerda verificar la normativa vigente en Honduras.
- No evalúes candidatos reales ni recomiendes contratar o rechazar a nadie. Si alguien comparte datos personales de una persona (nombres, identidad, teléfonos, salud, edad), pídele que no lo haga y que anonimice la información.
- No resuelvas por completo los ejercicios del curso: orienta con preguntas y pistas para que el alumno piense.
- Recuerda el principio del curso cuando venga al caso: la IA apoya; la experiencia decide.

=== GUÍA DE ESTUDIO ===
${CONOCIMIENTO}`;

// Límite sencillo por IP (en memoria; se reinicia cuando la función se recicla).
const visitas = new Map();
function permitido(ip) {
  const ahora = Date.now();
  const lista = (visitas.get(ip) || []).filter((t) => ahora - t < 60_000);
  if (lista.length >= 10) return false;
  lista.push(ahora);
  visitas.set(ip, lista);
  return true;
}

async function llamarGemini(modelo, contents) {
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": process.env.GEMINI_API_KEY },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: INSTRUCCIONES }] },
      contents,
      generationConfig: { temperature: 0.4, maxOutputTokens: 900 },
    }),
  });
  const datos = await r.json().catch(() => ({}));
  return { ok: r.ok, status: r.status, datos };
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Método no permitido" });
  if (!process.env.GEMINI_API_KEY) return res.status(503).json({ error: "falta_clave" });

  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "anon";
  if (!permitido(ip)) return res.status(429).json({ error: "Demasiadas preguntas seguidas. Espera un minuto." });

  let cuerpo = req.body;
  if (typeof cuerpo === "string") { try { cuerpo = JSON.parse(cuerpo); } catch { cuerpo = {}; } }
  const mensajes = Array.isArray(cuerpo?.mensajes) ? cuerpo.mensajes.slice(-MAX_MENSAJES) : [];
  const contents = mensajes
    .filter((m) => m && typeof m.texto === "string" && m.texto.trim())
    .map((m) => ({ role: m.rol === "model" ? "model" : "user", parts: [{ text: m.texto.slice(0, MAX_CARACTERES) }] }));
  if (!contents.length || contents[contents.length - 1].role !== "user") {
    return res.status(400).json({ error: "Mensaje vacío" });
  }

  try {
    let r = await llamarGemini(MODELO, contents);
    if (!r.ok && [404, 429, 500, 503].includes(r.status) && MODELO !== RESPALDO) r = await llamarGemini(RESPALDO, contents);
    if (!r.ok) {
      console.error("Gemini", r.status, JSON.stringify(r.datos).slice(0, 500));
      return res.status(502).json({ error: r.status === 429 ? "Mage está muy ocupada. Intenta en un momento." : "Mage no pudo responder. Intenta de nuevo." });
    }
    const texto = (r.datos.candidates?.[0]?.content?.parts || []).map((p) => p.text || "").join("").trim();
    return res.status(200).json({ texto: texto || "No tengo una respuesta para eso. ¿Puedes reformular la pregunta?" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Mage no pudo responder. Intenta de nuevo." });
  }
}
