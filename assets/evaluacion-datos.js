// Evaluación final de conocimientos y encuesta de satisfacción.
// tipo: "om" (opción múltiple), "vf" (verdadero o falso), "rel" (relacionar columnas)

export const EVALUACION = [
  { id: "v1", tipo: "om", cap: 4,
    texto: "¿Qué significa la fórmula RCTFR para escribir prompts?",
    opciones: ["Revisar, Corregir, Traducir, Formatear y Responder", "Rol, Contexto, Tarea, Formato y Restricciones", "Resumen, Consulta, Tema, Fuente y Referencia", "Rol, Competencia, Talento, Feedback y Resultado"],
    correcta: 1,
    explicacion: "Rol (quién quieres que sea la IA), Contexto (la situación), Tarea (qué necesitas), Formato (cómo lo quieres) y Restricciones (qué debe evitar)." },
  { id: "v2", tipo: "vf", cap: 3,
    texto: "La IA generativa siempre dice la verdad, porque aprendió de millones de textos.",
    correcta: false,
    explicacion: "Falso. Responde lo que suena más probable, no necesariamente lo verdadero. Cuando no sabe algo puede inventarlo con total seguridad: a eso se le llama alucinación." },
  { id: "v3", tipo: "rel", cap: 3,
    texto: "Relaciona cada tipo de IA con su ejemplo en Recursos Humanos.",
    pares: [
      ["IA predictiva", "Estimar qué colaboradores tienen más riesgo de renunciar"],
      ["IA generativa", "Redactar un perfil de puesto o una guía de entrevista"],
      ["IA agéntica", "Revisar currículums, compararlos con el perfil y preparar un resumen por su cuenta"],
    ],
    explicacion: "La predictiva estima lo que podría pasar, la generativa crea contenido nuevo y la agéntica ejecuta tareas de varios pasos con cierta autonomía." },
  { id: "v4", tipo: "om", cap: 3,
    texto: "¿Cuál es la lección principal del caso Amazon?",
    opciones: ["Que la IA no sirve para selección de personal", "Que la IA aprende de los datos históricos y puede repetir y amplificar sus sesgos", "Que las mujeres no deben usar herramientas de IA", "Que basta con borrar una palabra para corregir un sistema sesgado"],
    correcta: 1,
    explicacion: "La herramienta aprendió de diez años de contrataciones, en su mayoría de hombres, y empezó a penalizar a las mujeres. Quitar una palabra no bastó: el sesgo puede esconderse en otras variables." },
  { id: "v5", tipo: "om", cap: 3,
    texto: "En el semáforo de la automatización, filtrar currículums es una tarea…",
    opciones: ["Verde: se puede automatizar por completo", "Amarilla: la IA propone y una persona valida", "Roja: nunca se debe usar IA", "No aplica al semáforo"],
    correcta: 1,
    explicacion: "Afecta a personas, así que la IA puede ordenar y proponer, pero una persona revisa el criterio y a quienes quedan fuera." },
  { id: "v6", tipo: "vf", cap: 3,
    texto: "Un ATS puede descartar a un buen candidato porque su currículum no usa las mismas palabras que la vacante.",
    correcta: true,
    explicacion: "Verdadero. Un ATS mal configurado filtra por palabras clave, formatos que no lee o huecos laborales. Por eso nadie se descarta sin que una persona revise el criterio." },
  { id: "v7", tipo: "rel", cap: 2,
    texto: "Relaciona cada etapa del modelo ADKAR con lo que necesita la persona.",
    pares: [
      ["Conciencia (Awareness)", "Entender por qué cambiamos"],
      ["Deseo (Desire)", "Querer participar en el cambio"],
      ["Conocimiento (Knowledge)", "Saber cómo hacerlo"],
      ["Habilidad (Ability)", "Poder hacerlo en la práctica"],
      ["Reforzamiento (Reinforcement)", "Que el cambio se sostenga"],
    ],
    explicacion: "Las cinco etapas van en orden. Si una falla, el cambio se atora ahí; por ejemplo, capacitar (conocimiento) no funciona si la persona no entiende para qué cambiar (conciencia)." },
  { id: "v8", tipo: "om", cap: 2,
    texto: "En el caso Samsung, ¿cuál fue la causa principal de la fuga de información?",
    opciones: ["Un ataque de hackers a los servidores de la empresa", "Empleados que querían dañar a la compañía", "La falta de reglas y de capacitación sobre qué información no se debía compartir con la IA", "Un virus dentro de ChatGPT"],
    correcta: 2,
    explicacion: "Los ingenieros solo querían trabajar más rápido. El riesgo vino de no tener reglas claras ni capacitación, un tema de personas que le toca a RR. HH." },
  { id: "v9", tipo: "om", cap: 5,
    texto: "¿Cuál de estas es una pregunta conductual con el método STAR?",
    opciones: ["¿Qué harías si dos personas de tu equipo se pelean?", "¿Te consideras una persona que maneja bien los conflictos?", "Cuéntame de una ocasión en que dos personas de tu equipo tuvieron un conflicto. ¿Qué hiciste y cuál fue el resultado?", "Del 1 al 10, ¿qué tan bien manejas los conflictos?"],
    correcta: 2,
    explicacion: "STAR pregunta por hechos que ya ocurrieron (Situación, Tarea, Acción y Resultado), porque predicen mejor el desempeño que las respuestas hipotéticas o las autoevaluaciones." },
  { id: "v10", tipo: "om", cap: 5,
    texto: "¿Para qué sirve una rúbrica en la entrevista por competencias?",
    opciones: ["Para que la entrevista sea más corta", "Para que distintos entrevistadores califiquen igual, con base en conductas observables", "Para que la IA decida a quién contratar", "Para no tener que preparar preguntas"],
    correcta: 1,
    explicacion: "La rúbrica describe qué conducta corresponde a cada calificación. Sin ella, un “3” significa cosas distintas para cada entrevistador." },
  { id: "v11", tipo: "vf", cap: 10,
    texto: "Si una IA genera un “test de liderazgo” en segundos, se puede aplicar en selección porque está basado en investigación.",
    correcta: false,
    explicacion: "Falso. Parece una prueba, pero nadie comprobó su validez, su confiabilidad ni sus baremos. Sin esos tres elementos no es una prueba psicométrica." },
  { id: "v12", tipo: "rel", cap: 10,
    texto: "Relaciona cada concepto psicométrico con su significado.",
    pares: [
      ["Validez", "La prueba mide lo que dice medir"],
      ["Confiabilidad", "La prueba mide de forma consistente"],
      ["Baremos", "Permiten comparar el resultado con una población de referencia"],
    ],
    explicacion: "Una báscula válida mide tu peso y no tu estatura; una confiable marca lo mismo si te pesas dos veces; y los baremos te dicen si ese peso es mucho o poco comparado con otros." },
  { id: "v13", tipo: "om", cap: 9,
    texto: "En Textiles del Valle, los supervisores del turno nocturno renuncian más. ¿Cuál es la conclusión más profesional?",
    opciones: ["El turno nocturno causa las renuncias: hay que eliminarlo", "Hay una relación que conviene investigar; puede haber otras causas, como la distancia o el transporte", "Los datos no sirven para nada", "Hay que dejar de contratar personas para el turno nocturno"],
    correcta: 1,
    explicacion: "Correlación no es causalidad. Quienes trabajan de noche también viven más lejos de la planta, así que el transporte podría ser parte de la explicación. La IA encuentra el patrón; tu criterio decide qué significa." },
  { id: "v14", tipo: "om", cap: 8,
    texto: "¿Cuál es la diferencia entre un asistente personalizado y un agente de IA?",
    opciones: ["No hay diferencia: son lo mismo", "El asistente responde con un rol y reglas fijas; el agente además ejecuta acciones de varios pasos por su cuenta", "El agente siempre es gratuito y el asistente no", "El asistente toma decisiones de contratación y el agente no"],
    correcta: 1,
    explicacion: "Un asistente (como Mage o el que crearon en el taller) trabaja con la información que le das. Un agente, además, busca, abre archivos, envía u organiza por su cuenta." },
  { id: "v15", tipo: "om", cap: 11,
    texto: "Según el principio que guía todo el curso, ¿quién toma la decisión final de contratación?",
    opciones: ["El asistente de IA, porque es más objetivo", "El ATS, porque ordena a los candidatos", "Una persona, que puede explicar por qué decidió", "El candidato con el puntaje más alto, automáticamente"],
    correcta: 2,
    explicacion: "La IA apoya; la experiencia decide. Una persona siempre toma la decisión final y puede explicar sus razones." },
];

