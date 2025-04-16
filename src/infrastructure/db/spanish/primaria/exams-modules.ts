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
        problems: [
          {
            type: 'multiple-choice',
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
            type: 'multiple-choice',
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
            type: 'multiple-choice',
            question: '3. Completa la siguiente afirmación: "Para garantizar la objetividad en un recuento histórico, es fundamental..."',
            options: [
              'a) Presentar solo una versión de los hechos.',
              'b) Basarse en opiniones de testigos.',
              'c) Utilizar fuentes verificables y evitar interpretaciones subjetivas.',
              'd) Incluir anécdotas personales del autor.'
            ],
            correctAnswer: 'c) Utilizar fuentes verificables y evitar interpretaciones subjetivas.'
          }
        ]
      },
      {
        id: '2',
        title: 'Sección 2: Estructura del recuento histórico',
        problems: [
          {
            type: 'multiple-choice',
            question: '4. ¿Cuál es la función principal de la introducción en un recuento histórico?',
            options: [
              'a) Presentar el contexto y la importancia del evento.',
              'b) Narrar los acontecimientos en orden cronológico.',
              'c) Reflexionar sobre las consecuencias del evento.',
              'd) Describir en detalle cada suceso histórico.'
            ],
            correctAnswer: 'a) Presentar el contexto y la importancia del evento.'
          },
          {
            type: 'drag-and-drop',
            instructions: '5. Arrastra cada fragmento a la parte del recuento histórico que le corresponde: introducción, desarrollo o conclusión.',
            categories: ['Introducción', 'Desarrollo', 'Conclusión'],
            items: [
              {
                text: 'Durante más de una década, diferentes líderes como Hidalgo, Morelos y Guerrero lucharon en distintas regiones del país.',
                category: 'Desarrollo'
              },
              {
                text: 'En el año 1810 comenzaron una serie de levantamientos que marcarían el inicio de la independencia de México.',
                category: 'Introducción'
              },
              {
                text: 'Finalmente, en 1821 se firmaron los tratados de Córdoba, poniendo fin al dominio español.',
                category: 'Conclusión'
              }
            ]
          },
          {
            type: 'multiple-choice',
            question: '6. ¿Cuál de las siguientes opciones describe mejor el desarrollo de un recuento histórico?',
            options: [
              'a) Resume los efectos a largo plazo del evento.',
              'b) Narra los hechos en orden cronológico, explicando causas y consecuencias inmediatas.',
              'c) Presenta el contexto general del evento sin detallar hechos específicos.',
              'd) Expresa la opinión del autor sobre la relevancia del suceso.'
            ],
            correctAnswer: 'b) Narra los hechos en orden cronológico, explicando causas y consecuencias inmediatas.'
          }
        ]
      },
      {
        id: '3',
        title: 'Sección 3: Orden cronológico y uso del tiempo en el recuento histórico',
        problems: [
          {
            type: 'multiple-choice',
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
            type: 'multiple-choice',
            question: '8. ¿Cuál de los siguientes conectores temporales indica un evento que ocurre después de otro?o?',
            options: [
              'a) "Al mismo tiempo"',
              'b) "Después"',
              'c) "Mientras tanto"',
              'd) "Antes"'
            ],
            correctAnswer: 'b) "Después"'
          },
          {
            type: 'drag-and-drop',
            instructions: '9. Relaciona los siguientes conectores con su significado correcto:',
            categories: ['Indica el inicio de la secuencia.', 'Señala el cierre de la narración.', 'Muestra una sucesión de eventos.', 'Indica simultaneidad entre hechos.'],
            items: [
              { text: 'Primero', category: 'Indica el inicio de la secuencia.' },
              { text: 'Finalmente', category: 'Señala el cierre de la narración.' },
              { text: 'Después', category: ' Muestra una sucesión de eventos.' },
              { text: 'Al mismo tiempo', category: 'Indica simultaneidad entre hechos.' }
            ]
          }
        ]
      },
      {
        id: '4',
        title: 'Sección 4: Aplicación de los conocimientos',
        problems: [
          {
            type: 'multiple-select',
            question: '¿Cuáles de las siguientes características son propias de un recuento histórico?',
            options: [
              'Presenta los hechos en orden cronológico',
              'Incluye personajes inventados como en los cuentos',
              'Describe acontecimientos reales del pasado',
              'Se escribe con un lenguaje técnico y científico',
              'Puede incluir fechas, lugares y personajes históricos relevantes'
            ],
            correctAnswers: [
              'Presenta los hechos en orden cronológico',
              'Describe acontecimientos reales del pasado',
              'Puede incluir fechas, lugares y personajes históricos relevantes'
            ]
          },
          {
            type: 'multiple-choice',
            question: '11. Un recuento histórico sobre la Segunda Guerra Mundial menciona primero el ataque a Pearl Harbor (1941) y luego la invasión de Polonia (1939). ¿Qué tipo de tiempo narrativo se está utilizando?',
            options: [
              'a) Tiempo histórico.',
              'b) Tiempo narrativo en orden cronológico.',
              'c) Analepsis o "flashback".',
              'd) Prolepsis o "flashforward".'
            ],
            correctAnswer: 'c) Analepsis o "flashback".'
          },
          {
            type: 'classify-text',
            instructions: '12. Identifica si la siguiente afirmación es verdadera o falsa:',
            options: ['Verdadero', 'Falso'],
            text: '"Un recuento histórico puede utilizar fuentes como documentos oficiales, investigaciones académicas y testimonios de testigos."',
            correctAnswer: 'Verdadero'
          }
        ]
      },
      {
        id: '5',
        title: 'Sección 5: Evaluación general',
        problems: [
          {
            type: 'multiple-choice',
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
            type: 'multiple-choice',
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
            type: 'multiple-choice',
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