# Sitio del curso: IA aplicada a la evaluación del talento humano

Sitio estático (HTML, CSS y JavaScript) para publicar en GitHub y Vercel, con Firebase para guardar las respuestas en tiempo real. Todo funciona con planes gratuitos.

## Qué incluye

| Página | Para quién | Qué hace |
| --- | --- | --- |
| `index.html` | Alumnos | Inicio con la ruta del curso y el horario |
| `diagnostico.html` | Alumnos | Diagnóstico tipo Kahoot de 11 preguntas, desde el celular |
| `teoria.html` | Alumnos | Guía de estudio en línea y botón para descargar el PDF |
| `ejercicios.html` | Alumnos | Guía de ejercicios; las respuestas se guardan solas |
| `ficha.html` | Alumnos y universidad | Ficha del programa en una página; se descarga en PDF |
| `panel.html` | Solo tú | Resultados del diagnóstico en vivo y respuestas de los ejercicios |
| Botón "Pregúntale a Mage" | Alumnos | Mage, la asistente que resuelve dudas con base en la guía (`api/asistente.js`) |

Archivos que puedes editar:

- `assets/config.js`: datos del curso, tu correo y la configuración de Firebase. **Es el único obligatorio.**
- `assets/datos.js`: preguntas del diagnóstico y de los ejercicios.
- `assets/styles.css`: colores de marca (al inicio del archivo).
- `docs/guia-de-estudio.pdf`: la guía descargable.

---

## Paso 1. Llena los datos del curso (5 min)

Abre `assets/config.js` y cambia lo que está entre corchetes: programa, universidad, tu nombre y las fechas. En `CORREO_PONENTE` pon el correo de Google con el que entrarás al panel.

Puedes probar el sitio desde ahora: sin Firebase funciona en **modo demostración** (las respuestas solo se guardan en tu navegador). Verás un aviso naranja arriba mientras esté así.

## Paso 2. Crea el proyecto en Firebase (15 min)

1. Entra a **console.firebase.google.com** con tu cuenta de Google y da clic en **Crear un proyecto**. Ponle un nombre (por ejemplo, `curso-ia-rh`). Puedes desactivar Google Analytics; no se necesita.
2. En la página principal del proyecto, da clic en el ícono **`</>`** (Web) para registrar una app. Ponle un apodo y **no** marques Firebase Hosting.
3. Firebase te mostrará un bloque `firebaseConfig` con `apiKey`, `authDomain`, `projectId`, etc. Copia cada valor en la sección `FIREBASE` de `assets/config.js`.
4. Menú **Compilación → Authentication → Comenzar**. En la pestaña **Método de acceso** habilita:
   - **Anónimo** (para que los alumnos entren sin cuenta).
   - **Google** (para tu acceso al panel).
5. Menú **Compilación → Firestore Database → Crear base de datos**. Elige **modo de producción** y una ubicación cercana (por ejemplo, `nam5` o `us-central`).
6. En Firestore, abre la pestaña **Reglas**, borra lo que haya, pega el contenido del archivo `firestore.rules`, **cambia `TU_CORREO@gmail.com` por tu correo** y da clic en **Publicar**.

> La `apiKey` de Firebase no es secreta: está pensada para ir en el navegador. Lo que protege los datos son las reglas del paso 6: los alumnos solo pueden escribir y ver sus propias respuestas, y solo tu correo puede ver las de todos.

## Paso 3. Publica en GitHub y Vercel (10 min)

1. En **github.com** crea un repositorio nuevo (puede ser privado) y sube todos los archivos de esta carpeta arrastrándolos a **Add file → Upload files**. Respeta las carpetas `assets` y `docs`.
2. En **vercel.com**, entra con tu cuenta de GitHub y da clic en **Add New → Project**. Elige el repositorio, deja el framework en **Other** y da clic en **Deploy**.
3. Vercel te dará una dirección, por ejemplo `curso-ia-rh.vercel.app`.
4. Regresa a Firebase: **Authentication → Configuración → Dominios autorizados → Agregar dominio**, y pega esa dirección (sin `https://`). Sin este paso, el botón "Entrar con Google" del panel no funcionará.

