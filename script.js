// --- BIBLIOTECA EXTENDIDA DE CIENCIAS SOCIALES ---
const BIBLIOTECA_EXTENDIDA = {
  ambientes_recursos: {
    t: "Ambientes y Recursos Naturales",
    d: "El <b>Ambiente</b> es el entorno formado por elementos naturales y por las transformaciones humanas. Los <b>Recursos Naturales</b> son los elementos de la naturaleza (agua, suelo, árboles) que la sociedad valora y usa para satisfacer necesidades.",
    ex: "<b>Ejemplo:</b> Las Barrancas de Belgrano en Buenos Aires muestran cómo el relieve natural se transformó con veredas y árboles de otras partes del mundo.",
    dat: "Recuerda: Los recursos son 'naturales' por su origen, pero son 'sociales' porque la sociedad les da un valor y un uso.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400",
    v: "El ambiente es naturaleza más sociedad. Los recursos naturales son elementos útiles para vivir."
  },
  renovables_no: {
    t: "Tipos de Recursos",
    d: "Existen recursos <b>Renovables</b>, que se regeneran en tiempos cortos (como las plantas y animales), y recursos <b>No Renovables</b>, que tardan millones de años en formarse (como el petróleo y los metales).",
    ex: "<b>Ejemplo:</b> El suelo es un recurso que debemos cuidar; si se agotan sus nutrientes por mal uso, tarda muchísimo en recuperarse.",
    dat: "En la prueba: Si un recurso renovable se usa más rápido de lo que se repone, puede llegar a agotarse.",
    img: "https://images.unsplash.com/photo-1466611653911-95281ecb396b?auto=format&fit=crop&q=80&w=400",
    v: "Los renovables se reponen rápido; los no renovables tardan millones de años."
  },
  actores_sociales: {
    t: "Actores Sociales y el Estado",
    d: "Los <b>Actores Sociales</b> son las personas y grupos que intervienen en el ambiente: empresas, trabajadores, vecinos y ONGs. El <b>Estado</b> es el actor más importante porque crea las leyes y controla cómo se usan los recursos.",
    ex: "<b>Ejemplo:</b> Cuando una empresa quiere talar un bosque, el Estado debe controlar que cumpla con las leyes ambientales.",
    dat: "Clave: El Estado debe equilibrar los intereses de las empresas con el cuidado del ambiente para toda la sociedad.",
    img: "https://images.unsplash.com/photo-1577416416829-d4368c3b853c?auto=format&fit=crop&q=80&w=400",
    v: "Actores sociales son grupos con intereses. El Estado regula y pone las reglas."
  },
  problemas_ambientales: {
    t: "Problemas Ambientales",
    d: "Son situaciones que deterioran el ambiente y perjudican a la sociedad. Pueden ser de origen natural (terremotos) o humano (contaminación). Cuando un problema afecta a muchas personas en el mundo, se llama <b>Escala Global</b>.",
    ex: "<b>Ejemplo:</b> La contaminación del aire en una ciudad es un problema local, pero el cambio climático es un problema global.",
    dat: "Ojo: Un fenómeno natural solo es 'problema ambiental' si afecta negativamente a las personas o sus actividades.",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400",
    v: "Los problemas ambientales dañan a la naturaleza y a las personas por igual."
  },
  riesgos_naturales: {
    t: "Amenazas Naturales",
    d: "Se dividen en dos: <b>Origen Interno</b> (terremotos, volcanes y tsunamis) y <b>Origen Atmosférico</b> (huracanes, tornados, sequías e inundaciones).",
    ex: "<b>Ejemplo:</b> El terremoto de San Juan en 1944 fue uno de los desastres más grandes de Argentina, obligando a reconstruir la ciudad con normas antisísmicas.",
    dat: "Diferencia: Las sequías se desarrollan lento, mientras que un tornado ocurre en muy poco tiempo e intensidad.",
    img: "https://images.unsplash.com/photo-1511044391307-a35172a6e793?auto=format&fit=crop&q=80&w=400",
    v: "Internas son del interior de la tierra; atmosféricas son del clima y el aire."
  },
  vulnerabilidad: {
    t: "Riesgo y Vulnerabilidad",
    d: "El <b>Riesgo</b> es la probabilidad de que una amenaza ocurra. La <b>Vulnerabilidad</b> es qué tan preparada está una sociedad para enfrentar ese peligro. A menor preparación (pobreza, falta de planes), mayor es la vulnerabilidad.",
    ex: "<b>Ejemplo:</b> Una ciudad con edificios antisísmicos es menos vulnerable ante un terremoto que una ciudad con casas precarias.",
    dat: "Para recordar: Desastre = Amenaza Natural + Sociedad Vulnerable.",
    img: "https://images.unsplash.com/photo-1544654803-b69140b285a1?auto=format&fit=crop&q=80&w=400",
    v: "Riesgo es la chance de que pase; vulnerabilidad es qué tan desprotegidos estamos."
  }
};

