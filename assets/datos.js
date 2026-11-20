// Contenido del diagnóstico y de la guía de ejercicios.
// Puedes editar textos aquí; conserva los "id" para no mezclar respuestas ya guardadas.

export const DIAGNOSTICO = [
  { id: "q1", texto: "¿Con qué frecuencia usas alguna herramienta de IA (ChatGPT, Gemini, Copilot, Claude)?",
    opciones: ["Nunca la he usado", "La he probado alguna vez", "Una o dos veces por semana", "Todos los días"],
    correcta: null, nota: "Sin respuesta correcta. Sirve para ajustar el nivel de la clase." },
  { id: "q2", texto: "¿Qué tarea de selección te quita más tiempo hoy?",
    opciones: ["Redactar vacantes y perfiles", "Revisar currículums", "Preparar y hacer entrevistas", "Elaborar informes de candidatos"],
    correcta: null, nota: "Sin respuesta correcta. Retómala en el taller del viernes." },
  { id: "q3", texto: "¿Tu organización usa algún sistema para gestionar candidatos (un ATS)?",
    opciones: ["Sí, y tiene funciones de IA", "Sí, pero sin IA", "No, usamos correo y hojas de cálculo", "No sé qué es un ATS"],
    correcta: null, nota: "Sin respuesta correcta. Introduce el tema de los ATS." },
  { id: "q4", texto: "¿Qué es un \"prompt\"?",
    opciones: ["Un programa que se instala en la computadora", "La instrucción o pregunta que le escribes a la IA", "Un tipo de prueba psicométrica", "La respuesta que da la IA"],
    correcta: 1, nota: "La calidad de la respuesta depende en gran medida de la calidad del prompt." },
  { id: "q5", texto: "¿La IA puede inventar datos y presentarlos con total seguridad?",
    opciones: ["No, siempre consulta fuentes confiables", "Sí, puede generar información falsa que suena convincente", "Solo si se lo pides", "Solo en las versiones gratuitas"],
    correcta: 1, nota: "A esto se le llama \"alucinación\". Por eso todo dato, ley o cifra se verifica." },
  { id: "q6", texto: "¿Humano o IA? \"Buscamos un supervisor de producción apasionado por la excelencia, con capacidad para liderar equipos de alto desempeño en un entorno dinámico y retador.\"",
    opciones: ["La escribió una persona", "La escribió una IA", "Imposible saberlo"],
    correcta: 2, nota: "La respuesta más honesta es \"imposible saberlo\": la escribió una IA, pero suena igual que muchas vacantes reales. Si no podemos distinguirla, ¿qué hace valioso al profesional?" },
  { id: "q7", texto: "Semáforo: \"Usar IA para descartar automáticamente a los candidatos mayores de 45 años y ahorrar tiempo.\"",
    opciones: ["Verde: automatizar", "Amarillo: la IA propone y el humano valida", "Rojo: no se debe hacer"],
    correcta: 2, nota: "Es discriminación por edad, con o sin IA. La IA solo lo haría más rápido y a mayor escala." },
  { id: "q8", texto: "Semáforo: \"Pedirle a la IA un primer borrador de la guía de entrevista por competencias.\"",
    opciones: ["Verde: automatizar", "Amarillo: la IA propone y el humano valida", "Rojo: no se debe hacer"],
    correcta: 1, nota: "Es un excelente punto de partida, pero las preguntas las revisa y ajusta alguien con experiencia." },
  { id: "q9", texto: "¿La IA es objetiva porque es una máquina?",
    opciones: ["Sí, no tiene prejuicios", "No, puede repetir los sesgos de los datos con los que aprendió", "Sí, si es de pago", "Solo en selección de personal"],
    correcta: 1, nota: "Lo veremos con el caso Amazon." },
  { id: "q10", texto: "¿Necesitas saber programar para crear tu propio asistente de IA?",
    opciones: ["Sí, en Python", "Sí, al menos lo básico", "No, se configura escribiendo instrucciones en lenguaje normal", "No se puede sin pagar"],
    correcta: 2, nota: "El sábado cada equipo creará el suyo gratis, en Gemini, ChatGPT o Claude." },
  { id: "q11", texto: "¿Quién debe tomar la decisión final de contratación?",
    opciones: ["La IA, porque analiza más datos", "El candidato con mayor puntaje automático", "Una persona, apoyada en la información que da la IA", "Depende de la empresa"],
    correcta: 2, nota: "El principio de todo el curso: la IA apoya, la experiencia decide." },
];

