import { Unit } from "@/core/domain/entities/Unit";

export const module10: readonly Unit[] = [
  {
    id: '1',
    title: 'Unidad 1: Clasificación de la información',
    topics: [
      {
        title: 'Definición de clasificación:',
        subtopics: [
          'Proceso de agrupar información con base en similitudes y diferencias.',
          'Importancia de la clasificación para facilitar la búsqueda y el análisis de información.'
        ]
      },
      {
        title: 'Tipos de clasificación:',
        subtopics: [
          'Clasificación temática: por tema o materia.',
          'Clasificación cronológica: por orden temporal.',
          'Clasificación geográfica: por ubicación o lugar.',
          'Clasificación alfabética: por orden de letras.',
          'Clasificación jerárquica: por niveles de importancia.'
        ]
      },
      {
        title: 'Criterios de clasificación:',
        subtopics: [
          'Relevancia.',
          'Relación entre los elementos.',
          'Claridad y coherencia en la organización.'
        ]
      }
    ],
    introduction: 'Saber clasificar información es el primer paso para dominar grandes volúmenes de contenido. En esta unidad aprenderás a agrupar datos en categorías específicas y a estructurarlos de forma lógica, lo que facilitará su análisis y comprensión. Comprenderás por qué la clasificación es esencial en contextos académicos, científicos, informativos e incluso cotidianos.',

    themes: [
      {
        id: '1.1',
        title: 'Definición de clasificación',
        text: 'Clasificar es el proceso de agrupar información con base en sus similitudes o diferencias. Esta organización permite detectar patrones, establecer relaciones y facilitar la consulta de datos.\n\n<subheading>Importancia de la clasificación:</subheading>\n<list>Ayuda a encontrar información rápidamente.</list><list>Facilita el análisis y la comprensión de los datos.</list><list>Permite estructurar proyectos o ideas de forma ordenada.</list><list>Mejora la comunicación escrita y oral.\n</list>',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se muestra una clasificación básica de información relacionada con animales:',
          content: '<italic>“Animales vertebrados: mamíferos, aves, reptiles, anfibios y peces."</italic>\n<italic>"Animales invertebrados: insectos, moluscos, arácnidos, equinodermos, anélidos.”</italic>',
          textEnd: 'Este ejemplo muestra cómo los animales pueden clasificarse según la presencia o ausencia de columna vertebral, agrupándolos en dos grandes categorías.'
        },
        activity: {
          type: 'classify-text',
          title: 'Actividad: Identifica la clasificación',
          instructions: 'Lee cada agrupación y clasifícala como temática o cronológica.',
          options: ['Temática', 'Cronológica'],
          content: [
            {
              text: 'Mesa, silla, escritorio, banco.',
              correctAnswer: 'Temática'
            },
            {
              text: 'Oro, plata, cobre, hierro.',
              correctAnswer: 'Temática'
            },
            {
              text: 'Primavera, verano, otoño, invierno.',
              correctAnswer: 'Cronológica'
            },
            {
              text: 'Infancia, adolescencia, adultez, vejez.',
              correctAnswer: 'Cronológica'
            },
            {
              text: 'Zapato, camisa, pantalón, chaqueta.',
              correctAnswer: 'Temática'
            }
          ]
        }
      },
      {
        id: '1.2',
        title: 'Tipos de clasificación',
        text: 'Existen diferentes formas de clasificar la información, según el criterio que se aplique.',
        example: {
          type: 'table',
          textStart: 'A continuación se presenta una tabla con los principales tipos de clasificación:',
          content: [
            ['Tipo de clasificación', 'Descripción'],
            ['Temática', 'Agrupa información por temas o materias.'],
            ['Cronológica', 'Ordena información según el tiempo (fechas, épocas, eventos).'],
            ['Geográfica', 'Organiza los datos por lugar, región o país.'],
            ['Alfabética', 'Dispone la información en orden de letras (A-Z).'],
            ['Jerárquica', 'Establece niveles de importancia o dependencia entre elementos.']
          ],
          textEnd: '\nA continuación se muestra un ejemplo de clasificación cronológica:\n<subheading>Revoluciones Históricas:</subheading>\n<list>Revolución Industrial (1760-1840)</list><list>Revolución Francesa (1789-1799)</list><list>Revolución Mexicana (1910-1920)</list>\nEste ejemplo organiza los eventos de acuerdo con el momento histórico en que ocurrieron, lo que permite observar su secuencia temporal.'
        },
        activity: {
          type: 'drag-and-drop',
          title: 'Actividad: Relaciona el tipo con el ejemplo',
          instructions: 'Arrastra cada ejemplo al tipo de clasificación que le corresponde.',
          content: {
            categories: [
              'Clasificación geográfica',
              'Clasificación jerárquica',
              'Clasificación alfabética'
            ],
            items: [
              { text: 'Alemania, Brasil, Canadá, Dinamarca.', category: 'Clasificación geográfica' },
              { text: 'Director, subdirector, coordinador, asistente.', category: 'Clasificación jerárquica' },
              { text: 'Abeja, ballena, caracol, delfín.', category: 'Clasificación alfabética' }
            ]
          }
        }
      },
      {
        id: '1.3',
        title: 'Criterios de clasificación',
        text: 'Al clasificar información, es importante elegir criterios que permitan una organización clara y coherente:\n\n- <bold>Relevancia:</bold> ¿El contenido es significativo para el tema que se está tratando?\n- <bold>Relación entre elementos:</bold> ¿Los elementos comparten características importantes?\n- <bold>Claridad:</bold> ¿La clasificación es fácil de entender?\n- <bold>Coherencia:</bold> ¿Los elementos están organizados de forma consistente?',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se aplica un criterio temático y otro geográfico:',
          content: '<italic>“Literatura latinoamericana: Gabriel García Márquez (Colombia), Jorge Luis Borges (Argentina), Mario Vargas Llosa (Perú).”</italic>',
          textEnd: 'Aquí se clasifican escritores según su región y tema, lo que permite una organización doble del contenido.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Elige el mejor criterio',
          instructions: 'Lee las siguientes situaciones y elige el criterio de clasificación más adecuado.',
          content: [
            {
              question: 'Organizas tus apuntes por asignaturas:',
              options: ['Relevancia', 'Claridad', 'Temática'],
              correctAnswer: 'Temática'
            },
            {
              question: 'Agrupas libros de ciencia según su dificultad:',
              options: ['Jerárquica', 'Cronológica', 'Alfabética'],
              correctAnswer: 'Jerárquica'
            },
            {
              question: 'Clasificas recetas de cocina por región:',
              options: ['Temática', 'Geográfica', 'Cronológica'],
              correctAnswer: 'Geográfica'
            }
          ]
        },

        subthemes: [
          {
            id: '1.3.1',
            title: '',
            text: '',
            activity: {
              type: 'multiple-choice',
              title: 'Actividad: Clasificando el mundo',
              instructions: 'Lee las siguientes listas de información y elige el tipo de clasificación que mejor corresponde a cada una. Selecciona solo una opción por inciso.',
              content: [
                {
                  question: '1. Frutas, verduras, cereales, legumbres.',
                  options: [
                    'Clasificación alfabética',
                    'Clasificación temática',
                    'Clasificación jerárquica',
                    'Clasificación cronológica',
                    'Clasificación geográfica'
                  ],
                  correctAnswer: 'Clasificación temática'
                },
                {
                  question: '2. A, B, C, D, E.',
                  options: [
                    'Clasificación alfabética',
                    'Clasificación temática',
                    'Clasificación jerárquica',
                    'Clasificación cronológica',
                    'Clasificación geográfica'
                  ],
                  correctAnswer: 'Clasificación alfabética'
                },
                {
                  question: '3. América del Norte, América Central, América del Sur.',
                  options: [
                    'Clasificación alfabética',
                    'Clasificación temática',
                    'Clasificación jerárquica',
                    'Clasificación cronológica',
                    'Clasificación geográfica'
                  ],
                  correctAnswer: 'Clasificación geográfica'
                },
                {
                  question: '4. Prehistoria, Edad Antigua, Edad Media, Edad Moderna, Edad Contemporánea.',
                  options: [
                    'Clasificación alfabética',
                    'Clasificación temática',
                    'Clasificación jerárquica',
                    'Clasificación cronológica',
                    'Clasificación geográfica'
                  ],
                  correctAnswer: 'Clasificación cronológica'
                },
                {
                  question: '5. Director general, jefes de área, supervisores, empleados.',
                  options: [
                    'Clasificación alfabética',
                    'Clasificación temática',
                    'Clasificación jerárquica',
                    'Clasificación cronológica',
                    'Clasificación geográfica'
                  ],
                  correctAnswer: 'Clasificación jerárquica'
                }
              ]
            }
          }
        ]
      }
    ],

    summary: [
      'Clasificar información implica agruparla según características comunes o diferencias.',
      'La clasificación mejora la comprensión, el análisis y la organización del conocimiento.',
      'Existen varios tipos de clasificación: temática, cronológica, geográfica, alfabética y jerárquica.',
      'Elegir criterios adecuados (relevancia, relación, claridad y coherencia) es clave para una clasificación efectiva.',
      'Las actividades permiten aplicar lo aprendido y reforzar la comprensión del tema.'
    ]    
  },
  {
    id: '2',
    title: 'Unidad 2: Clasificación de información en secciones temáticas',
    topics: [
      {title: 'Definición de sección temática:',
        subtopics: [
          'Organización de información en bloques relacionados por el mismo tema.',
          'Separación clara de las ideas para facilitar la lectura y comprensión.'
        ]
      },
      {title: 'Estructura de una sección temática:',
        subtopics: [
          'Título o encabezado claro.',
          'Párrafo introductorio que explique el propósito de la sección.',
          'Desarrollo del tema con ejemplos y detalles relevantes.',
          'Conclusión o cierre que resuma la información clave.'
        ]
      },
      {title: 'Relación entre secciones:',
        subtopics: [
          'Orden lógico de las secciones.',
          'Uso de conectores entre secciones para establecer continuidad.',
          'Evitar redundancias o información contradictoria.'
        ]
      }
    ],
    introduction: 'Aprender a dividir y estructurar la información en secciones temáticas es esencial para que los contenidos sean claros, comprensibles y fáciles de consultar. Esta unidad te enseñará a organizar ideas en bloques coherentes, facilitando tanto la escritura como la lectura crítica de textos complejos.',

    themes: [
      {
        id: '2.1',
        title: '¿Qué es una sección temática?',
        text: 'Una sección temática es un bloque de contenido que agrupa ideas relacionadas con un mismo tema. Ayuda al lector a seguir el hilo conductor del texto y a identificar rápidamente los aspectos más importantes de un tema.\n\n<bold>Beneficios de usar secciones temáticas:</bold>\n<list>Mejora la organización del contenido.</list><list>Facilita la comprensión lectora.</list><list>Permite desarrollar ideas con mayor profundidad.</list><list>Ordena la información de forma lógica y accesible.</list></list>',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se muestra cómo un texto sobre la energía puede dividirse en secciones temáticas:',
          content: '<italic>1. Tipos de energía: Se explican las formas de energía como cinética, potencial, térmica, etc.</italic>\n<italic>2. Energías renovables: Se desarrolla el tema de la energía solar, eólica, hidráulica, entre otras.</italic>\n<italic>3. Impacto ambiental: Se analizan las consecuencias del uso energético sobre el medio ambiente.</italic>',
          textEnd: 'Este ejemplo muestra cómo se pueden separar temas dentro de un mismo campo, facilitando la lectura.'
        }
      },
      {
        id: '2.2',
        title: 'Estructura de una sección temática',
        text: 'Cada sección temática debe tener una estructura clara. Aquí se presenta el esquema recomendado:',
        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Elemento', 'Propósito'],
            ['Título', 'Indicar claramente el tema tratado en la sección.'],
            ['Introducción', 'Presentar el tema y su relevancia.'],
            ['Desarrollo', 'Profundizar en el contenido con datos, explicaciones y ejemplos.'],
            ['Conclusión', 'Resumir lo más importante de la sección.']
          ],
          textEnd: '\nA continuación se muestra una sección temática bien estructurada:\n<subheading>“Título: El reciclaje en la vida diaria</subheading>\n<list><bold>Introducción:</bold> El reciclaje es una práctica esencial para la sostenibilidad ambiental.</list><list><bold>Desarrollo:</bold> Separar residuos, reutilizar objetos y reducir el consumo de plásticos son acciones que pueden aplicarse en casa, la escuela y el trabajo.</list><list><bold>Conclusión:</bold> Con pequeños hábitos diarios, es posible contribuir significativamente al cuidado del medio ambiente.</list>\nEste ejemplo ilustra cómo se construye una sección completa, con un flujo lógico de ideas.'
        },
        activity: {
          type: 'order-text',
          title: 'Actividad: Ordena una sección',
          instructions: 'A continuación, se presentan fragmentos de una sección desordenados. Ordénalos según la estructura correcta.',
          content: [
            { id: '4', text: 'El reciclaje y su importancia' },
            { id: '2', text: 'El reciclaje es clave para reducir la contaminación y conservar los recursos.' },
            { id: '1', text: 'Separar la basura es un paso inicial importante para contribuir al reciclaje.' },
            { id: '3', text: 'Con esta práctica se puede generar un impacto positivo desde el hogar.' }
          ],
          correctOrder: ['4', '2', '1', '3']
        }
      },
      {
        id: '2.3',
        title: 'Relación entre secciones',
        text: 'Además de construir secciones internas claras, es importante que exista una coherencia entre las diferentes secciones de un texto.',
        example: {
          type: 'list',
          textStart: 'En el siguiente ejemplo se observa cómo las secciones pueden estar conectadas entre sí:',
          content: [
            '1. El cambio climático: Presenta las causas del calentamiento global.',
            '2. Consecuencias ambientales: Expone el derretimiento de glaciares, incendios forestales, etc.',
            '3. Acciones para mitigarlo: Describe lo que gobiernos y ciudadanos pueden hacer.'
          ],
          textEnd: '\nLa secuencia respeta un orden lógico que va desde el problema hasta la solución, usando una relación de causa y efecto.'
        },
        activity: {
          type: 'order-text',
          title: 'Actividad: Conecta las secciones',
          instructions: 'A continuación, se muestran títulos de secciones. Ordénalos para que tengan una relación lógica entre sí.',
          content: [
            { id: 'C', text: '¿Qué es la obesidad?' },
            { id: 'B', text: 'Consecuencias de la obesidad' },
            { id: 'A', text: 'Medidas de prevención' }
          ],
          correctOrder: ['C', 'B', 'A']
        }
      }                  
    ],

    summary: [
      'Una sección temática es un bloque de contenido organizado por un tema específico.',
      'Cada sección debe tener título, introducción, desarrollo y conclusión.',
      'Las secciones deben estar ordenadas lógicamente y conectadas entre sí para evitar confusión.',
      'La organización temática mejora la claridad y la comprensión del texto.',
      'Actividades como ordenar fragmentos, crear esquemas o conectar secciones ayudan a fortalecer estas habilidades.'
    ]    
  },
  {
    id: '3',
    title: 'Unidad 3: Jerarquización de la información',
    topics: [
      {title: 'Definición de jerarquización:',
        subtopics: [
          'Organización de la información por niveles de importancia.',
          'Identificación de la información principal y secundaria.'
        ]
      },
      {title: 'Niveles de información:',
        subtopics: [
          'Nivel 1: idea principal o tema central.',
          'Nivel 2: ideas secundarias que apoyan la idea principal.',
          'Nivel 3: detalles o ejemplos que refuerzan las ideas secundarias.'
        ]
      },
      {title: 'Métodos de jerarquización:',
        subtopics: [
          'Uso de títulos y subtítulos.',
          'Orden numérico o de viñetas.',
          'Uso de negritas o subrayado para destacar información clave.',
          'Diagramas y mapas conceptuales para reflejar niveles de relación.'
        ]
      },
      {title: 'Relación entre jerarquización y clasificación:',
        subtopics: [
          'La clasificación facilita la jerarquización mediante la organización temática.',
          'La jerarquización establece el nivel de importancia de cada sección o dato.'
        ]
      }
    ],
    introduction: 'Aprender a jerarquizar la información te permitirá distinguir entre lo esencial y lo complementario, ayudándote a estructurar el contenido de forma clara y eficaz. Esta habilidad es clave para analizar textos, redactar ideas con lógica, y construir argumentos sólidos tanto en el ámbito académico como en el profesional.',

    themes: [
      {
        id: '3.1',
        title: '¿Qué es jerarquizar la información?',
        text: 'Jerarquizar consiste en organizar los contenidos según su nivel de importancia. Este proceso permite diferenciar qué ideas deben destacarse primero y cuáles sirven de apoyo o complemento.\n\n<subheading>Beneficios de la jerarquización:</subheading>\n<list>Facilita la comprensión rápida de textos.</list><list>Mejora la estructura de la escritura.</list><list>Ayuda a sintetizar grandes volúmenes de información.</list></list>',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se jerarquiza información sobre el uso del agua:',
          content: '<italic><subheading>1. El agua es esencial para la vida (idea principal).\n2. Se utiliza en actividades cotidianas como cocinar, limpiar y beber (idea secundaria).\n3. En promedio, una persona gasta entre 100 y 200 litros por día (detalle).</subheading></italic>',
          textEnd: 'Este ejemplo muestra claramente los tres niveles jerárquicos: una idea central, seguida de ideas de apoyo y detalles específicos.'
        }
      },
      {
        id: '3.2',
        title: 'Niveles de información',
        text: 'Los niveles jerárquicos permiten descomponer la información en distintos grados de relevancia:',
        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Nivel', 'Tipo de información', 'Ejemplo'],
            ['Nivel 1', 'Idea principal o tema central', 'La contaminación del aire afecta la salud humana.'],
            ['Nivel 2', 'Ideas secundarias que explican o apoyan la principal', 'Se origina por emisiones de autos e industrias.'],
            ['Nivel 3', 'Detalles o ejemplos concretos', 'Los niños y adultos mayores son los más vulnerables.']
          ],
          textEnd: ''
        },
        activity: {
          type: 'classify-text',
          title: 'Actividad: Identifica los niveles',
          instructions: 'Lee las siguientes frases y clasifícalas en Nivel 1, Nivel 2 o Nivel 3.',
          options: ['Nivel 1', 'Nivel 2', 'Nivel 3'],
          content: [
            {
              text: 'La lectura diaria mejora la comprensión lectora.',
              correctAnswer: 'Nivel 1'
            },
            {
              text: 'Leer permite ampliar el vocabulario y mejorar la ortografía.',
              correctAnswer: 'Nivel 2'
            },
            {
              text: 'Un estudio reveló que los estudiantes que leen 15 minutos al día tienen mejores resultados académicos.',
              correctAnswer: 'Nivel 3'
            }
          ]
        }
      },
      {
        id: '3.3',
        title: 'Métodos de jerarquización',
        text: 'Existen distintas herramientas que nos ayudan a jerarquizar la información:',
        example: {
          type: 'list',
          textStart: '',
          content: [
            'Títulos y subtítulos: Organizan el contenido de forma clara.',
            'Numeración o viñetas: Indican un orden lógico o secuencial.',
            'Estilos de texto: Negritas, subrayados o colores para destacar elementos.',
            'Diagramas y mapas conceptuales: Representan visualmente la relación entre ideas.'
          ],
          textEnd: '\nA continuación se muestra un ejemplo de jerarquización visual en un esquema:\n<italic><subheading>Tema: Alimentación saludable</subheading>\n1. Importancia de una dieta equilibrada\n  a. Prevención de enfermedades\n  b. Mejora del rendimiento físico y mental\n    i. Mejores niveles de concentración\n    ii. Aumento de energía diaria</italic>\nEl ejemplo ilustra cómo la numeración y la sangría permiten identificar el orden de importancia de cada idea.'
        },
        activity: {
          type: 'classify-text',
          title: 'Actividad: Orden jerárquico',
          instructions: 'Ordena las siguientes frases de mayor a menor nivel jerárquico (del 1 al 3).',
          options: ['Nivel 1', 'Nivel 2', 'Nivel 3'],
          content: [
            {
              text: 'El calentamiento global es uno de los principales problemas ambientales.',
              correctAnswer: 'Nivel 1'
            },
            {
              text: 'El aumento del CO₂ es una causa directa del calentamiento global.',
              correctAnswer: 'Nivel 2'
            },
            {
              text: 'Las emisiones de CO₂ provienen del uso de combustibles fósiles.',
              correctAnswer: 'Nivel 3'
            }
          ]
        }
      },
      {
        id: '3.4',
        title: 'Relación entre jerarquización y clasificación',
        text: 'Clasificar y jerarquizar son procesos complementarios: la clasificación agrupa la información según sus características, mientras que la jerarquización determina qué tan importante es cada elemento dentro de esa categoría.',
        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: '<italic><subheading>Tema: Sistemas del cuerpo humano</subheading>\n\n- Sistema circulatorio (Nivel 1)\n  - Función: transportar sangre y nutrientes (Nivel 2)\n    - El corazón bombea la sangre (Nivel 3)\n- Sistema respiratorio (Nivel 1)\n  - Función: intercambiar gases con el ambiente (Nivel 2)\n    - Los pulmones absorben oxígeno (Nivel 3)</italic>',
          textEnd: 'Este ejemplo muestra cómo clasificar los sistemas por categoría (clasificación) y jerarquizar su información interna.'
        },
        activity: {
          type: 'classify-text',
          title: 'Actividad: Clasifica y jerarquiza',
          instructions: 'Clasifica el contenido dentro del tema "El Amazonas" y elige el nivel jerárquico que corresponde a cada oración.',
          options: ['Nivel 1', 'Nivel 2', 'Nivel 3'],
          content: [
            {
              text: 'Es un ecosistema vital para el planeta.',
              correctAnswer: 'Nivel 1'
            },
            {
              text: 'El Amazonas es la selva más grande del mundo.',
              correctAnswer: 'Nivel 2'
            },
            {
              text: 'Está siendo amenazado por la deforestación.',
              correctAnswer: 'Nivel 2'
            },
            {
              text: 'Alberga miles de especies.',
              correctAnswer: 'Nivel 3'
            },
            {
              text: 'Se encuentra en Sudamérica.',
              correctAnswer: 'Nivel 3'
            }
          ]
        }
      }                        
    ],

    summary: [
      'Jerarquizar es organizar la información según su nivel de importancia.',
      'Existen tres niveles jerárquicos: idea principal, ideas secundarias y detalles o ejemplos.',
      'Títulos, numeraciones, negritas y esquemas visuales ayudan a aplicar la jerarquía.',
      'Clasificar permite agrupar información; jerarquizar, establecer la prioridad de cada elemento.',
      'Aplicar correctamente la jerarquización mejora la redacción, la comprensión y la organización de contenidos complejos.'
    ]    
  },
  {
    id: '4',
    title: 'Unidad 4: Uso de herramientas para clasificar y jerarquizar información',
    topics: [
      {title: 'Organizadores gráficos:',
        subtopics: [
          'Mapas mentales.',
          'Mapas conceptuales.',
          'Diagramas de flujo.',
          'Tablas comparativas.'
        ]
      },
      {title: 'Conectores y marcadores de texto:',
        subtopics: [
          'Uso de encabezados y subtítulos para estructurar la información.',
          'Uso de viñetas y numeración para organizar las ideas.',
          'Uso de negritas y cursivas para destacar puntos clave.'
        ]
      },
      {title: 'Técnicas de resumen y síntesis:',
        subtopics: [
          'Reducción de textos largos mediante la extracción de ideas clave.',
          'Uso de palabras clave para facilitar la memorización.',
          'Síntesis mediante esquemas y listas.'
        ]
      }
    ],
    introduction: 'Organizar información no siempre es fácil, especialmente cuando se trata de temas complejos o extensos. En esta unidad aprenderás a utilizar diversas herramientas visuales y técnicas de estructuración que te permitirán clasificar y jerarquizar contenidos de manera clara, ordenada y efectiva.',

    themes: [
      {
        id: '4.1',
        title: 'Organizadores gráficos',
        text: 'Los organizadores gráficos son representaciones visuales que ayudan a estructurar ideas y comprender relaciones entre conceptos.',
        example: {
          type: 'table',
          textStart: 'Tipos de organizadores gráficos:',
          content: [
            ['Tipo', 'Función principal'],
            ['Mapa mental', 'Explorar ideas alrededor de un concepto central.'],
            ['Mapa conceptual', 'Representar jerarquías y relaciones entre conceptos.'],
            ['Diagrama de flujo', 'Mostrar procesos o pasos secuenciales.'],
            ['Tabla comparativa', 'Contrastar diferencias y similitudes entre elementos.']
          ],
          textEnd: ''
        },
        subthemes: [
          {
            id: '4.1.1',
            title: 'Ejemplo de tabla comparativa',
            text: '',
            example: {
              type: 'table',
              textStart: 'A continuación se muestra un ejemplo de tabla comparativa:',
              content: [
                ['Tema', 'Energía renovable', 'Energía no renovable'],
                ['Fuente', 'Sol, viento, agua', 'Petróleo, gas, carbón'],
                ['Impacto ambiental', 'Bajo', 'Alto']
              ],
              textEnd: 'Este ejemplo permite visualizar las diferencias clave entre dos tipos de energía, facilitando el análisis comparativo.'
            }
          }
        ]
      },
      {
        id: '4.2',
        title: 'Conectores y marcadores de texto',
        text: 'Estas herramientas permiten estructurar el contenido escrito de forma clara y ordenada:\n\n- <bold>Encabezados y subtítulos:</bold> Dividen el contenido por temas o ideas.\n- <bold>Viñetas y numeración:</bold> Presentan información en listas ordenadas o sin jerarquía.\n- <bold>Negritas y cursivas:</bold> Destacan ideas clave y conceptos importantes.',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se usa una estructura clara para presentar una receta:',
          content: '<italic><subheading>Receta: Panqueques saludables</subheading></italic>\n<list>\n- 1 taza de avena\n- 1 plátano maduro\n- 1 huevo\n</list>\n<bold>Preparación:</bold>\n<list>\n1. Tritura el plátano.\n2. Mezcla con la avena y el huevo.\n3. Cocina en una sartén caliente.\n</list>',
          textEnd: 'Aquí se aplican encabezados, viñetas y numeración para ordenar y jerarquizar la información.'
        },
        activity: {
          type: 'multiple-select',
          title: 'Actividad: Detecta los marcadores',
          instructions: 'Lee el siguiente fragmento y selecciona qué tipos de conectores se usan.',
          content: [
            {
              question: 'Texto:\nPara empezar, es necesario definir qué es el cambio climático. Además, debemos conocer sus causas principales. Por último, se presentan algunas soluciones posibles.',
              options: [
                'Primero',
                'Para empezar',
                'Después',
                'Además',
                'Por último',
                'Entonces',
                'Por ejemplo'
              ],
              correctAnswers: ['Para empezar', 'Además', 'Por último']
            }
          ]
        }
      },
      {
        id: '4.3',
        title: 'Técnicas de resumen y síntesis',
        text: 'Reducir información es clave para estudiar o comunicar ideas esenciales. Existen técnicas útiles para lograrlo:\n\n- <bold>Resumen:</bold> Reduce el texto respetando la estructura original.\n- <bold>Síntesis:</bold> Reorganiza y combina ideas para darles un nuevo sentido.\n- <bold>Palabras clave:</bold> Ayudan a memorizar y recuperar información rápidamente.',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se resume un texto extenso:',
          content: '<italic>Texto original:</italic> Las plantas realizan la fotosíntesis, proceso por el cual transforman la luz solar en energía química, utilizando dióxido de carbono y agua. Esta función es vital para la vida en la Tierra, ya que produce oxígeno.\n\n<italic>Resumen:</italic> La fotosíntesis es el proceso mediante el cual las plantas generan energía y oxígeno a partir de la luz solar, el agua y el dióxido de carbono.',
          textEnd: 'El resumen conserva las ideas principales, pero con un texto más breve y directo.'
        },
        activity: {
          type: 'input',
          title: 'Actividad: Resume con claridad',
          instructions: 'Lee el siguiente párrafo y redacta un resumen breve con las ideas más importantes.',
          content: '<italic>La contaminación del aire es causada por las emisiones de fábricas, automóviles y quema de residuos. Esta situación provoca enfermedades respiratorias y afecta especialmente a personas vulnerables como niños y ancianos.</italic>'
        }
      }                  
    ],

    summary: [
      'Existen múltiples herramientas gráficas para organizar y jerarquizar información, como mapas mentales, conceptuales, diagramas y tablas.',
      'Los conectores, encabezados, viñetas y estilos de texto permiten estructurar contenido de manera clara.',
      'Las técnicas de resumen y síntesis ayudan a reducir y reorganizar información para facilitar su comprensión.',
      'Estas herramientas hacen más accesible el aprendizaje y permiten construir textos e ideas bien organizadas.'
    ]    
  },
  {
    id: '5',
    title: 'Unidad 5: Análisis crítico de la clasificación y jerarquización de información',
    topics: [
      {title: 'Coherencia y orden lógico:',
        subtopics: [
          'Evaluación de la relación entre las categorías.',
          'Revisión del orden de las secciones temáticas.'
        ]
      },
      {title: 'Claridad y precisión:',
        subtopics: [
          'Identificación de información redundante o contradictoria.',
          'Eliminación de detalles innecesarios.'
        ]
      },
      {title: 'Efectividad de la jerarquización:',
        subtopics: [
          'Evaluación de si la información más importante está destacada correctamente.',
          'Análisis de la relación entre los niveles de información.'
        ]
      }
    ],
    introduction: 'En esta unidad pondrás en práctica todo lo aprendido a lo largo del módulo, evaluando críticamente la organización de textos y aplicando mejoras concretas. Aprenderás a detectar errores comunes en la clasificación y jerarquización de contenidos, y a reestructurar la información para que sea más clara, coherente y efectiva.',

    themes: [
      {
        id: '5.1',
        title: 'Coherencia y orden lógico',
        text: 'Una buena organización temática requiere que las categorías estén relacionadas y que el orden en que se presentan sea comprensible.\n\n<subheading>Indicadores de coherencia:</subheading>\n<list>Las ideas están conectadas por un hilo conductor.</list><list>No se salta abruptamente de un tema a otro.</list><list>Las secciones siguen un orden lógico (general a específico, cronológico, causa-efecto, etc.).</list>',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se presenta un orden incoherente:',
          content: '1. Consecuencias del cambio climático\n2. Qué es el cambio climático\n3. Acciones para prevenirlo',
          textEnd: 'El orden correcto sería comenzar con la definición, luego las consecuencias, y finalmente las acciones. Reorganizar este contenido mejora la comprensión del lector.'
        },
        activity: {
          type: 'order-text',
          title: 'Actividad: Reordena con lógica',
          instructions: 'Ordena las siguientes secciones para que sigan una secuencia coherente.',
          content: [
            { id: 'A', text: 'Soluciones al problema del desempleo' },
            { id: 'B', text: 'Definición y tipos de desempleo' },
            { id: 'C', text: 'Consecuencias del desempleo' }
          ],
          correctOrder: ['B', 'C', 'A']
        }
      },
      {
        id: '5.2',
        title: 'Claridad y precisión',
        text: 'A veces los textos incluyen información repetitiva o que no aporta al tema principal. Identificar y eliminar estas partes mejora notablemente la claridad.\n\n<subheading>Errores comunes:</subheading><list>Repetición de la misma idea con distintas palabras.</list><list>Introducción de datos irrelevantes.</list><list>Contradicciones dentro del mismo texto.</list>',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un fragmento con redundancia:',
          content: '<italic>El sol es una estrella que emite luz. El sol brilla porque es una estrella muy luminosa. La luz del sol ilumina la Tierra.</italic>',
          textEnd: 'Este fragmento repite innecesariamente la idea de que el sol emite luz. Un texto más claro sería:\n<italic><subheading>El sol, una estrella luminosa, emite la luz que ilumina la Tierra.</subheading></italic>\nEsta versión conserva la idea central eliminando redundancias.'
        },
        activity: {
          type: 'input',
          title: 'Actividad: Mejora el texto',
          instructions: 'Reescribe el siguiente párrafo eliminando las ideas redundantes y manteniendo la claridad.',
          content: '<italic>El agua es necesaria para la vida. Todas las formas de vida necesitan agua para vivir. Sin agua, los seres vivos no pueden sobrevivir.</italic>'
        }
      },
      {
        id: '5.3',
        title: 'Efectividad de la jerarquización',
        text: 'Una jerarquización efectiva permite que la información más importante sea fácil de identificar, y que las ideas secundarias y detalles estén bien organizados.\n\n<subheading>Preguntas clave para evaluar la jerarquía:</subheading>\n<list>¿La idea principal está claramente destacada?</list><list>¿Las ideas secundarias aportan información relevante?</list><list>¿Los ejemplos refuerzan las ideas anteriores?</list>',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se observa una jerarquización clara:',
          content: '<italic><subheading>Tema: Energía\n\n- Idea principal: La energía es indispensable para el funcionamiento de la sociedad.\n    - Idea secundaria: Existen fuentes renovables y no renovables.\n        - Detalle: La energía solar es una fuente renovable limpia y abundante.</subheading></italic>',
          textEnd: 'Este esquema permite ver cómo se organiza la información desde lo más general a lo más específico.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Evalúa la jerarquía',
          instructions: 'Analiza el siguiente esquema y marca si cumple con una jerarquización efectiva.',
          content: [
            {
              question: '1. Las frutas son alimentos importantes.\n2. Las frutas contienen vitaminas y minerales.\n3. Las frutas como la naranja y el kiwi tienen vitamina C.',
              options: ['a) Sí', 'b) No'],
              correctAnswer: 'a) Sí'
            }
          ]
        },
      },
      {
        id: '5.4',
        title: '',
        text: '',
        activity: {
          type: 'input',
          title: 'Actividad: Reestructura un texto',
          instructions: 'Lee el siguiente texto y reorganízalo corrigiendo errores en la clasificación, jerarquización y orden temático.',
          content: '<italic>Los océanos cubren la mayor parte del planeta. La contaminación plástica es uno de los principales problemas. Algunos océanos tienen una gran biodiversidad. La educación ambiental puede ayudar a resolver estos problemas. Hay diferentes tipos de vida marina como peces, corales y mamíferos.</italic>'
        }
      }                  
    ]
  }
]