// --- GLOSARIO CATEGORIZADO: CIENCIAS SOCIALES ---
const GLOSARIO_CATEGORIZADO = {
  "Ambientes y Recursos Naturales": [
    { p: "Ambiente", d: "Entorno formado por elementos naturales y las transformaciones de la sociedad." },
    { p: "Recursos Naturales", d: "Elementos de la naturaleza que las personas valoran y usan para satisfacer sus necesidades." },
    { p: "Manejo de Recursos", d: "Forma en que las sociedades deciden explotar, cuidar o conservar los elementos naturales." },
    { p: "Transformación", d: "Cambios producidos por los humanos en el entorno natural (ej: construir una plaza)." }
  ],
  "Tipos de Recursos": [
    { p: "Recursos Renovables", d: "Aquellos que se regeneran en tiempos cortos de forma natural (ej: plantas, animales)." },
    { p: "Recursos No Renovables", d: "Elementos que tardan millones de años en formarse (ej: metales, petróleo)." },
    { p: "Agotamiento", d: "Cuando un recurso renovable se usa más rápido de lo que la naturaleza puede reponerlo." }
  ],
  "Actores Sociales y el Estado": [
    { p: "Actores Sociales", d: "Personas o grupos (vecinos, empresas, ONGs) con distintos intereses sobre el ambiente." },
    { p: "El Estado", d: "Actor social encargado de crear leyes, controlar el uso de recursos y proteger el bienestar común." },
    { p: "Intereses", d: "Motivos por los cuales cada actor social utiliza o defiende un recurso natural." }
  ],
  "Problemas Ambientales": [
    { p: "Problema Ambiental", d: "Deterioro del entorno que afecta negativamente a la naturaleza y a la sociedad." },
    { p: "Escala Local", d: "Problema que afecta a una zona pequeña (ej: basural en un barrio)." },
    { p: "Escala Global", d: "Problema que afecta a todo el planeta (ej: el calentamiento global)." },
    { p: "Deforestación", d: "Pérdida masiva de bosques por tala o incendios, generalmente para agricultura." }
  ],
  "Riesgos y Amenazas Naturales": [
    { p: "Amenaza Natural", d: "Fenómeno de la naturaleza que puede causar daños a las personas." },
    { p: "Origen Interno", d: "Fenómenos que nacen dentro de la Tierra, como terremotos, volcanes o tsunamis." },
    { p: "Origen Atmosférico", d: "Fenómenos que ocurren en el aire, como huracanes, tornados, sequías e inundaciones." },
    { p: "Sequía", d: "Escasez prolongada de lluvias que afecta la vida y la economía." }
  ],
  "Vulnerabilidad y Desastres": [
    { p: "Vulnerabilidad", d: "Qué tan preparada (o desprotegida) está una sociedad para enfrentar una amenaza." },
    { p: "Riesgo", d: "Probabilidad de que una amenaza ocurra y cause daños." },
    { p: "Desastre", d: "Resultado de una amenaza natural sobre una población que no estaba preparada." },
    { p: "Prevención", d: "Acciones para disminuir el daño, como construir edificios antisísmicos." }
  ]
};

