// Capa de datos: usa Firebase si está configurado; si no, MODO DEMOSTRACIÓN (localStorage).
import { FIREBASE, CORREO_PONENTE } from "./config.js";

const V = "10.12.2";
export const modoDemo = !FIREBASE.apiKey || FIREBASE.apiKey.includes("PEGA_AQUI");

let fb = null; // { auth, db, mod }

async function cargarFirebase() {
  if (fb) return fb;
  const app = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`);
  const authMod = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-auth.js`);
  const fs = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`);
  const a = app.initializeApp(FIREBASE);
  fb = { auth: authMod.getAuth(a), db: fs.getFirestore(a), authMod, fs };
  return fb;
}

// ---------- Modo demostración ----------
const clave = (c) => "ia-rh-demo:" + c;
function demoLeerTodo(c) {
  try { return JSON.parse(localStorage.getItem(clave(c)) || "{}"); } catch { return {}; }
}
function demoEscribirTodo(c, obj) {
  try { localStorage.setItem(clave(c), JSON.stringify(obj)); } catch {}
}
function demoUid() {
  try {
    let id = sessionStorage.getItem("ia-rh-demo-uid");
    if (!id) { id = "demo-" + Math.random().toString(36).slice(2, 10); sessionStorage.setItem("ia-rh-demo-uid", id); }
    return id;
  } catch { return "demo-" + Math.random().toString(36).slice(2, 10); }
}

// ---------- API para alumnos ----------
export async function iniciarAlumno() {
  if (modoDemo) return demoUid();
  const { auth, authMod } = await cargarFirebase();
  if (auth.currentUser) return auth.currentUser.uid;
  const cred = await authMod.signInAnonymously(auth);
  return cred.user.uid;
}

export async function leer(coleccion, uid) {
  if (modoDemo) return demoLeerTodo(coleccion)[uid] || null;
  const { db, fs } = await cargarFirebase();
  const snap = await fs.getDoc(fs.doc(db, coleccion, uid));
  return snap.exists() ? snap.data() : null;
}

// Guarda (fusionando) los datos del alumno. "respuestas" se fusiona por clave.
export async function guardar(coleccion, uid, datos) {
  if (modoDemo) {
    const todo = demoLeerTodo(coleccion);
    const previo = todo[uid] || {};
    todo[uid] = { ...previo, ...datos, respuestas: { ...(previo.respuestas || {}), ...(datos.respuestas || {}) }, actualizado: Date.now() };
    demoEscribirTodo(coleccion, todo);
    return;
  }
  const { db, fs } = await cargarFirebase();
  await fs.setDoc(fs.doc(db, coleccion, uid), { ...datos, actualizado: fs.serverTimestamp() }, { merge: true });
}

// ---------- API para el ponente ----------
export async function observarSesion(cb) {
  if (modoDemo) { cb({ ok: true, correo: "modo demostración" }); return; }
  const { auth, authMod } = await cargarFirebase();
  authMod.onAuthStateChanged(auth, (u) => {
    if (!u || u.isAnonymous) return cb({ ok: false });
    const ok = (u.email || "").toLowerCase() === CORREO_PONENTE.toLowerCase();
    cb({ ok, correo: u.email, ajeno: !ok });
  });
}

export async function entrarPonente() {
  const { auth, authMod } = await cargarFirebase();
  await authMod.signInWithPopup(auth, new authMod.GoogleAuthProvider());
}

export async function salirPonente() {
  if (modoDemo) return;
  const { auth, authMod } = await cargarFirebase();
  await authMod.signOut(auth);
}

// Llama a cb(lista) cada vez que cambian los datos. Devuelve una función para dejar de observar.
export async function observar(coleccion, cb, alError) {
  if (modoDemo) {
    let ultimo = "";
    const tick = () => {
      const raw = (() => { try { return localStorage.getItem(clave(coleccion)) || "{}"; } catch { return "{}"; } })();
      if (raw === ultimo) return;
      ultimo = raw;
      const obj = JSON.parse(raw);
      cb(Object.entries(obj).map(([id, d]) => ({ id, ...d })));
    };
    tick();
    const t = setInterval(tick, 1000);
    window.addEventListener("storage", tick);
    return () => { clearInterval(t); window.removeEventListener("storage", tick); };
  }
  const { db, fs } = await cargarFirebase();
  return fs.onSnapshot(fs.collection(db, coleccion),
    (snap) => cb(snap.docs.map((d) => {
      const x = d.data();
      const t = x.actualizado && x.actualizado.toMillis ? x.actualizado.toMillis() : null;
      return { id: d.id, ...x, actualizado: t };
    })),
    (e) => alError && alError(e));
}

export async function borrarTodo(coleccion) {
  if (modoDemo) { demoEscribirTodo(coleccion, {}); return; }
  const { db, fs } = await cargarFirebase();
  const snap = await fs.getDocs(fs.collection(db, coleccion));
  await Promise.all(snap.docs.map((d) => fs.deleteDoc(d.ref)));
}