export const ENCUESTA = {
  escala: [
    { id: "s1", texto: "La ponente dominó los temas y los explicó con claridad." },
    { id: "s2", texto: "La ponente generó un ambiente de confianza y participación." },
    { id: "s3", texto: "El contenido fue útil y aplicable a mi trabajo." },
    { id: "s4", texto: "Los ejercicios y los materiales me ayudaron a aprender." },
    { id: "s5", texto: "Las herramientas y el sitio del curso fueron fáciles de usar." },
    { id: "s6", texto: "La duración y el ritmo de las sesiones fueron adecuados." },
    { id: "s7", texto: "En general, me gustó el curso." },
  ],
  etiquetas: ["Muy en desacuerdo", "En desacuerdo", "Neutral", "De acuerdo", "Muy de acuerdo"],
  recomienda: { id: "s8", texto: "¿Recomendarías este curso a un colega?", opciones: ["Sí", "Tal vez", "No"] },
  abiertas: [
    { id: "s9", texto: "¿Qué fue lo que más te gustó o te sirvió?" },
    { id: "s10", texto: "¿Qué mejorarías?" },
    { id: "s11", texto: "¿Algún mensaje para la ponente? (opcional)" },
  ],
};

// Calificación: cada pregunta vale 1 punto; en "relacionar" cuenta la proporción de pares correctos.
export function calificar(respuestas) {
  let puntos = 0;
  const detalle = {};
  EVALUACION.forEach((q) => {
    const r = respuestas[q.id];
    let p = 0;
    if (q.tipo === "rel") {
      const ok = q.pares.filter((par, k) => r && Number(r[k]) === k).length;
      p = ok / q.pares.length;
    } else if (q.tipo === "vf") {
      p = r === q.correcta ? 1 : 0;
    } else {
      p = Number(r) === q.correcta ? 1 : 0;
    }
    detalle[q.id] = p;
    puntos += p;
  });
  return { puntos: Math.round(puntos * 10) / 10, total: EVALUACION.length, detalle };
}