// --- BANCO DE 100 PREGUNTAS: CIENCIAS SOCIALES (TEMAS PRUEBA Q1) ---
const BANCO_PREGUNTAS = [
    // 1. LOS AMBIENTES Y SUS RECURSOS NATURALES
    { q: "¿Qué es el ambiente según el libro?", o: ["Naturaleza sin humanos", "Interacción entre elementos naturales y actividades humanas", "Un paisaje de campo"], c: 1, e: "El ambiente es el entorno formado por procesos naturales y transformaciones humanas.", h: "Naturaleza + Sociedad.", t: "Ambientes y Recursos" },
    { q: "Los elementos de la naturaleza valorados por su utilidad son:", o: ["Recursos naturales", "Materias primas", "Biodiversidad"], c: 0, e: "Se llaman recursos porque la sociedad les otorga un valor para satisfacer necesidades.", h: "Tienen un valor de uso.", t: "Ambientes y Recursos" },
    { q: "¿Qué ejemplo de relieve transformado menciona el libro en Buenos Aires?", o: ["El Obelisco", "Reserva Ecológica", "Barrancas de Belgrano"], c: 2, e: "Las barrancas muestran lomas naturales transformadas con especies exóticas.", h: "Relieves elevados o lomas.", t: "Ambientes y Recursos" },
    { q: "¿Por qué los humanos somos 'agentes de transformación'?", o: ["Porque modificamos el entorno para vivir", "Porque miramos", "Porque no cambiamos nada"], c: 0, e: "Cada actividad humana (vivienda, caminos) cambia el ambiente original.", h: "Acción humana.", t: "Ambientes y Recursos" },
    { q: "Un recurso natural es considerado 'social' porque:", o: ["Es de todos", "Se vende en el mercado", "La sociedad decide cómo y para qué usarlo"], c: 2, e: "La valoración social es la que convierte a un elemento natural en recurso.", h: "Depende de la valoración.", t: "Ambientes y Recursos" },
    { q: "La flora autóctona en las ciudades suele ser:", o: ["Protegida", "Reemplazada por especies de otros países", "Eliminada sin reemplazo"], c: 1, e: "En los ambientes transformados se suelen plantar árboles 'exóticos'.", h: "Especies traídas de afuera.", t: "Ambientes y Recursos" },
    { q: "El uso de un recurso puede mejorar la vida, por ejemplo:", o: ["Al talar todo", "Al construir una vivienda", "Al contaminar"], c: 1, e: "La transformación ambiental no siempre es negativa, satisface necesidades básicas.", h: "Ejemplo positivo.", t: "Ambientes y Recursos" },
    { q: "La biodiversidad se refiere a:", o: ["Variedad de seres vivos en un ambiente", "Muchos edificios", "La cantidad de agua"], c: 0, e: "Es la riqueza de especies vegetales y animales de un lugar.", h: "Vida variada.", t: "Ambientes y Recursos" },
    { q: "El concepto de ambiente actualmente afecta a:", o: ["Solo ciudades", "Solo el campo", "Todo el planeta"], c: 2, e: "Las transformaciones humanas hoy tienen un alcance global.", h: "Escala mundial.", t: "Ambientes y Recursos" },
    { q: "¿Qué recurso es vital para alimentarnos y producir herramientas?", o: ["Solo el dinero", "El plástico", "Recursos naturales"], c: 2, e: "La naturaleza provee la base de toda nuestra producción.", h: "Base de la vida.", t: "Ambientes y Recursos" },
    { q: "Las lomas de Belgrano son un desnivel del terreno llamado:", o: ["Relieve", "Montaña", "Meseta"], c: 0, e: "El relieve es la forma natural de la superficie terrestre.", h: "Forma de la tierra.", t: "Ambientes y Recursos" },
    { q: "Cuando el cambio ambiental perjudica a la sociedad se produce:", o: ["Un recurso", "Un problema ambiental", "Una solución"], c: 1, e: "Si el deterioro afecta la calidad de vida, es un problema.", h: "Efecto negativo.", t: "Ambientes y Recursos" },
    { q: "El manejo de los recursos depende de:", o: ["Las decisiones de la sociedad", "El clima", "La suerte"], c: 0, e: "Cada sociedad decide cómo explotar o cuidar su entorno.", h: "Decisión humana.", t: "Ambientes y Recursos" },
    { q: "La transformación ambiental por desconocimiento es:", o: ["Intencional", "Natural", "Accidental"], c: 2, e: "A veces dañamos el ambiente sin saber las consecuencias.", h: "Sin intención.", t: "Ambientes y Recursos" },
    { q: "Los paisajes urbanos son ambientes:", o: ["Naturales", "Altamente transformados", "Inagotables"], c: 1, e: "Las ciudades son los ambientes donde más intervino el hombre.", h: "Mucha construcción.", t: "Ambientes y Recursos" },

    // 2. TIPOS DE RECURSOS: RENOVABLES Y NO RENOVABLES
    { q: "¿Qué define a los recursos renovables?", o: ["No se usan", "Tardan siglos", "Se regeneran en tiempos cortos"], c: 2, e: "Tienen ciclos naturales que coinciden con el tiempo humano.", h: "Ciclos cortos.", t: "Tipos de Recursos" },
    { q: "¿Cuál es un recurso no renovable?", o: ["Petróleo y minerales", "Energía solar", "Madera"], c: 0, e: "Se agotan porque su formación tarda millones de años.", h: "Tardan mucho.", t: "Tipos de Recursos" },
    { q: "El suelo se considera no renovable si:", o: ["Se moja", "Se degrada por mal uso", "Se planta mucho"], c: 1, e: "Recuperar la fertilidad natural del suelo puede tardar siglos.", h: "Degradación.", t: "Tipos de Recursos" },
    { q: "La energía eólica usa un recurso:", o: ["No renovable", "Caro", "Renovable (viento)"], c: 2, e: "El viento es un recurso que no se agota con su uso.", h: "Inagotable.", t: "Tipos de Recursos" },
    { q: "Si usamos un recurso renovable más rápido de lo que se repone:", o: ["Puede agotarse", "Se multiplica", "Mejora"], c: 0, e: "La sobreexplotación rompe el ciclo de renovación natural.", h: "Uso excesivo.", t: "Tipos de Recursos" },
    { q: "Los metales (oro, cobre) son recursos:", o: ["Renovables", "No renovables", "Líquidos"], c: 1, e: "Una vez extraídos no se regeneran en nuestra escala de tiempo.", h: "Stock limitado.", t: "Tipos de Recursos" },
    { q: "¿Qué recurso es inagotable o perpetuo?", o: ["Agua dulce", "Gas", "Energía solar"], c: 2, e: "El sol siempre está disponible sin importar cuánto usemos su energía.", h: "Siempre disponible.", t: "Tipos de Recursos" },
    { q: "Los animales (fauna) son recursos renovables si:", o: ["Se respeta su ciclo de reproducción", "Se cazan todos", "Viven en zoos"], c: 0, e: "Permitir que nazcan nuevas crías asegura el recurso.", h: "Respetar tiempos.", t: "Tipos de Recursos" },
    { q: "El carbón y el gas natural son recursos:", o: ["Fósiles no renovables", "Renovables", "Ecológicos"], c: 0, e: "Se formaron hace millones de años a partir de restos orgánicos.", h: "Combustibles fósiles.", t: "Tipos de Recursos" },
    { q: "El agua dulce es un recurso que debemos cuidar porque:", o: ["Es salada", "Es infinita", "Es limitada para el consumo humano"], c: 2, e: "Aunque hay mucha agua, solo una pequeña parte es potable.", h: "Escasez.", t: "Tipos de Recursos" },
    { q: "La silvicultura (plantar árboles) hace que la madera sea:", o: ["No renovable", "Renovable", "Artificial"], c: 1, e: "Al plantar nuevos árboles, el recurso se mantiene disponible.", h: "Reforestación.", t: "Tipos de Recursos" },
    { q: "¿Qué significa manejo sustentable?", o: ["Usar hoy cuidando el futuro", "Gastar todo", "No tocar nada"], c: 0, e: "Es el equilibrio entre desarrollo y conservación.", h: "Pensar en el mañana.", t: "Tipos de Recursos" },
    { q: "Los diamantes son recursos:", o: ["Renovables", "Plásticos", "No renovables"], c: 2, e: "Son minerales que tardan millones de años en formarse bajo tierra.", h: "Mineral precioso.", t: "Tipos de Recursos" },
    { q: "La marea es un recurso energético de tipo:", o: ["No renovable", "Renovable", "Químico"], c: 1, e: "Se usa el movimiento de las olas y mareas.", h: "Movimiento del mar.", t: "Tipos de Recursos" },

    // 3. ACTORES SOCIALES Y EL ESTADO
    { q: "¿Quiénes son los actores sociales?", o: ["Personas y grupos que intervienen en el ambiente", "Solo políticos", "Los animales"], c: 0, e: "Son grupos con intereses específicos (empresas, vecinos, ONGs).", h: "Grupos de interés.", t: "Actores Sociales" },
    { q: "El actor social encargado de crear leyes es:", o: ["Las empresas", "Las ONGs", "El Estado"], c: 2, e: "El Estado regula el uso de los recursos mediante normas.", h: "Poder legislativo.", t: "Actores Sociales" },
    { q: "Cuando los intereses de dos actores chocan, se produce:", o: ["Una fiesta", "Un conflicto ambiental", "Una ley"], c: 1, e: "Ocurre cuando una actividad daña lo que otro grupo quiere proteger.", h: "Disputa.", t: "Actores Sociales" },
    { q: "Las ONGs ambientales actúan para:", o: ["Ganar dinero", "Proteger la naturaleza y concientizar", "Construir rutas"], c: 1, e: "Son grupos sin fines de lucro que defienden el ambiente.", h: "Defensa ambiental.", t: "Actores Sociales" },
    { q: "Las empresas privadas buscan principalmente:", o: ["Obtener rentabilidad económica", "Plantar flores", "No usar recursos"], c: 0, e: "Su interés es producir y ganar dinero con el recurso.", h: "Ganancia.", t: "Actores Sociales" },
    { q: "¿Qué es el 'bien común' para el Estado?", o: ["Lo que le sirve a una empresa", "Lo que beneficia a toda la sociedad", "Gastar papel"], c: 1, e: "El Estado debe priorizar el bienestar general sobre el privado.", h: "Para todos.", t: "Actores Sociales" },
    { q: "Un vecino que protesta por el humo de una fábrica es:", o: ["Un actor social", "Un empleado", "Un científico"], c: 0, e: "Cualquier ciudadano que defiende su entorno es actor social.", h: "Ciudadano activo.", t: "Actores Sociales" },
    { q: "El Estado controla el ambiente mediante:", o: ["Fotos", "Inspecciones y multas", "Regalos"], c: 1, e: "Debe vigilar que se cumplan las leyes ambientales.", h: "Control público.", t: "Actores Sociales" },
    { q: "Las asambleas vecinales suelen luchar contra:", o: ["Problemas ambientales locales", "El sol", "La música"], c: 0, e: "Se organizan para frenar daños en su barrio.", h: "Organización local.", t: "Actores Sociales" },
    { q: "Los científicos aportan a los actores sociales:", o: ["Dinero", "Maquinaria", "Información y conocimiento"], c: 2, e: "Ayudan a entender si una actividad es peligrosa.", h: "Saber científico.", t: "Actores Sociales" },
    { q: "El derecho a un ambiente sano está en:", o: ["La Constitución Nacional", "La guía de teléfono", "Los cuentos"], c: 0, e: "Es un derecho fundamental de todos los habitantes.", h: "Ley máxima.", t: "Actores Sociales" },
    { q: "Un conflicto ambiental en Argentina es:", o: ["El frío", "El fútbol", "Las papeleras o minería"], c: 2, e: "Son temas donde Estado, empresas y vecinos suelen discutir.", h: "Temas de disputa.", t: "Actores Sociales" },
    { q: "El Estado debe garantizar que las empresas:", o: ["No ganen nada", "Cumplan con las leyes ambientales", "Regalen productos"], c: 1, e: "La ley es igual para todos los actores.", h: "Cumplimiento.", t: "Actores Sociales" },
    { q: "La gestión ambiental es responsabilidad de:", o: ["Solo vecinos", "Nadie", "Principalmente del Estado"], c: 2, e: "El Estado organiza cómo se cuida el entorno.", h: "Responsabilidad pública.", t: "Actores Sociales" },

    // 4. PROBLEMAS AMBIENTALES
    { q: "¿Qué es un problema ambiental?", o: ["Un día con nubes", "Deterioro ambiental que afecta a la sociedad", "Plantar árboles"], c: 1, e: "Es el impacto negativo de una acción sobre el entorno.", h: "Daño social.", t: "Problemas Ambientales" },
    { q: "Un problema de escala LOCAL es:", o: ["Basural en un barrio", "Cambio climático", "Agujero de ozono"], c: 0, e: "Solo afecta a una zona pequeña o comunidad.", h: "Espacio reducido.", t: "Problemas Ambientales" },
    { q: "La deforestación se hace para obtener:", o: ["Solo sombra", "Aire puro", "Tierras para agricultura o ganadería"], c: 2, e: "Se talan bosques para cambiar el uso del suelo.", h: "Agronegocio.", t: "Problemas Ambientales" },
    { q: "Un problema ambiental GLOBAL afecta a:", o: ["Todo el planeta", "Un vecino", "Un solo país"], c: 0, e: "Sus causas y efectos son mundiales.", h: "Escala mundial.", t: "Problemas Ambientales" },
    { q: "¿Qué causa la contaminación del agua?", o: ["Peces", "Residuos industriales y cloacales", "Oxígeno"], c: 1, e: "Sustancias químicas que dañan la vida en ríos.", h: "Desechos.", t: "Problemas Ambientales" },
    { q: "El calentamiento global es causado por:", o: ["Aumento de gases de invernadero", "El frío", "Las estrellas"], c: 0, e: "Gases como el CO2 atrapan el calor del sol.", h: "Gases de fábricas.", t: "Problemas Ambientales" },
    { q: "La pérdida de biodiversidad significa:", o: ["Más flores", "Viajar más", "Menos especies de plantas y animales"], c: 2, e: "Se extinguen seres vivos por daño ambiental.", h: "Extinción.", t: "Problemas Ambientales" },
    { q: "El smog es un problema de:", o: ["Agua", "Aire en las ciudades", "Suelo"], c: 1, e: "Gases tóxicos que respiramos en las urbes.", h: "Humo urbano.", t: "Problemas Ambientales" },
    { q: "La desertificación es la degradación de:", o: ["El agua", "El suelo", "El aire"], c: 1, e: "El suelo se vuelve desértico por mal uso.", h: "Tierra seca.", t: "Problemas Ambientales" },
    { q: "Los agrotóxicos afectan principalmente:", o: ["Suelo y agua cerca de campos", "El espacio", "La luna"], c: 0, e: "Químicos usados en el campo que pueden enfermar.", h: "Química agrícola.", t: "Problemas Ambientales" },
    { q: "Un problema ambiental puede ocurrir por:", o: ["Mala suerte", "Accidentes o acciones intencionales", "Solo accidentes"], c: 1, e: "A veces es descuido y otras es por ganar dinero.", h: "Causas humanas.", t: "Problemas Ambientales" },
    { q: "La basura tecnológica es un problema porque:", o: ["Tiene metales tóxicos", "Es vieja", "No sirve"], c: 0, e: "Celulares y pilas contaminan mucho si no se reciclan.", h: "Electrónica.", t: "Problemas Ambientales" },
    { q: "El cambio climático provoca:", o: ["Clima estable", "Más hielo", "Fenómenos extremos (sequías, inundaciones)"], c: 2, e: "Desequilibra las lluvias y temperaturas del mundo.", h: "Clima extremo.", t: "Problemas Ambientales" },
    { q: "La contaminación auditiva es producida por:", o: ["Silencio", "Música suave", "Ruidos excesivos de autos y fábricas"], c: 2, e: "El ruido excesivo daña la salud mental.", h: "Mucho ruido.", t: "Problemas Ambientales" },
    { q: "Reciclar ayuda a reducir:", o: ["La acumulación de residuos", "La inteligencia", "El viento"], c: 0, e: "Menos basura significa menos contaminación.", h: "Las 3 R.", t: "Problemas Ambientales" },

    // 5. AMENAZAS Y RIESGOS NATURALES
    { q: "¿Qué es una amenaza natural?", o: ["Inventada por el hombre", "Fenómeno natural con potencial destructivo", "Un animal"], c: 1, e: "Eventos de la naturaleza que pueden dañar.", h: "Peligro natural.", t: "Amenazas y Riesgos" },
    { q: "Una amenaza de origen INTERNO es:", o: ["Terremoto y erupción volcánica", "Tornado", "Lluvia"], c: 0, e: "Vienen del interior de la corteza terrestre.", h: "Desde adentro.", t: "Amenazas y Riesgos" },
    { q: "Una amenaza ATMOSFÉRICA es:", o: ["Tsunami", "Huracán y tornado", "Sismo"], c: 1, e: "Se originan por cambios en el aire y clima.", h: "Del cielo.", t: "Amenazas y Riesgos" },
    { q: "¿Qué causa un tsunami?", o: ["Mucho sol", "Viento", "Terremotos submarinos"], c: 2, e: "El suelo marino se mueve y desplaza el agua.", h: "Olas gigantes.", t: "Amenazas y Riesgos" },
    { q: "Las sequías se desarrollan:", o: ["Lentamente por falta de lluvia", "En un segundo", "Solo en invierno"], c: 0, e: "Es la falta de precipitaciones por mucho tiempo.", h: "Poco a poco.", t: "Amenazas y Riesgos" },
    { q: "El Terremoto de San Juan de 1944:", o: ["Fue suave", "Fue una de las mayores catástrofes de Argentina", "No hubo muertos"], c: 1, e: "Causó 10.000 muertes por la mala construcción.", h: "Tragedia histórica.", t: "Amenazas y Riesgos" },
    { q: "Las sudestadas afectan principalmente a:", o: ["Mendoza", "San Juan", "Ciudad de Buenos Aires"], c: 2, e: "Viento y lluvia que inundan la zona ribereña.", h: "Río de la Plata.", t: "Amenazas y Riesgos" },
    { q: "Un volcán expulsa:", o: ["Agua fría", "Magma, cenizas y gases", "Hielo"], c: 1, e: "Material del interior de la tierra a alta temperatura.", h: "Lava.", t: "Amenazas y Riesgos" },
    { q: "Un tornado es un viento:", o: ["Giratorio en forma de embudo", "Recto", "Suave"], c: 0, e: "Es un remolino de aire muy violento.", h: "Gira rápido.", t: "Amenazas y Riesgos" },
    { q: "Las inundaciones pueden ocurrir por:", o: ["Lluvias intensas o desborde de ríos", "Falta de nubes", "Mucho calor"], c: 0, e: "El agua cubre terrenos que suelen estar secos.", h: "Mucha agua.", t: "Amenazas y Riesgos" },
    { q: "Las olas de calor afectan principalmente:", o: ["Los edificios", "Las piedras", "La salud de personas y cultivos"], c: 2, e: "Temperaturas extremas que pueden ser peligrosas.", h: "Mucho calor.", t: "Amenazas y Riesgos" },
    { q: "¿Dónde hay más riesgo sísmico en Argentina?", o: ["Buenos Aires", "Provincias del Oeste (Mendoza, San Juan)", "Misiones"], c: 1, e: "Por la cercanía a la Cordillera de los Andes.", h: "Cerca de montañas.", t: "Amenazas y Riesgos" },
    { q: "El granizo puede dañar:", o: ["Autos y cultivos", "Solo el agua", "El sol"], c: 0, e: "Son piedras de hielo que caen con fuerza.", h: "Hielo cayendo.", t: "Amenazas y Riesgos" },
    { q: "La nieve excesiva puede causar:", o: ["Sequía", "Calor", "Aislamiento de pueblos y avalanchas"], c: 2, e: "Corta rutas y bloquea accesos.", h: "Mucha nieve.", t: "Amenazas y Riesgos" },

    // 6. VULNERABILIDAD Y DESASTRES
    { q: "¿Qué es la vulnerabilidad?", o: ["La fuerza del viento", "Grado de desprotección ante una amenaza", "Tener mucho dinero"], c: 1, e: "Es qué tan poco preparada está una sociedad.", h: "Estar desprotegido.", t: "Vulnerabilidad y Desastres" },
    { q: "Un desastre ocurre cuando:", o: ["Llueve normal", "No hay gente", "Amenaza natural + Sociedad vulnerable"], c: 2, e: "Si la gente está preparada, el fenómeno no es desastre.", h: "Peligro + Debilidad.", t: "Vulnerabilidad y Desastres" },
    { q: "Los edificios antisísmicos sirven para:", o: ["Reducir la vulnerabilidad ante sismos", "Gastar", "Atraer nubes"], c: 0, e: "Evitan el derrumbe y salvan vidas.", h: "Construcción segura.", t: "Vulnerabilidad y Desastres" },
    { q: "Hay mayor vulnerabilidad si hay:", o: ["Muchos médicos", "Pobreza y falta de planes de ayuda", "Muchos parques"], c: 1, e: "La falta de recursos impide protegerse bien.", h: "Falta de medios.", t: "Vulnerabilidad y Desastres" },
    { q: "La prevención consiste en:", o: ["Esperar que pase", "Tomar medidas antes para disminuir daños", "Limpiar después"], c: 1, e: "Ej: hacer simulacros o diques.", h: "Actuar antes.", t: "Vulnerabilidad y Desastres" },
    { q: "¿Por qué un sismo en Japón mata menos que en Haití?", o: ["Por mejor preparación y normas de construcción", "Por suerte", "No hay sismos"], c: 0, e: "La inversión en seguridad baja la vulnerabilidad.", h: "Mejor protegidos.", t: "Vulnerabilidad y Desastres" },
    { q: "Un mapa de riesgo sirve para:", o: ["Encontrar tesoros", "Pintar", "Saber qué zonas son peligrosas para vivir"], c: 2, e: "Ayuda a no construir casas en lugares inundables.", h: "Identificar peligro.", t: "Vulnerabilidad y Desastres" },
    { q: "La educación ambiental sirve para:", o: ["Saber cómo actuar ante emergencias", "Nada", "Ser más alto"], c: 0, e: "Estar informados nos hace menos vulnerables.", h: "Saber es prevenir.", t: "Vulnerabilidad y Desastres" },
    { q: "Un plan de evacuación es:", o: ["Un dibujo", "Guía para salir ordenado en un peligro", "Una fiesta"], c: 1, e: "Evita el pánico y salva vidas.", h: "Ruta de salida.", t: "Vulnerabilidad y Desastres" },
    { q: "El riesgo ambiental es la probabilidad de:", o: ["Que salga el sol", "Sufrir un daño por una amenaza", "No tener problemas"], c: 1, e: "Es la chance de que algo malo pase.", h: "Chance de daño.", t: "Vulnerabilidad y Desastres" },
    { q: "Vivir en un terreno inundable es:", o: ["Divertido", "Seguro", "Una situación de alta vulnerabilidad"], c: 2, e: "Te expone directamente a la amenaza del agua.", h: "Lugar inseguro.", t: "Vulnerabilidad y Desastres" },
    { q: "Después de un desastre, la reconstrucción debe:", o: ["Ser más segura y planificada", "Ser igual", "No hacerse"], c: 0, e: "Hay que aprender para no ser vulnerables de nuevo.", h: "Aprender.", t: "Vulnerabilidad y Desastres" },
    { q: "¿Qué actor social lidera la ayuda en desastres?", o: ["Las empresas", "El Estado (Defensa Civil)", "Los turistas"], c: 1, e: "El Estado organiza el rescate y la asistencia.", h: "Poder público.", t: "Vulnerabilidad y Desastres" },
    { q: "Un desastre afecta más a:", o: ["Los que tienen refugio", "Nadie", "Las personas más pobres y vulnerables"], c: 2, e: "La falta de recursos impide recuperarse rápido.", h: "Desigualdad.", t: "Vulnerabilidad y Desastres" },

    // 7. EL AIRE Y LA ATMÓSFERA
    { q: "¿Qué es la atmósfera?", o: ["Agua dulce", "Capa de gases que rodea la Tierra", "Suelo firme"], c: 1, e: "Es vital porque nos protege y permite respirar.", h: "Capa gaseosa.", t: "Aire y Atmósfera" },
    { q: "El gas más abundante en el aire es:", o: ["Nitrógeno (78%)", "Oxígeno", "Argón"], c: 0, e: "El nitrógeno es el componente principal.", h: "78 por ciento.", t: "Aire y Atmósfera" },
    { q: "El oxígeno es necesario para:", o: ["La fotosíntesis", "Hacer fuego nada más", "La respiración de los seres vivos"], c: 2, e: "Sin oxígeno no hay vida animal ni humana.", h: "Respiración.", t: "Aire y Atmósfera" },
    { q: "La presión atmosférica es:", o: ["El peso del aire sobre la superficie", "El calor", "La lluvia"], c: 0, e: "El aire pesa y la gravedad lo empuja hacia abajo.", h: "Peso del aire.", t: "Aire y Atmósfera" },
    { q: "¿Dónde es MENOR la presión atmosférica?", o: ["A nivel del mar", "En la cima de una montaña", "En un sótano"], c: 1, e: "A más altura, hay menos aire encima presionando.", h: "En lo alto.", t: "Aire y Atmósfera" },
    { q: "La capa de ozono nos protege de:", o: ["El frío", "La lluvia", "Los rayos ultravioletas (UV)"], c: 2, e: "Actúa como un filtro solar natural.", h: "Filtro solar.", t: "Aire y Atmósfera" },
    { q: "El aire caliente tiende a:", o: ["Subir", "Bajar", "Quedarse quieto"], c: 0, e: "Es menos denso y más liviano que el aire frío.", h: "Sube.", t: "Aire y Atmósfera" },
    { q: "El viento se produce por:", o: ["Las hojas de árboles", "Diferencias de presión y temperatura", "El movimiento del mar"], c: 1, e: "El aire viaja de zonas de alta presión a baja presión.", h: "Movimiento de aire.", t: "Aire y Atmósfera" },
    { q: "¿Qué gas expulsamos al respirar?", o: ["Dióxido de Carbono (CO2)", "Oxígeno", "Helio"], c: 0, e: "Es el residuo de nuestra respiración.", h: "CO2.", t: "Aire y Atmósfera" },
    { q: "La atmósfera regula la temperatura terrestre:", o: ["Falso", "Verdadero", "Solo en el desierto"], c: 1, e: "Evita que el calor se escape todo al espacio.", h: "Efecto invernadero natural.", t: "Aire y Atmósfera" },
    { q: "La contaminación del aire produce:", o: ["Lluvia de colores", "Más oxígeno", "Enfermedades respiratorias y smog"], c: 2, e: "Los gases tóxicos dañan los pulmones.", h: "Smog.", t: "Aire y Atmósfera" },
    { q: "El aire es materia porque:", o: ["Tiene masa y ocupa lugar", "Es espiritual", "No se ve"], c: 0, e: "Aunque sea invisible, pesa y ocupa volumen.", h: "Masa y volumen.", t: "Aire y Atmósfera" },
    { q: "El sonido viaja por:", o: ["El vacío", "El aire", "Ningún lado"], c: 1, e: "Necesita las moléculas del aire para vibrar.", h: "Ondas sonoras.", t: "Aire y Atmósfera" },
    { q: "El porcentaje de oxígeno en el aire es:", o: ["100%", "21%", "78%"], c: 1, e: "Es la cantidad justa para la vida.", h: "Casi un cuarto.", t: "Aire y Atmósfera" }
];
let score = 0, currentIdx = 0, needsReview = new Set(), hintUsed = false;

