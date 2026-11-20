import { CURSO, REDES } from "./config.js";
import { modoDemo } from "./datastore.js";

// Rellena cualquier elemento con data-curso="clave" o data-curso="sesion1.dia"
document.querySelectorAll("[data-curso]").forEach((el) => {
  const v = el.dataset.curso.split(".").reduce((o, k) => (o ? o[k] : undefined), CURSO);
  if (v) el.textContent = v;
});

// Enlaces a redes: se ocultan los que estén vacíos en config.js
document.querySelectorAll("[data-red]").forEach((a) => {
  const u = REDES && REDES[a.dataset.red];
  if (u) a.href = u; else a.style.display = "none";
});

if (modoDemo) {
  const b = document.createElement("div");
  b.className = "aviso-demo";
  b.innerHTML = "Modo demostración: las respuestas solo se guardan en este navegador. Para usarlo en clase, configura Firebase en <code>assets/config.js</code>.";
  document.body.prepend(b);
}

// Firma de MagentE al pie de cada página
const firma = document.createElement("div");
firma.className = "firma-marca";
firma.innerHTML = '<div class="firma-unah"><img src="assets/logos-unah.png" alt="Maestría en Psicología Industrial y Organizacional · Universidad Nacional Autónoma de Honduras (UNAH)"><span>Material elaborado para la <b>Maestría en Psicología Industrial y Organizacional</b> · Universidad Nacional Autónoma de Honduras</span></div><span class="firma-links"><a data-red2="linkedinPonente" target="_blank" rel="noopener">LinkedIn</a><a data-red2="libro" target="_blank" rel="noopener">Guía No eres tú</a></span><a href="https://www.linkedin.com/company/103974069/" target="_blank" rel="noopener">Un proyecto de <span class="logo-magente">Magent<b>E</b></span> · Consultoría organizacional</a>';
document.body.appendChild(firma);
firma.querySelectorAll("[data-red2]").forEach((a) => { const u = REDES[a.dataset.red2]; if (u) a.href = u; else a.remove(); });

// Animación de aparición al hacer scroll
const obs = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
}), { threshold: 0.12 }) : null;
document.querySelectorAll(".revelar").forEach((el) => obs ? obs.observe(el) : el.classList.add("visible"));

export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
