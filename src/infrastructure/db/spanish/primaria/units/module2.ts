import { Unit } from "@/core/domain/entities/Unit";

export const module2: readonly Unit[] = [
  {
    id: "1",
    title: "Unidad 1: Características generales de un reportaje",
    topics: [
      {title: "Definición de reportaje."},
      {title: "Diferencia entre una noticia y un reportaje."},
      {title: "Estructura de un reportaje (introducción, desarrollo y conclusión)."},
      {title: "Uso de lenguaje formal y directo."}
    ],
    introduction: "En esta unidad conocerás el género periodístico del reportaje, una forma de comunicación que va más allá de la simple narración de hechos. Aprenderás qué lo define, cuáles son sus propósitos y qué lo distingue de otras formas de escritura periodística, como la noticia. También explorarás su estructura básica y el tipo de lenguaje que se utiliza, de manera que puedas reconocer un reportaje e iniciar la producción de uno propio.",

    themes: [
      {
        id: "1.1",
        title: "Definición de reportaje",
        text: "El reportaje es un texto periodístico que investiga y expone de forma profunda un tema de interés público. A diferencia de la noticia, no solo informa, sino que también explica, analiza y contextualiza. Puede abordar sucesos actuales, personajes relevantes, problemas sociales o culturales, entre otros temas.\n\nSe caracteriza por ofrecer una mirada amplia, detallada y bien documentada, con información obtenida de diversas fuentes. Combina el rigor informativo con recursos narrativos que captan el interés del lector.\n\n<subheading>Características principales:</subheading>\n<list>Investiga y profundiza en un tema más allá de los hechos inmediatos.</list><list>Puede incluir entrevistas, testimonios y datos complementarios.</list><list>Se estructura en una narrativa más extensa y detallada.</list><list>Utiliza un lenguaje claro y objetivo, sin opiniones personales del autor.</list>",

        example: {
          type: "text",
          textStart: "Para ejemplificar esto, observemos un caso donde se aborda un problema social:",
          content: "Tema: Trabajo infantil en zonas rurales.\n\nEjemplo: El reportaje incluye testimonios de niños y familias, cifras oficiales, entrevistas con maestros y ONGs, así como una descripción del contexto social y económico.",
          textEnd: "Este ejemplo muestra cómo el reportaje no solo presenta datos, sino que profundiza en el entorno y las consecuencias del problema."
        },

        activity: {
          type: "input",
          title: "Actividad: Identifica el reportaje",
          instructions: "Lee los siguientes títulos y determina cuál podría corresponder a un reportaje y cuáles a una noticia. Justifica tu elección.",
          content: "1. 'Terremoto de magnitud 6.5 sacude la costa del Pacífico.'\n2. 'Historias de resiliencia: sobrevivientes reconstruyen sus vidas tras el sismo.'\n3. 'Gobierno anuncia medidas para enfrentar los efectos del temblor.'"
        }
      },

      {
        id: "1.2",
        title: "Diferencia entre una noticia y un reportaje",
        text: "<bold>Noticia:</bold> informa de manera breve, inmediata y objetiva sobre un hecho reciente. Se limita a responder las preguntas básicas: ¿qué?, ¿quién?, ¿cuándo?, ¿dónde?, ¿cómo? y ¿por qué?.\n\n<bold>Reportaje:</bold> parte de un hecho pero lo amplía, lo investiga y lo contextualiza. Incluye entrevistas, descripciones, antecedentes y consecuencias. Se permite un tratamiento más narrativo y profundo.\n\n<subheading>Para ilustrar esta diferencia:</subheading>\nUna noticia sobre una manifestación puede decir: 'Miles protestan en la capital contra la reforma laboral.'\nEn cambio, un reportaje podría incluir entrevistas con manifestantes, antecedentes de la reforma, análisis de expertos y posibles escenarios futuros.",

        example: {
          type: "table",
          textStart: "Cuadro comparativo:",
          content: [
            ["Característica", "Noticia", "Reportaje"],
            ["Extensión", "Breve", "Amplio"],
            ["Profundidad", "Superficial", "Profunda"],
            ["Estilo", "Informativo, directo", "Narrativo e informativo"],
            ["Fuentes", "Mínimas", "Diversas y detalladas"],
            ["Objetivo", "Informar", "Informar, analizar y contextualizar"]
          ],
          textEnd: ""
        },

        activity: {
          type: "classify-text",
          title: "Actividad: Clasifica el texto",
          instructions: "Lee los siguientes fragmentos y determina si pertenecen a una noticia (N) o a un reportaje (R). Marca con la letra correspondiente.",
          options: ['N', 'R'],
          content: [
            { text: "El presidente inauguró ayer el nuevo hospital regional.", correctAnswer: 'N' },
            { text: "Durante semanas, los vecinos trabajaron juntos para transformar un terreno baldío en un huerto comunitario.", correctAnswer: 'R' },
            { text: "Se reportaron más de cien casos de intoxicación alimentaria en la región sur.", correctAnswer: 'N' },
            { text: "Con entrevistas a padres y expertos, el reportaje analiza el impacto del encierro en la salud emocional de los adolescentes.", correctAnswer: 'R' },
          ],
        }
      },

      {
        id: "1.3",
        title: "Estructura de un reportaje",
        text: "Un reportaje suele organizarse en tres partes:\n\n<subheading>a) Introducción</subheading>\nBusca captar la atención del lector. Puede iniciar con una anécdota, una descripción impactante, una cita o una pregunta. Presenta el tema principal y da una idea del enfoque que tendrá el texto.\n\n<subheading>b) Desarrollo</subheading>\nEs la parte central y más extensa. Aquí se expone la información detallada, se introducen las fuentes, testimonios y datos. Se analizan causas y consecuencias, y se aporta contexto.\n\n<subheading>c) Conclusión</subheading>\nCierra el texto reforzando el mensaje central. Puede ofrecer una reflexión, una llamada a la acción o una imagen que deje huella en el lector.",

        example: {
          type: "list",
          textStart: "Este ejemplo muestra la estructura de un reportaje en acción:",
          content: [
            "Introducción: 'Hoy, diez años después, María recuerda cómo el agua arrasó su casa en menos de media hora.'",
            "Desarrollo: 'Según datos de la ONU, los desastres naturales afectan a más de 160 millones de personas cada año.'",
            "Conclusión: 'A pesar de todo, ella no ha perdido la esperanza y trabaja para que su historia inspire a otros.'"
          ],
          textEnd: ""
        },

        activity: {
          type: "order-text",
          title: "Actividad: Ordena el reportaje",
          instructions: "A continuación se presentan fragmentos de un reportaje desordenados. Reorganízalos según la estructura correcta (introducción, desarrollo, conclusión).",
          content: [
            { id: '1', text: "Hoy, diez años después, María recuerda cómo el agua arrasó su casa en menos de media hora." },
            { id: '2', text: "A pesar de todo, ella no ha perdido la esperanza y trabaja para que su historia inspire a otros." },
            { id: '3', text: "Según datos de la ONU, los desastres naturales afectan a más de 160 millones de personas cada año." }
          ],
          correctOrder: ['3', '1', '2']
        }
      },

      {
        id: "1.4",
        title: "Lenguaje en el reportaje: claro, formal y directo",
        text: "El lenguaje en el reportaje debe ser claro, evitando ambigüedades o tecnicismos innecesarios; <bold>formal</bold>, cuidando la redacción y el vocabulario; y <bold>directo</bold>, presentando las ideas de forma precisa. Aunque puede usar recursos literarios, no pierde su base informativa.\n\nSe evitan juicios personales o subjetivos, privilegiando el uso de datos y testimonios que hablen por sí mismos.",

        example: {
          type: "list",
          textStart: "Para observar esta diferencia:",
          content: [
            "Poco claro: 'Hubo un montón de problemas en la zona por la lluvia.'Claro y formal: 'Las intensas lluvias provocaron múltiples problemas en la zona, incluyendo cortes de energía y evacuaciones.'"
          ],
          textEnd: ""
        },

        activity: {
          type: "input",
          title: "Actividad: Reescribe con precisión",
          instructions: "Transforma las siguientes frases para que usen un lenguaje más claro y formal:",
          content: "'Un montón de gente perdió todo por culpa del clima.'\n\n'Las cosas están bien feas en ese lugar.'"
        }
      }
    ],

    summary: [
      "El reportaje investiga y profundiza en temas de interés.",
      "Se distingue de la noticia por su extensión, estilo y profundidad.",
      "Tiene una estructura en tres partes: introducción, desarrollo y conclusión.",
      "El lenguaje debe ser claro, formal y directo."
    ]
  },

  {
    id: "2",
    title: "Unidad 2: Interpretación de la información en un reportaje",
    topics: [
      {title: "Diferencia entre hechos y opiniones."},
      {title: "Análisis del contexto del reportaje."},
      {title: "Evaluación de la confiabilidad de las fuentes."},
      {title: "Identificación de sesgos en la información."}
    ],
    introduction: "En esta unidad, los estudiantes aprenderán a interpretar la información presentada en un reportaje, desarrollando una mirada crítica frente a los contenidos periodísticos. Se enfocarán en diferenciar entre hechos y opiniones, analizar el contexto en que se produce y presenta la información, evaluar la confiabilidad de las fuentes utilizadas, e identificar posibles sesgos o intenciones detrás del contenido. Estos elementos permitirán comprender no solo lo que se dice, sino cómo y por qué se dice",

    themes: [
      {
        id: "2.1",
        title: "Diferencia entre hechos y opiniones",
        text: "Un paso fundamental para interpretar un reportaje es distinguir claramente entre hechos y opiniones:\n<list><bold>Hechos:</bold> son afirmaciones que pueden verificarse como verdaderas o falsas mediante evidencia. No dependen de puntos de vista personales.</list><list><bold>Opiniones:</bold> son juicios, creencias o valoraciones personales. No pueden comprobarse de forma objetiva.</list>",

        example: {
          type: "list",
          textStart: "Ejemplo:",
          content: [
            '"El huracán dejó a más de 200 familias sin hogar" (hecho verificable).',
            '"El gobierno reaccionó de forma ineficiente" (opinión).'
          ],
          textEnd: "Este tipo de distinción permite detectar cuándo el texto busca informar objetivamente y cuándo expresa un punto de vista."
        },

        activity: {
          type: "classify-text",
          title: "Actividad: Distingue hechos y opiniones",
          instructions: "Lee las siguientes afirmaciones y clasifícalas como hecho (H) u opinión (O):",
          options: ['H', 'O'],
          content: [
            { text: "La tasa de desempleo subió un 3% en el último trimestre.", correctAnswer: 'H' },
            { text: "Esa subida demuestra que la economía está siendo mal gestionada", correctAnswer: 'O' },
            { text: "Más de 5 mil personas asistieron a la manifestación.", correctAnswer: 'H' },
            { text: "Fue una manifestación caótica y mal organizada.", correctAnswer: 'O' },
          ],
        }
      },

      {
        id: "2.2",
        title: "Análisis del contexto del reportaje",
        text: "Todo reportaje está vinculado a un contexto: el momento, el lugar, el entorno social, político o cultural en el que se produce. Interpretar bien un reportaje implica reconocer esos elementos que influyen en cómo se presenta la información.",

        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: 'Un reportaje sobre escasez de agua publicado en plena temporada de sequía tiene un significado distinto que si se publicara en época de lluvias. El contexto modifica la urgencia, el enfoque y la recepción del contenido.',
          textEnd: 'Al considerar el contexto, el lector puede entender por qué se eligió ese enfoque, qué aspectos se priorizan y qué otros podrían haberse omitido.'
        },

        activity: {
          type: 'input',
          title: 'Actividad: Interpreta el contexto',
          instructions: 'Lee este fragmento y responde: ¿qué elementos del contexto pueden estar influyendo en su contenido?',
          content: '"En medio del alza de precios y el aumento de la pobreza, cientos de personas acudieron al comedor comunitario inaugurado el mes pasado en la zona sur de la ciudad.”'
        }
      },

      {
        id: '2.3',
        title: 'Evaluación de la confiabilidad de las fuentes',
        text: 'Las fuentes son los testimonios, documentos o instituciones de donde el reportaje obtiene su información. Evaluar su confiabilidad es clave para interpretar la veracidad y el equilibrio del contenido.',

        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: 'Una fuente oficial (como un ministerio de salud) puede ser confiable para ofrecer cifras, pero puede tener intereses políticos. Una ONG puede aportar una visión crítica. Un testimonio individual puede ser valioso, pero necesita ser contrastado.',
          textEnd: "Una buena práctica es preguntarse: ¿la fuente tiene conocimiento directo?, ¿tiene algún interés particular en el tema?, ¿se contrastan distintos puntos de vista?"
        },

        activity: {
          type: 'classify-text',
          title: 'Actividad: Evalúa la fuente',
          instructions: 'Clasifica las siguientes fuentes según su nivel de confiabilidad (Alta, Media, Baja)',
          options: ['Alta', 'Media', 'Baja'],
          content: [
            { text: 'Un informe del Instituto Nacional de Estadística.', correctAnswer: 'Alta' },
            { text: 'El testimonio de una persona afectada por un hecho.', correctAnswer: 'Media' },
            { text: 'Una publicación en redes sociales sin citar fuentes.', correctAnswer: 'Baja' },
            { text: 'Un artículo académico con datos referenciados.', correctAnswer: 'Alta' }
          ]
        }
      },

      {
        id: '2.4',
        title: 'Identificación de sesgos en la información',
        text: 'Un reportaje puede presentar sesgos cuando favorece una postura sobre otra, omite información relevante, utiliza un lenguaje cargado o elige ciertas fuentes sin mostrar otras. Reconocer estos elementos permite leer de forma más crítica.',

        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: 'Un reportaje sobre inseguridad que solo utiliza declaraciones de víctimas, sin datos oficiales ni voces de autoridades, puede estar reforzando una visión parcial del problema.',
          textEnd: 'Detectar estos sesgos no implica que el reportaje sea falso, sino que su enfoque puede estar limitado o intencionado.'
        },

        activity: {
          type: 'input',
          title: 'Actividad: Detecta el sesgo',
          instructions: 'Lee este fragmento y señala si hay algún indicio de sesgo:',
          content: '"Los vecinos, aterrados por la delincuencia, afirman que la policía no hace nada. Ningún agente quiso responder nuestras preguntas.”'
        }
      }
    ],

    summary: [
      "Diferenciar entre hechos y opiniones permite interpretar mejor el enfoque del reportaje.",
      "Analizar el contexto ayuda a entender el porqué del contenido y su relevancia.",
      "Evaluar la confiabilidad de las fuentes permite valorar la veracidad y equilibrio de lo expuesto.",
      "Detectar sesgos favorece una lectura crítica y consciente."
    ]
  },

  {
    id: '3',
    title: 'Unidad 3: Identificación de la idea principal',
    topics: [
      {title: 'Qué es la idea principal y cómo identificarla.'},
      {title: 'Diferencia entre idea principal e ideas secundarias.'},
      {title: 'Técnicas para localizar la idea principal en un texto.'}
    ],
    introduction: 'En esta unidad, el estudiante aprenderá a reconocer la idea principal en un reportaje, es decir, el núcleo del mensaje que el texto busca comunicar. Esta habilidad es clave para comprender el sentido global del contenido, ya que permite diferenciar la información esencial de los datos complementarios. A lo largo de la unidad se trabajará en distinguir entre la idea principal, las ideas secundarias y los detalles de apoyo. También se explorarán estrategias prácticas para localizar la idea central en diferentes partes del texto, como la introducción, el desarrollo o incluso en la conclusión. Estas herramientas facilitarán una lectura más crítica, analítica y eficaz del reportaje.',

    themes: [
      {
        id: '3.1',
        title: '¿Qué es la idea principal y cómo identificarla?',
        text: 'La idea principal es el mensaje más importante que transmite el reportaje. Resume el propósito del texto y guía el desarrollo de la información. Suele estar relacionada con el título, el enfoque del reportaje y se refuerza a lo largo de todo el contenido.',

        example: {
          type: 'text',
          textStart: 'En un reportaje titulado *“Vivir con sequía: el desafío diario de las comunidades rurales”*, la idea principal podría ser:',
          content: '“La escasez de agua transforma la vida cotidiana y genera desafíos económicos y sociales en comunidades rurales.”',
          textEnd: 'Este ejemplo muestra cómo la idea principal articula todo el contenido y sirve como eje temático.'
        },

        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Encuentra la idea principal',
          instructions: 'Lee el siguiente fragmento de reportaje y selecciona cuál opción representa mejor la idea principal:',
          content: [
            {
              question: '“Cada mañana, Rosa camina más de tres kilómetros para conseguir agua potable. Su comunidad, ubicada en el altiplano, enfrenta una sequía prolongada desde hace cuatro años. A pesar de los esfuerzos de organizaciones locales, el acceso al agua sigue siendo limitado. Las familias han tenido que modificar su rutina y adaptar sus cultivos para sobrevivir.”',
              options: [
                'A) La escasez de agua afecta la rutina diaria de muchas familias.',
                'B) Las organizaciones locales han ayudado a resolver el problema del agua.',
                'C) Rosa vive en una zona rural con sequía.',
                'D) Caminar por agua es una tradición en muchas comunidades.'
              ],
              correctAnswer: 'A) La escasez de agua afecta la rutina diaria de muchas familias.'
            }
          ]
        }
      },

      {
        id: '3.2',
        title: 'Diferencia entre idea principal e ideas secundarias',
        text: 'Las ideas secundarias desarrollan, explican o sustentan la idea principal. Su función es complementar con detalles, ejemplos, datos o testimonios que enriquecen el contenido, pero no constituyen el mensaje central. Distinguir entre ambos tipos de ideas permite comprender la jerarquía de información en el reportaje y evita confundir datos relevantes con secundarios.',

        example: {
          type: 'list',
          textStart: 'Idea principal: *El cambio climático está afectando la producción agrícola.*\nIdeas secundarias:',
          content: [
            'Las lluvias son menos frecuentes.',
            'Los agricultores deben cambiar sus métodos de cultivo.',
            'Se registran pérdidas económicas.'
          ],
          textEnd: ''
        },

        activity: {
          type: 'classify-text',
          title: 'Actividad: Clasifica las ideas',
          instructions: 'A partir del siguiente enunciado central: “El desempleo juvenil ha aumentado significativamente en los últimos años en zonas urbanas.”, clasifica las oraciones como idea secundaria (IS) o detalle complementario (DC):',
          options: ["IS", "DC"],
          content: [
            {
              text: 'Las empresas buscan trabajadores con más experiencia.',
              correctAnswer: 'DC'
            },
            {
              text: 'El 60% de los jóvenes entre 18 y 25 años no tiene empleo formal.',
              correctAnswer: 'IS'
            },
            {
              text: 'Muchos jóvenes emigran en busca de oportunidades.',
              correctAnswer: 'IS'
            },
            {
              text: 'Algunos especialistas proponen incentivos fiscales para contratar jóvenes.',
              correctAnswer: 'DC'
            }
          ]
        }
      },
      {
        id: '3.3',
        title: 'Técnicas para localizar la idea principal en un texto',
        text: 'La idea principal puede estar explícita (escrita de forma directa) o implícita (se deduce a partir de las ideas del texto). Para encontrarla, es útil aplicar ciertas estrategias:\n\n<list>Leer el título y subtítulos del reportaje.\n<list>Revisar la introducción y la conclusión: suelen contener frases clave.\n<list>Observar repeticiones o énfasis en ciertos temas.\n<list>Identificar el problema o situación central que se analiza.',

        example: {
          type: 'text',
          textStart: 'En el reportaje <bold>“Aulas sin internet: la brecha digital en la educación rural”</bold>, el texto comienza así:',
          content: '“Mientras en la ciudad los estudiantes asisten a clases virtuales, en la comunidad de San Miguel, los niños caminan dos horas para recoger una guía impresa.”',
          textEnd: 'Esto permite inferir que la idea principal está relacionada con la desigualdad en el acceso a la educación digital.'
        },

        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Detecta la técnica',
          instructions: '',
          content: [
            {
              question: '¿Qué estrategia permite ubicar la idea principal en el ejemplo anterior?',
              options: [
                'A) Identificar cifras numéricas.',
                'B) Observar el título y el primer párrafo.',
                'C) Leer solo la conclusión.',
                'D) Buscar testimonios personales.'
              ],
              correctAnswer: 'B) Observar el título y el primer párrafo.'
            }
          ]
        }
      }
    ],

    summary: [
      'La idea principal es el núcleo del mensaje del reportaje.',
      'Las ideas secundarias desarrollan o complementan el mensaje principal.',
      'Existen técnicas útiles para localizar la idea principal: observar título, inicio, cierre y repeticiones en el texto.'
    ]
  },

  {
    id: '4',
    title: 'Unidad 4: Selección de información relevante',
    topics: [
      {title: 'Qué es la información relevante y cómo identificarla.'},
      {title: 'Diferencia entre información relevante y datos de apoyo.'},
      {title: 'Organización de la información para construir un argumento sólido.'}
    ],
    introduction: 'En esta unidad se desarrollarán habilidades para identificar y seleccionar la información más relevante dentro de un reportaje. El estudiante aprenderá a diferenciar entre los datos que son esenciales para comprender el mensaje principal del texto y aquellos que solo sirven como apoyo o detalle adicional. Esta capacidad es fundamental para interpretar adecuadamente el contenido, sintetizarlo, y construir argumentos bien estructurados. Además, se trabajará en estrategias para organizar la información relevante de manera lógica y coherente, con el fin de facilitar la comprensión lectora y la producción escrita.',

    themes: [
      {
        id: '4.1',
        title: 'Qué es la información relevante y cómo identificarla',
        text: 'La información relevante es aquella que contribuye directamente a la comprensión del tema principal de un reportaje. Está vinculada con la idea principal y ayuda a desarrollarla o profundizar en ella.\n\n<subheading>¿Cómo identificarla?\n<list>¿Este dato responde a una pregunta clave del tema?\n<list>¿Aporta algo nuevo o necesario para entender el asunto?\n<list>¿Tiene relación directa con el enfoque del reportaje?',
      
        example: {
          type: 'list',
          textStart: 'En un reportaje sobre contaminación de ríos:',
          content: [
            'Información relevante: “El 75% de los residuos industriales se vierten sin tratamiento previo.”',
            'No relevante: “El río nace a 3,200 metros sobre el nivel del mar y atraviesa siete provincias.”'
          ],
          textEnd: 'La primera oración contribuye al tema central, mientras que la segunda aporta un dato secundario.'
        },
      
        activity: {
          type: 'classify-text',
          title: 'Actividad: Identifica la información útil',
          instructions: 'Lee el siguiente fragmento y selecciona qué frases son relevantes (R) para entender el tema del reportaje y cuáles son solo datos de contexto o apoyo (A):\n\n<italic>"En los últimos cinco años, el nivel de agua del lago ha descendido dos metros, afectando la fauna local. El lago fue descubierto en 1542 por un grupo de exploradores españoles. Hoy, miles de familias dependen de él para pescar y obtener agua potable.”</italic>',
          options: ['A', 'R'],
          content: [
            {
              text: 'El lago fue descubierto en 1542.',
              correctAnswer: 'A'
            },
            {
              text: 'El nivel del agua ha descendido dos metros.',
              correctAnswer: 'R'
            },
            {
              text: 'Afecta la fauna local.',
              correctAnswer: 'R'
            },
            {
              text: 'Miles de familias dependen del lago.',
              correctAnswer: 'R'
            }
          ]
        }
      },
      {
        id: '4.2',
        title: 'Diferencia entre información relevante y datos de apoyo',
        text: 'Los datos de apoyo enriquecen el texto, aportan contexto, ejemplos o detalles ilustrativos, pero no son imprescindibles para comprender la idea principal. En cambio, la información relevante es indispensable para entender el tema y sus implicaciones.',
      
        example: {
          type: 'list',
          textStart: 'Tema del reportaje: deserción escolar en zonas rurales.',
          content: [
            'Información relevante: “Más del 40% de los adolescentes abandonan la escuela antes de terminar la secundaria.”',
            'Dato de apoyo: “Algunos jóvenes prefieren trabajar en el campo junto a sus padres.”'
          ],
          textEnd: 'Ambos datos son útiles, pero solo el primero transmite el núcleo del problema.'
        },
      
        activity: {
          type: 'classify-text',
          title: 'Actividad: Distingue el tipo de información',
          instructions: 'A partir del tema <bold>“Falta de acceso a internet en zonas alejadas”</bold>, lee los siguientes enunciados y clasifícalos como: Relevante (R) o Apoyo (A).',
          options: ['R', 'A'],
          content: [
            {
              text: 'En algunas comunidades no hay antenas de señal.',
              correctAnswer: 'R'
            },
            {
              text: 'Muchos estudiantes deben caminar para conseguir conexión.',
              correctAnswer: 'R'
            },
            {
              text: 'Las zonas rurales tienen menor densidad poblacional.',
              correctAnswer: 'A'
            },
            {
              text: 'El 63% de las escuelas no cuenta con servicio de internet.',
              correctAnswer: 'R'
            }
          ]
        }
      },
      {
        id: '4.3',
        title: 'Organización de la información para construir un argumento sólido',
        text: 'Una vez identificada la información relevante, es importante organizarla de manera clara y coherente. Esto permite establecer relaciones lógicas, reforzar una postura o explicar una problemática de forma efectiva.\n\n<subheading>Algunas estrategias para organizar la información:\n<list>Orden cronológico (de lo más antiguo a lo más reciente).\n<list>Orden causal (de causa a efecto).\n<list>Jerarquía de importancia (de lo más relevante a lo menos).',
      
        example: {
          type: 'list',
          textStart: 'Tema: Impacto del transporte público en la vida urbana.\n\nOrganización jerárquica:',
          content: [
            '“El 70% de los ciudadanos depende del transporte público para llegar al trabajo.”',
            '“Las fallas en el sistema provocan ausentismo laboral.”',
            '“Algunos usuarios expresan su frustración en redes sociales.”'
          ],
          textEnd: 'En este caso, la organización va de lo más importante (dato general) a lo más específico (reacciones personales).'
        },
      
        activity: {
          type: 'order-text',
          title: 'Actividad: Ordena la información',
          instructions: 'Lee los siguientes fragmentos y colócalos en un orden que permita construir un argumento sólido:',
          content: [
            {
              id: '1',
              text: '“Grupos ciudadanos han convocado marchas en distintas ciudades.”'
            },
            {
              id: '2',
              text: '“Las protestas se han intensificado en la última semana debido al aumento del precio del transporte.”'
            },
            {
              id: '3',
              text: '“El gobierno anunció el incremento tarifario el lunes pasado.”'
            }
          ],
          correctOrder: ['3', '2', '1']
        },
      }            
    ],

    summary: [
      'La información relevante permite comprender el tema central del reportaje.',
      'Los datos de apoyo enriquecen, pero no determinan el mensaje principal.',
      'Organizar la información con coherencia fortalece la claridad y el impacto del argumento.'
    ]   
  },
]