// --- NUEVAS VARIABLES DE HISTORIAL ---
let maxScore = localStorage.getItem('maxScore') || 0;
let historial = JSON.parse(localStorage.getItem('historial')) || [];

let timerInterval;
let timeLeft = 15 * 60; // 15 minutos en segundos
let timerActive = false;
let startTime;

function speak(text) {
  window.speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'es-AR';
  window.speechSynthesis.speak(msg);
}

function updateTimerDisplay() {
  const timerElement = document.getElementById('timer');
  if (timerElement) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    // Alerta visual cuando queda menos de 1 minuto
    if (timeLeft <= 60) {
      timerElement.style.color = "#ef4444";
      timerElement.style.animation = "fadeIn 0.5s infinite alternate";
    } else {
      timerElement.style.color = "inherit";
      timerElement.style.animation = "none";
    }
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 15 * 60; 
  startTime = Date.now();
  timerActive = true;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (timerActive) {
      timeLeft--;
      updateTimerDisplay();

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerActive = false;
        alert("¡Se acabó el tiempo del simulacro! ⏰");
        endGame();
      }
    }
  }, 1000);
}

function mainMenu() {
  // Detener cualquier cronómetro activo al volver al menú
  clearInterval(timerInterval);
  timerActive = false;
  
  // OCULTAR EL TIMER EN EL MENÚ
  const timerDisplay = document.getElementById('timer');
  if (timerDisplay) timerDisplay.parentElement.style.visibility = "hidden";
  
  // Actualizar el título y asegurar que la imagen de cabecera sea la default
  document.getElementById('title').innerText = "MENÚ PRINCIPAL";
  
  // Recuperar datos actualizados
  maxScore = localStorage.getItem('maxScore') || 0;
  historial = JSON.parse(localStorage.getItem('historial')) || [];

  // Generar el HTML de los últimos 3 intentos con los nuevos datos
  let historialHTML = historial.length > 0 
    ? historial.slice(-3).reverse().map(h => `
        <li style="margin-bottom: 8px; list-style: none; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">
          <span style="color: #64748b; font-size: 0.75rem;">📅 ${h.fecha} - 🕒 ${h.hora}</span><br>
          <b>🏆 ${h.puntos} pts</b> <small style="color: #64748b;">(en ${h.duracion || '--'})</small>
        </li>`).join('')
    : "<li>Aún no hay intentos</li>";

  // Renderizar el área central (Récord, Imagen y Lista)
  document.getElementById('display-area').innerHTML = `
    <div style="text-align:center; margin-bottom:15px;">
      <div style="background: var(--rojo-oscuro); border: 2px solid var(--rojo-principal); padding: 10px; border-radius: 15px; color: white; box-shadow: 0 4px rgba(0,0,0,0.2);">
        🏆 <b>RÉCORD PERSONAL: ${maxScore} pts</b>
      </div>
    </div>
    
    <center>
      <img src="https://img.freepik.com/vector-gratis/planeta-tierra-personajes-dibujos-animados_1308-130150.jpg?semt=ais_hybrid&w=740&q=80" 
           alt="Sociales"
           class="edu-img" 
           style="height:140px; width:auto; border: 3px solid var(--rojo-principal); border-radius: 20px; background: white;">
    </center>
    
    <div class="theory-section" style="font-size:0.85rem; background:#ffffff; margin-top:10px; border: 1px solid var(--rojo-claro);">
      <b style="color: var(--rojo-oscuro)">🕒 Últimos intentos:</b>
      <ul style="margin:5px 0; padding-left:0;">${historialHTML}</ul>
    </div>
  `;
  
  document.getElementById('help-area').innerHTML = "";

  // Renderizar los botones de acción en la parte inferior
  document.getElementById('action-buttons').innerHTML = `
    <button onclick="startAventura()" style="background: var(--rojo-principal)">🚀 INICIAR SIMULACRO SOCIALES</button>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
      <button onclick="showLibraryMenu()" style="background:#64748b">📚 BIBLIOTECA</button>
      <button onclick="showGlosario()" style="background:#64748b">📖 GLOSARIO</button>
    </div>
  `;
}

