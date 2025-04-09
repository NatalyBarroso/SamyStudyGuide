import { Unit } from "@/core/domain/entities/Unit";

export const module4: readonly Unit[] = [
  {
    id: '1',
    title: 'Unidad 1: Formas de respuesta en un cuestionario',
    topics: [
      { title: 'Tipos de respuestas en un cuestionario.' },
      {
        title: 'Preguntas cerradas:',
        subtopics: [
          'Opción múltiple.',
          'Respuesta de sí o no.',
          'Escalas de valoración (Likert).',
          'Respuestas de selección (verdadero/falso).'
        ]
      },
      {
        title: 'Preguntas abiertas:',
        subtopics: [
          'Respuesta libre.',
          'Opinión personal.'
        ]
      },
      { title: 'Ventajas y desventajas de preguntas cerradas y abiertas.' }
    ],
    introduction: 'En esta unidad, el estudiante aprenderá a identificar las diferentes formas de respuesta utilizadas en un cuestionario, así como las ventajas y desventajas de cada tipo de pregunta. Comprender estas diferencias es esencial para diseñar instrumentos que recojan información precisa, pertinente y adecuada según los objetivos planteados.',

    themes: [
      {
        id: '1.1',
        title: 'Tipos de respuestas en un cuestionario',
        text: 'En cualquier cuestionario, el tipo de respuesta esperada influye directamente en la forma de analizar los datos recolectados. Existen dos grandes grupos:\n\n<list>Preguntas cerradas: El encuestado elige entre un conjunto limitado de respuestas.\n<list>Preguntas abiertas: El encuestado responde con sus propias palabras, sin opciones predefinidas.',
        note: '<bold>Punto importante:</bold> Las preguntas cerradas son ideales para obtener datos rápidos y cuantificables. Las abiertas, para explorar ideas, opiniones o experiencias con mayor profundidad.'

      },

      {
        id: "1.2",
        title: "Preguntas cerradas",
        text: "Permiten estructurar las respuestas para que sean fácilmente comparables y cuantificables. Se utilizan frecuentemente en encuestas, formularios de opinión, evaluaciones rápidas, entre otros.",
        subthemes: [
          {
            id: "1.2.1",
            title: "Opción múltiple",
            text: "El encuestado debe elegir una (o varias) opciones entre alternativas prediseñadas.",
            example: {
              type: "list",
              textStart: "Ejemplo: ¿Cuál de los siguientes medios utilizas más para informarte?",
              content: [
                "a) Redes sociales",
                "b) Periódicos digitales",
                "c) Radio",
                "d) Televisión"
              ],
              textEnd: "Esta pregunta permite comparar fácilmente las respuestas entre todos los encuestados. Sin embargo, si las opciones no son suficientemente amplias, puede limitar la expresión del participante."
            },
            activity: {
              type: "multiple-choice",
              title: "Actividad: Elige la opción correcta",
              instructions: "¿Cuál de las siguientes preguntas es de opción múltiple?",
              content: [
                {
                  question: "",
                  options: [
                    "a) ¿Qué piensas sobre el uso de tecnología en el aula?",
                    "b) Selecciona tu aplicación de estudio favorita: a) Duolingo, b) Quizlet, c) Khan Academy, d) Otra.",
                    "c) ¿Te gusta estudiar en grupo? (Sí / No)"
                  ],
                  correctAnswer: "b) Selecciona tu aplicación de estudio favorita: a) Duolingo, b) Quizlet, c) Khan Academy, d) Otra."
                }
              ]
            }
          },
          {
            id: "1.2.2",
            title: "Respuesta de sí o no",
            text: "Se responde con una afirmación o negación simple.",
            example: {
              type: "list",
              textStart: "Ejemplo: ¿Te gusta estudiar con música?",
              content: ["Sí", "No"],
              textEnd: "Son útiles para evaluar la presencia o ausencia de una condición específica. No permiten explorar los motivos o causas de la respuesta."
            },
            note: '<bold>Punto importante:</bold> Es ideal cuando se requiere una respuesta clara, sin matices.'
          },
          {
            id: '1.2.3',
            title: 'Escalas de valoración (Likert)',
            text: 'Permiten medir el grado de acuerdo, satisfacción, frecuencia, etc.\n\n<subheading>Ejemplo: Estoy satisfecho con el material de estudio.\n<list>Totalmente en desacuerdo\n<list>En desacuerdo\n<list>Ni de acuerdo ni en desacuerdo\n<list>De acuerdo\n<list>Totalmente de acuerdo\n\nEstas escalas aportan mayor profundidad que un "sí o no", sin requerir una respuesta abierta. Son muy utilizadas en cuestionarios de opinión.',
            example: {
              type: 'table',
              textStart: 'Ventajas de la escala Likert',
              content: [
                ['Ventaja', 'Descripción'],
                ['Versatilidad', 'Se puede aplicar a opiniones, actitudes y comportamientos.'],
                ['Comparabilidad', 'Facilita el análisis cuantitativo de tendencias.']
              ],
              textEnd: ''
            }
          },
          {
            id: '1.2.4',
            title: 'Verdadero/Falso',
            text: 'Evaluación directa de un enunciado con dos opciones posibles.',
            example: {
              type: 'list',
              textStart: 'Ejemplo: El agua hierve a 90ºC.',
              content: [
                'Verdadero',
                'Falso'
              ],
              textEnd: 'Se usan comúnmente en pruebas de conocimiento. Su simplicidad puede ser tanto una ventaja como una limitación, ya que no permite conocer el razonamiento del encuestado.'
            },

            activity: {
              type: 'multiple-choice',
              title: 'Actividad: Identifica el tipo',
              instructions: '¿Qué tipo de pregunta es esta?',
              content: [
                {
                  question: '¿Aprendiste algo nuevo hoy?',
                  options: [
                    'a) Opcion múltiple',
                    'b) Sí o no',
                    'c) Escala Likert',
                    'd) Abierta'
                  ],
                  correctAnswer: 'b) Sí o no'
                }
              ]
            }
          }
        ],
      },
      {
        id: '1.3',
        title: 'Preguntas abiertas',
        text: 'Son útiles cuando se busca obtener información más rica, descripción de experiencias o interpretaciones personales.',

        subthemes: [
          {
            id: '1.3.1',
            title: 'Respuesta libre',
            text: '',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '¿Qué aspectos mejorarías del curso actual?',
              textEnd: 'El encuestado puede abordar libremente el tema, sin restricciones. Esto permite descubrir ideas que no se habían previsto al diseñar el cuestionario.'
            },
            note: "<bold>Punto importante:</bold> La codificación de respuestas abiertas suele requerir más tiempo y juicio interpretativo."
          },
          {
            id: '1.3.2',
            title: 'Opinión personal',
            text: '',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: 'En tu opinión, ¿cuál es el papel de la tecnología en la educación actual?',
              textEnd: 'Este tipo de preguntas promueve la argumentación, lo que es especialmente valioso en contextos formativos o de investigación cualitativa.'
            },
            activity: {
              type: 'input',
              title: 'Actividad: Redacción guiada',
              instructions: 'Escribe una breve opinión sobre el siguiente enunciado:',
              content: '"Los cuestionarios con preguntas cerradas son más efectivos que los de preguntas abiertas.”'
            }
          }
        ]
      },
      {
        id: '1.4',
        title: 'Comparativa: Ventajas y desventajas',
        text: '',
        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Tipo de pregunta', 'Ventajas', 'Desventajas'],
            ['Cerradas', 'Fácil de responder, comparar y analizar estadísticamente.', 'Limitan la expresión personal y pueden inducir respuestas.'],
            ['Abiertas', 'Permiten respuestas detalladas y personales.', 'Requieren más tiempo para responder y analizar.']
          ],
          textEnd: ''
        },
        note: '<bold>Consejo práctico:</bold> Combina ambos tipos de preguntas para obtener datos tanto cuantitativos como cualitativos.'
      }      
    ],

    summary: [
      'Existen dos grandes tipos de respuestas en los cuestionarios: cerradas y abiertas.',
      'Las preguntas cerradas incluyen: opción múltiple, sí o no, escala Likert y verdadero/falso.',
      'Las preguntas abiertas se dividen en respuesta libre y opinión personal.',
      'Las preguntas cerradas permiten un análisis más rápido y cuantificable, pero limitan la expresión.',
      'Las preguntas abiertas permiten explorar ideas y argumentos, aunque son más difíciles de analizar.',
      'Combinar ambos tipos puede mejorar la calidad y profundidad de los cuestionarios.',
      'Diseñar cuestionarios efectivos requiere elegir la forma de respuesta adecuada según el objetivo de cada pregunta.'
    ]    
  },
  {
    id: '2',
    title: 'Unidad 2: Elaboración de preguntas efectivas',
    topics: [
      {title: 'Propósito del cuestionario (recopilar información, medir conocimientos, evaluar opiniones).'},
      {title: 'Uso de lenguaje claro y directo.'},
      {title: 'Redacción de preguntas objetivas y no sesgadas.'},
      {title: 'Evitar preguntas dobles o confusas.'},
      {title: 'Estructura de una pregunta bien formulada.'}
    ],
    introduction: 'En esta unidad, el estudiante aprenderá a redactar preguntas claras y directas, adaptando el tipo de pregunta al propósito del cuestionario. Además, se analizará el uso de un lenguaje preciso y la importancia de evitar ambigüedades o confusiones al formular preguntas. Comprender estos aspectos es clave para asegurar la calidad de la información recolectada.',

    themes: [
      {
        id: '2.1',
        title: 'Propósito del cuestionario',
        text: 'Antes de escribir cualquier pregunta, es fundamental definir cuál es el objetivo del cuestionario. Esto guiará el tipo de preguntas que se deben utilizar y el lenguaje que se empleará.\n\n<subheading>Principales propósitos:\n<list>Recopilar información: Se buscan datos específicos sobre personas, hechos o situaciones.\n<list>Medir conocimientos: Se evalúa lo que el encuestado sabe sobre un tema determinado.\n<list>Evaluar opiniones o actitudes: Se exploran percepciones, creencias o valoraciones personales.',
      
        example: {
          type: 'list',
          textStart: 'A continuación, vemos ejemplos de preguntas según el propósito del cuestionario. Cada una refleja cómo se adapta el tipo de pregunta al objetivo buscado:',
          content: [
            'Recopilar información: ¿Cuántas horas al día usas internet para estudiar?',
            'Medir conocimientos: ¿Qué es una hipótesis?',
            'Evaluar opiniones: En tu opinión, ¿es efectiva la educación virtual?'
          ],
          textEnd: 'La primera pregunta busca un dato cuantificable; la segunda explora el conocimiento del encuestado; la tercera indaga en su percepción personal.'
        },
      
        activity: {
          type: 'classify-text',
          title: 'Actividad: Relaciona el propósito',
          instructions: 'Relaciona cada pregunta con su propósito principal:',
          options: [
            'a) Medir conocimientos',
            'b) Evaluar opiniones',
            'c) Recopilar información'
          ],
          content: [
            {
              text: '¿Cuáles son los elementos de una investigación científica?',
              correctAnswer: 'a) Medir conocimientos'
            },
            {
              text: '¿Estás de acuerdo con que los exámenes estandarizados reflejan el aprendizaje real?',
              correctAnswer: 'b) Evaluar opiniones'
            },
            {
              text: '¿Cuántos libros leíste el mes pasado?',
              correctAnswer: 'c) Recopilar información'
            }
          ]
        }
      },
      {
        id: '2.2',
        title: 'Uso de lenguaje claro y directo',
        text: 'Un buen cuestionario se caracteriza por su claridad. Las preguntas deben ser fáciles de entender para evitar confusiones o malas interpretaciones.\n\nVeamos un ejemplo de cómo una pregunta confusa puede volverse clara con solo ajustar el lenguaje.',
      
        example: {
          type: 'list',
          textStart: 'Pregunta poco clara: ¿Cuál es tu percepción sobre los aspectos múltiples de la metodología utilizada?\n\n*(Lenguaje abstracto y difícil de interpretar.)*\n\nPregunta clara:',
          content: ['¿Te parecieron claros los pasos seguidos en la metodología del curso?\n\n*(Lenguaje más directo y concreto.)*'],
          textEnd: 'La primera pregunta utiliza términos vagos y técnicos, mientras que la segunda es más específica y comprensible para cualquier estudiante.'
        },
      
        activity: {
          type: 'input',
          title: 'Actividad: Mejora la pregunta',
          instructions: 'Reescribe esta pregunta para que sea más clara y directa:',
          content: '“¿Consideras que, en cierta medida, el proceso de enseñanza-aprendizaje se ve afectado por las condiciones tecnológicas y contextuales en las que se desarrolla la actividad educativa?”'
        },
      
        note: '<bold>Recomendaciones prácticas:</bold>\n\n- Usa palabras comunes y accesibles.\n- Evita tecnicismos innecesarios.\n- No incluyas doble negación o frases complicadas.'
      },
      {
        id: '2.3',
        title: 'Redacción de preguntas objetivas y no sesgadas',
        text: 'Las preguntas deben estar formuladas de forma neutral, sin inducir respuestas. El sesgo puede alterar la validez de los resultados.\n\nObserva el siguiente ejemplo. Primero se presenta una pregunta que sugiere una respuesta positiva y luego una versión más neutral que invita a una opinión libre.',
      
        example: {
          type: 'list',
          textStart: 'Con sesgo: ¿No te parece que el nuevo sistema educativo es mejor que el anterior?\n\nObjetiva:',
          content: ['¿Cómo compararías el nuevo sistema educativo con el anterior?'],
          textEnd: 'La primera pregunta induce una respuesta afirmativa al usar “mejor”, mientras que la segunda invita al encuestado a dar su opinión sin condicionamientos.'
        },
      
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Detecta el sesgo',
          instructions: 'Marca la pregunta que está redactada de forma objetiva:',
          content: [
            {
              question: '',
              options: [
                'a) ¿Estás de acuerdo con el excelente desempeño del docente en el curso?',
                'b) ¿Cómo valorarías el desempeño del docente en el curso?',
                'c) ¿No crees que el profesor fue muy bueno?'
              ],
              correctAnswer: 'b) ¿Cómo valorarías el desempeño del docente en el curso?'
            }
          ]
        },
        note: 'Consejo: Evita adjetivos que valoren, como "excelente", "terrible", "eficaz", etc.'
      },
      {
        id: '2.4',
        title: 'Evitar preguntas dobles o confusas',
        text: 'Una pregunta doble es aquella que formula dos preguntas en una sola. Esto dificulta la respuesta clara y precisa.\n\nEl siguiente ejemplo muestra cómo una pregunta doble puede dividirse para mayor claridad.',
      
        example: {
          type: 'list',
          textStart: 'Incorrecta: ¿Te gusta la plataforma y la metodología del curso?\n\nCorregida:',
          content: [
            '¿Te gusta la plataforma del curso?',
            '¿Te gusta la metodología del curso?'
          ],
          textEnd: 'La versión incorrecta combina dos temas, lo que puede confundir al encuestado si tiene opiniones distintas sobre cada uno. Separarlas mejora la claridad.'
        },
      
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Señala la pregunta doble',
          instructions: '¿Cuál de estas preguntas es doble y debe corregirse?',
          content: [
            {
              question: '',
              options: [
                'a) ¿Qué opinas del contenido del curso?',
                'b) ¿Te pareció clara la explicación y fácil la evaluación?',
                'c) ¿Crees que debería usarse más la gamificación en clase?'
              ],
              correctAnswer: 'b) ¿Te pareció clara la explicación y fácil la evaluación?'
            }
          ]
        },
      
        note: '<bold>Recomendaciones:</bold>\n\n- Divide las preguntas si tocan temas distintos.\n- Revisa que solo haya un verbo principal por pregunta.'
      },
      {
        id: '2.5',
        title: 'Estructura de una pregunta bien formulada',
        text: 'Una buena pregunta debe tener:\n\n<list>Claridad en el lenguaje\n<list>Un solo enfoque temático\n<list>Objetividad\n<list>Adecuación al propósito del cuestionario',
      
        example: {
          type: 'text',
          textStart: 'Observa este ejemplo que reúne todos los elementos anteriores:',
          content: '¿Consideras que los recursos digitales utilizados en el curso facilitaron tu aprendizaje?',
          textEnd: 'Esta pregunta es clara, se enfoca en un solo tema, no orienta la respuesta y se vincula directamente con el objetivo de evaluar una experiencia educativa.'
        },
      
        activity: {
          type: 'classify-text',
          title: 'Actividad: Revisión de calidad',
          instructions: 'A continuación se presentan tres preguntas. Marca cuáles están bien formuladas y cuál necesita corrección:',
          options: ['Bien formulada', 'Necesita corrección'],
          content: [
            {
              text: '¿Estás de acuerdo con que el curso fue excelente y los materiales muy completos?',
              correctAnswer: 'Necesita corrección'
            },
            {
              text: '¿Qué sugerencias tienes para mejorar la dinámica del curso?',
              correctAnswer: 'Bien formulada'
            },
            {
              text: '¿El uso de videos te ayudó a entender mejor los temas?',
              correctAnswer: 'Bien formulada'
            }
          ]
        }
      }                  
    ],

    summary: [
      'Un buen cuestionario comienza con la definición clara de su propósito.',
      'El lenguaje debe ser claro, directo y libre de tecnicismos innecesarios.',
      'Las preguntas deben ser objetivas, sin inducir respuestas.',
      'Es importante evitar preguntas dobles o confusas.',
      'Una pregunta bien formulada es clara, objetiva y se enfoca en un solo tema relevante.'
    ]    
  },
  {
    id: '3',
    title: 'Unidad 3: Organización y estructura de un cuestionario',
    topics: [
      {title: 'Orden lógico de las preguntas (de lo general a lo específico).'},
      {title: 'Transiciones entre secciones.'},
      {title: 'Uso de instrucciones claras para el encuestado.'},
      {title: 'Longitud y tiempo estimado para completar el cuestionario.'},
      {title: 'Importancia de una estructura sencilla y clara.'}
    ],
    introduction: 'En esta unidad, el estudiante aprenderá a organizar un cuestionario de manera lógica y coherente, considerando el orden de las preguntas, la progresión temática y la facilidad de respuesta.',

    themes: [
      {
        id: '3.1',
        title: 'Orden lógico de las preguntas',
        text: 'El orden en que se presentan las preguntas influye directamente en la disposición del encuestado para responder. Generalmente, se recomienda avanzar de lo general a lo específico, permitiendo al usuario familiarizarse con el tema antes de responder detalles más complejos.',
      
        example: {
          type: 'list',
          textStart: 'Ejemplo:',
          content: [
            '1. ¿Con qué frecuencia utilizas herramientas digitales en tu vida diaria?',
            '2. ¿Qué herramientas digitales usas en tus estudios?',
            '3. ¿Consideras que las herramientas digitales mejoran tu aprendizaje en clase?'
          ],
          textEnd: 'Este orden lleva al encuestado desde una visión general hasta una valoración concreta, facilitando una mejor comprensión y continuidad.'
        },
      
        activity: {
          type: 'order-text',
          title: 'Actividad: Ordena las preguntas',
          instructions: 'Ordena las siguientes preguntas de forma lógica:',
          content: [
            { id: 'c', text: '¿Qué recursos tecnológicos usas más en tus clases?' },
            { id: 'b', text: '¿Has usado videos educativos en los últimos meses?' },
            { id: 'a', text: '¿Qué piensas sobre el uso de recursos audiovisuales en el aula?' }
          ],
          correctOrder: ['c', 'b', 'a']
        }
      },
      {
        id: '3.2',
        title: 'Transiciones entre secciones',
        text: 'Dividir el cuestionario en secciones temáticas mejora la organización y comprensión del contenido. Las transiciones entre secciones ayudan a guiar al encuestado y a preparar su enfoque mental para un nuevo tema.',
      
        example: {
          type: 'text',
          textStart: 'Ejemplo de transición:',
          content: '“Ahora te haremos algunas preguntas sobre tu experiencia con el uso de plataformas educativas.”',
          textEnd: 'Esta frase indica que se inicia una nueva sección, lo cual ayuda al encuestado a cambiar su foco de atención y mantener el hilo del cuestionario.'
        },
      
        activity: undefined,
      
        note: '<bold>Consejo práctico:</bold> Puedes usar títulos o frases introductorias para dividir temas como "Datos personales", "Hábitos de estudio" o "Opiniones sobre el curso".'
      },
      {
        id: '3.3',
        title: 'Uso de instrucciones claras para el encuestado',
        text: 'Es fundamental incluir instrucciones que indiquen cómo debe responderse una sección o pregunta específica. Esto evita confusión y errores en las respuestas.',
      
        example: {
          type: 'text',
          textStart: 'Ejemplo de instrucción:',
          content: '“Selecciona una sola opción en cada pregunta.”',
          textEnd: 'Este tipo de indicaciones ayuda a estandarizar las respuestas y mejorar la calidad de los datos obtenidos.'
        },
      
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Identifica la instrucción adecuada',
          instructions: '¿Cuál de las siguientes frases funcionaría mejor como instrucción para una sección con escala de valoración?',
          content: [
            {
              question: '',
              options: [
                'a) Marca lo que prefieras.',
                'b) Escribe una reflexión sobre cada tema.',
                'c) Indica tu nivel de acuerdo con cada afirmación, del 1 (totalmente en desacuerdo) al 5 (totalmente de acuerdo).'
              ],
              correctAnswer: 'c) Indica tu nivel de acuerdo con cada afirmación, del 1 (totalmente en desacuerdo) al 5 (totalmente de acuerdo).'
            }
          ]
        }
      },
      {
        id: '3.4',
        title: 'Longitud y tiempo estimado para completar el cuestionario',
        text: 'Un cuestionario demasiado largo puede generar fatiga o abandono. Por ello, es importante estimar el tiempo de respuesta y mantener solo las preguntas necesarias.',
      
        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: '“Este cuestionario tomará aproximadamente 10 minutos.”',
          textEnd: 'Informar al encuestado sobre la duración estimada le ayuda a organizar su tiempo y reduce la ansiedad durante la respuesta.'
        },
      
        activity: undefined,
      
        note: '<bold>Punto importante:</bold> Un cuestionario breve pero bien estructurado puede ser más efectivo que uno extenso y desorganizado.'
      },
      {
        id: '3.5',
        title: 'Importancia de una estructura sencilla y clara',
        text: 'Un diseño limpio, coherente y simple mejora la experiencia del encuestado. Se recomienda evitar sobrecargar con preguntas largas o secciones mal organizadas.',
      
        example: {
          type: 'list',
          textStart: 'Ejemplo positivo:',
          content: [
            'Sección 1: Información general',
            'Sección 2: Hábitos de estudio',
            'Sección 3: Opiniones sobre el curso'
          ],
          textEnd: 'Esta división clara facilita la navegación y permite al encuestado anticipar el tipo de contenido que encontrará.'
        },
      
        activity: undefined,
      
        note: '<bold>Consejo:</bold> Utiliza tipografía legible, numeración coherente y espacios adecuados entre preguntas.'
      }                              
    ],

    summary: [
      'Las preguntas deben organizarse de forma lógica, de lo general a lo específico.',
      'Las transiciones entre secciones orientan al encuestado en el cambio de tema.',
      'Es clave usar instrucciones claras para evitar confusiones.',
      'La longitud del cuestionario debe ser razonable, con tiempo estimado de respuesta.',
      'Una estructura sencilla y coherente mejora la comprensión y disposición para responder.'
    ]    
  },
  {
    id: '4',
    title: 'Unidad 4: Evaluación y análisis de las respuestas',
    topics: [
      {title: 'Interpretación de respuestas cerradas (análisis cuantitativo).'},
      {title: 'Interpretación de respuestas abiertas (análisis cualitativo).'},
      {title: 'Identificación de patrones y tendencias en las respuestas.'},
      {title: 'Evaluación de la efectividad de las preguntas.'},
      {title: 'Revisión y mejora del cuestionario en función de los resultados obtenidos.'}
    ],
    introduction: 'En esta unidad, el estudiante aprenderá a interpretar las respuestas obtenidas en un cuestionario y a evaluar la efectividad de las preguntas formuladas en función de los resultados. Comprender cómo analizar los datos recolectados es esencial para sacar conclusiones válidas y mejorar futuros instrumentos de evaluación.',

    themes: [
      {
        id: '4.1',
        title: 'Interpretación de respuestas cerradas (análisis cuantitativo)',
        text: 'Las respuestas cerradas generan datos que pueden contarse y representarse numéricamente, lo que facilita el análisis estadístico.',
      
        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: '“En una escala de Likert, el 60% de los encuestados respondió ‘De acuerdo’ a la afirmación: ‘Me siento motivado en clase’.”',
          textEnd: 'Este tipo de análisis permite identificar qué tan frecuentes son ciertas respuestas y compararlas entre grupos.'
        },
      
        activity: {
          type: 'input',
          title: 'Actividad: Interpreta los datos',
          instructions: 'El 75% de los estudiantes marcó “Sí” en la pregunta: “¿Te gustaría usar más tecnología en clase?”',
          content: '¿Qué podrías concluir a partir de esta información?'
        },
      
        note: '<bold>Herramientas útiles:</bold>\n\n- Tablas de frecuencia\n- Gráficos de barras o pastel\n- Promedios o porcentajes'
      },  
      {
        id: '4.2',
        title: 'Interpretación de respuestas abiertas (análisis cualitativo)',
        text: 'Las respuestas abiertas requieren una lectura e interpretación más profunda. En lugar de contar opciones, se busca comprender el contenido y significado de lo que expresa el encuestado.',
      
        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: '“Siento que las clases virtuales me aíslan de mis compañeros y eso afecta mi motivación.”',
          textEnd: 'Esta respuesta no se puede cuantificar directamente, pero ofrece información rica que permite entender emociones, percepciones o propuestas.'
        },
      
        activity: undefined,
      
        note: '<bold>Estrategias recomendadas:</bold>\n\n- Lectura repetida y detallada\n- Subrayado de ideas clave\n- Categorización de respuestas por temas o sentimientos\n\nConsejo práctico: Puedes usar tablas para agrupar respuestas similares bajo categorías como “críticas”, “sugerencias” o “elogios”.'
      },
      {
        id: '4.3',
        title: 'Identificación de patrones y tendencias en las respuestas',
        text: 'Una parte esencial del análisis es detectar regularidades en los datos. Esto puede revelar comportamientos o percepciones comunes dentro de un grupo.',
      
        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: '“Si muchas personas mencionan que el tiempo de clase es ‘muy corto’, aunque lo expresen de distintas formas, puede detectarse una tendencia general.”',
          textEnd: 'Identificar patrones ayuda a tomar decisiones informadas para mejorar procesos o herramientas.'
        },
      
        activity: {
          type: 'input',
          title: 'Actividad: Detecta la tendencia',
          instructions: 'Lee las siguientes respuestas abiertas y responde: ¿Qué patrón común puedes identificar?',
          content: '- “Me cuesta concentrarme en las clases virtuales.”\n- “Las clases virtuales no me motivan tanto como las presenciales.”\n- “Extraño el contacto con mis compañeros en clases presenciales.”'
        }
      },
      {
        id: '4.4',
        title: 'Evaluación de la efectividad de las preguntas',
        text: 'No todas las preguntas funcionan igual de bien. Evaluar su efectividad permite mejorar la calidad del cuestionario.\n\n<subheading>Aspectos a evaluar:\n<list>¿La pregunta obtuvo respuestas completas y útiles?\n<list>¿Los encuestados la entendieron con claridad?\n<list>¿Las respuestas fueron variadas o repetitivas?',
      
        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: '“Una pregunta como: ¿Qué opinas de la educación? puede generar respuestas muy vagas. En cambio: ¿Qué aspectos mejorarías en tu experiencia educativa actual? es más específica y útil.”',
          textEnd: 'Las preguntas demasiado generales o ambiguas dificultan el análisis y deben ser reformuladas.'
        },
      
        activity: undefined
      },
      {
        id: '4.5',
        title: 'Revisión y mejora del cuestionario en función de los resultados obtenidos',
        text: 'Una vez interpretadas las respuestas, es recomendable ajustar el cuestionario para futuras aplicaciones. Este paso mejora la calidad del instrumento con base en la experiencia previa.',
      
        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: '“Si muchas personas no entendieron una escala de valoración, en la siguiente versión se puede incluir una instrucción más clara o cambiar el formato.”',
          textEnd: ''
        },
      
        activity: {
          type: 'input',
          title: 'Actividad: Mejora una pregunta',
          instructions: 'Analiza esta pregunta y propón una versión más efectiva:\n\n“¿Te gusta aprender?”',
          content: ''
        },
      
        note: '<bold>Recomendaciones:</bold>\n\n- Elimina preguntas irrelevantes o que generaron confusión\n- Reformula las que no aportaron datos útiles\n- Agrega preguntas nuevas si faltó información importante'
      }                    
    ],

    summary: [
      'Las respuestas cerradas se analizan con métodos cuantitativos (porcentajes, gráficos).',
      'Las respuestas abiertas requieren un análisis cualitativo (temas, emociones, ideas).',
      'Detectar patrones permite interpretar mejor los resultados.',
      'Es importante evaluar si las preguntas realmente funcionaron como se esperaba.',
      'El cuestionario debe revisarse y mejorarse con base en los resultados obtenidos.'
    ]    
  }
]