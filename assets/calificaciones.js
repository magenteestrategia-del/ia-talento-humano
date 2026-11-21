// Calificaciones automáticas del curso (se calculan con lo que ya contestaron; no modifican ni borran nada).
import { EJERCICIOS, DIAGNOSTICO } from "./datos.js";
import { EVALUACION, calificar } from "./evaluacion-datos.js";

// Pesos (puedes cambiarlos aquí).
export const PESOS = {
  diagnostico: 10,   // puntos de participación por contestar el diagnóstico
  ejercicios: 90,    // puntos de participación repartidos entre todas las preguntas de los ejercicios
  participacion: 50, // % de la calificación final
  evaluacion: 50,    // % de la calificación final
};

const DIAG_EVAL = DIAGNOSTICO.filter((q) => q.correcta !== null && q.correcta !== undefined);
const TOTAL_PREG = EJERCICIOS.reduce((s, e) => s + e.preguntas.length, 0);
const ES_EQUIPO = Object.fromEntries(EJERCICIOS.map((e) => [e.id, !/individual/i.test(e.modo || "")]));
const EJ_DE = Object.fromEntries(EJERCICIOS.flatMap((e) => e.preguntas.map((p) => [p.id, e.id])));

const norm = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-zñ ]/g, " ").replace(/\s+/g, " ").trim();
// "Ana, Luis y Carla" → ["Ana", "Luis", "Carla"]
export function separarNombres(s) {
  return String(s || "").split(/\s*(?:,|;|\/|&|\+|\sy\s|\se\s)\s*/i).map((x) => x.trim()).filter((x) => norm(x).length >= 2);
}
const contestada = (v) => v !== undefined && v !== null && String(v).trim() !== "";

export function calcularCalificaciones({ diag = [], ejer = [], evals = [] }) {
  const personas = []; // { claves:Set, nombre, equipo, diag, propias:Set, equipos:Set, eval }
  const buscar = (nombre) => {
    const n = norm(nombre); if (!n) return null;
    let p = personas.find((x) => x.claves.has(n));
    if (p) return p;
    // Coincidencia por palabras (p. ej. "Ana" y "Ana Pérez"), solo si es única.
    const t = n.split(" ");
    const cand = personas.filter((x) => [...x.claves].some((k) => { const u = k.split(" "); return t.every((w) => u.includes(w)) || u.every((w) => t.includes(w)); }));
    return cand.length === 1 ? cand[0] : null;
  };
  const obtener = (nombre) => {
    let p = buscar(nombre);
    if (!p) { p = { claves: new Set(), nombre: nombre.trim(), equipo: "", diag: false, diagAciertos: null, diagResp: null, evalResp: null, ejResp: {}, propias: new Set(), equipos: new Set(), eval: null }; personas.push(p); }
    p.claves.add(norm(nombre));
    if (nombre.trim().length > p.nombre.length) p.nombre = nombre.trim();
    return p;
  };

  // Respuestas de cada equipo (para los ejercicios en equipo).
  const porEquipo = {}, respEquipo = {};
  ejer.forEach((d) => {
    const eq = d.equipo || ""; if (!eq) return;
    porEquipo[eq] = porEquipo[eq] || new Set();
    respEquipo[eq] = respEquipo[eq] || {};
    Object.entries(d.respuestas || {}).forEach(([pid, v]) => { if (contestada(v) && ES_EQUIPO[EJ_DE[pid]]) { porEquipo[eq].add(pid); if (!(pid in respEquipo[eq])) respEquipo[eq][pid] = v; } });
  });

  ejer.forEach((d) => separarNombres(d.nombre).forEach((nom) => {
    const p = obtener(nom);
    if (d.equipo) { p.equipos.add(d.equipo); p.equipo = p.equipo || d.equipo; }
    Object.entries(d.respuestas || {}).forEach(([pid, v]) => { if (contestada(v) && EJ_DE[pid]) { p.propias.add(pid); p.ejResp[pid] = { v, eq: false }; } });
  }));
  evals.filter((e) => e.enviado).forEach((e) => separarNombres(e.nombre).forEach((nom) => {
    const p = obtener(nom);
    const r = calificar(e.respuestas || {});
    if (!p.eval || r.puntos > p.eval.puntos) { p.eval = r; p.evalResp = e.respuestas || {}; }
    if (e.equipo && !p.equipo) p.equipo = e.equipo;
  }));
  diag.forEach((d) => {
    if (!d.respuestas || !Object.keys(d.respuestas).length) return;
    const ac = DIAG_EVAL.filter((q) => d.respuestas[q.id] === q.correcta).length;
    separarNombres(d.nombre).forEach((nom) => { const p = obtener(nom); p.diag = true; if (p.diagAciertos === null || ac > p.diagAciertos) { p.diagAciertos = ac; p.diagResp = d.respuestas; } });
  });

  return personas.map((p) => {
    const ejResp = { ...p.ejResp };
    p.equipos.forEach((eq) => Object.entries(respEquipo[eq] || {}).forEach(([pid, v]) => { if (!ejResp[pid]) ejResp[pid] = { v, eq: true }; }));
    const hechas = new Set(p.propias);
    p.equipos.forEach((eq) => (porEquipo[eq] || new Set()).forEach((pid) => hechas.add(pid)));
    const ejPct = TOTAL_PREG ? hechas.size / TOTAL_PREG : 0;
    const participacion = Math.round((p.diag ? PESOS.diagnostico : 0) + PESOS.ejercicios * ejPct);
    const evaluacion = p.eval ? Math.round((p.eval.puntos / EVALUACION.length) * 100) : null;
    const final = Math.round((participacion * PESOS.participacion + (evaluacion || 0) * PESOS.evaluacion) / 100);
    return {
      nombre: p.nombre, equipo: p.equipo || "", diagnostico: p.diag,
      diagAciertos: p.diagAciertos, diagTotal: DIAG_EVAL.length,
      ejercicios: hechas.size, totalEjercicios: TOTAL_PREG,
      evalPuntos: p.eval ? p.eval.puntos : null, evalTotal: EVALUACION.length,
      participacion, evaluacion, final,
      detalle: { diag: p.diagResp || {}, eval: p.evalResp || {}, ej: ejResp },
    };
  }).sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
}