function showLibraryMenu() {
  document.getElementById('title').innerText = "TEMAS DEL LIBRO";
  let btns = "";
  for(let k in BIBLIOTECA_EXTENDIDA) btns += `<button class="option-btn" onclick="showInfo('${k}')">${BIBLIOTECA_EXTENDIDA[k].t}</button>`;
  document.getElementById('display-area').innerHTML = "<p>Elegí un tema para repasar:</p>";
  document.getElementById('action-buttons').innerHTML = btns;
}

function showInfo(k) {
  const info = BIBLIOTECA_EXTENDIDA[k];
  document.getElementById('display-area').innerHTML = `
    <img src="${info.img}" class="edu-img">
    <div class="theory-section">${info.d}</div>
    <div class="example-box">${info.ex}</div>
    <div class="theory-section" style="background:#fff7ed">💡 <b>Datazo:</b> ${info.dat}</div>
  `;
  document.getElementById('action-buttons').innerHTML = `<button onclick="showLibraryMenu()">⬅️ VOLVER</button>`;
  speak(info.v);
}

function showGlosario() {
  document.getElementById('title').innerText = "GLOSARIO POR TEMAS";
  let html = "";
  
  for (let tema in GLOSARIO_CATEGORIZADO) {
    // Título de la sección según tu imagen
    html += `<h3 style="color:#2563eb; margin-top:20px; border-bottom: 2px solid #e2e8f0; font-size: 1rem;">${tema}</h3>`;
    
    GLOSARIO_CATEGORIZADO[tema].forEach(i => {
      html += `
        <div class="theory-section" onclick="speak('${i.p}: ${i.d}')" style="cursor:pointer; margin-bottom:8px;">
          <b style="color:#0369a1;">${i.p}:</b> ${i.d}
        </div>`;
    });
  }
  
  document.getElementById('display-area').innerHTML = html;
  document.getElementById('action-buttons').innerHTML = `<button onclick="mainMenu()">⬅️ VOLVER</button>`;
}