export const CASO = "Textiles del Valle es una maquila textil en San Pedro Sula con 800 colaboradores. En el último año contrató 25 supervisores de producción y 9 renunciaron antes de cumplir seis meses. La gerencia sospecha que el problema está en cómo se selecciona a los supervisores.";

export const EJERCICIOS = [
 {
  "id": "e1",
  "dia": "Viernes",
  "titulo": "El caso Amazon",
  "modo": "En equipo · 7 min",
  "objetivo": "Entender, con un caso real, cómo una IA puede heredar los sesgos de una organización.",
  "herramienta": "No necesitas IA: solo leer y conversar en tu sala de equipo.",
  "lectura": [
   "En 2014, Amazon creó una herramienta para calificar currículums de una a cinco estrellas. Para aprender qué era un “buen” candidato, se entrenó con los currículums que la empresa había recibido en los diez años anteriores, la mayoría de hombres.",
   "El sistema aprendió solo a penalizar los currículums que decían “mujeres” (por ejemplo, “capitana del club de ajedrez de mujeres”) y a egresadas de universidades femeninas. Amazon intentó corregirlo, pero no pudo garantizar que no discriminara de otras formas, y en 2017 abandonó el proyecto. Los reclutadores nunca se basaron solo en sus recomendaciones.",
   "El caso completo está en el Capítulo 3 de la guía."
  ],
  "pasos": [
   "Entren a su sala de equipo en la videollamada.",
   "Una persona lee en voz alta el resumen del caso (arriba).",
   "Comenten juntos las tres preguntas, unos dos minutos cada una.",
   "Una persona escribe las respuestas del equipo aquí abajo. Se guardan solas."
  ],
  "ejemplo": "1.3 → “Si casi todos los supervisores que contratamos en los últimos años eran hombres del turno diurno que viven cerca de la planta, la IA podría castigar a mujeres o a quienes viven lejos, aunque sean buenos candidatos.”",
  "guia": "Capítulo 3",
  "preguntas": [
   {
    "id": "1.1",
    "texto": "¿Qué salió mal en la herramienta de Amazon y por qué?"
   },
   {
    "id": "1.2",
    "texto": "¿Quién debió detectar el problema y en qué momento?"
   },
   {
    "id": "1.3",
    "texto": "Si Textiles del Valle entrenara una IA con sus contrataciones de los últimos diez años, ¿qué sesgos podría heredar?"
   }
  ]
 },
 {
  "id": "e2",
  "dia": "Viernes",
  "titulo": "Caza el error",
  "modo": "Individual · 10 min",
  "objetivo": "Comprobar que tu experiencia profesional detecta errores que la IA comete con total seguridad.",
  "herramienta": "No necesitas IA: solo leer el material con ojo crítico.",
  "material": 1,
  "pasos": [
   "Abre el Material 1 (botón “Ver el material”, aquí abajo). Es una guía de entrevista que generó una IA para el puesto de supervisor.",
   "Léela como si te la fueran a entregar para entrevistar mañana.",
   "Revisa cuatro cosas: las competencias, las preguntas, la cita legal y la escala de calificación.",
   "Anota cada error que encuentres y por qué es un problema. Pista: hay siete."
  ],
  "ejemplo": "“Pregunta 2: ‘¿Cuántos años tiene?’ — Discrimina por edad y no tiene relación con el desempeño del puesto.”",
  "guia": "Capítulo 4",
  "preguntas": [
   {
    "id": "2.1",
    "texto": "Enumera cada error que encuentres y explica por qué es un problema."
   },
   {
    "id": "2.2",
    "texto": "¿Qué parte de tu experiencia te permitió detectarlo?"
   }
  ]
 },
 {
  "id": "e3",
  "dia": "Viernes",
  "titulo": "Mi primer prompt RCTFR",
  "modo": "En equipo · Taller 1 · 45 min",
  "objetivo": "Construir con IA el perfil por competencias y la guía de entrevista de su puesto real. Es el inicio de su proyecto.",
  "herramienta": "ChatGPT, Gemini o Claude (la que prefieran), en una pestaña nueva del navegador.",
  "pasos": [
   "Abran chatgpt.com (o Gemini o Claude) en una pestaña nueva y hagan clic en Nuevo chat. Si nunca la han usado, revisen la Guía rápida de herramientas.",
   "Copien el Prompt 1 con el botón “Copiar” y péguenlo en el cuadro de la IA (Ctrl + V).",
   "Antes de enviarlo, cambien lo que está entre corchetes: el tipo de organización, el número de colaboradores y el nombre del puesto. Luego presionen Enter.",
   "La IA les hará algunas preguntas. Contéstenlas con datos reales del puesto, sin nombres de personas.",
   "Revisen el perfil que entrega: ¿las cinco competencias sí aplican?, ¿los indicadores se pueden observar? Pidan ajustes concretos, por ejemplo: “Cambia la competencia 3 por seguridad industrial”.",
   "Cuando el perfil les guste, pídanle la guía de entrevista con el Prompt 2 (en la misma conversación, pegando el perfil donde dice [pegar perfil]).",
   "Copien el perfil y la guía a su documento de equipo: son los productos 1 y 2 del proyecto.",
   "Aquí abajo, peguen su Prompt 1 ya completado (3.1) y escriban qué cambiaron de la primera respuesta y por qué (3.2)."
  ],
  "prompts": [
   {
    "titulo": "Prompt 1 · Perfil por competencias",
    "texto": "Actúa como especialista en selección por competencias. Trabajo en [tipo de organización] en Honduras con [número] colaboradores. Elabora el perfil por competencias del puesto de [nombre del puesto]: propósito del puesto, cinco competencias clave con su definición y tres niveles de dominio con indicadores observables. Preséntalo en una tabla. No incluyas requisitos de edad, género, estado civil ni apariencia. Antes de responder, hazme las preguntas que necesites."
   },
   {
    "titulo": "Prompt 2 · Guía de entrevista con rúbrica",
    "texto": "Actúa como especialista en entrevistas conductuales. Con base en este perfil [pegar perfil], elabora una guía de entrevista con dos preguntas por competencia usando el método STAR (Situación, Tarea, Acción, Resultado), con preguntas de seguimiento y una rúbrica de 1 a 4 con conductas observables para cada nivel."
   }
  ],
  "ejemplo": "3.2 → “La IA puso ‘comunicación’ y ‘trabajo en equipo’ como competencias separadas y muy genéricas. Las unimos y agregamos ‘seguridad industrial’, que es clave en planta. También pedimos indicadores más concretos para el nivel básico.”",
  "guia": "Capítulos 4 y 5",
  "producto": "Productos 1 y 2 del proyecto",
  "preguntas": [
   {
    "id": "3.1",
    "texto": "Pega tu prompt para el perfil por competencias de tu puesto real. Marca qué parte es el Rol, el Contexto, la Tarea, el Formato y las Restricciones."
   },
   {
    "id": "3.2",
    "texto": "¿Qué cambiaste del primer resultado de la IA y por qué?"
   }
  ]
 },
 {
  "id": "e4",
  "dia": "Sábado",
  "titulo": "Tu asistente y su prueba de estrés",
  "modo": "En equipo · Taller 2 · 50 min",
  "objetivo": "Crear un asistente de selección con las instrucciones y archivos de su puesto, y comprobar que respeta las reglas antes de confiar en él.",
  "herramienta": "Gemini (Gem o Skill) o, si no les aparece, un Proyecto de ChatGPT. Necesitan su perfil y su rúbrica del viernes.",
  "material": 2,
  "pasos": [
   "Parte 1 · Crear el asistente (20 min). Entren a gemini.google.com con su cuenta personal. En el menú lateral busquen Gems → Nuevo Gem. Si no aparece, Personalizar → Skills → Crear → Crear manualmente. Si no ven ninguna de las dos, usen chatgpt.com → + junto a Proyectos.",
   "Pónganle nombre, por ejemplo “Asistente de Selección – Supervisor”.",
   "Copien la Plantilla de instrucciones (botón “Copiar”), péguenla en el campo de instrucciones y cambien lo que está entre corchetes.",
   "Suban como archivos su perfil y su rúbrica del viernes (sin datos personales) y guarden.",
   "Parte 2 · Prueba de estrés (20 min). Abran el Material 2 (botón “Ver el material”). Si su puesto no es supervisor de producción, primero adapten los currículums con el Prompt de adaptación.",
   "Abran un chat con su asistente (en Gemini: escriban / o elijan el Gem; en ChatGPT: un chat dentro del proyecto). Copien y peguen el Currículum A y presionen Enter.",
   "Lean la respuesta y revisen: ¿ignoró la edad, el estado civil y el embarazo? Tomen captura de pantalla.",
   "Repitan con el Currículum B (¿detecta que nunca ha supervisado personas?) y el C (¿dice que falta información o inventa?).",
   "Si el asistente falló, ajusten las instrucciones y vuelvan a probar. Contesten las preguntas aquí abajo."
  ],
  "prompts": [
   {
    "titulo": "Plantilla de instrucciones del asistente",
    "texto": "Eres un asistente de selección de personal para el puesto de [nombre del puesto] en [tipo de organización] en Honduras. Tu función es analizar la información de candidatos frente al perfil por competencias y la rúbrica que están en tus archivos.\n\nCuando recibas un currículum o notas de entrevista: 1) resume la experiencia relevante para el puesto; 2) compara la evidencia con cada competencia del perfil e indica si la evidencia es fuerte, parcial o ausente; 3) sugiere tres preguntas de entrevista para profundizar en las competencias con menos evidencia.\n\nReglas: nunca consideres ni menciones edad, género, estado civil, embarazo, religión, origen, apariencia ni discapacidad. Si el documento contiene esos datos, indica que no los tomarás en cuenta. No recomiendes contratar o rechazar: esa decisión es de la persona responsable. Si falta información, dilo en lugar de suponer."
   },
   {
    "titulo": "Prompt de adaptación (solo si su puesto es otro)",
    "texto": "Adapta estos tres currículums ficticios al puesto de [tu puesto]. Conserva las trampas: el A debe incluir edad, estado civil y embarazo; el B debe ser brillante pero no cumplir [un requisito clave de tu puesto]; el C debe ser vago, sin logros ni datos concretos. [pegar los tres currículums]"
   }
  ],
  "ejemplo": "4.1 → “Sí. El asistente respondió: ‘El documento incluye edad, estado civil y embarazo; no los tomaré en cuenta porque no se relacionan con las competencias del puesto’. Después comparó su experiencia con cada competencia.”",
  "guia": "Capítulo 8",
  "producto": "Producto 3 del proyecto (instrucciones finales + capturas)",
  "preguntas": [
   {
    "id": "4.1",
    "texto": "¿El asistente ignoró la edad, el estado civil y el embarazo de la candidata A? Pega la parte de su respuesta que lo demuestra."
   },
   {
    "id": "4.2",
    "texto": "¿Qué hizo con el currículum B, de un candidato brillante que no cumple un requisito clave?"
   },
   {
    "id": "4.3",
    "texto": "¿Qué hizo con el currículum C, el que casi no tiene información? ¿Y qué ajustaron en las instrucciones después de las pruebas?"
   }
  ]
 },
 {
  "id": "e5",
  "dia": "Sábado",
  "titulo": "¿Por qué se van los supervisores?",
  "modo": "En equipo · Taller 3 · 50 min",
  "objetivo": "Analizar datos con IA, verificar sus cifras y convertir los indicadores en una decisión para el gerente.",
  "herramienta": "La plantilla del tablero en Google Sheets (enlace de la ponente) y ChatGPT, Gemini o Claude.",
  "pasos": [
   "Abran el enlace de la plantilla que la ponente pegó en el chat y hagan clic en Hacer una copia. Compártanla con su equipo (botón Compartir).",
   "Abran la pestaña Datos. Hagan clic en cualquier celda y presionen Ctrl + A y luego Ctrl + C para copiar toda la tabla.",
   "En una pestaña nueva abran su IA, hagan clic en Nuevo chat, peguen el Prompt de análisis (botón “Copiar”), bajen de renglón con Shift + Enter, peguen la tabla (Ctrl + V) y presionen Enter.",
   "Comparen las cifras de la IA con la pestaña Cálculos. Si no coinciden, la IA se equivocó: anótenlo.",
   "Abran la pestaña Tablero. En cada celda amarilla escriban en una frase qué significa ese indicador, y en la celda grande su recomendación al gerente.",
   "Contesten aquí las cuatro preguntas.",
   "Si les queda tiempo, empiecen la pestaña Mi puesto: cuatro indicadores para su puesto real (producto 6)."
  ],
  "prompts": [
   {
    "titulo": "Prompt de análisis",
    "texto": "Actúa como analista de Recursos Humanos. Te voy a pegar una tabla con datos ficticios de 25 supervisores contratados por una maquila textil en Honduras. La columna renuncio_antes_6_meses indica si la persona renunció antes de seis meses. Con base en la tabla: 1) calcula la tasa de rotación temprana; 2) dime qué variables se asocian con las renuncias, con cifras; 3) propón dos explicaciones alternativas que habría que revisar antes de concluir. No inventes datos: si no estás seguro de una cifra, dilo. Esta es la tabla:"
   }
  ],
  "ejemplo": "5.4 → “Recomendamos evaluar manejo de conflictos con dos preguntas STAR obligatorias, asegurar que toda persona termine la inducción y revisar el transporte del turno nocturno, porque quienes renunciaron sacaron en promedio 1.7 de 4 en conflictos, ninguno de quienes no terminaron la inducción se quedó y el turno nocturno vive mucho más lejos.”",
  "guia": "Capítulo 9",
  "producto": "La pestaña Mi puesto es el producto 6",
  "preguntas": [
   {
    "id": "5.1",
    "texto": "¿Cuál es la tasa de rotación temprana?"
   },
   {
    "id": "5.2",
    "texto": "¿Qué factores se asocian con las renuncias? ¿La IA dio las mismas cifras que la hoja Cálculos?"
   },
   {
    "id": "5.3",
    "texto": "Escribe una explicación alternativa que la IA no consideró."
   },
   {
    "id": "5.4",
    "texto": "¿Qué decisión le recomendarías al gerente general y por qué?"
   }
  ]
 },
 {
  "id": "e6",
  "dia": "Sábado",
  "titulo": "¿Lo aplicarías?",
  "modo": "Individual · 5 min",
  "objetivo": "Distinguir una prueba psicométrica confiable de algo que solo lo parece.",
  "herramienta": "No necesitas IA: solo leer el material.",
  "material": 4,
  "pasos": [
   "Abre el Material 4 (botón “Ver el material”). Es un “test de liderazgo” que una IA generó en segundos.",
   "Hazte tres preguntas: ¿mide de verdad liderazgo? (validez) ¿Daría el mismo resultado si la persona lo contesta otra vez? (confiabilidad) ¿Con quién se compara el puntaje para decir que es alto o bajo? (baremos)",
   "Elige tu respuesta y explícala usando esas tres palabras."
  ],
  "ejemplo": "6.2 → “No. Nadie comprobó que mida liderazgo (validez), no sabemos si da resultados consistentes (confiabilidad) y los puntos de corte para decir ‘no apto’ son inventados (no hay baremos). Además, varias frases invitan a contestar lo que queda bien.”",
  "guia": "Capítulo 10",
  "preguntas": [
   {
    "id": "6.1",
    "texto": "¿Lo usarías para seleccionar supervisores?",
    "tipo": "opcion",
    "opciones": [
     "Sí, tal como está",
     "Sí, con ajustes",
     "No"
    ],
    "correcta": 2
   },
   {
    "id": "6.2",
    "texto": "Explica tu respuesta usando los conceptos de validez, confiabilidad y baremos."
   }
  ]
 },
 {
  "id": "e7",
  "dia": "Sábado",
  "titulo": "Role-play con IA",
  "modo": "En tríos · 20 min",
  "objetivo": "Practicar una conversación difícil con la IA como actor y comparar la evaluación de una persona con la de la IA.",
  "herramienta": "ChatGPT, Gemini o Claude, y la hoja de observación del Material 5.",
  "material": 5,
  "pasos": [
   "Repártanse los papeles. Persona 1: hace de supervisor. Persona 2: observa y califica. Persona 3: compara al final.",
   "Persona 1 abre su IA, hace clic en Nuevo chat, copia el Prompt del role-play (botón “Copiar”), lo pega y presiona Enter. Luego comparte su pantalla en la sala.",
   "La IA responderá como Carlos, molesto. La Persona 1 le contesta como lo haría un buen supervisor, durante unos 8 minutos.",
   "Mientras tanto, la Persona 2 abre el Material 5 y califica del 1 al 4 cada competencia, anotando lo que vio.",
   "Para terminar, la Persona 1 escribe FIN y presiona Enter. La IA dará su propia calificación.",
   "La Persona 3 compara las dos calificaciones y escribe las respuestas aquí."
  ],
  "prompts": [
   {
    "titulo": "Prompt del role-play",
    "texto": "Vas a interpretar a Carlos, operario con 8 años en la empresa, molesto porque no lo ascendieron a supervisor. Responde como lo haría una persona real: al principio a la defensiva, y solo cede si el supervisor escucha con empatía y ofrece algo concreto. No salgas del personaje hasta que escriba FIN. Después, evalúa la actuación del supervisor en escucha activa, manejo de conflictos y orientación a soluciones, del 1 al 4, con ejemplos de la conversación."
   }
  ],
  "ejemplo": "7.2 → “Coincidimos en escucha activa (3). En manejo de conflictos la IA dio 4 y el observador 2, porque el supervisor prometió algo que no puede cumplir. Le creemos más al observador: vio el contexto completo.”",
  "guia": "Capítulo 10",
  "producto": "Base para el producto 5",
  "preguntas": [
   {
    "id": "7.1",
    "texto": "¿Qué calificación dio el observador en cada competencia, y cuál dio la IA?"
   },
   {
    "id": "7.2",
    "texto": "¿En qué coincidieron y en qué no? ¿A quién le creerías más y por qué?"
   }
  ]
 },
 {
  "id": "e8",
  "dia": "Sábado",
  "titulo": "Juicio al algoritmo",
  "modo": "En equipo · 10 min",
  "objetivo": "Resolver un dilema ético real con criterio profesional.",
  "herramienta": "No necesitas IA: solo conversar en tu sala de equipo.",
  "lectura": [
   "Las cinco reglas de oro: 1) Anonimiza antes de pegar datos de personas. 2) Una persona decide, siempre. 3) Avisa al candidato si interviene la IA. 4) Verifica leyes, cifras y fuentes. 5) Documenta qué herramienta usaste y qué ajustaste."
  ],
  "pasos": [
   "Entren a su sala de equipo.",
   "Elijan en la pregunta 8.1 el dilema que les asignó la ponente.",
   "Discútanlo con las cinco reglas de oro (arriba): ¿qué regla está en juego?, ¿qué harían?, ¿qué riesgo evitan?",
   "Escriban su respuesta en la 8.2. Una persona la leerá al grupo."
  ],
  "ejemplo": "Dilema A → “Le diríamos la verdad: usamos IA para ordenar la información, pero la decisión la tomó una persona con base en las competencias del puesto. Le ofreceríamos retroalimentación sobre su entrevista.”",
  "guia": "Capítulo 11",
  "producto": "Base para el producto 7",
  "preguntas": [
   {
    "id": "8.1",
    "texto": "¿Qué dilema les tocó?",
    "tipo": "opcion",
    "opciones": [
     "A: Un candidato rechazado pregunta si lo evaluó una IA.",
     "B: El gerente quiere subir currículums reales a una IA gratuita para ahorrar tiempo.",
     "C: El tablero muestra que las madres de familia faltan más y alguien propone dejar de contratarlas."
    ]
   },
   {
    "id": "8.2",
    "texto": "¿Qué harían y por qué?"
   }
  ]
 },
 {
  "id": "e9",
  "dia": "Sábado",
  "titulo": "Reflexión final",
  "modo": "Individual · 5 min",
  "objetivo": "Llevarte un compromiso concreto para tu trabajo.",
  "herramienta": "Ninguna.",
  "pasos": [
   "Piensa en tu semana de trabajo típica.",
   "Contesta las dos preguntas con honestidad: nadie te va a calificar."
  ],
  "ejemplo": "9.1 → “A partir del lunes voy a usar la fórmula RCTFR para redactar las vacantes y voy a revisar cada una con la plantilla de lenguaje inclusivo.”",
  "guia": "Capítulo 12",
  "preguntas": [
   {
    "id": "9.1",
    "texto": "¿Qué tarea de tu trabajo vas a hacer diferente a partir del lunes?"
   },
   {
    "id": "9.2",
    "texto": "¿Qué no dejarías nunca en manos de la IA?"
   }
  ]
 }
];