Cada vez que cambies un archivo en GitHub, Vercel publica la nueva versión sola en unos segundos.

## Paso 3B. Activa a Mage, la asistente del curso (5 min)

El botón "Pregúntale a Mage" usa Gemini a través de una función de Vercel (`api/asistente.js`), con la guía de estudio como conocimiento (`api/_conocimiento.js`). Tu clave nunca queda visible en la página.

1. Entra a **aistudio.google.com** con tu cuenta de Google y da clic en **Get API key → Create API key**. Copia la clave.
2. En **Vercel**, abre tu proyecto → **Settings → Environment Variables**. Agrega:
   - Nombre: `GEMINI_API_KEY` · Valor: la clave que copiaste.
3. Ve a **Deployments**, abre el menú (⋯) del último despliegue y elige **Redeploy** para que tome la clave.
4. Prueba el botón "Pregúntale a Mage" en cualquier página.

Notas importantes:

- Usa el plan **gratuito** de Gemini. En ese plan, Google puede usar las conversaciones para mejorar sus productos, por eso Mage pide no compartir datos personales.
- Por defecto usa el modelo `gemini-3.8-flash` y, si no está disponible o está saturado, cambia solo a `gemini-3.5-flash-lite`. Si Google cambia los nombres de modelos, agrega en Vercel la variable `GEMINI_MODEL` con el nombre nuevo (los encuentras en la página de precios de la API de Gemini).
- Cada persona puede hacer hasta 10 preguntas por minuto, para cuidar el límite gratuito.
- Si actualizas la guía, también puedes actualizar el texto de `api/_conocimiento.js` para que Mage lo sepa.
- Mage solo funciona en el sitio publicado en Vercel; si abres los archivos en tu computadora, te mostrará un aviso.

## Paso 4. Haz un ensayo antes de la clase (10 min)

1. Abre `tu-sitio.vercel.app/panel.html` en la laptop y entra con Google.
2. Desde tu celular u otro navegador, contesta el diagnóstico y un ejercicio.
3. Confirma que aparecen en el panel al instante.
4. Al terminar, usa los botones **Borrar respuestas** del panel para dejarlo limpio.

## Durante la clase

- **Diagnóstico:** comparte pantalla con `panel.html` en la videollamada. Los alumnos contestan a su ritmo; tú avanzas pregunta por pregunta con **Siguiente** y das clic en **Mostrar respuesta** para comentarla.
- **Ejercicios:** en la pestaña **Ejercicios** del panel eliges el ejercicio y el equipo, y ves las respuestas conforme las escriben.
- **Después de la clase:** el botón **Descargar todo (CSV)** te da un archivo con todas las respuestas para abrir en Excel o Google Sheets y compartir con el profesor del módulo.
- **Para compartir el enlace:** genera un código QR de la dirección de Vercel con cualquier generador gratuito y ponlo en tu primera diapositiva.

## Si algo falla

| Síntoma | Causa probable | Solución |
| --- | --- | --- |
| Sigue apareciendo el aviso naranja de "modo demostración" | Falta la configuración de Firebase | Revisa que pegaste todos los valores en `assets/config.js` |
| Los alumnos ven "No pudimos conectarnos" | Autenticación anónima desactivada o sin internet | Habilita **Anónimo** en Authentication |
| "No se pudo iniciar sesión" en el panel | El dominio de Vercel no está autorizado | Agrégalo en Authentication → Dominios autorizados |
| "No se pudieron leer los datos" en el panel | Correo distinto en las reglas y en `config.js` | Usa exactamente el mismo correo en los dos lugares |
| La cuenta "no tiene acceso" | Entraste con otra cuenta de Google | Da clic en Salir y entra con la cuenta registrada |

Para 10 a 12 alumnos, el uso queda muy por debajo de los límites del plan gratuito de Firebase (Spark).