// --- LOGICA DE SELECCIÓN ALEATORIA ---
let PREGUNTAS = []; 

function startAventura() {
  score = 0; 
  currentIdx = 0; 
  needsReview.clear();
  
  // MOSTRAR EL TIMER AL EMPEZAR
  const timerDisplay = document.getElementById('timer');
  if (timerDisplay) timerDisplay.parentElement.style.visibility = "visible";
  
  startTime = Date.now(); // Marca el inicio real del simulacro
  startTimer();
  
  // 1. Mezclamos el banco de 100
  let mezcladas = [...BANCO_PREGUNTAS].sort(() => Math.random() - 0.5);
  
  // 2. Elegimos las primeras 30 para este simulacro
  PREGUNTAS = mezcladas.slice(0, 30);
  
  updateHUD(); 
  loadQuestion();
}

function loadQuestion() {
  hintUsed = false;
  document.getElementById('help-area').innerHTML = "";
  const item = PREGUNTAS[currentIdx];
  document.getElementById('title').innerText = `NIVEL ${currentIdx + 1}/${PREGUNTAS.length}`;
  document.getElementById('display-area').innerHTML = `<p style="font-weight:bold; font-size:1.1rem; text-align:center">${item.q}</p>`;
  
  const btns = document.getElementById('action-buttons');
  btns.innerHTML = "";
  
  item.o.forEach((opt, idx) => {
    const b = document.createElement('button');
    b.className = "option-btn";
    b.innerText = opt;
    b.onclick = () => checkAnswer(idx);
    btns.appendChild(b);
  });

  const hBtn = document.createElement('button');
  hBtn.innerText = "💡 PISTA (-5 pts)";
  hBtn.style.background = "#f59e0b";
  hBtn.onclick = () => {
    hintUsed = true;
    document.getElementById('help-area').innerHTML = `<div class="hint-box"><b>Pista:</b> ${item.h}</div>`;
    speak(item.h);
  };
  btns.appendChild(hBtn);
  speak(item.q);
}

