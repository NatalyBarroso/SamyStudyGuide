import { Unit } from "@/core/domain/entities/Unit";

export const module3: readonly Unit[] = [
  {
    id: '1',
    title: 'Unidad 1: Características de los textos científicos',
    topics: [
      {title: 'Definición de texto científico.'},
      {title: 'Propósito de un texto científico.'},
      {title: 'Características del lenguaje científico (precisión, objetividad y tecnicismo).'},
      {title: 'Estructura de un texto científico (introducción, desarrollo, conclusión, referencias).'},
      {title: 'Uso de datos, gráficas y citas en textos científicos.'}
    ],
    introduction: 'En esta unidad, aprenderás a identificar y analizar las características principales de los textos científicos. Comprenderás cómo están estructurados, qué tipo de lenguaje utilizan y cuál es su función dentro del mundo académico y profesional. Este conocimiento te permitirá reconocer estos textos en distintas disciplinas y contextos, y te ayudará a distinguirlos de otros tipos de producciones escritas.\n\nA lo largo de la unidad también observarás ejemplos reales y prácticos que facilitarán la comprensión de sus componentes. El análisis de estos textos te preparará para enfrentarte a contenidos académicos y científicos con una mirada crítica y estructurada.',

    themes: [
      {
        id: '1.1',
        title: 'Definición de texto científico',
        text: 'Un texto científico es una producción escrita cuyo objetivo es **comunicar conocimientos de forma sistemática, clara y fundamentada**. Estos textos nacen generalmente de investigaciones o estudios académicos, y están dirigidos a lectores especializados que buscan información precisa sobre un tema.\n\nA continuación, se muestra un ejemplo de un enunciado típico dentro de un texto científico:\n\n> "El artículo publicado en la revista *Nature* explica los resultados de un experimento sobre las propiedades de un nuevo material conductor."\n\nEste fragmento ilustra cómo un texto científico comunica hallazgos específicos a través de publicaciones especializadas.\n\nLos textos científicos pueden encontrarse en diferentes formatos, como artículos de revistas, informes técnicos, tesis, capítulos de libros, entre otros.',
      
        example: {
          type: 'text',
          textStart: 'A continuación, se muestra un ejemplo de un enunciado típico dentro de un texto científico:',
          content: '“El artículo publicado en la revista *Nature* explica los resultados de un experimento sobre las propiedades de un nuevo material conductor.”',
          textEnd: 'Este fragmento ilustra cómo un texto científico comunica hallazgos específicos a través de publicaciones especializadas.'
        }
      },
      {
        id: '1.2',
        title: 'Propósito de un texto científico',
        text: 'El propósito central de un texto científico es **informar de manera objetiva** sobre los hallazgos o resultados obtenidos tras un proceso de estudio o investigación. Algunos propósitos más específicos pueden ser:\n\n<list>Presentar nuevas teorías o descubrimientos.\n<list>Explicar fenómenos naturales o sociales.\n<list>Proponer soluciones a problemas.\n<list>Evaluar resultados de experimentos.',
      
        example: {
          type: 'text',
          textStart: 'Observa el siguiente ejemplo de un propósito claramente definido dentro de un texto científico:',
          content: '“El presente estudio tiene como objetivo determinar los efectos del cambio de temperatura sobre la velocidad de reacción química.”',
          textEnd: 'Este tipo de enunciado es común en introducciones y refleja un enfoque claro en la investigación.'
        },
      
        activity: {
          type: 'input',
          title: 'Actividad: Analiza el propósito',
          instructions: 'Lee con atención el siguiente fragmento, el cual corresponde a la introducción de un texto científico. Observa qué se está investigando y cuál es el objetivo principal que se plantea:',
          content: '“El objetivo de esta investigación es establecer una correlación entre el déficit hídrico y la disminución en la tasa de fotosíntesis en cultivos de maíz.”\n\n¿Cuál es el propósito del texto anterior?'
        }
      },
      {
        id: '1.3',
        title: 'Características del lenguaje científico',
        text: 'El lenguaje en los textos científicos cumple una función clave: transmitir conocimiento de manera precisa, verificable y sin ambigüedades. Para lograrlo, utiliza recursos como:\n<list>Precisión: Evita generalidades o términos vagos. Cada palabra tiene un significado técnico específico.\n<list>Objetividad: No se incluyen opiniones personales ni lenguaje emocional.\n<list>Tecnicismo: Se emplean términos especializados del área correspondiente.\n\nA continuación, un ejemplo que muestra cómo se aplica este tipo de lenguaje:\n"Se empleó espectroscopía de masas para identificar los compuestos orgánicos presentes en la muestra.”\n\nEste fragmento utiliza un tecnicismo propio del área de química analítica ("espectroscopía de masas") y expresa con precisión el procedimiento llevado a cabo. Refleja cómo el lenguaje científico evita la ambigüedad y se enfoca en informar con exactitud.',

        example: {
          type: 'table',
          textStart: 'Tabla comparativa: Lenguaje común vs. lenguaje científico',
          content: [
            ['Lenguaje común', 'Lenguaje científico'],
            ['"Se calienta hasta que esté muy caliente"', '"La solución se calentó a 95 °C durante 10 minutos"'],
            ['"Se hicieron pruebas con plantas"', '"Se aplicaron bioensayos a Arabidopsis thaliana"']
          ],
          textEnd: ''
        }
      },
      {
        id: '1.4',
        title: 'Estructura de un texto científico',
        text: 'Aunque puede variar ligeramente según el tipo de publicación, la mayoría de los textos científicos siguen una estructura común que permite organizar la información de manera lógica y coherente:\n\n<list>Introducción: Expone el problema o pregunta de investigación, el contexto y los objetivos.\n<list>Metodología: Detalla el procedimiento seguido, materiales, muestras y técnicas utilizadas.\n<list>Resultados: Presenta los hallazgos obtenidos, usualmente acompañados de tablas, gráficas o diagramas.\n<list>Discusión o análisis: Interpreta los resultados y los relaciona con otras investigaciones.\n<list>Conclusión: Resume los hallazgos más relevantes y sus implicaciones.\n<list>Referencias: Cita las fuentes utilizadas y consultadas.',
      
        example: {
          type: 'text',
          textStart: 'A continuación, un ejemplo que ilustra una estructura típica de texto científico aplicada a un tema específico:',
          content: '“En la introducción se presenta un problema actual de interés científico: la resistencia bacteriana a los antibióticos. A continuación, el desarrollo explica las acciones llevadas a cabo para estudiar este fenómeno mediante un proceso experimental. Finalmente, la conclusión resalta la importancia de los resultados obtenidos, advirtiendo sobre la necesidad de tomar medidas para prevenir este problema.”',
          textEnd: 'Este ejemplo muestra cómo un texto científico puede organizarse en partes claramente diferenciadas: una introducción con un planteamiento claro del problema, un desarrollo donde se describe el proceso de investigación, y una conclusión con implicaciones prácticas. Esta estructura facilita que otros investigadores comprendan, evalúen o repitan el estudio.'
        },
      
        activity: {
          type: 'order-text',
          title: 'Actividad: Ordena la estructura',
          instructions: 'Observa los siguientes fragmentos y ordénalos según la estructura de un texto científico:',
          content: [
            {
              id: '2',
              text: '“Se utilizaron 30 muestras de suelo de tres regiones distintas del país.”'
            },
            {
              id: '3',
              text: '“Se concluye que el uso excesivo de fertilizantes altera significativamente el pH del suelo.”'
            },
            {
              id: '1',
              text: '“Esta investigación busca analizar el impacto del uso de fertilizantes en la acidez del suelo.”'
            }
          ],
          correctOrder: ['3', '1', '2']
        }
      },
      {
        id: '1.5',
        title: 'Uso de datos, gráficas y citas en textos científicos',
        text: 'Una de las principales fortalezas de los textos científicos es su sustento empírico. Esto significa que no solo presentan afirmaciones, sino que las respaldan con evidencia verificable, como:\n\n<list>Datos numéricos.\n<list>Representaciones visuales (gráficas, tablas, esquemas).\n<list>Citas de otros estudios o autores.',
      
        example: {
          type: 'text',
          textStart: 'El siguiente ejemplo muestra cómo se utiliza un dato cuantitativo respaldado por una fuente confiable para comunicar información:',
          content: '“Como se muestra en la gráfica 2, la concentración de CO2 aumentó un 15% en un periodo de cinco años (González, 2021).”',
          textEnd: 'Este tipo de enunciado es frecuente en la sección de resultados de un artículo científico, y sirve para mostrar tendencias o comparaciones apoyadas en evidencia.'
        },
      
        activity: {
          type: 'input',
          title: 'Actividad: Reconoce el uso de evidencia',
          instructions: 'Lee el siguiente fragmento y responde la pregunta:',
          content: '“Según los datos de la Organización Mundial de la Salud (2022), el número de casos de dengue aumentó un 60% en la última década, especialmente en zonas urbanas.”\n\nPregunta: ¿Qué tipo de recurso se está utilizando como evidencia?'
        }
      }
    ],
    summary: [
      'Definir qué es un texto científico y cuáles son sus formatos más comunes.',
      'Comprender que su propósito principal es informar objetivamente sobre descubrimientos o investigaciones.',
      'Identificar las características del lenguaje científico: precisión, objetividad y tecnicismo.',
      'Reconocer su estructura típica, desde la introducción hasta las referencias.',
      'Analizar cómo se utilizan los datos, gráficas y citas para sustentar los contenidos.'
    ]    
  },
  {
    id: '2',
    title: 'Unidad 2: Características de los textos populares',
    topics: [
      {title: 'Definición de texto popular.'},
      {title: 'Propósito de un texto popular.'},
      {title: 'Lenguaje accesible y directo.'},
      {title: 'Estructura de un texto popular (título atractivo, introducción clara, cuerpo sencillo y conclusión directa).'},
      {title: 'Uso de ejemplos y analogías para facilitar la comprensión.'}
    ],
    introduction: 'En esta unidad, aprenderás a identificar las características principales de los textos populares. Estos textos tienen como propósito acercar el conocimiento al público general, por lo que utilizan un lenguaje accesible, ejemplos cotidianos y estructuras claras. A diferencia de los textos científicos, los textos populares traducen la información especializada en un formato comprensible para quienes no pertenecen a la comunidad académica.\n\nDurante esta unidad explorarás ejemplos reales, reconocerás sus estructuras, analizarás su lenguaje y aprenderás a distinguirlos de otros tipos de textos informativos. Además, desarrollarás habilidades para comprender e interpretar con sentido crítico los mensajes que difunden conocimiento de forma accesible.',

    themes: [
      {
        id: '2.1',
        title: 'Definición de texto popular',
        text: 'Un texto popular es una producción escrita que tiene como objetivo divulgar información de manera accesible a un público amplio y no especializado. Suele estar presente en medios como revistas de divulgación, artículos de prensa, blogs, folletos informativos y redes sociales.',
      
        example: {
          type: 'text',
          textStart: '',
          content: '“El cambio climático está alterando los patrones de lluvia en muchas partes del mundo, lo que afecta la agricultura y la disponibilidad de agua potable.”',
          textEnd: 'Este ejemplo muestra un enunciado típico de un texto popular: se explica un fenómeno complejo (el cambio climático) de forma comprensible y con ejemplos de su impacto cotidiano.'
        }
      },
      {
        id: '2.2',
        title: 'Propósito de un texto popular',
        text: 'El propósito de un texto popular es informar, sensibilizar o educar a un público general sobre temas de interés, sin utilizar un lenguaje técnico ni especializado. Además, busca generar conciencia o facilitar la comprensión de temas complejos mediante un tono ameno y accesible.',
      
        example: {
          type: 'text',
          textStart: '',
          content: '“Comer frutas y verduras diariamente fortalece tu sistema inmunológico y te ayuda a prevenir enfermedades.”',
          textEnd: 'Este enunciado busca informar y al mismo tiempo promover una acción positiva en el lector, usando un lenguaje claro y cercano.'
        },
      
        activity: {
          type: 'input',
          title: 'Actividad: Identifica el propósito',
          instructions: 'Lee el siguiente fragmento y responde la pregunta:',
          content: '“Muchos científicos coinciden en que dormir bien ayuda a mejorar la memoria y el aprendizaje. Por eso, es importante que los estudiantes mantengan horarios de sueño regulares.”\n\nPregunta: ¿Cuál es el propósito del texto?'
        }
      },
      {
        id: '2.3',
        title: 'Características del lenguaje popular',
        text: 'El lenguaje en los textos populares está diseñado para que cualquier persona pueda comprenderlo, sin necesidad de conocimientos previos. Se caracteriza por:\n\n<list>Claridad: se evita el uso de tecnicismos innecesarios.\n<list>Sencillez: se utilizan oraciones cortas y vocabulario cotidiano.\n<list>Ejemplos y analogías: se recurre a comparaciones y situaciones comunes para facilitar la comprensión.',
      
        example: {
          type: 'text',
          textStart: '',
          content: '“Las vacunas son como un entrenamiento para el cuerpo: le enseñan a reconocer y combatir virus sin enfermarnos.”',
          textEnd: 'Este ejemplo usa una analogía deportiva para explicar un proceso biológico complejo, facilitando su comprensión para el lector general.'
        }
      },
      {
        id: '2.4',
        title: 'Estructura típica de los textos populares',
        text: 'A diferencia de los textos científicos, los textos populares no siguen una estructura fija, pero suelen organizarse en partes reconocibles:\n\n<list>Título llamativo: capta la atención del lector.\n<list>Introducción breve: presenta el tema de forma sencilla.\n<list>Desarrollo: expone el contenido principal con explicaciones claras, ejemplos, cifras o testimonios.\n<list>Cierre o recomendación: resume la idea principal o sugiere una acción.',
      
        example: {
          type: 'text',
          textStart: '',
          content: '“¿Sabías que el plástico que tiras puede tardar siglos en degradarse? Por eso, reciclar es una de las mejores formas de cuidar el planeta.”',
          textEnd: 'Este ejemplo inicia con una pregunta que genera curiosidad y termina con una invitación a actuar, lo que es común en los textos populares.'
        }
      },
      {
        id: '2.5',
        title: 'Diferencias entre textos científicos y populares',
        text: 'Los textos científicos y los textos populares cumplen funciones distintas y están dirigidos a públicos diferentes, aunque ambos pueden abordar los mismos temas. La diferencia principal radica en cómo se presenta la información. Mientras que el texto científico prioriza la exactitud, la profundidad y el respaldo técnico, el texto popular busca que esa misma información sea comprensible, atractiva y útil para cualquier lector, sin necesidad de formación previa.',

        example: {
          type: 'table',
          textStart: 'Para comprender mejor estos dos tipos de textos, observa la siguiente tabla comparativa:',
          content: [
            ['Característica', 'Texto científico', 'Texto popular'],
            ['Propósito', 'Comunicar hallazgos con rigurosidad', 'Informar de forma accesible'],
            ['Audiencia', 'Especialistas o académicos', 'Público general'],
            ['Lenguaje', 'Técnico, objetivo y preciso', 'Claro, sencillo y cercano'],
            ['Estructura', 'Formal y sección por sección', 'Flexible y más libre'],
            ['Uso de evidencias', 'Datos, citas y gráficas verificables', 'Ejemplos, comparaciones, anécdotas']
          ],
          textEnd: ''
        },

        activity: {
          type: 'input',
          title: 'Actividad: Compara y distingue',
          instructions: 'Lee el siguiente fragmento y responde:',
          content: '"Los teléfonos inteligentes han cambiado la forma en que nos comunicamos. Estudios recientes muestran que, en promedio, una persona revisa su teléfono más de 80 veces al día.”\nPregunta: ¿Este fragmento pertenece a un texto científico o popular? Justifica tu respuesta.'
        }
      }
    ],
    summary: [
      'Definir qué es un texto popular y cuál es su objetivo principal.',
      'Reconocer su lenguaje claro, sencillo y cercano, que facilita la comprensión.',
      'Identificar su estructura típica basada en introducciones breves, ejemplos cotidianos y llamados a la acción.',
      'Distinguir entre textos científicos y populares mediante sus diferencias de lenguaje, estructura y propósito.'
    ]    
  },

  {
    id: '3',
    title: 'Unidad 3: Comparación entre textos científicos y textos populares',
    topics: [
      {title: 'Diferencias clave entre textos científicos y textos populares.'},
      {title: 'Adaptación de la información según el público objetivo.'},
      {title: 'Evaluación de la precisión y profundidad de la información.'}
    ],
    introduction: 'En esta unidad aprenderás a comparar textos científicos y populares que traten un mismo tema. Esta habilidad te permitirá identificar diferencias importantes en la manera en que se presenta la información según el público al que va dirigida. Observarás contrastes en el lenguaje, la estructura, la profundidad del contenido y la intención comunicativa.\n\nA través de ejemplos paralelos, análisis guiados y actividades interactivas, desarrollarás una mirada crítica que te permitirá valorar tanto la divulgación como la investigación científica, comprendiendo sus funciones y limitaciones.',

    themes: [
      {
        id: '3.1',
        title: 'Diferencias clave entre textos científicos y textos populares',
        text: 'Cuando un mismo tema se aborda desde un enfoque científico y desde uno popular, los cambios en la presentación son notables. Las diferencias se reflejan en aspectos como:\n\n<list>El nivel de tecnicismo del lenguaje, es decir, el uso o no de términos especializados.\n<list>La estructura del texto, que en los científicos tiende a ser más rígida y sistemática.\n<list>La profundidad con la que se aborda la información: los textos científicos son exhaustivos y detallados, mientras que los populares simplifican para facilitar la comprensión.\n<list>La finalidad del texto: en los científicos, el objetivo es comunicar hallazgos de forma rigurosa; en los populares, es acercar esa información al público general.\n\nEstas diferencias no implican que uno sea mejor que otro, sino que cumplen funciones distintas. Mientras los textos científicos están dirigidos a especialistas, los populares permiten que el conocimiento circule entre audiencias más amplias.',
      
        example: {
          type: 'text',
          textStart: '',
          content: '“Texto científico: El virus SARS-CoV-2 se une a la enzima convertidora de angiotensina 2 (ACE2) mediante su proteína S, lo cual inicia el proceso de infección.”\n\n“Texto popular: El coronavirus entra al cuerpo al conectarse con ciertas células. Es como una llave que abre la puerta para que el virus infecte.”',
          textEnd: 'Este ejemplo muestra cómo la información científica se transforma para que sea comprensible a todo público, sin perder el contenido esencial. El primero utiliza lenguaje técnico y términos específicos, mientras que el segundo recurre a una analogía simple para facilitar la comprensión.'
        },
      
        activity: {
          type: 'drag-and-drop',
          title: 'Actividad: Arrastra la característica al tipo de texto',
          instructions: 'Lee cada característica y arrástrala al recuadro correspondiente: "Texto científico" o "Texto popular".',
          content: {
            categories: ['Texto científico', 'Texto popular'],
            items: [
              { text: 'Uso de tecnicismos como "enzima" y "proteína S"', category: 'Texto científico' },
              { text: 'Lenguaje claro y cotidiano', category: 'Texto popular' },
              { text: 'Incluye referencias bibliográficas', category: 'Texto científico' },
              { text: 'Presenta comparaciones o analogías', category: 'Texto popular' },
              { text: 'Datos precisos y cuantificables', category: 'Texto científico' }
            ]
          }
        }
      },
      {
        id: '3.2',
        title: 'Adaptación de la información según el público objetivo',
        text: 'Los autores de textos modifican el tono, el vocabulario y el nivel de detalle según el público al que se dirigen. Un texto científico puede transformarse en un texto popular manteniendo el mismo tema, pero cambiando la forma de presentarlo.\n\nLa adaptación facilita que la información sea entendida por personas sin formación específica, lo que es clave para la divulgación científica.',
      
        example: {
          type: 'text',
          textStart: '',
          content: '“Científico: La prevalencia de diabetes tipo 2 en adultos ha aumentado un 25% en la última década, según el estudio realizado por la OMS en 2022.”\n\n“Popular: Cada vez más personas tienen diabetes. En los últimos años, esta enfermedad ha aumentado mucho, especialmente entre los adultos.”',
          textEnd: ''
        },
      
        activity: {
          type: 'classify-text',
          title: 'Actividad: Relaciona el público con el texto',
          instructions: 'Une cada fragmento con el público para el que fue escrito.',
          options: ['A. Profesionales de la salud', 'B. Lectores de una revista de salud familiar'],
          content: [
            {
              text: 'Fragmento A: "Este artículo analiza la relación entre el microbioma intestinal y el sistema inmunológico."',
              correctAnswer: 'A. Profesionales de la salud'
            },
            {
              text: 'Fragmento B: "Tu intestino tiene bacterias buenas que ayudan a que tu cuerpo se defienda mejor."',
              correctAnswer: 'B. Lectores de una revista de salud familiar'
            }
          ]
        }
      },
      {
        id: '3.3',
        title: 'Evaluación de la precisión y profundidad de la información',
        text: 'No todos los textos que abordan temas científicos lo hacen con el mismo nivel de exactitud. Algunos textos populares pueden simplificar en exceso o incluso distorsionar la información si no están bien fundamentados.\n\nPor eso es importante aprender a evaluar:\n\n<list>Si el texto cita fuentes confiables.\n<list>Si presenta hechos verificables y no solo opiniones.\n<list>Si respeta la información original sin alterarla para hacerla más atractiva.',
      
        example: {
          type: 'list',
          textStart: '',
          content: [
            'Popular no confiable: "Un nuevo alimento milagroso puede curar el cáncer."',
            'Popular confiable: "Algunos estudios muestran que este alimento podría tener propiedades que ayudan en la prevención del cáncer, aunque se necesitan más investigaciones."'
          ],
          textEnd: ''
        },
      
        activity: {
          type: 'classify-text',
          title: 'Actividad: Verdadero o falso',
          instructions: 'Lee las siguientes afirmaciones y selecciona si son verdaderas o falsas:',
          options: ['Verdadero', 'Falso'],
          content: [
            {
              text: 'Un texto popular siempre es poco confiable.',
              correctAnswer: 'Falso'
            },
            {
              text: 'Los textos científicos nunca usan lenguaje accesible.',
              correctAnswer: 'Falso'
            },
            {
              text: 'Un texto confiable debe citar fuentes o datos comprobables.',
              correctAnswer: 'Verdadero'
            }
          ]
        }
      }            
    ],

    summary: [
      'Comparar textos científicos y populares que abordan el mismo tema.',
      'Reconocer las adaptaciones que se hacen para distintos tipos de lectores.',
      'Evaluar la precisión y profundidad de los textos según su propósito.'
    ]    
  },

  {
    id: '4',
    title: 'Unidad 4: Adaptación de un texto científico a un texto popular',
    topics: [
      {title: 'Selección de información clave en un texto científico.'},
      {title: 'Uso de lenguaje sencillo y directo.'},
      {title: 'Eliminación de tecnicismos o explicación de términos complejos.'},
      {title: 'Uso de ejemplos, analogías y comparaciones.'}
    ],
    introduction: 'En esta unidad pondrás en práctica todo lo aprendido hasta ahora para transformar un texto científico en un texto popular. Aprenderás a adaptar el lenguaje técnico, la estructura y el tono, con el fin de hacerlo comprensible para un público general. Esta habilidad es clave para la divulgación científica y permite que el conocimiento especializado llegue a más personas.\n\nA lo largo de esta unidad analizarás ejemplos de adaptación, identificarás estrategias para simplificar sin perder precisión y aplicarás estas técnicas a través de una actividad guiada.',

    themes: [
      {
        id: '4.1',
        title: 'Selección de información clave en un texto científico',
        text: 'El primer paso para adaptar un texto científico es identificar las ideas principales y más relevantes. Esto implica leer con atención para distinguir entre los detalles técnicos que pueden omitirse y la información esencial que debe conservarse. El objetivo es conservar el núcleo del mensaje sin abrumar al lector con datos innecesarios o demasiado especializados.\n\nPara seleccionar correctamente esta información, puedes hacerte preguntas como:\n\n<list>¿Qué se investigó o qué problema se planteó?\n<list>¿Qué resultados o conclusiones se obtuvieron?\n<list>¿Qué importancia tiene este hallazgo para la vida cotidiana o para un público no especializado?\n\nNo se trata de “recortar” contenido arbitrariamente, sino de identificar lo que aporta valor comunicativo al lector común. La selección cuidadosa permite enfocar la adaptación en lo esencial y evitar que el texto se vuelva denso o inaccesible.',
      
        example: {
          type: 'list',
          textStart: 'Texto científico: "Se evaluó la eficacia de un compuesto experimental en la inhibición de la enzima COX-2, relacionada con procesos inflamatorios."\n\nInformación clave:',
          content: ['Se probó una sustancia para ver si ayuda a reducir la inflamación.'],
          textEnd: 'Este ejemplo muestra cómo se puede extraer lo esencial del texto científico sin necesidad de mantener términos especializados o explicaciones demasiado técnicas.'
        }
      },
      {
        id: '4.2',
        title: 'Uso de lenguaje sencillo y directo',
        text: 'Una vez seleccionada la información más importante, es necesario expresarla de forma clara. El lenguaje popular debe ser comprensible para personas sin conocimientos especializados, por lo que se recomienda:\n\n<list>Usar oraciones más cortas y directas.\n<list>Sustituir palabras complejas por sinónimos más conocidos.\n<list>Evitar el uso excesivo de pasivas y estructuras complicadas.\n<list>Usar un tono natural y cercano, como si estuvieras explicándoselo a alguien que te pregunta.',
      
        example: {
          type: 'list',
          textStart: 'Original: "La exposición prolongada a contaminantes atmosféricos incrementa el riesgo de padecer enfermedades respiratorias crónicas."\n\nAdaptado:',
          content: ['"Respirar aire contaminado por mucho tiempo puede causar enfermedades en los pulmones."'],
          textEnd: 'Ambas versiones dicen lo mismo, pero la segunda es mucho más accesible para el público general gracias a su simplicidad y estilo directo.'
        }
      },
      {
        id: '4.3',
        title: 'Eliminación de tecnicismos o explicación de términos complejos',
        text: 'Los textos científicos suelen incluir vocabulario técnico especializado, conocido como tecnicismos. En la adaptación a un texto popular, es importante decidir si estos términos deben:\n\n<list>Ser eliminados y reemplazados por palabras comunes, o\n<list>Ser explicados brevemente dentro del mismo texto, si su uso es necesario para comprender el contenido.\n\nEsto permite al lector aprender algo nuevo sin sentirse confundido o excluido del tema.',
      
        example: {
          type: 'text',
          textStart: 'Técnico: "La glucólisis es un proceso metabólico que convierte la glucosa en energía."\n\nAdaptado:',
          content: '“La glucólisis, que es la forma en que el cuerpo obtiene energía del azúcar, ocurre dentro de nuestras células.”',
          textEnd: 'En este caso, se conserva el término técnico pero se explica de inmediato, facilitando la comprensión sin perder precisión.'
        },
      
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Elige la mejor versión adaptada',
          instructions: 'Selecciona la opción que representa mejor la adaptación de un lenguaje científico a uno popular.',
          content: [
            {
              question: 'Texto original:\n\n“La hipótesis plantea que la privación del sueño altera la consolidación de la memoria declarativa.”',
              options: [
                'A. "Dormir poco podría afectar la forma en que recordamos las cosas que aprendemos."',
                'B. "La falta de sueño impacta la consolidación de la memoria declarativa."'
              ],
              correctAnswer: 'A. "Dormir poco podría afectar la forma en que recordamos las cosas que aprendemos."'
            }
          ]
        }
      },
      {
        id: '4.4',
        title: 'Uso de ejemplos, analogías y comparaciones',
        text: 'Una herramienta fundamental en los textos populares es el uso de ejemplos concretos y analogías. Estos recursos permiten traducir ideas abstractas o complejas a situaciones que el lector pueda visualizar o relacionar con su vida diaria.\n\n<list>Un ejemplo permite ilustrar un concepto con un caso real o hipotético.\n<list>Una analogía compara el concepto con algo más conocido para explicar cómo funciona.',
      
        example: {
          type: 'text',
          textStart: 'Texto adaptado:',
          content: '“Las neuronas se comunican como si enviaran mensajes de texto entre ellas, usando sustancias químicas en lugar de palabras.”',
          textEnd: 'Esta analogía ayuda a imaginar cómo se transmiten los impulsos nerviosos. No reemplaza la definición científica, pero la complementa de forma útil para el público general.'
        },
      
        activity: {
          type: 'multiple-choice',
          title: 'Actividad interactiva: Completa la analogía',
          instructions: 'Elige la analogía que mejor explica el concepto.',
          content: [
            {
              question: 'Concepto: "El sistema inmunológico reconoce y ataca a virus y bacterias."',
              options: [
                'A. "Es como un guardia de seguridad que revisa cada persona que entra a un edificio."',
                'B. "Es como un teléfono que recibe llamadas de emergencia."'
              ],
              correctAnswer: 'A. "Es como un guardia de seguridad que revisa cada persona que entra a un edificio."'
            }
          ]
        }
      }
    ],

    summary: [
      'Extraer información clave de un texto científico para enfocarte en lo esencial.',
      'Transformar el lenguaje técnico en un lenguaje claro, directo y comprensible.',
      'Detectar tecnicismos y decidir si eliminarlos o explicarlos.',
      'Utilizar recursos como ejemplos y analogías para facilitar la comprensión.'
    ]    
  },
]