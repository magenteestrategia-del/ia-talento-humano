// ============================================================
//  CONFIGURACIÓN DEL SITIO — este es el único archivo que necesitas editar
// ============================================================

// 1) Datos del curso (aparecen en la página de inicio y en la ficha del programa)
export const CURSO = {
  titulo: "IA aplicada a la evaluación del talento humano",
  programa: "Maestría en Psicología Industrial y Organizacional",
  universidad: "Universidad Nacional Autónoma de Honduras (UNAH)",
  modulo: "Evaluación del talento humano",
  ponente: "Zahayra López",
  semblanza: "Consultora sénior en Desarrollo Organizacional y coach ejecutiva certificada, con más de 10 años de experiencia en Capital Humano, gestión del cambio y adopción de inteligencia artificial en las organizaciones.",
  sesion1: { dia: "Viernes 20 de noviembre", horario: "6:00 a 9:00 p. m." },
  sesion2: { dia: "Sábado 21 de noviembre", horario: "8:00 a. m. a 1:00 p. m." },
  modalidad: "En línea, sincrónica por videoconferencia",
};

// 1B) Redes y enlaces (deja "" en los que no quieras mostrar; se ocultan solos)
export const REDES = {
  linkedinPonente: "https://www.linkedin.com/in/zahayralopez-consultor/",
  sitioMagente: "",   // la página web se oculta; se usa LinkedIn
  linkedinMagente: "https://www.linkedin.com/company/103974069/",
  instagramMagente: "",  // ej. "https://www.instagram.com/magente"
  facebookMagente: "",
  libro: "https://noerestu-sale.vercel.app/",
};

// 2) Correo de Google con el que entrarás al panel del ponente.
//    Debe ser EXACTAMENTE el mismo que pongas en las reglas de Firestore.
export const CORREO_PONENTE = "TU_CORREO@gmail.com";

// 3) Configuración de Firebase (la copias de la consola de Firebase:
//    Configuración del proyecto → Tus apps → Configuración del SDK).
//    Mientras no la llenes, el sitio funciona en MODO DEMOSTRACIÓN:
//    las respuestas solo se guardan en este navegador, para que puedas probarlo.
export const FIREBASE = {
  apiKey: "PEGA_AQUI",
  authDomain: "PEGA_AQUI",
  projectId: "PEGA_AQUI",
  storageBucket: "PEGA_AQUI",
  messagingSenderId: "PEGA_AQUI",
  appId: "PEGA_AQUI",
};
