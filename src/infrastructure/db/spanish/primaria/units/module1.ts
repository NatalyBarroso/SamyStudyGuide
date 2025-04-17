import { Unit } from "@/core/domain/entities/Unit";

export const module1: readonly Unit[] = [
  {
    id: "1",
    title: "Unidad 1: Características y estructura del recuento histórico",
    topics: [
      { title: 'Definición de recuento histórico.' },
      {
        title: 'Características principales:',
        subtopics: [
          'Objetividad.',
          'Uso de lenguaje formal.',
          'Empleo de fuentes confiables.'
        ]
      },
      {
        title: 'Estructura del recuento histórico:',
        subtopics: [
          'Introducción (contexto y presentación del tema).',
          'Desarrollo (sucesión cronológica de los hechos).',
          'Conclusión (consecuencias y reflexiones finales).'
        ]
      }
    ],
    introduction: "En esta unidad, el estudiante comprenderá qué es un recuento histórico, cuáles son sus características fundamentales y cómo debe estructurarse para transmitir información de manera clara y precisa. Al finalizar, podrá identificar y aplicar estos elementos en la redacción de sus propios textos históricos.",

    themes: [
      {
        id: "1.1",
        title: "Definición de recuento histórico",
        text: "El recuento histórico es un tipo de texto narrativo que expone hechos del pasado de manera ordenada y objetiva. Su propósito es informar sobre sucesos relevantes, destacando la relación de causa y efecto entre ellos, y permitiendo al lector comprender su impacto en la historia.",
        example: {
          type: "text",
          textStart: "Consideremos el recuento de la Revolución Francesa:",
          content: "La Revolución Francesa comenzó en 1789 debido a una crisis económica y al descontento social con la monarquía. La toma de la Bastilla el 14 de julio marcó el inicio del conflicto, seguido por la Declaración de los Derechos del Hombre y del Ciudadano. Finalmente, en 1793, el rey Luis XVI fue ejecutado, dando paso a una nueva etapa política en Francia.",
          textEnd: "En este ejemplo, se observa la narración de hechos históricos de manera objetiva y en orden cronológico."
        },
        activity: {
          type: "input",
          title: "Actividad: ¿Es un recuento histórico?",
          instructions: "Lee el siguiente fragmento y determina si cumple con la definición de un recuento histórico. Justifica tu respuesta.",
          content: "<italic>La guerra de independencia de México fue un evento clave para la historia del país. Fue un proceso complejo, lleno de batallas y personajes icónicos. El Grito de Dolores en 1810 marcó su inicio, y tras más de una década de lucha, México logró su independencia en 1821.</italic>"
        }
      },

      {
        id: "1.2",
        title: "Características principales del recuento histórico",
        text: 'Para que un texto pueda considerarse un recuento histórico, debe cumplir con ciertas características esenciales que permiten que la narración sea clara, precisa y objetiva. A continuación, se detallan las tres características más importantes:',
        subthemes: [
          {
            id: '1.2.1',
            title: 'Objetividad',
            text: 'La objetividad es fundamental en un recuento histórico, ya que este tipo de texto tiene el propósito de informar sin introducir opiniones personales ni juicios de valor. Un recuento histórico debe basarse en hechos verificables y presentarlos de manera imparcial. La objetividad asegura que el lector pueda entender los eventos tal como ocurrieron, sin la influencia de creencias, emociones o prejuicios del autor.',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '"El 11 de septiembre de 2001, un grupo de terroristas secuestró aviones comerciales y los estrelló contra las Torres Gemelas en Nueva York y el Pentágono en Washington D.C., causando la muerte de miles de personas."',
              textEnd: 'Este es un ejemplo de objetividad porque se presenta la información de manera clara, sin opiniones ni juicios sobre el evento. Solo se mencionan los hechos que ocurrieron, sin agregar una valoración sobre ellos.'
            }
          },
          {
            id: '1.2.2',
            title: 'Uso del lenguaje formal',
            text: 'El recuento histórico utiliza un lenguaje formal y técnico para garantizar que la información sea precisa y comprensible. Evita el uso de expresiones coloquiales o informales que puedan restar seriedad al texto. Este tipo de lenguaje permite que el recuento sea entendido por un público amplio y, al mismo tiempo, se mantenga adecuado para contextos académicos y profesionales.',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '"La caída del Imperio Romano de Occidente, en el año 476 d.C., marcó el fin de un período histórico que abarcó más de 500 años. Esta disolución fue el resultado de múltiples factores internos y externos, incluyendo invasiones bárbaras y problemas económicos."',
              textEnd: 'En este ejemplo, el lenguaje es formal y se utiliza de manera precisa para explicar los hechos. No se usan expresiones informales ni ambiguas, lo que asegura que el mensaje sea claro y profesional.'
            }
          },
          {
            id: '1.2.3',
            title: 'Empleo de fuentes confiables',
            text: 'El recuento histórico debe basarse en fuentes confiables que proporcionen información verificable. Las fuentes pueden incluir libros de historia, documentos oficiales, entrevistas con expertos, investigaciones académicas y archivos históricos. La inclusión de fuentes confiables le da al recuento credibilidad y permite al lector confiar en la precisión de los datos presentados.',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '"Según el informe de la Comisión Warren, el asesinato del presidente John F. Kennedy en 1963 fue llevado a cabo por un solo tirador, Lee Harvey Oswald, aunque otras teorías de conspiración han surgido a lo largo de los años."',
              textEnd: 'Aquí se hace referencia a una fuente confiable (el informe oficial de la Comisión Warren) para respaldar la información. La mención de esta fuente agrega credibilidad al recuento, ya que se trata de un documento oficial que fue ampliamente revisado por expertos en su momento.'
            }
          }
        ]
      },

      {
        id: "1.3",
        title: "Estructura del recuento histórico",
        text: 'La estructura de un recuento histórico es fundamental para organizar y presentar los hechos de manera coherente y comprensible. Un recuento bien estructurado guía al lector a través de los eventos de forma clara, lógica y cronológica, permitiendo una fácil comprensión del desarrollo de los sucesos y sus consecuencias. A continuación, se describen las tres secciones principales que componen la estructura de un recuento histórico: <bold>Introducción</bold>, <bold>Desarrollo</bold> y <bold>Conclusión</bold>.',
        subthemes: [
          {
            id: '1.3.1',
            title: 'Introducción',
            text: 'La introducción de un recuento histórico tiene como objetivo presentar el contexto del evento y explicar su relevancia histórica. Aquí se describe el marco temporal y geográfico, los actores involucrados, y se establece la importancia del hecho en cuestión. La introducción debe captar la atención del lector y preparar el terreno para los detalles que se desarrollarán en la siguiente sección.\n\nUna buena introducción no solo debe situar al lector en el contexto adecuado, sino que también debe establecer el propósito del recuento. Por ejemplo, si el evento es significativo para entender un cambio social o político, la introducción debe mencionar cómo ese evento afectó a una nación o a un grupo de personas. Además, se debe evitar entrar en detalles minuciosos que serán tratados más adelante; la introducción es solo un panorama general del evento.',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '"La Revolución Industrial, que comenzó a finales del siglo XVIII en Inglaterra, transformó radicalmente las sociedades y economías de todo el mundo. Este proceso de cambio económico, social y tecnológico no solo alteró la producción de bienes, sino que también redefinió la vida cotidiana, la urbanización y las relaciones laborales."',
              textEnd: 'Aquí se presenta el contexto (Inglaterra a finales del siglo XVIII) y se establece la importancia histórica de la Revolución Industrial.'
            }
          },
          {
            id: '1.3.2',
            title: 'Desarrollo',
            text: 'El <bold>desarrollo</bold> es la parte más extensa del recuento histórico. En esta sección, se narra la sucesión de los hechos de forma cronológica, explicando las causas, los eventos principales y sus consecuencias inmediatas. El desarrollo debe ser claro y detallado, presentando los sucesos de manera que el lector pueda seguir el curso de los eventos sin confusión.\n\nEl desarrollo debe estar organizado de manera cronológica, lo que significa que los eventos deben presentarse en el orden en que ocurrieron. Es importante conectar los diferentes eventos para que el lector pueda entender cómo se relacionan entre sí. Si bien el desarrollo puede ser más extenso que la introducción o la conclusión, siempre debe mantener el enfoque en los hechos, evitando que se desvíe hacia temas o detalles irrelevantes. Además, debe incluir las personas clave, las decisiones tomadas, y los momentos críticos que cambiaron el curso de los acontecimientos.',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '"A medida que las máquinas comenzaron a reemplazar el trabajo manual, las fábricas crecieron en número y tamaño, atrayendo a más trabajadores. En 1800, las fábricas de textiles fueron las más prominentes, pero pronto otros sectores, como el de la minería y la metalurgia, también se industrializaron. Las condiciones laborales, sin embargo, eran duras y las jornadas eran largas, lo que llevó a que se crearan los primeros movimientos obreros en busca de mejores derechos."',
              textEnd: 'Este párrafo presenta una secuencia cronológica clara de cómo el desarrollo de las fábricas llevó a un cambio en las condiciones laborales, un suceso clave en la Revolución Industrial.'
            }
          },
          {
            id: '1.3.3',
            title: 'Conclusión',
            text: 'La <bold>conclusión</bold> es la sección final del recuento histórico, donde se resumen las consecuencias del evento y se reflexiona sobre su impacto a largo plazo. En esta parte, se destacan las lecciones aprendidas, las transformaciones que el evento causó y cómo influenció otros acontecimientos históricos. La conclusión debe ayudar al lector a comprender la relevancia del evento en un contexto más amplio.\n\nLa conclusión no debe ser simplemente un resumen de los hechos descritos en el desarrollo, sino que debe ofrecer una visión de cómo esos hechos cambiaron el rumbo de la historia. Esto incluye no solo las consecuencias inmediatas, sino también los efectos que perduraron con el tiempo. Una conclusión fuerte proporcionará una reflexión sobre la importancia del evento y cómo este encaja en el panorama histórico general.',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '"La Revolución Industrial no solo alteró la producción de bienes, sino que también generó una serie de cambios sociales, como el crecimiento de las ciudades y la formación de nuevas clases sociales. Aunque trajo avances en tecnología y economía, también dejó consecuencias negativas, como la explotación laboral y el deterioro del medio ambiente. Las reformas que surgieron en respuesta a estos problemas continuaron moldeando las sociedades industriales durante todo el siglo XIX."',
              textEnd: 'En este ejemplo, se reflexiona sobre las consecuencias de la Revolución Industrial, tanto positivas como negativas, y se menciona su impacto a largo plazo en las sociedades que la vivieron.'
            },
            activity: {
              type: 'input',
              title: 'Actividad: Redacción de un recuento histórico',
              instructions: 'Ahora que has comprendido la estructura del recuento histórico, es momento de poner en práctica lo aprendido. Elige un evento histórico significativo (puede ser uno que hayas estudiado o uno que te interese investigar) y redacta un recuento histórico siguiendo la estructura que hemos visto:',
              content: '<bold>1. Introducción:</bold> Presenta el contexto del evento y su relevancia.\<bold>\n<bold>2. Desarrollo:</bold> Narra los hechos de forma cronológica, conectando los eventos y detallando las causas y consecuencias inmediatas.\n<bold>3. Conclusión:</bold> Resume las consecuencias del evento y reflexiona sobre su impacto a largo plazo.'
            }
          }
        ]
      }
    ],

    summary: [
      "Un recuento histórico es un texto narrativo que relata hechos del pasado de manera objetiva y ordenada.",
      "Sus características principales incluyen la objetividad, el uso de lenguaje formal y la utilización de fuentes confiables.",
      "Su estructura consta de introducción, desarrollo y conclusión, cada una con una función específica en la narración de los hechos."
    ]
  },

  {
    id: "2",
    title: "Unidad 2: Sucesión cronológica de los hechos",
    topics: [
      { title: "Reconocer el orden cronológico como un elemento clave en la organización de recuentos históricos." },
      { title: "Identificar y utilizar conectores temporales en la narración de hechos." },
      { title: "Diferenciar entre tiempo histórico (fechas reales) y tiempo narrativo (orden del relato)." },
      { title: "Organizar eventos históricos mediante líneas de tiempo para visualizar su secuencia." },
      { title: "Analizar cómo el orden de los acontecimientos influye en la comprensión del mensaje del texto." }
    ],
    introduction: "El estudiante aprenderá a identificar el orden de los acontecimientos en un recuento histórico y su importancia para la comprensión del texto.",

    themes: [
      {
        id: "2.1",
        title: "Orden cronológico en la narración de hechos históricos",
        text: "El <bold>orden cronológico</bold> es clave para organizar los eventos históricos de manera clara. En un recuento histórico, los hechos deben seguir el mismo orden en el que ocurrieron en la realidad. Esto ayuda a los lectores a comprender cómo se desarrollaron los eventos y cómo uno condujo al siguiente.\n\n<subheading>¿Por qué es importante?</subheading>\n<list>Facilita la comprensión de los eventos.</list><list>Ayuda a seguir la secuencia lógica de los hechos.</list><list>Evita confusiones sobre la relación temporal entre los eventos.</list>",
        example: {
          type: "list",
          textStart: "Imagina que estás narrando la caída del Imperio Romano:",
          content: ["476 d.C.: Último emperador romano de Occidente, Rómulo Augústulo, es depuesto.", "410 d.C.: Los visigodos saquean Roma.", "395 d.C.: El Imperio Romano se divide en dos, Imperio Romano de Occidente y de Oriente."],
          textEnd: "Al presentar los hechos en orden cronológico, el lector puede entender cómo cada evento fue un paso hacia el colapso final del Imperio Romano de Occidente."
        },
      },
      {
        id: "2.2",
        title: "Conectores temporales: cómo usar el tiempo en los hechos históricos",
        text: "Los <bold>conectores temporales</bold> son esenciales para mostrar la relación de tiempo entre los eventos. Ayudan a conectar los hechos y a indicar cuándo ocurrieron.\n\nConectores comunes:\n<list><bold>Primero / En primer lugar:</bold> Para indicar el primer evento.</list><list><bold>Después / Más tarde:</bold> Para indicar lo que ocurrió tras un evento.</list><list><bold>En ese año / Al mismo tiempo:</bold> Para eventos ocurridos simultáneamente.</list><list><bold>Posteriormente:</bold> Para marcar un evento posterior.</list><list><bold>Finalmente:</bold> Para cerrar una secuencia de eventos.</list>",

        example: {
          type: "table",
          textStart: "Imagina que estás describiendo la Revolución Francesa. Los conectores temporales te permiten estructurar la narración:",
          content: [
            ["Evento", "Conector temporal", "Fecha"],
            ["Toma de la Bastilla", "En 1789", "14 de julio de 1789"],
            ["Declaración de la Primera República", "Posteriormente", "21 de septiembre de 1792"],
            ["Ejecución de Luis XVI", "Al mismo tiempo", "21 de enero de 1793"],
            ["El ascenso de Napoleón", "Finalmente", "1799"]
          ],
          textEnd: "Conectores como <bold>'En 1789'</bold> y <bold>'Posteriormente'</bold> ayudan a establecer el flujo temporal entre estos eventos."
        }
      },
      {
        id: "2.3",
        title: "Diferencia entre tiempo histórico y tiempo narrativo",
        text: "En un recuento histórico, es importante distinguir entre <bold>tiempo histórico</bold> y <bold>tiempo narrativo</bold>.",

        example: {
          type: "table",
          textStart: "Ejemplo:",
          content: [
            ["Concepto", "Definición", "Ejemplo"],
            ["Tiempo histórico", "Es el tiempo real en el que ocurren los hechos. Es fijo y no cambia.", "'La Segunda Guerra Mundial comenzó en 1939 y terminó en 1945.'"],
            ["Tiempo narrativo", "Es el tiempo utilizado en el relato, que puede saltar hacia atrás (flashbacks) o hacia adelante.", "'La Guerra Mundial fue precedida por una serie de conflictos menores en Europa en 1914.'(flashback)"]
          ],
          textEnd: "¿Por qué es importante esta diferencia?<list>El <bold>tiempo histórico</bold> nos da el marco real de los eventos.</list><list>El <bold>tiempo narrativo</bold> permite que el autor pueda elegir qué eventos mostrar primero, cómo desarrollarlos y cuándo introducir retrocesos o anticipaciones.</list>"
        }
      },
      {
        id: "2.4",
        title: "Uso de líneas de tiempo para organizar los hechos",
        text: "Las <bold>líneas de tiempo</bold> son una herramienta visual poderosa para organizar los eventos de manera cronológica. Usarlas ayuda a representar las secuencias de forma clara y comprensible.\n\n<subheading>Beneficios de una línea de tiempo:</subheading><list><bold>Claridad:</bold> Muestra el orden cronológico de los eventos de manera visual.</list><list><bold>Comparación:</bold> Permite comparar diferentes periodos históricos o eventos simultáneos.</list><list><bold>Organización:</bold> Ayuda a visualizar la duración de los eventos y su relación temporal.</list>",

        example: {
          type: "text",
          textStart: "Aquí tienes una línea de tiempo simplificada de los eventos más importantes de la Revolución Francesa:",
          content: "| 1789  | Toma de la Bastilla                     |\n| 1791  | Juramento del Juego de Pelota           |\n| 1792  | La Primera República Francesa           |\n| 1793  | Ejecución de Luis XVI                   |\n| 1799  | Ascenso de Napoleón Bonaparte           |",
          textEnd: "Con esta representación visual, puedes ver cómo los eventos se alinean cronológicamente y entender mejor su relación."
        }
      }
    ],

    summary: [
      "Orden cronológico: Organización de eventos en el tiempo.",
      "Conectores temporales: Palabras como 'después', 'luego', 'finalmente' para enlazar los hechos.",
      "Tiempo histórico: Hechos reales y su secuencia.",
      "Tiempo narrativo: Cómo se cuenta la historia, con flexibilidad en los saltos temporales.",
      "Líneas de tiempo: Herramientas visuales para representar cronológicamente los eventos."
    ]
  },

  {
    id: "3",
    title: "Unidad 3: Inferencia de fechas y lugares",
    topics: [
      { title: "Identificar referencias temporales y espaciales explícitas en textos históricos." },
      { title: "Inferir fechas aproximadas a partir de pistas contextuales en el texto." },
      { title: "Relacionar eventos narrados con su marco temporal y geográfico." }
    ],
    introduction: "En esta unidad, los estudiantes aprenderán a identificar referencias temporales y espaciales dentro de un recuento histórico y a inferir fechas y lugares a partir de pistas contextuales. Desarrollarán la habilidad de conectar los eventos narrados con su marco temporal y geográfico, mejorando su capacidad de comprensión y análisis de textos históricos.",

    themes: [
      {
        id: "3.1",
        title: "Identificación de referencias temporales y espaciales en un texto",
        text: "Un texto histórico puede contener información clave sobre tiempo y lugar, pero no siempre de manera explícita. Identificar estos elementos ayuda a comprender el contexto de un evento y su relevancia en la historia.\n\nA veces, las referencias temporales se presentan de manera indirecta: palabras como 'siglos después', 'durante la Edad Media' o 'poco antes de la Revolución Industrial' son pistas útiles. De manera similar, términos como 'en el viejo continente', 'en las colonias' o 'al otro lado del Atlántico' pueden ser referencias geográficas indirectas.",

        example: {
          type: "text",
          textStart: "Para demostrar la importancia de esta habilidad, observa el siguiente texto:",
          content: "'Mucho antes de que los europeos llegaran a América, grandes civilizaciones florecieron en el continente. Una de ellas, ubicada en la región andina, destacó por su red de caminos y su sistema de quipus.'",
          textEnd: "Si bien no se menciona una fecha exacta ni un país específico, con el conocimiento adecuado se puede inferir que el texto se refiere a los Incas en <bold>Sudamérica</bold> antes del siglo XV."
        },

        activity: {
          type: "input",
          title: "Actividad: Identificando referencias",
          instructions: "Lee el siguiente fragmento e identifica las referencias temporales y espaciales.",
          content: "'A mediados del siglo XX, un conflicto ideológico dividió el mundo en dos grandes bloques. Estados Unidos y la Unión Soviética protagonizaron una serie de tensiones políticas y militares sin llegar a un enfrentamiento directo'"
        }
      },
      {
        id: "3.2",
        title: "Inferencia de fechas a partir de pistas contextuales",
        text: "No todos los eventos históricos se presentan con fechas exactas. A menudo, es necesario inferirlas utilizando pistas dentro del texto.",

        example: {
          type: "text",
          textStart: "Analiza el siguiente fragmento:",
          content: "'Después de la invención de la imprenta, la difusión del conocimiento en Europa se aceleró enormemente, permitiendo que movimientos intelectuales y religiosos se extendieran rápidamente.'",
          textEnd: "Aunque el texto no menciona un año exacto, sabemos que la imprenta de Gutenberg se inventó en 1440. Con esta información, podemos estimar que el período al que se refiere es el siglo XV y XVI."
        },

        activity: {
          type: "multiple-choice",
          title: "Actividad: Inferencia de fechas",
          instructions: "Lee el siguiente enunciado y elige la opción que mejor represente la época aproximada.",
          content: [
            {
              question: "'Tras la invención del ferrocarril, las distancias entre ciudades se redujeron drásticamente, impulsando la industrialización.'",
              options: [
                "A) Siglo XVII",
                "B) Siglo XIX",
                "C) Siglo XXI"
              ],
              correctAnswer: "B) Siglo XIX"
            }
          ]
        }
      },
      {
        id: "3.3",
        title: "Relación entre los hechos narrados y su marco temporal y geográfico",
        text: "Conectar eventos con su ubicación y contexto es clave para comprender su impacto. Un mismo acontecimiento puede tener diferentes interpretaciones dependiendo del lugar donde ocurrió.",

        example: {
          type: "table",
          textStart: "<bold>Ejemplo comparativo:</bold> La independencia de Estados Unidos (1776) y la independencia de las colonias hispanoamericanas (1810-1830) comparten algunas características, pero también presentan diferencias importantes.",
          content: [
            ["Evento", "Año", "Ubicación", "Causas principales"],
            ["Independencia de EE.UU.", "1776", "Norteamérica", "Impuestos sin representación, influencias ilustradas"],
            ["Independencias latinoamericanas", "1810-1830", "América Latina", "Criollismo, crisis de la monarquía española"]
          ],
          textEnd: ""
        },

        activity: {
          type: "input",
          title: "Actividad: Análisis de contexto histórico",
          instructions: "Elige un evento histórico y relaciónalo con su contexto temporal y geográfico. Explica cómo las condiciones del momento y del lugar influyeron en su desarrollo.",
          content: ""
        }
      },
    ],

    summary: [
      "Identificar referencias temporales y espaciales en los textos permite comprender mejor el contexto histórico.",
      "Inferir fechas a partir de pistas contextuales es una habilidad clave en la lectura de fuentes históricas.",
      "Relacionar los hechos con su marco temporal y geográfico ayuda a interpretar su impacto y significado en diferentes regiones del mundo."
    ]
  },

  {
    id: "4",
    title: "Unidad 4: Identificación de la información relevante",
    topics: [
      { title: "Identificar la idea principal en un recuento histórico." },
      { title: "Distinguir entre datos esenciales y detalles secundarios o complementarios." },
      { title: "Aplicar técnicas de lectura para seleccionar la información más relevante." },
      { title: "Desarrollar la capacidad de síntesis al analizar documentos históricos." },
      { title: "Mejorar la comprensión crítica de textos históricos mediante el enfoque en la información clave." }
    ],
    introduction: "En el estudio de la historia, es fundamental poder distinguir entre la información principal y los detalles complementarios para comprender el significado de los acontecimientos y su impacto en la sociedad. En esta unidad, los estudiantes desarrollarán habilidades para identificar las ideas centrales en un recuento histórico, diferenciar datos esenciales de aquellos secundarios y aplicar estrategias para seleccionar la información más relevante en un texto. Estas habilidades les permitirán analizar documentos históricos con mayor profundidad y precisión.",

    themes: [
      {
        id: "4.1",
        title: "Identificación de la idea principal de un recuento histórico",
        text: "Cada recuento histórico tiene una idea principal que resume su propósito o mensaje central. Esta idea suele responder a preguntas como: ¿Qué evento se describe? ¿Cuál es su importancia? ¿Cuál fue su consecuencia principal?\n\nEn ocasiones, la idea principal se expresa directamente en el texto, pero en otras debe inferirse a partir del análisis del contenido. Un método eficaz para identificarla es buscar términos recurrentes y observar la relación entre los diferentes párrafos.",

        example: {
          type: "text",
          textStart: "Ejemplo:",
          content: "'En 1789, estalló la Revolución Francesa, un movimiento que transformó la estructura política y social de Francia. La monarquía fue abolida, y se establecieron principios como la libertad y la igualdad. Este evento influyó en otros procesos revolucionarios a nivel mundial.'",
          textEnd: "La idea principal de este fragmento es el impacto de la Revolución Francesa en la estructura política y su influencia global."
        },

        activity: {
          type: "multiple-choice",
          title: "Actividad: Identificando la idea central",
          instructions: "Lee el siguiente fragmento y selecciona cuál es la idea principal entre las opciones dadas.",
          content: [
            {
              question: "'El descubrimiento de América en 1492 cambió el curso de la historia. Se establecieron nuevas rutas comerciales, hubo un intercambio de culturas y comenzaron procesos de colonización que transformaron el mundo.'",
              options: [
                "A) El descubrimiento de América llevó a la colonización y el intercambio cultural.",
                "B) América fue descubierta en 1492 por Cristóbal Colón.",
                "C) El comercio en América se desarrolló rápidamente después de 1492."
              ],
              correctAnswer: "A) El descubrimiento de América llevó a la colonización y el intercambio cultural."
            }
          ]
        }
      },
      {
        id: "4.2",
        title: "Diferenciación entre datos esenciales y detalles complementarios",
        text: "Un texto histórico incluye datos esenciales que permiten comprender el evento y detalles complementarios que enriquecen la narración pero no son indispensables para su comprensión.\n\n<subheading>Para distinguir entre ambos, podemos preguntarnos:</subheading>\n<list>¿Qué información es imprescindible para entender el evento?</list><list>¿Qué detalles solo aportan contexto adicional?</list>",

        example: {
          type: "table",
          textStart: "<bold>Caso práctico:</bold> Observemos este fragmento sobre la Revolución Industrial:\n\n'<italic>La Revolución Industrial comenzó en Inglaterra en el siglo XVIII. Factores como la disponibilidad de carbón y la mecanización de la industria textil fueron clave en este proceso. Durante este período, las ciudades crecieron rápidamente, las condiciones laborales eran difíciles y la producción en fábricas se incrementó considerablemente.</italic>'",
          content: [
            ["Información esencial", "Detalles complementarios"],
            ["La Revolución Industrial comenzó en Inglaterra en el siglo XVIII.", "La mecanización afectó la industria textil."],
            ["El crecimiento urbano y el aumento de la producción fueron consecuencias.", "Las condiciones laborales eran difíciles."]
          ],
          textEnd: ""
        },

        activity: {
          type: "drag-and-drop",
          title: "Actividad: Clasificación de información",
          instructions: "Lee el siguiente fragmento y arrastra cada elemento a la categoría correcta (esencial o complementario).\n\n'<italic>La Primera Guerra Mundial (1914-1918) fue un conflicto global que involucró a múltiples países y tuvo como una de sus principales causas la competencia imperialista. Durante la guerra, se introdujeron nuevas armas como los tanques y el gas mostaza. Las trincheras fueron un elemento característico del frente occidental.</italic>'",
          content: {
            categories: [
              "Información esencial",
              "Detalles complementarios"
            ],
            items: [
              {
                text: "La Primera Guerra Mundial ocurrió entre 1914 y 1918.",
                category: "Información esencial"
              },
              {
                text: "Fue un conflicto global impulsado por la competencia imperialista.",
                category: "Información esencial"
              },
              {
                text: "Se usaron tanques y gas mostaza.",
                category: "Detalles complementarios"
              },
              {
                text: "Las trincheras caracterizaron el frente occidental.",
                category: "Detalles complementarios"
              }
            ]
          }
        }
      },
      {
        id: "4.3",
        title: "Técnicas para seleccionar información relevante en un texto histórico",
        text: "Existen diversas estrategias para identificar la información más importante en un texto histórico:\n<list><bold>Resumir en una oración:</bold> Intentar expresar el contenido del texto en una sola frase ayuda a identificar su idea principal.</list><list><bold>Subrayar palabras clave:</bold> Fijarse en fechas, nombres y conceptos centrales.</list><list><bold>Analizar la estructura del texto:</bold> El primer y último párrafo suelen contener información clave.</list>",

        example: {
          type: "list",
          textStart: "<bold>Ejemplo práctico:</bold>Dado el siguiente fragmento:\n\n'<italic>El Tratado de Versalles, firmado en 1919, puso fin a la Primera Guerra Mundial e impuso duras sanciones a Alemania. Entre sus condiciones estaban la reducción del ejército alemán y el pago de indemnizaciones. Estas restricciones generaron resentimiento en la población y contribuyeron al ascenso del nazismo.</italic>'",
          content: [
            "Resumen en una oración: El Tratado de Versalles finalizó la Primera Guerra Mundial e impuso sanciones a Alemania, lo que influyó en el ascenso del nazismo.",
            "Palabras clave: Tratado de Versalles, 1919, sanciones, Alemania, ascenso del nazismo.",
            "Estructura: La información clave está al inicio y al final."
          ],
          textEnd: "En este ejemplo, se muestra cómo identificar la información esencial de un texto extenso usando un resumen breve, palabras clave y observando la estructura del párrafo."
        },

        activity: {
          type: "multiple-choice",
          title: "Actividad: Selección de información clave",
          instructions: "Lee el siguiente fragmento y selecciona las tres palabras clave más relevantes.",
          content: [
            {
              question: "'La Guerra Fría fue un conflicto ideológico entre Estados Unidos y la Unión Soviética que se desarrolló después de la Segunda Guerra Mundial. No hubo enfrentamientos directos, pero hubo crisis como la de los misiles en Cuba. Este período terminó con la disolución de la URSS en 1991.'",
              options: [
                "A) Crisis de los misiles, ideología, URSS",
                "B) Guerra Fría, Estados Unidos, URSS",
                "C) Segunda Guerra Mundial, conflicto, enfrentamientos"
              ],
              correctAnswer: "B) Guerra Fría, Estados Unidos, URSS"
            }
          ]
        }
      }
    ],

    summary: [
      "Identificar la idea principal en un recuento histórico ayuda a comprender su propósito.",
      "Diferenciar entre datos esenciales y detalles complementarios permite analizar textos de manera efectiva.",
      "Aplicar técnicas como resumir, subrayar palabras clave y analizar la estructura del texto facilita la selección de información relevante."
    ]
  },

  {
    id: "5",
    title: "Unidad 5: Redacción de un recuento histórico",
    topics: [
      { title: "Seleccionar un tema relevante para redactar un recuento histórico." },
      { title: "Investigar en fuentes confiables y utilizar citas adecuadas." },
      { title: "Organizar la información de forma coherente siguiendo la estructura del recuento histórico." },
      { title: "Aplicar conectores temporales para lograr fluidez y claridad en el texto." },
      { title: "Revisar y corregir el recuento final para asegurar precisión, coherencia y objetividad." }
    ],
    introduction: "La redacción de un recuento histórico requiere la aplicación de diversas habilidades, desde la planificación y organización de la información hasta la correcta estructuración del texto. En esta unidad, los estudiantes aprenderán a seleccionar un tema relevante, investigar en fuentes confiables, estructurar un texto coherente con conectores temporales adecuados y revisar su trabajo para asegurar claridad y precisión. Al final de la unidad, serán capaces de escribir un recuento histórico bien fundamentado y estructurado.",

    themes: [
      {
        id: "5.1",
        title: "Planeación del recuento histórico",
        text: "Antes de escribir un recuento histórico, es fundamental elegir un tema relevante y recopilar información precisa. La planeación permite organizar los datos de manera lógica y evitar omisiones importantes.\n\n<subheading>Pasos para planear un recuento histórico:</subheading>\n<list><bold>Elegir un tema:</bold> Debe ser un evento histórico específico, como una revolución, una guerra o un descubrimiento.</list><list><bold>Definir el objetivo:</bold> ¿Qué se busca explicar o destacar sobre el evento?</list><list><bold>Recopilar información:</bold> Consultar diversas fuentes confiables para obtener una visión completa.</list><list><bold>Organizar los datos:</bold> Crear un esquema con los momentos clave del recuento.",

        example: {
          type: "table",
          textStart: "Ejemplo de esquema para un recuento histórico:",
          content: [
            ["Sección", "Contenido"],
            ["Introducción", "Presentación del evento y su importancia."],
            ["Desarrollo", "Descripción del contexto, causas, acontecimientos y consecuencias."],
            ["Conclusión", "Reflexión sobre el impacto del evento en la historia."]
          ],
          textEnd: ""
        }
      },

      {
        id: "5.2",
        title: "Uso de fuentes confiables y citas adecuadas",
        text: "Para que un recuento histórico sea veraz y preciso, es fundamental utilizar fuentes confiables. Estas pueden incluir libros de historia, artículos académicos y documentos oficiales.\n\n<subheading>Criterios para identificar fuentes confiables:</subheading>\n<list>Publicadas por instituciones reconocidas.</list><list>Escritas por especialistas en el tema.</list><list>Basadas en evidencia verificable.</list>\n\nAdemás, es importante citar correctamente las fuentes utilizadas. En un recuento histórico, se pueden emplear citas directas o indirectas para respaldar la información presentada.",

        example: {
          type: "text",
          textStart: "Ejemplo de cita::",
          content: "'Según Hobsbawm (1995), la Revolución Industrial transformó la economía global al introducir la producción mecanizada.",
          textEnd: ""
        },

        activity: {
          type: "multiple-select",
          title: "Actividad: Identificación de fuentes confiables",
          instructions: "Lee las siguientes fuentes y elige cuáles son confiables para escribir un recuento histórico.",
          content: [
            {
              question: "",
              options: [
                "Un artículo de un blog sin autor ni referencias.",
                "Un libro publicado por un historiador reconocido.",
                "Un video de YouTube sin menciones a fuentes verificables.",
                "Un documento oficial de un archivo histórico."
              ],
              correctAnswers: [
                "Un libro publicado por un historiador reconocido.",
                "Un documento oficial de un archivo histórico."
              ]
            }
          ]
        }
      },

      {
        id: "5.3",
        title: "Aplicación de conectores temporales para la fluidez del texto",
        text: "Los conectores temporales ayudan a estructurar el recuento histórico de manera clara y cronológica. Permiten establecer secuencias y transiciones entre los eventos narrados.",

        example: {
          type: "table",
          textStart: "Ejemplos de conectores temporales:",
          content: [
            ["Tipo", "Ejemplos"],
            ["Inicio del evento", "'En un principio', 'Al comienzo', 'En el año...', 'Con el inicio de'"],
            ["Secuencia", "'Luego', 'Posteriormente', 'Más tarde', 'Después', 'A partir de entonces'"],
            ["Causa y consecuencia", "'Debido a esto', 'Como resultado', 'Por esta razón'"],
            ["Conclusión", "'Finalmente', 'En conclusión', 'Por último'"]
          ],
          textEnd: ""
        },

        activity: {
          type: "fill-in-the-blanks",
          title: "Actividad: Completar con conectores temporales",
          instructions: "Completa las siguientes oraciones con los conectores temporales adecuados.",
          content: [
            {
              sentence: "1. _______ de la Segunda Guerra Mundial, se establecieron acuerdos de paz.",
              answer: "después"
            },
            {
              sentence: "2. En 1492, Cristóbal Colón llegó a América. _______, inició la colonización.",
              answer: "a partir de entonces"
            },
            {
              sentence: "3. _______ la Revolución Industrial, la producción aumentó significativamente.",
              answer: "con el inicio de"
            }
          ]
        }
      },

      {
        id: "5.4",
        title: "Revisión y corrección del texto final",
        text: "Después de redactar un recuento histórico, es importante revisarlo para corregir errores y mejorar su claridad. Algunas estrategias útiles incluyen:\n\n<list>Leer el texto en voz alta para detectar fallos en la fluidez.</list><list>Verificar que la información esté bien organizada y tenga coherencia.</list><list>Revisar la ortografía, puntuación y uso adecuado de tiempos verbales.</list>\n\n<subheading>Lista de verificación para la revisión:</subheading>\n<list>¿El recuento tiene una introducción clara y un desarrollo estructurado?</list><list>¿Se han usado conectores temporales correctamente?</list><list>¿Las fuentes utilizadas son confiables y están bien citadas?</list><list>¿No hay errores ortográficos ni gramaticales?</list>",

        activity: {
          type: "multiple-choice",
          title: "Actividad: Revisión de un recuento histórico",
          instructions: "Lee el siguiente párrafo y selecciona qué aspectos necesitan corrección.",
          content: [
            {
              question: "'La Guerra Fría fue un conflicto entre estados unidos y la union sovietica. No hubo enfrentamientos directos, pero afectó la política mundial. en 1989 cayó el Muro de Berlín, terminando con este período.'",
              options: [
                "A) Uso incorrecto de mayúsculas.",
                "B) Falta de conectores temporales.",
                "C) Errores ortográficos.",
                "D) Todas las anteriores."
              ],
              correctAnswer: "D) Todas las anteriores."
            }
          ]
        }
      }
    ],

    summary: [
      "La planeación es clave para organizar un recuento histórico de manera efectiva.",
      "Es fundamental utilizar fuentes confiables y citar correctamente la información.",
      "Los conectores temporales facilitan la fluidez y coherencia del texto.",
      "La revisión final asegura que el recuento sea claro, preciso y sin errores."
    ]
  }

] as const;