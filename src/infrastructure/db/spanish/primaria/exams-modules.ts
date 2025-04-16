import { Exam } from "@/core/domain/entities/Exam";

export const exams_modules: readonly Exam[] = [
  {
    id: '1.1',
    title: 'Evaluación Final: Recuento Histórico',
    description: 'Esta evaluación tiene como objetivo comprobar los conocimientos adquiridos a lo largo del módulo "Recuento Histórico", abarcando los contenidos de las cinco unidades trabajadas.',
    sections: [
      {
        id: '1',
        title: 'Sección 1: Conceptos fundamentales del recuento histórico',
        activities: [
          {
            type: 'multiple-choice',
            title: '',
            instructions: '',
            content: [
              {
                question: '1. ¿Cuál es el propósito principal de un recuento histórico?',
                options: [
                  'a) Expresar opiniones sobre eventos pasados.',
                  'b) Relatar hechos históricos de manera cronológica y objetiva.',
                  'c) Persuadir al lector sobre una interpretación específica de la historia.',
                  'd) Narrar historias ficticias basadas en hechos reales.'
                ],
                correctAnswer: 'b) Relatar hechos históricos de manera cronológica y objetiva.'
              },
              {
                question: '2. ¿Cuál de las siguientes opciones NO es una característica de un recuento histórico?',
                options: [
                  'a) Uso de lenguaje formal.',
                  'b) Inclusión de juicios personales.',
                  'c) Uso de fuentes confiables.',
                  'd) Orden cronológico de los hechos.'
                ],
                correctAnswer: 'b) Inclusión de juicios personales.'
              },
              {
                question: '3. Completa la siguiente afirmación: "Para garantizar la objetividad en un recuento histórico, es fundamental..."',
                options: [
                  'a) Presentar solo una versión de los hechos.',
                  'b) Basarse en opiniones de testigos.',
                  'c) Utilizar fuentes verificables y evitar interpretaciones subjetivas.',
                  'd) Incluir anécdotas personales del autor.'
                ]
              }
            ]
          }
        ]
      },

      {
        id: '2',
        title: 'Sección 2: Estructura del recuento histórico',
        activities: [
          {
            type: 'multiple-choice',
            title: '',
            instructions: '',
            content: [
              {
                question: '4. ¿Cuál es la función principal de la introducción en un recuento histórico?',
                options: [
                  'a) Presentar el contexto y la importancia del evento.',
                  'b) Narrar los acontecimientos en orden cronológico.',
                  'c) Reflexionar sobre las consecuencias del evento.',
                  'd) Describir en detalle cada suceso histórico.'
                ],
                correctAnswer: 'a) Presentar el contexto y la importancia del evento.'
              },
            ]
          },
          {
            type: 'order-text',
            title: '5. Ordena correctamente las partes de un recuento histórico arrastrando los términos a su posición correcta:',
            instructions: '',
            content: [
              { id: '1', text: 'Desarrollo' },
              { id: '2', text: 'Conclusión' },
              { id: '3', text: 'Introducción' }
            ],
            correctOrder: ['3', '1', '2']
          },
          {
            type: 'multiple-choice',
            title: '',
            instructions: '',
            content: [
              {
                question: '6. ¿Cuál de las siguientes opciones describe mejor el desarrollo de un recuento histórico?',
                options: [
                  'a) Resume los efectos a largo plazo del evento.',
                  'b) Narra los hechos en orden cronológico, explicando causas y consecuencias inmediatas.',
                  'c) Presenta el contexto general del evento sin detallar hechos específicos.',
                  'd) Expresa la opinión del autor sobre la relevancia del suceso.'
                ],
                correctAnswer: 'b) Narra los hechos en orden cronológico, explicando causas y consecuencias inmediatas.'
              },
            ]
          }
        ]
      },
      {
        id: '3',
        title: 'Sección 3: Orden cronológico y uso del tiempo en el recuento histórico',
        activities: [
          {
            type: 'multiple-choice',
            title: '',
            instructions: '',
            content: [
              {
                question: '7. ¿Por qué es importante el orden cronológico en un recuento histórico?',
                options: [
                  'a) Permite que los eventos se presenten de manera subjetiva.',
                  'b) Evita que el lector pueda interpretar los hechos de diferentes formas.',
                  'c) Facilita la comprensión de cómo se desarrollaron los sucesos y sus relaciones de causa y efecto.',
                  'd) Permite omitir información irrelevante sin afectar la narrativa.'
                ],
                correctAnswer: 'c) Facilita la comprensión de cómo se desarrollaron los sucesos y sus relaciones de causa y efecto.'
              },
              {
                question: '8. ¿Cuál de los siguientes conectores temporales indica un evento que ocurre después de otro?o?',
                options: [
                  'a) "Al mismo tiempo"',
                  'b) "Después"',
                  'c) "Mientras tanto"',
                  'd) "Antes"'
                ],
                correctAnswer: 'b) "Después"'
              }
            ]
          },
          {
            type: 'drag-and-drop',
            title: '9. Relaciona los siguientes conectores con su significado correcto:',
            instructions: '',
            content: {
              categories: ['Indica el inicio de la secuencia.', 'Señala el cierre de la narración.', 'Muestra una sucesión de eventos.', 'Indica simultaneidad entre hechos.'],
              items: [
                { text: 'Primero', category: 'Indica el inicio de la secuencia.' },
                { text: 'Finalmente', category: 'Señala el cierre de la narración.' },
                { text: 'Después', category: ' Muestra una sucesión de eventos.' },
                { text: 'Al mismo tiempo', category: 'Indica simultaneidad entre hechos.' }
              ]
            }
          }
        ]
      },
      {
        id: '4',
        title: 'Sección 4: Aplicación de los conocimientos',
        activities: [
          {
            type: 'order-text',
            title: '10. Arrastra los siguientes eventos históricos para organizarlos en orden cronológico:',
            instructions: '',
            content: [
              { id: '1', text: 'Declaración de Independencia de los Estados Unidos (1776)' },
              { id: '2', text: 'Caída del Muro de Berlín (1989)' },
              { id: '3', text: 'Inicio de la Primera Guerra Mundial (1914)' },
              { id: '4', text: 'Revolución Francesa (1789)' },
            ],
            correctOrder: ['1', '4', '3', '2']
          },
          {
            type: 'multiple-choice',
            title: '',
            instructions: '',
            content: [
              {
                question: '11. Un recuento histórico sobre la Segunda Guerra Mundial menciona primero el ataque a Pearl Harbor (1941) y luego la invasión de Polonia (1939). ¿Qué tipo de tiempo narrativo se está utilizando?',
                options: [
                  'a) Tiempo histórico.',
                  'b) Tiempo narrativo en orden cronológico.',
                  'c) Analepsis o "flashback".',
                  'd) Prolepsis o "flashforward".'
                ],
                correctAnswer: 'c) Analepsis o "flashback".'
              },
            ]
          },
          {
            type: 'classify-text',
            title: '12. Identifica si la siguiente afirmación es verdadera o falsa:',
            instructions: '',
            options: ['Verdadero', 'Falso'],
            content: [
              {
                text: '"Un recuento histórico puede utilizar fuentes como documentos oficiales, investigaciones académicas y testimonios de testigos."',
                correctAnswer: 'Verdadero'
              }
            ]
          }
        ]
      },
      {
        id: '5',
        title: 'Sección 5: Evaluación general',
        activities: [
          {
            type: 'multiple-choice',
            title: '',
            instructions: '',
            content: [
              {
                question: '13. ¿Qué elemento es indispensable en un recuento histórico para garantizar su credibilidad?',
                options: [
                  'a) La opinión del autor.',
                  'b) La consulta de fuentes confiables.',
                  'c) La inclusión de elementos de ficción.',
                  'd) La subjetividad del narrador.'
                ],
                correctAnswer: 'b) La consulta de fuentes confiables.'
              },
              {
                question: '14. ¿Cuál de las siguientes frases respeta la objetividad en un recuento histórico?',
                options: [
                  'a) "El emperador cometió errores que llevaron al desastre de su pueblo."',
                  'b) "La Revolución Industrial provocó cambios en la producción y la sociedad."',
                  'c) "Muchos creen que la Revolución Francesa fue un error trágico."',
                  'd) "El evento fue completamente innecesario y solo causó problemas.".'
                ],
                correctAnswer: 'b) "La Revolución Industrial provocó cambios en la producción y la sociedad."'
              },
              {
                question: '15. ¿Por qué se recomienda utilizar un lenguaje formal en un recuento histórico?',
                options: [
                  'a) Para que el texto sea difícil de entender.',
                  'b) Para que el recuento parezca más sofisticado.',
                  'c) Para garantizar claridad, precisión y profesionalismo.',
                  'd) Para hacer que la historia sea más entretenida.'
                ],
                correctAnswer: 'c) Para garantizar claridad, precisión y profesionalismo.'
              }
            ]
          }
        ]
      }
    ]
  }
]