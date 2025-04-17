import { Exam } from "@/core/domain/entities/Exam";

export const exams_modules: readonly Exam[] = [
  {
    id: '1',
    title: 'Evaluación Final: Recuento Histórico',
    description: 'Esta evaluación tiene como objetivo comprobar los conocimientos adquiridos a lo largo del módulo "Recuento Histórico", abarcando los contenidos de las cinco unidades trabajadas.',
    sections: [
      {
        id: '1.1',
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
        id: '1.2',
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
        id: '1.3',
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
            question: '8. ¿Cuál de los siguientes conectores temporales indica un evento que ocurre después de otro?',
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
        id: '1.4',
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
        id: '1.5',
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
  },
  {
    id: '2',
    title: 'Evaluación Final: Reportaje',
    description: 'Esta evaluación tiene como objetivo comprobar los conocimientos adquiridos a lo largo del módulo "Reportaje", abarcando los contenidos de las cuatro unidades trabajadas.',

    sections: [
      {
        id: '2.1',
        title: 'Sección 1: Conceptos generales del reportaje',

        problems: [
          {
            type: 'multiple-choice',
            question: '1. ¿Cuál es el propósito principal de un reportaje?',
            options: [
              'a) Expresar opiniones personales.',
              'b) Narrar hechos reales de forma breve.',
              'c) Analizar, explicar y contextualizar un tema en profundidad.',
              'd) Contar historias ficticias con base real.'
            ],
            correctAnswer: 'c) Analizar, explicar y contextualizar un tema en profundidad.'
          },
          {
            type: 'multiple-choice',
            question: '2. ¿Cuál de las siguientes opciones NO es una característica del reportaje?',
            options: [
              'a) Profundiza en el tema.',
              'b) Usa fuentes variadas.',
              'c) Tiene una estructura rígida de 5 párrafos.',
              'd) Presenta testimonios y datos.'
            ],
            correctAnswer: 'c) Tiene una estructura rígida de 5 párrafos.'
          },
          {
            type: 'multiple-choice',
            question: '3. ¿Cuál de los siguientes enunciados es una opinión y no un hecho?',
            options: [
              'a) El 65% de los encuestados rechaza la reforma.',
              'b) La ley fue aprobada el 5 de marzo.',
              'c) Es evidente que la reforma será un desastre.',
              'd) El congreso sesionó durante cuatro días.'
            ],
            correctAnswer: 'c) Es evidente que la reforma será un desastre.'
          }
        ]
      },
      {
        id: '2.2',
        title: 'Sección 2: Estructura y contenido',
        problems: [
          {
            type: 'multiple-choice',
            question: '4. ¿Qué parte del reportaje suele contener la idea principal?',
            options: [
              'a) En los testimonios personales.',
              'b) En el título y la introducción.',
              'c) En la bibliografía.',
              'd) En las notas al pie.'
            ],
            correctAnswer: 'b) En el título y la introducción.'
          },
          {
            type: 'classify-text',
            instructions: '5. Lee el fragmento y clasifícalo según su función dentro de un reportaje.',
            options: ['Introducción', 'Cuerpo del reportaje', 'Conclusión'],
            text: 'A través de diversas entrevistas, los habitantes relatan cómo la falta de agua ha afectado su salud y su economía local.',
            correctAnswer: 'Cuerpo del reportaje'
          },
          {
            type: 'multiple-choice',
            question: '6. ¿Cuál de las siguientes oraciones representa una idea secundaria?',
            options: [
              'a) El reportaje denuncia la falta de acceso al agua en comunidades rurales.',
              'b) La sequía ha obligado a las familias a modificar su rutina diaria.',
              'c) El 78% de las fuentes hídricas están contaminadas.',
              'd) Organizaciones internacionales han donado filtros de agua.'
            ],
            correctAnswer: 'd) Organizaciones internacionales han donado filtros de agua.'
          }
        ]
      },
      {
        id: '2.3',
        title: 'Sección 3: Análisis e interpretación de la información',
        problems: [
          {
            type: 'multiple-choice',
            question: '7. ¿Qué elemento ayuda a identificar si una fuente es confiable?',
            options: [
              'a) Que sea breve.',
              'b) Que tenga imágenes llamativas.',
              'c) Que esté respaldada por evidencia o datos verificables.',
              'd) Que tenga muchos comentarios positivos.'
            ],
            correctAnswer: 'c) Que esté respaldada por evidencia o datos verificables.'
          },
          {
            type: 'multiple-choice',
            question: '¿Cuál de las siguientes frases indica un posible sesgo?',
            options: [
              'a) La población del área fue entrevistada por el medio.',
              'b) Las autoridades no hicieron nada porque no les importa.',
              'c) El informe menciona tres causas posibles del problema.',
              'd) La situación ha sido difícil para todos los involucrados.'
            ],
            correctAnswer: 'b) Las autoridades no hicieron nada porque no les importa.'
          },
          {
            type: 'multiple-choice',
            question: '¿Cuál de estas frases representa información relevante?',
            options: [
              'a) El nombre del río proviene del idioma quechua.',
              'b) El 90% de los residuos son vertidos sin tratamiento previo.',
              'c) El paisaje alrededor del río es muy atractivo.',
              'd) Algunos habitantes creen que el río está maldito.'
            ],
            correctAnswer: 'b) El 90% de los residuos son vertidos sin tratamiento previo.'
          }                    
        ]
      },
      {
        id: '2.4',
        title: 'Sección 4: Selección de información relevante',
        problems: [
          {
            type: 'drag-and-drop',
            instructions: 'Relaciona los conceptos con su definición correspondiente.',
            categories: ['Información verificable.', 'Juicio personal o valoración.', 'Proporciona datos verificables y objetivos.', 'Presentación parcial o incompleta del tema.'],
            items: [
              {text: 'Fuente confiable', category: 'Proporciona datos verificables y objetivos.'},
              {text: 'Hecho', category: 'Información verificable.'},
              {text: 'Sesgo informativo', category: 'Presentación parcial o incompleta del tema.'},
              {text: 'Opinión', category: 'Juicio personal o valoración.'}
            ]
          },
          {
            type: 'multiple-choice',
            question: '¿Cuál de las siguientes afirmaciones corresponde a un hecho verificable?',
            options: [
              'a) Creo que el gobierno no hace lo suficiente.',
              'b) Es evidente que la situación es injusta.',
              'c) En 2022 se registraron más de 500 protestas por el mismo motivo.',
              'd) Es indignante lo que está ocurriendo.'
            ],
            correctAnswer: 'c) En 2022 se registraron más de 500 protestas por el mismo motivo.'
          },
          {
            type: 'classify-text',
            instructions: 'Lee la siguiente frase y clasifícala como hecho, opinión o sesgo.',
            options: ['Hecho', 'Opinión', 'Sesgo'],
            text: 'Las autoridades solo reaccionan cuando la prensa los expone.',
            correctAnswer: 'Sesgo'
          }
        ]
      }
    ]
  }
]