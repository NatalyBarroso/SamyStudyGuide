import { Unit } from "@/core/domain/entities/Unit"

export const module9: readonly Unit[] = [
  {
    id: '1',
    title: 'Unidad 1: Características y estructura de los textos instructivos',
    topics: [
      { title: 'Definición de texto instructivo: propósito y objetivos.' },
      {
        title: 'Características de un texto instructivo:',
        subtopics: [
          'Claridad y precisión.',
          'Orden secuencial.',
          'Uso de lenguaje directo e imperativo.',
          'Inclusión de materiales, herramientas o ingredientes necesarios.',
          'Uso de ejemplos o ilustraciones para facilitar la comprensión.'
        ]
      },
      {
        title: 'Estructura básica:',
        subtopics: [
          'Título: define el propósito del texto.',
          'Lista de materiales o herramientas (si es necesario).',
          'Instrucciones paso a paso.',
          'Precauciones o recomendaciones.',
          'Conclusión o resultado esperado.'
        ]
      }
    ], introduction: 'En esta unidad, descubrirás qué hace que un texto instructivo sea efectivo. Aprenderás a identificar sus elementos fundamentales, reconocer su estructura lógica y secuencial, y comprender por qué la claridad, el orden y el lenguaje preciso son esenciales para que las instrucciones funcionen. Esta base te permitirá construir tus propios textos instructivos con seguridad y coherencia.',

    themes: [
      {
        id: '1.1',
        title: '¿Qué es un texto instructivo?',
        text: 'Un texto instructivo es aquel que brinda indicaciones precisas para realizar una acción o lograr un objetivo. Estos textos están presentes en la vida cotidiana: recetas de cocina, manuales de uso, instructivos de juegos, guías de instalación, entre otros.',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se presenta un fragmento de un texto instructivo encontrado en una receta:',
          content: '<italic>“Coloca una taza de arroz en una olla con dos tazas de agua. Cocina a fuego medio hasta que el agua se evapore. Luego, tapa la olla y deja reposar durante 10 minutos.”</italic>',
          textEnd: 'Este texto tiene un propósito claro (indicar cómo cocinar arroz) y está compuesto por acciones ordenadas cronológicamente, usando un lenguaje directo y preciso.'
        }
      },
      {
        id: '1.2',
        title: 'Características principales de los textos instructivos',
        text: 'Para que un texto instructivo cumpla su función, debe tener ciertas características fundamentales:',
        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Característica', 'Descripción'],
            ['Claridad y precisión', 'El lenguaje debe ser simple y exacto.'],
            ['Orden secuencial', 'Las acciones deben estar en el orden en que deben realizarse.'],
            ['Lenguaje directo e imperativo', 'Se usa el modo imperativo (ej. "mezcla", "coloca") para dar instrucciones.'],
            ['Materiales o herramientas', 'Se indica lo necesario para llevar a cabo el proceso.'],
            ['Apoyo visual o ejemplos', 'Se pueden incluir ilustraciones o ejemplos para mayor comprensión.']
          ],
          textEnd: '\nA continuación se muestra un fragmento de un manual de armado:\n<italic><subheading>“Antes de comenzar, asegúrate de tener todas las piezas. Inserta la pieza A en la ranura B. Ajusta con el tornillo C usando el destornillador.”</subheading></italic>\nEste texto incorpora una lista de materiales (piezas y herramientas), y da instrucciones claras y secuenciales usando el modo imperativo.'
        },
        activity: {
          type: 'multiple-inputs',
          title: 'Actividad: Identifica las características',
          instructions: 'Lee cada fragmento de texto y escribe las características del texto instructivo que estén presentes (puede haber más de una).',
          content: [
            '"Conecta el cable de energía al enchufe y presiona el botón de encendido."',
            '"Para esta receta necesitas: harina, agua y sal. Mezcla los ingredientes hasta obtener una masa suave."',
            '"Luego de leer el capítulo, reflexiona sobre lo aprendido."'
          ]
        }
      },
      {
        id: '1.3',
        title: 'Estructura básica de un texto instructivo',
        text: 'Todo texto instructivo tiene una estructura que lo hace fácil de seguir. Estos son sus componentes esenciales:\n\n1. <bold>Título:</bold> Resume claramente el objetivo del texto.\n2. <bold>Materiales o herramientas:</bold> Lista de lo que se necesita antes de comenzar.\n3. <bold>Instrucciones paso a paso:</bold> Acciones presentadas en orden secuencial.\n4. <bold>Precauciones o recomendaciones:</bold> Advertencias o consejos útiles.\n5. <bold>Conclusión o resultado esperado:</bold> Indica qué se debe lograr si se siguen correctamente las instrucciones.\n</list>',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se muestra la estructura completa de un texto instructivo:',
          content: '<italic><subheading>“Cómo plantar una semilla de girasol”</subheading></italic>\n\n<list>\n- <bold>Materiales:</bold> Maceta, tierra, semilla de girasol, agua.\n\n- <bold>Pasos:</bold>\n  1. Llena la maceta con tierra.\n  2. Haz un pequeño agujero en el centro.\n  3. Coloca la semilla y cúbrela con tierra.\n  4. Riega suavemente.\n  5. Coloca la maceta donde reciba luz solar.\n\n- <bold>Recomendaciones:</bold> No regar en exceso. Evitar mover la maceta constantemente.\n\n- <bold>Resultado esperado:</bold> La semilla germinará en unos días y crecerá un girasol.\n</list>',
          textEnd: 'Este texto contiene todos los elementos de la estructura: título claro, materiales, pasos secuenciales, recomendaciones y resultado final.'
        },
        activity: {
          type: 'order-text',
          title: 'Actividad: Ordena las instrucciones',
          instructions: 'Lee las siguientes instrucciones desordenadas para preparar un vaso de limonada. Ordena los pasos de forma correcta.',
          content: [
            { id: '1', text: 'Sirve en un vaso y añade hielo.' },
            { id: '2', text: 'Exprime el jugo de dos limones.' },
            { id: '3', text: 'Agrega dos cucharadas de azúcar y revuelve bien.' },
            { id: '4', text: 'Llena el vaso con agua.' },
            { id: '5', text: 'Coloca el jugo en un vaso.' }
          ],
          correctOrder: ['2', '5', '3', '4', '1']
        }
      }
    ],

    summary: [
      'Qué es un texto instructivo.',
      'Propósito de los textos instructivos.',
      'Características principales: claridad, orden, lenguaje imperativo, materiales, ejemplos.',
      'Estructura básica: título, materiales, pasos, recomendaciones y resultado.'
    ]
  },
  {
    id: '2',
    title: 'Unidad 2: Uso de modos y tiempos verbales adecuados',
    topics: [
      {
        title: 'Modos verbales utilizados en textos instructivos:',
        subtopics: [
          'Imperativo: para dar órdenes o instrucciones directas (ejemplo: "Mezcla los ingredientes").',
          'Indicativo: para describir situaciones o resultados esperados (ejemplo: "La mezcla debe quedar homogénea").',
          'Subjuntivo: para dar recomendaciones o expresar condiciones (ejemplo: "Si la mezcla queda muy líquida, añade más harina").'
        ]
      },
      {
        title: 'Concordancia verbal:',
        subtopics: [
          'Uso coherente de tiempos verbales en las instrucciones.',
          'Mantener el mismo tiempo verbal a lo largo del texto (presente o futuro).'
        ]
      },
      {
        title: 'Formas impersonales:',
        subtopics: [
          'Uso de estructuras como "se debe", "es importante", "es necesario".'
        ]
      }
    ],
    introduction: 'El uso correcto de los modos y tiempos verbales permite que los textos instructivos sean claros, coherentes y efectivos. Esta unidad te enseñará a elegir el modo verbal adecuado según la intención comunicativa del paso o instrucción, y a mantener una estructura verbal uniforme a lo largo del texto. Comprenderás también el uso de formas impersonales para instrucciones generales.',

    themes: [
      {
        id: '2.1',
        title: 'Modos verbales en textos instructivos',
        text: 'El modo verbal indica la actitud del hablante frente a la acción. En los textos instructivos, el uso correcto del modo cambia el tono y la claridad de las instrucciones.',
        example: {
          type: 'table',
          textStart: 'Cuadro comparativo de los modos verbales',
          content: [
            ['Modo', 'Uso principal', 'Ejemplo'],
            ['Imperativo', 'Dar instrucciones u órdenes directas', 'Mezcla los ingredientes.'],
            ['Indicativo', 'Describir hechos concretos o resultados esperados', 'La mezcla debe quedar homogénea.'],
            ['Subjuntivo', 'Expresar condiciones, deseos o recomendaciones', 'Si está muy líquida, añade más harina.']
          ],
          textEnd: '\nA continuación se muestra un ejemplo de cada modo verbal aplicado a un mismo contexto:\n\n<italic><bold>Imperativo:</bold> "Coloca la masa sobre la bandeja."</italic>\n<italic><bold>Indicativo:</bold> "La masa se coloca sobre la bandeja."</italic>\n<italic><bold>Subjuntivo:</bold> "Si la masa está muy pegajosa, es mejor que le añadas harina."</italic>\n\nCada modo transmite una intención distinta, desde una acción directa (imperativo), una descripción objetiva (indicativo), hasta una recomendación o condición (subjuntivo).'
        },
        activity: {
          type: 'classify-text',
          title: 'Actividad: Elige el modo adecuado',
          instructions: 'Selecciona el modo verbal que corresponde según la intención de cada oración.',
          options: ['Imperativo', 'Indicativo', 'Subjuntivo'],
          content: [
            {
              text: 'Mezcla los ingredientes hasta formar una masa homogénea.',
              correctAnswer: 'Imperativo'
            },
            {
              text: 'La masa debe quedar suave al tacto.',
              correctAnswer: 'Indicativo'
            },
            {
              text: 'Si notas que está muy seca, añade un poco más de agua.',
              correctAnswer: 'Subjuntivo'
            },
            {
              text: 'Es importante que la bandeja esté limpia antes de usarla.',
              correctAnswer: 'Subjuntivo'
            },
            {
              text: 'Precalienta el horno a 180 grados antes de comenzar.',
              correctAnswer: 'Imperativo'
            }
          ]
        }
      },
      {
        id: '2.3',
        title: 'Concordancia verbal',
        text: 'Un texto instructivo debe mantener la coherencia en el tiempo verbal. No es adecuado mezclar presente, pasado y futuro sin una razón clara.',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se muestra un error de concordancia:',
          content: '<italic>"Agrega el agua y revolviste hasta que se disuelva la sal."</italic>',
          textEnd: 'Corrección:\n<italic>"Agrega el agua y revuelve hasta que se disuelva la sal."</italic>'
        },
        activity: {
          type: 're-write',
          title: 'Actividad: Corrige la concordancia',
          instructions: 'Lee las oraciones y corrige los errores de concordancia verbal.',
          content: [
            {
              original: 'Enciende la estufa y colocaste la sartén.',
              correct: 'Enciende la estufa y coloca la sartén.'
            },
            {
              original: 'Se mezcla la harina, añadirás la sal, y luego revuelve.',
              correct: 'Se mezcla la harina, se añade la sal y luego se revuelve.'
            },
            {
              original: 'Agrega el azúcar, batió por dos minutos.',
              correct: 'Agrega el azúcar y bate por dos minutos.'
            },
            {
              original: 'Coloca las galletas en el horno y dejó cocer durante 15 minutos.',
              correct: 'Coloca las galletas en el horno y déjalas cocer durante 15 minutos.'
            },
            {
              original: 'Encenderás el horno y mezclas los ingredientes.',
              correct: 'Enciende el horno y mezcla los ingredientes.'
            }
          ]
        }
      },
      {
        id: '2.4',
        title: 'Formas impersonales en instrucciones',
        text: 'Las formas impersonales permiten dar instrucciones sin dirigirse a alguien directamente. Son útiles cuando se quiere un tono más general o formal.',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo con forma impersonal:',
          content: '<italic>"Es importante precalentar el horno para asegurar una cocción uniforme."</italic>',
          textEnd: 'Se usa la forma impersonal "es importante" para dar una instrucción general sin dirigirse a alguien directamente.'
        },
        activity: {
          type: 're-write',
          title: 'Actividad: Reescribe con forma impersonal',
          instructions: 'Transforma las siguientes instrucciones en formas impersonales.',
          content: [
            {
              original: 'Limpia la mesa antes de comenzar.',
              correct: 'Es necesario limpiar la mesa antes de comenzar.'
            },
            {
              original: 'Coloca los materiales sobre la hoja.',
              correct: 'Se deben colocar los materiales sobre la hoja.'
            },
            {
              original: 'Prepara todos los ingredientes con anticipación.',
              correct: 'Es importante preparar todos los ingredientes con anticipación.'
            },
            {
              original: 'Revisa que el frasco esté cerrado.',
              correct: 'Se debe revisar que el frasco esté cerrado.'
            },
            {
              original: 'Saca el pan cuando esté dorado.',
              correct: 'El pan debe sacarse cuando esté dorado.'
            }
          ]
        }
      }
    ],

    summary: [
      'Uso del modo imperativo para dar instrucciones directas.',
      'Empleo del modo indicativo para describir resultados o situaciones.',
      'Aplicación del modo subjuntivo para condiciones o recomendaciones.',
      'Importancia de la concordancia verbal en los tiempos.',
      'Utilización de formas impersonales para un tono más general y objetivo.'
    ]
  },
  {
    id: '3',
    title: 'Unidad 3: Elaboración de diagramas y notas',
    topics: [
      {
        title: 'Diagramas de flujo:',
        subtopics: [
          'Definición y propósito.',
          'Símbolos básicos (inicio, acción, decisión, fin).',
          'Uso de flechas para indicar secuencia.'
        ]
      },
      {
        title: 'Mapas conceptuales:',
        subtopics: [
          'Organización jerárquica de las instrucciones.',
          'Relación entre las acciones y materiales.'
        ]
      },
      {
        title: 'Notas y listas:',
        subtopics: [
          'Listas numeradas y con viñetas para ordenar pasos.',
          'Notas aclaratorias o de advertencia.',
          'Resúmenes para reforzar las instrucciones clave.'
        ]
      }
    ],
    introduction: 'En esta unidad aprenderás a representar visualmente las instrucciones usando diagramas y notas. Estas herramientas te ayudarán a organizar la información de manera clara, identificar relaciones entre pasos y materiales, y reforzar los puntos más importantes de un texto instructivo. Con ellas, es más fácil entender y seguir procesos complejos paso a paso.',

    themes: [
      {
        id: '3.1',
        title: 'Diagramas de flujo',
        text: 'Los diagramas de flujo son representaciones gráficas que muestran una secuencia de acciones. Son útiles para visualizar procesos paso a paso.',
        example: {
          type: 'table',
          textStart: 'Símbolos básicos:',
          content: [
            ['Símbolo', 'Significado'],
            ['Óvalo', 'Inicio o fin del proceso'],
            ['Rectángulo', 'Acción o paso a realizar'],
            ['Rombo', 'Decisión o condición'],
            ['Flechas', 'Secuencia o dirección']
          ],
          textEnd: '\nEn el siguiente ejemplo se muestra un fragmento de un diagrama de flujo para preparar té:\n<italic><subheading>“Inicio → Hervir agua → ¿Tienes té? → (Sí) Colocar la bolsita en la taza → Verter el agua → Esperar 3 minutos → Fin”</subheading></italic>\nEl diagrama muestra la secuencia lógica del proceso con una decisión en el medio. Si no tienes té, deberías interrumpir el flujo o considerar una alternativa.'
        },

        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Comprensión de diagramas de flujo',
          instructions: 'Responde las siguientes preguntas sobre el uso de diagramas de flujo, con base en el proceso de cepillarse los dientes.',
          content: [
            {
              question: '¿Cuál es la función del símbolo de rombo en un diagrama de flujo?',
              options: ['a) Indicar el inicio o fin del proceso', 'b) Representar una acción o actividad', 'c) Indicar una decisión o pregunta' , 'd) Mostrar el flujo de los pasos'],
              correctAnswer: 'c) Indicar una decisión o pregunta'
            },
            {
              question: 'En el proceso de cepillarse los dientes, ¿cuál de los siguientes pasos representa una decisión?',
              options: ['a) Mojar el cepillo', 'b) Cepillar los dientes', 'c) ¿Usaste hilo dental?' , 'd) Enjuagar la boca'],
              correctAnswer: 'c) ¿Usaste hilo dental?'
            },
            {
              question: '¿Cuál es la secuencia más lógica para representar el proceso completo de cepillarse los dientes en un diagrama de flujo?',
              options: ['a) Inicio → Cepillar dientes → Enjuagar boca → Fin', 'b) Inicio → Mojar el cepillo → Colocar pasta → Cepillar dientes → ¿Usaste hilo dental? → Enjuagar boca → Fin', 'c) Inicio → Colocar pasta → ¿Usaste hilo dental? → Cepillar dientes → Fin' , 'd) Mojar el cepillo → Colocar pasta → Fin'],
              correctAnswer: 'b) Inicio → Mojar el cepillo → Colocar pasta → Cepillar dientes → ¿Usaste hilo dental? → Enjuagar boca → Fin'
            }
          ]
        }
      },
      {
        id: '3.2',
        title: 'Mapas conceptuales',
        text: 'Los mapas conceptuales te ayudan a ver las relaciones entre diferentes elementos de un proceso: materiales, acciones y resultados.',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo de mapa conceptual para hacer una pizza:',
          content: '<italic><subheading>“Pizza” (concepto central)</subheading>\n├── Ingredientes: masa, salsa, queso, toppings\n├── Acciones: preparar masa, colocar ingredientes, hornear\n└── Resultado: pizza cocida lista para servir</italic>',
          textEnd: 'El mapa organiza jerárquicamente los elementos del proceso, conectando lo que se necesita (ingredientes), lo que se hace (acciones) y lo que se obtiene (resultado).'
        },

        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Comprensión de mapas conceptuales',
          instructions: 'Responde las siguientes preguntas sobre el uso de mapas conceptuales, aplicados a la actividad "Organizar una mochila escolar".',
          content: [
            {
              question: '¿Qué elemento debe ocupar el lugar central en un mapa conceptual sobre “Organizar una mochila escolar”?',
              options: ['a) Guardar los lápices', 'b) Mochila', 'c) Organizar', 'd) Organizar una mochila escolar'],
              correctAnswer: 'd) Organizar una mochila escolar'
            },
            {
              question: '¿Cuál de las siguientes opciones corresponde a una categoría de materiales necesarios en este proceso?',
              options: ['a) Guardar la libreta', 'b) Mochila vacía', 'c) Lápices, cuadernos y libros', 'd) Planear el día escolar'],
              correctAnswer: 'c) Lápices, cuadernos y libros'
            }, 
            {
              question: '¿Qué tipo de elementos deben conectarse como resultado final en el mapa conceptual de esta actividad?',
              options: ['a) Mochila cerrada', 'b) Revisión de la tarea', 'c) Mochila organizada y lista para llevar', 'd) Planificación de horarios'],
              correctAnswer: 'c) Mochila organizada y lista para llevar'
            }
          ]
        }
      },
      {
        id: '3.3',
        title: 'Notas y listas',
        text: 'Las listas y notas permiten ordenar los pasos de forma clara y destacar detalles importantes. Hay diferentes tipos:\n\n<list>\n<li><bold>Listas numeradas:</bold> Útiles para mostrar un orden exacto.</li>\n<li><bold>Viñetas:</bold> Ideales para listar elementos sin un orden específico.</li>\n<li><bold>Notas aclaratorias:</bold> Ayudan a dar consejos o advertencias.</li>\n<li><bold>Resumen de pasos:</bold> Resume el procedimiento al final.</li>\n</list>',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se muestra una lista con notas:',
          content: '<italic><subheading>**Pasos para encender una computadora:**</subheading>\n1. Verifica que esté conectada a la corriente.\n2. Presiona el botón de encendido.\n3. Espera a que cargue el sistema operativo.\n\n*Nota: Si la computadora no enciende, revisa el cableado o llama a soporte.*</italic>',
          textEnd: 'La lista muestra claramente los pasos y usa una nota final para abordar posibles problemas.'
        },
        activity: {
          type: 'order-text',
          title: 'Actividad: Reordena y anota',
          instructions: 'Reordena los siguientes pasos para "hacer un sándwich".',
          content: [
            { id: '1', text: 'Cierra el sándwich con la otra rebanada de pan.' },
            { id: '2', text: 'Coloca los ingredientes (queso, jamón, lechuga).' },
            { id: '3', text: 'Abre dos rebanadas de pan.' },
            { id: '4', text: 'Sirve en un plato.' },
            { id: '5', text: 'Añade aderezos si deseas.' }
          ],
          correctOrder: ['3', '2', '5', '1', '4']
        }
      }            
    ],
    summary: [
      'Los diagramas de flujo representan procesos paso a paso con símbolos específicos.',
      'Los mapas conceptuales organizan jerárquicamente materiales, acciones y resultados.',
      'Las listas y notas ordenan instrucciones y ofrecen aclaraciones o advertencias.',
      'Estas herramientas hacen más claros y accesibles los textos instructivos, facilitando su comprensión y aplicación.'
    ]    
  },
  {
    id: '4',
    title: 'Unidad 4: Redacción de textos instructivos',
    topics: [
      {title: 'Lenguaje directo y sencillo:',
        subtopics: [
          'Uso de oraciones simples y directas.',
          'Evitar términos ambiguos o complejos.'
        ]
      },
      {title: 'Uso adecuado de conectores:',
        subtopics: [
          'Conectores de secuencia (primero, después, finalmente).',
          'Conectores de causa y consecuencia (porque, por lo tanto).',
          'Conectores de causa y consecuencia (porque, por lo tanto).'
        ]
      },
      {title: 'Organización secuencial:',
        subtopics: [
          'Presentación de las instrucciones en orden lógico.',
          'Separación de cada paso mediante numeración o viñetas.',
          'Indicación de advertencias o precauciones.'
        ]
      },
      {title: 'Corrección y revisión:',
        subtopics: [
          'Revisión de errores de concordancia verbal y ortografía.',
          'Claridad y coherencia en las instrucciones.'
        ]
      }
    ],
    introduction: 'En esta unidad pondrás en práctica todo lo aprendido para redactar tus propios textos instructivos. Aprenderás a usar un lenguaje claro y preciso, a organizar adecuadamente las instrucciones, a emplear conectores que guíen al lector, y a revisar tu redacción para asegurar que las instrucciones sean comprensibles, completas y ordenadas.',

    themes: [
      {
        id: '4.1',
        title: 'Lenguaje directo y sencillo',
        text: 'Un buen texto instructivo utiliza frases breves, claras y sin tecnicismos innecesarios.',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se muestra una instrucción clara:',
          content: '<italic>“Coloca el libro sobre la mesa y abre la primera página.”</italic>',
          textEnd: 'La instrucción es directa, fácil de entender y no incluye palabras complicadas. No hay ambigüedad.'
        },
        activity: {
          type: 'multiple-inputs',
          title: 'Actividad: Simplifica la instrucción',
          instructions: 'Lee las siguientes oraciones y reescríbelas con un lenguaje más directo y sencillo.',
          content: [
            'Es menester que procedas a la introducción del disco en la ranura.',
            'Proceda a la colocación del objeto en la superficie plana correspondiente.',
            'Lleve a cabo la acción de conectar el dispositivo a la red de energía.',
            'Realice la activación del aparato mediante el uso del botón frontal.',
            'Considere la eventualidad de que el sistema no funcione correctamente.'
          ]
        }
      },
      {
        id: '4.2',
        title: 'Uso de conectores',
        text: 'Los conectores ayudan a ordenar las instrucciones y a establecer relaciones de causa, consecuencia o condición.',
        example: {
          type: 'table',
          textStart: 'Tipos de conectores y ejemplos:',
          content: [
            ['Tipo', 'Conectores comunes', 'Ejemplo'],
            ['Secuencia', 'Primero, luego, después, finalmente', '“Primero, abre la caja. Luego, saca las piezas.”'],
            ['Causa y consecuencia', 'Porque, por lo tanto, así que', '“El tornillo está flojo, por lo tanto, ajústalo.”'],
            ['Condición', 'Si, en caso de que, siempre que', '“Si no enciende, revisa el cable de poder.”']
          ],
          textEnd: '\nEn el siguiente ejemplo se muestra un texto con conectores bien utilizados:\n<italic><subheading>“Primero, abre la tapa del frasco. Luego, vierte el contenido en un vaso. Si el líquido está frío, caliéntalo durante 30 segundos. Finalmente, sirve.”</subheading></italic>\nSe usan conectores de secuencia y condición que ordenan los pasos y preparan al lector para tomar decisiones durante el proceso.'
        },
        activity: {
          type: 'fill-in-the-blanks',
          title: 'Actividad: Elige el conector correcto',
          instructions: 'Completa las oraciones seleccionando el conector adecuado (una vez que | antes de que | si | por eso).',
          content: [
            {
              sentence: '_______ cierres la puerta, asegúrate de que no haya nadie afuera.',
              answer: 'Antes de que'
            },
            {
              sentence: 'Aprieta el botón de encendido, _______ la luz se volverá verde.',
              answer: 'y entonces'
            },
            {
              sentence: '_______ no encaje, gira la pieza hasta que se alinee.',
              answer: 'Si'
            },
            {
              sentence: '_______ termines el paso anterior, limpia la herramienta.',
              answer: 'Una vez que'
            },
            {
              sentence: 'El cable se soltó, _______ el aparato dejó de funcionar.',
              answer: 'por eso'
            }
          ]
        }
      },
      {
        id: '4.3',
        title: 'Organización secuencial',
        text: 'Presentar los pasos en orden lógico es clave. Se recomienda usar numeración o viñetas para dividir los pasos, y resaltar precauciones si es necesario.',
        example: {
          type: 'list',
          textStart: 'En el siguiente ejemplo se muestra una secuencia clara con advertencia:',
          content: [
            '1. Enchufa la licuadora.',
            '2. Coloca los ingredientes.',
            '3. Asegura la tapa.',
            '4. Presiona el botón de encendido.',
            'Precaución: Nunca introduzcas utensilios mientras esté encendida.'
          ],
          textEnd: 'Cada paso está claramente numerado y se incluye una advertencia relevante para evitar accidentes.'
        },
        activity: {
          type: 'order-text',
          title: 'Actividad: Ordena en secuencia',
          instructions: 'Ordena las siguientes instrucciones para preparar una bebida.',
          content: [
            { id: '1', text: 'Sirve la bebida en un vaso.' },
            { id: '2', text: 'Licúa durante 30 segundos.' },
            { id: '3', text: 'Coloca las frutas en la licuadora.' },
            { id: '4', text: 'Añade agua y azúcar.' },
            { id: '5', text: 'Cierra la tapa de la licuadora.' }
          ],
          correctOrder: ['3', '4', '5', '2', '1']
        }
      },
      {
        id: '4.4',
        title: 'Corrección y revisión',
        text: 'Es importante revisar tu texto para evitar errores que dificulten la comprensión.',
        example: {
          type: 'list',
          textStart: 'Puntos a revisar:',
          content: [
            'Ortografía y puntuación.',
            'Concordancia verbal.',
            'Claridad en cada paso.',
            'Uso adecuado de conectores.'
          ],
          textEnd: 'En el siguiente ejemplo se muestra un texto antes y después de ser corregido:\n<subheading>Antes:</subheading> "Cierra la puerta después prende la luz"\n<subheading>Después:</subheading> "Cierra la puerta. Después, prende la luz."\nSe corrigieron errores ortográficos y se agregaron signos de puntuación y un conector para dar claridad.'
        },
        activity: {
          type: 'input',
          title: 'Actividad: Revisa y mejora',
          instructions: 'Mejora el siguiente texto instructivo corrigiendo errores y agregando conectores:',
          content: '<italic>Abre caja sacar piezas colocar tornillos aprieta bien y finaliza armado</italic>'
        }
      }                        
    ],

    summary: [
      'Usa lenguaje directo y sencillo para facilitar la comprensión.',
      'Emplea conectores para dar coherencia y guiar la secuencia.',
      'Organiza las instrucciones en pasos lógicos y numerados, incluyendo advertencias si es necesario.',
      'Revisa la redacción para evitar errores y asegurar la claridad y coherencia del texto instructivo.'
    ]    
  },
  {
    id: '5',
    title: 'Unidad 5: Evaluación y mejora de textos instructivos',
    topics: [
      {title: 'Claridad: ¿Se entienden las instrucciones fácilmente?'},
      {title: 'Precisión: ¿Se evita la ambigüedad?'},
      {title: 'Orden: ¿Las instrucciones están organizadas en una secuencia lógica?'},
      {title: 'Uso de diagramas y notas: ¿Los diagramas y notas refuerzan la comprensión?'},
      {title: 'Errores de lenguaje: ¿Se mantiene la concordancia verbal y el uso correcto de conectores?'}
    ],
    introduction: 'En esta unidad aprenderás a revisar y mejorar textos instructivos, asegurándote de que sean claros, precisos, organizados y efectivos. Desarrollarás habilidades para identificar errores, aplicar criterios de evaluación y proponer mejoras que fortalezcan la comprensión del lector.',

    themes: [
      {
        id: '5.1',
        title: '¿Cómo evaluar un texto instructivo?',
        text: 'Para evaluar si un texto instructivo cumple su propósito, se puede usar una lista de verificación con los siguientes criterios:',
        example: {
          type: 'table',
          textStart: 'Criterios para evaluar un texto instructivo:',
          content: [
            ['Criterio', 'Pregunta guía'],
            ['Claridad', '¿Las instrucciones se entienden sin dificultad?'],
            ['Precisión', '¿Se evita el uso de términos vagos o ambiguos?'],
            ['Orden', '¿Los pasos están en una secuencia lógica?'],
            ['Diagramas', '¿Hay apoyos visuales que refuercen el contenido?'],
            ['Lenguaje', '¿Se usa correctamente la gramática y los conectores?']
          ],
          textEnd: '\nEn el siguiente ejemplo se evalúa un texto de instrucciones para armar una silla:\n<italic><subheading>1. Une las patas delanteras con el asiento.</subheading></italic><italic><subheading> 2. Atornilla el respaldo.</subheading></italic><italic><subheading> 3. Verifica que todos los tornillos estén ajustados.</subheading></italic>\nEl texto es claro, directo, con pasos en orden lógico. Puede mejorar incluyendo una advertencia y un diagrama para mayor comprensión.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Evalúa el texto',
          instructions: 'Lee el siguiente texto y marca si cumple con cada uno de los criterios.\n\nTexto: "Coloca el papel. Luego pon la tinta. Enciende. Aprieta el botón para imprimir."',
          content: [
            {
              question: 'Claridad',
              options: ['Sí', 'No'],
              correctAnswer: 'Sí'
            },
            {
              question: 'Precisión',
              options: ['Sí', 'No'],
              correctAnswer: 'No'
            },
            {
              question: 'Orden',
              options: ['Sí', 'No'],
              correctAnswer: 'Sí'
            },
            {
              question: 'Uso de diagramas',
              options: ['Sí', 'No'],
              correctAnswer: 'No'
            },
            {
              question: 'Lenguaje correcto',
              options: ['Sí', 'No'],
              correctAnswer: 'No'
            }
          ]
        }
      },
      {
        id: '5.2',
        title: 'Mejorar un texto instructivo',
        text: 'Para mejorar un texto, se pueden:\n\n<list>\n<list>Agregar conectores.</list>\n<list>Corregir errores ortográficos.</list>\n<list>Aclarar pasos confusos.</list>\n<list>Incluir diagramas o notas.</list>\n</list>',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un texto antes y después de ser mejorado:',
          content: '<italic><subheading>“Antes: Coloca tornillo aprieta luego mete pata.”</subheading>\n<subheading>Después: Primero, coloca el tornillo. Luego, apriétalo con firmeza. Finalmente, inserta la pata de la mesa.”</subheading></italic>',
          textEnd: 'La versión mejorada tiene conectores, puntuación correcta y lenguaje claro.'
        },
        activity: {
          type: 'input',
          title: 'Actividad: Mejora las instrucciones',
          instructions: 'Reescribe el siguiente texto para que sea más claro y efectivo. Puedes agregar conectores y notas si es necesario.',
          content: '<italic>Pega etiqueta mete caja cierra tapa manda paquete</italic>'
        }
      },
      {
        id: '5.3',
        title: 'Incorporar elementos visuales',
        text: 'Los diagramas y notas permiten aclarar los pasos, especialmente en procesos mecánicos o detallados.',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se muestra un texto mejorado con una nota:',
          content: '<italic><subheading>“1. Inserta el cartucho en la ranura.</italic></subheading><italic><subheading> 2. Presiona suavemente hasta escuchar un clic</italic></subheading><italic><subheading>. 3. Cierra la tapa.”</subheading></italic>',
          textEnd: '<italic><subheading>Nota: No fuerces el cartucho si no encaja.</subheading></italic>\nLa nota da una advertencia importante para evitar errores o daños.'
        },
        activity: {
          type: 'input',
          title: 'Actividad: Evalúa y mejora',
          instructions: 'Lee el siguiente texto y propón al menos tres mejoras. Puedes agregar conectores, signos de puntuación, y notas aclaratorias si lo consideras necesario.',
          content: 'Mete disco en consola enciende espera menu presiona jugar'
        }
      }                  
    ],

    summary: [
      'Un buen texto instructivo debe ser claro, preciso y ordenado.',
      'Se pueden usar listas de verificación para evaluar la calidad de un texto.',
      'Es posible mejorar instrucciones corrigiendo errores y agregando conectores o visuales.',
      'El uso de notas y diagramas enriquece la comprensión y previene confusiones.',
      'La revisión final asegura que el texto cumpla su propósito de forma efectiva.'
    ]    
  }
]