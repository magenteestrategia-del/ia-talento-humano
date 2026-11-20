// Widget de Mage, la asistente del curso. Se incluye en las páginas de los alumnos.
const SUGERENCIAS = [
  "¿Cómo aplico la fórmula RCTFR?",
  "¿Qué es un ATS y qué riesgos tiene?",
  "Explícame ADKAR con un ejemplo",
  "¿Por qué la IA no sustituye una prueba psicométrica?",
];

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Markdown muy sencillo y seguro: negritas, cursivas, listas y párrafos.
function formato(texto) {
  const lineas = esc(texto).split(/\n/);
  let html = "", lista = null;
  const inline = (t) => t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*(?!\s)(.+?)\*/g, "$1<em>$2</em>");
  for (const l of lineas) {
    const ul = l.match(/^\s*[-•*]\s+(.*)/), ol = l.match(/^\s*\d+[.)]\s+(.*)/);
    if (ul || ol) {
      const tipo = ul ? "ul" : "ol";
      if (lista !== tipo) { if (lista) html += `</${lista}>`; html += `<${tipo}>`; lista = tipo; }
      html += `<li>${inline((ul || ol)[1])}</li>`;
    } else {
      if (lista) { html += `</${lista}>`; lista = null; }
      if (l.trim()) html += `<p>${inline(l.replace(/^#+\s*/, ""))}</p>`;
    }
  }
  if (lista) html += `</${lista}>`;
  return html;
}

const raiz = document.createElement("div");
raiz.className = "asis";
raiz.innerHTML = `
  <button class="asis-boton" aria-expanded="false" aria-controls="asis-panel">
    <span class="asis-chispa" aria-hidden="true">✦</span><span class="asis-txt">Pregúntale a Mage</span>
  </button>
  <section class="asis-panel" id="asis-panel" role="dialog" aria-label="Mage, la asistente del curso" hidden>
    <header class="asis-cab">
      <div><div class="asis-titulo">Mage <span class="asis-lema">magia + tecnología</span></div><div class="asis-sub">La asistente del curso, creada por Zahayra López</div></div>
      <button class="asis-cerrar" aria-label="Cerrar">✕</button>
    </header>
    <div class="asis-mensajes" aria-live="polite">
      <div class="asis-msg ia"><p>¡Hola! Soy <strong>Mage</strong>, la asistente del curso. Mi nombre viene de Magente, de <em>magic</em> y de <em>mageek</em>: magia y tecnología. ✦</p><p>Pregúntame lo que quieras sobre los temas: prompts, ATS, competencias, psicometría, gestión del cambio, ética…</p><p><em>No compartas datos personales de candidatos o colaboradores.</em></p></div>
      <div class="asis-sugs">${SUGERENCIAS.map((s) => `<button>${esc(s)}</button>`).join("")}</div>
    </div>
    <form class="asis-form">
      <textarea rows="1" maxlength="1500" placeholder="Escribe tu duda…" aria-label="Tu pregunta"></textarea>
      <button type="submit" aria-label="Enviar">➤</button>
    </form>
  </section>`;
document.body.appendChild(raiz);

const $ = (s) => raiz.querySelector(s);
const panel = $(".asis-panel"), boton = $(".asis-boton"), lista = $(".asis-mensajes"), form = $(".asis-form"), campo = $("textarea");
const historial = [];
let ocupado = false;

function abrir(v) {
  panel.hidden = !v; boton.setAttribute("aria-expanded", String(v)); raiz.classList.toggle("abierto", v);
  if (v) setTimeout(() => campo.focus(), 50);
}
boton.onclick = () => abrir(panel.hidden);
$(".asis-cerrar").onclick = () => abrir(false);
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) abrir(false); });
document.querySelectorAll("[data-abrir-asistente]").forEach((b) => b.addEventListener("click", (e) => { e.preventDefault(); abrir(true); }));
raiz.querySelectorAll(".asis-sugs button").forEach((b) => b.onclick = () => enviar(b.textContent));

function agregar(rol, html) {
  const d = document.createElement("div");
  d.className = "asis-msg " + rol;
  d.innerHTML = html;
  lista.appendChild(d);
  lista.scrollTop = lista.scrollHeight;
  return d;
}

async function enviar(texto) {
  texto = texto.trim();
  if (!texto || ocupado) return;
  ocupado = true;
  const sugs = raiz.querySelector(".asis-sugs"); if (sugs) sugs.remove();
  agregar("yo", `<p>${esc(texto)}</p>`);
  historial.push({ rol: "user", texto });
  campo.value = ""; campo.style.height = "";
  const pensando = agregar("ia pensando", `<span></span><span></span><span></span>`);
  try {
    const r = await fetch("/api/asistente", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ mensajes: historial }) });
    const datos = await r.json().catch(() => ({}));
    pensando.remove();
    if (r.status === 404 || datos.error === "falta_clave") {
      agregar("ia aviso", `<p>Mage se activa cuando el sitio está publicado en Vercel con la clave de Gemini configurada.</p>`);
      historial.pop();
    } else if (!r.ok) {
      agregar("ia aviso", `<p>${esc(datos.error || "No pude responder. Intenta de nuevo.")}</p>`);
      historial.pop();
    } else {
      agregar("ia", formato(datos.texto));
      historial.push({ rol: "model", texto: datos.texto });
    }
  } catch {
    pensando.remove();
    agregar("ia aviso", `<p>No hay conexión con Mage en este momento.</p>`);
    historial.pop();
  } finally { ocupado = false; }
}

form.onsubmit = (e) => { e.preventDefault(); enviar(campo.value); };
campo.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); enviar(campo.value); } });
campo.addEventListener("input", () => { campo.style.height = "auto"; campo.style.height = Math.min(campo.scrollHeight, 120) + "px"; });