function checkAnswer(selected) {
  const item = PREGUNTAS[currentIdx];
  const isCorrect = selected === item.c;
  const feedback = isCorrect ? item.e : `¡Casi! La respuesta correcta era: "${item.o[item.c]}". ${item.e}`;
  
  if(isCorrect) {
    score += hintUsed ? 5 : 10;
    document.getElementById('sfx-win').play();
  } else {
    needsReview.add(item.t);
  }

  document.getElementById('display-area').innerHTML += `
    <div class="feedback-box ${isCorrect ? 'correct' : 'incorrect'}">${feedback}</div>
  `;
  
  document.getElementById('action-buttons').innerHTML = `<button onclick="nextStep()">CONTINUAR ➡️</button>`;
  speak(feedback);
}

function nextStep() {
  currentIdx++;
  if(currentIdx < PREGUNTAS.length) loadQuestion(); else endGame();
  updateHUD();
}

function updateHUD() {
  document.getElementById('points').innerText = score;
  document.getElementById('rank').innerText = score >= (PREGUNTAS.length * 8) ? "Genio 🏅" : "Estudiante";
}

function endGame() {
  clearInterval(timerInterval);
  timerActive = false;

  const totalSecondsUsed = Math.floor((Date.now() - startTime) / 1000);
  const min = Math.floor(totalSecondsUsed / 60);
  const seg = totalSecondsUsed % 60;
  const duracionTexto = `${min}m ${seg}s`;

  const ahora = new Date();
  const fechaActual = ahora.toLocaleDateString();
  const horaActual = ahora.getHours() + ":" + (ahora.getMinutes() < 10 ? '0' : '') + ahora.getMinutes();

  const intento = {
    puntos: score,
    fecha: fechaActual,
    hora: horaActual,
    duracion: duracionTexto 
  };
  
  historial.push(intento);
  localStorage.setItem('historial', JSON.stringify(historial));

  let esNuevoRecord = false;
  if (score > maxScore) {
    maxScore = score;
    localStorage.setItem('maxScore', maxScore);
    esNuevoRecord = true;
    const trompetas = new Audio('https://www.myinstants.com/media/sounds/tada.mp3');
    trompetas.play();
  }

  document.getElementById('title').innerText = "RESUMEN FINAL";
  document.getElementById('display-area').innerHTML = `
    <center>
      <h3 style="margin:0">¡Simulacro terminado!</h3>
      <div style="font-size:3.5rem; color:var(--rojo-principal); font-weight:bold;">${score}</div>
      <p style="margin:0">Puntos logrados en ${duracionTexto}</p>
      ${esNuevoRecord ? "<h2 style='color:var(--rojo-principal)'>🎺 ¡NUEVO RÉCORD! 🎺</h2>" : ""}
      <button class="btn-nav" onclick="mainMenu()" style="margin-top:20px">Volver al Menú</button>
    </center>
  `;
  document.getElementById('action-buttons').innerHTML = "";
}

// ESTO DEBE IR FUERA DE CUALQUIER LLAVE
mainMenu();
