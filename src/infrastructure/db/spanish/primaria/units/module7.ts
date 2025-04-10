import { Unit } from "@/core/domain/entities/Unit";

export const module7: readonly Unit[] = [
  {
    id: '1',
    title: 'Unidad 1: Inferencia de significado a partir del contexto',
    topics: [
      {title: 'Contexto semántico: relación entre las palabras y las ideas del texto.'},
      {title: 'Pistas contextuales:',
        subtopics: [
          'Definición dentro del texto.',
          'Sinónimos y antónimos en la oración o en el párrafo.',
          'Ejemplos y comparaciones en el texto.',
          'Contraste con otras ideas.',
          'Puntuación y marcas gramaticales (paréntesis, comas, guiones).'
        ]
      },
      {title: 'Inferencia mediante eliminación de opciones improbables.'}
    ],
    introduction: 'Comprender un texto va más allá de leer palabras: implica interpretar significados, identificar relaciones y deducir información. Esta unidad te ayudará a desarrollar la habilidad de inferir el significado de palabras desconocidas sin necesidad de consultar constantemente el diccionario. Lo lograrás a partir del análisis del contexto y el uso de pistas semánticas y gramaticales.',

    themes: [
      {
        id: '1.1',
        title: 'Contexto semántico',
        text: 'El contexto semántico se refiere a la relación entre una palabra y las ideas o palabras que la rodean. Estas relaciones nos permiten deducir el significado de términos desconocidos.',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo, la palabra "arisco" puede deducirse a partir del resto del texto:',
          content: '<italic>"El perro era arisco: cada vez que alguien se acercaba, gruñía y retrocedía mostrando los dientes."</italic>',
          textEnd: 'Las acciones del perro (gruñir, retroceder, mostrar los dientes) indican que "arisco" tiene una connotación negativa relacionada con desconfianza o agresividad.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Detectando el contexto semántico',
          instructions: 'Lee cada enunciado y elige qué relación de significado ayuda a entender la palabra destacada.',
          content: [
            {
              question: '"Era una persona **huraña**, evitaba hablar con cualquiera."',
              options: ['a) Comparación', 'b) Contraste', 'c) Relación semántica', 'd) Definición directa'],
              correctAnswer: 'c) Relación semántica'
            },
            {
              question: '"La situación se volvió **tensa** cuando empezaron a gritarse."',
              options: ['a) Ejemplo', 'b) Contraste', 'c) Sinónimo', 'd) Relación semántica'],
              correctAnswer: 'd) Relación semántica'
            }
          ]
        }
      },
      {
        id: '1.2',
        title: 'Pistas contextuales',
        text: '<subheading>Pistas contextuales</subheading>\n\nLas pistas contextuales son elementos del texto que ayudan a identificar o deducir el significado de una palabra. A continuación, exploramos los principales tipos:',
        subthemes: [
          {
            id: '1.2.1',
            title: 'Definición dentro del texto',
            text: '',
            example: {
              type: 'text',
              textStart: 'A continuación se muestra un ejemplo:',
              content: '"La xenofobia, que es el rechazo hacia personas extranjeras, ha aumentado en algunos países."',
              textEnd: '<italic>Descripción:</italic> El autor define la palabra desconocida inmediatamente después de usarla.'
            }
          },
          {
            id: '1.2.2',
            title: 'Sinónimos y antónimos',
            text: '',
            example: {
              type: 'text',
              textStart: 'En el siguiente ejemplo, el sinónimo aclara el significado:',
              content: '"Estaba exultante, muy feliz por la noticia que acababa de recibir."',
              textEnd: '<italic>Descripción:</italic> "Muy feliz" funciona como sinónimo de "exultante".'
            }
          },
          {
            id: '1.2.3',
            title: 'Ejemplos y comparaciones',
            text: '',
            example: {
              type: 'text',
              textStart: 'Observa este ejemplo:',
              content: '"Su generosidad era evidente: siempre donaba ropa, alimentos y tiempo a quienes lo necesitaban."',
              textEnd: '<italic>Descripción:</italic> La acción de donar permite entender el significado de "generosidad".'
            }
          },
          {
            id: '1.2.4',
            title: 'Contraste con otras ideas',
            text: '',
            example: {
              type: 'text',
              textStart: 'Ejemplo con contraste:',
              content: '"A diferencia de su hermano extrovertido y sociable, ella era una persona reservada."',
              textEnd: '<italic>Descripción:</italic> "Reservada" se entiende como lo opuesto a "extrovertido".'
            }
          },
          {
            id: '1.2.5',
            title: 'Puntuación y marcas gramaticales',
            text: '',
            example: {
              type: 'text',
              textStart: 'Observa este uso:',
              content: '"El sábalo —un pez de agua dulce— es muy común en los ríos del norte."',
              textEnd: '<italic>Descripción:</italic> El guion introduce una explicación inmediata de la palabra.'
            }
          }
        ],
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Encuentra la pista',
          instructions: 'Identifica qué tipo de pista contextual se utiliza para ayudar a entender la palabra destacada.',
          content: [
            {
              question: '"El clima era **desfavorable**: lluvia constante, fuertes vientos y temperaturas bajo cero."',
              options: ['a) Sinónimo', 'b) Ejemplo', 'c) Contraste', 'd) Definición directa'],
              correctAnswer: 'b) Ejemplo'
            },
            {
              question: '"La fauna marina —conjunto de especies que habitan el mar— está siendo afectada por la contaminación."',
              options: ['a) Sinónimo', 'b) Contraste', 'c) Paréntesis', 'd) Puntuación y marcas gramaticales'],
              correctAnswer: 'd) Puntuación y marcas gramaticales'
            },
            {
              question: '"Era una persona altruista, siempre pensaba en los demás."',
              options: ['a) Sinónimo', 'b) Antónimo', 'c) Comparación', 'd) Definición'],
              correctAnswer: 'a) Sinónimo'
            }
          ]
        }
      },
      {
        id: '1.3',
        title: 'Inferencia mediante eliminación',
        text: 'Otra estrategia consiste en descartar significados que no tienen sentido dentro del texto.',
        example: {
          type: 'text',
          textStart: 'A continuación, un ejemplo:',
          content: '"Aunque el clima era inclemente, salimos a jugar. El viento azotaba con fuerza y la lluvia no cesaba."\n\n<italic>Descripción:</italic> "Inclemente" no puede significar agradable o suave, por lo que se deduce que alude a condiciones severas.',
          textEnd: ''
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Proceso de eliminación',
          instructions: 'Lee cada enunciado e identifica cuál opción NO puede ser el significado de la palabra destacada.',
          content: [
            {
              question: '"Estaba *abrumado* por tantas tareas y responsabilidades."',
              options: ['a) Agobiado', 'b) Relajado', 'c) Estresado', 'd) Saturado'],
              correctAnswer: 'b) Relajado'
            },
            {
              question: '"El lugar era *acogedor*, con luces suaves, sillones cómodos y aroma a café."',
              options: ['a) Frío', 'b) Cálido', 'c) Confortable', 'd) Agradable'],
              correctAnswer: 'a) Frío'
            }
          ]
        }
      },
      {
        id: '1.4',
        title: '',
        text: '',
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Detectives del contexto',
          instructions: '',
          content: [
            {
              question: '"La mansión era suntuosa, decorada con oro, cristales y tapices importados."',
              options: ['a) Modesta', 'b) Lujosa', 'c) Antigua', 'd) Ruidosa'],
              correctAnswer: 'b) Lujosa'
            },
            {
              question: '"El niño estaba inquieto, no paraba de moverse en su asiento."',
              options: ['a) Dormido', 'b) Cansado', 'c) Nervioso', 'd) Enfermo'],
              correctAnswer: 'c) Nervioso'
            },
            {
              question: '"Su mirada era melancólica, como si recordara algo triste."',
              options: ['a) Soñadora', 'b) Feliz', 'c) Triste', 'd) Curiosa'],
              correctAnswer: 'c) Triste'
            },
            {
              question: '"La explicación fue ambigua, podría entenderse de varias formas."',
              options: ['a) Clara', 'b) Confusa', 'c) Breve', 'd) Enojada'],
              correctAnswer: 'b) Confusa'
            },
            {
              question: '"El paisaje era árido, sin vegetación ni fuentes de agua."',
              options: ['a) Fértil', 'b) Seco', 'c) Frío', 'd) Inundado'],
              correctAnswer: 'b) Seco'
            },
          ]
        }
      }                        
    ],

    summary: [
      'El contexto semántico te permite relacionar una palabra con las ideas que la rodean.',
      'Las pistas contextuales incluyen definiciones, sinónimos y antónimos, ejemplos, contrastes y marcas gramaticales que ayudan a aclarar el significado de los términos.',
      'La estrategia de eliminación te permite descartar significados improbables para llegar a la interpretación más adecuada.'
    ]
  },
  {
    id: '2',
    title: 'Unidad 2: Uso del diccionario',
    topics: [
      {title: 'Partes de una entrada en el diccionario:',
        subtopics: [
          'Palabra y su categoría gramatical (sustantivo, verbo, adjetivo, etc.).',
          'Definición.',
          'Ejemplos de uso.',
          'Etimología (origen de la palabra).',
          'Sinónimos y antónimos.',
          'Notas sobre uso formal o informal.'
        ]
      },
      {title: 'Tipos de diccionarios:',
        subtopics: [
          'Diccionario de lengua general.',
          'Diccionario de sinónimos y antónimos.',
          'Diccionario técnico o especializado.',
          'Diccionario en línea (uso y ventajas).'
        ]
      },
      {title: 'Uso adecuado de abreviaturas y símbolos en el diccionario.'}
    ],
    introduction: 'Aprender a utilizar el diccionario de manera eficiente es clave para ampliar el vocabulario y comprender el significado preciso de las palabras en diferentes contextos. Esta unidad te guiará en el conocimiento de las partes que componen una entrada de diccionario, los distintos tipos que existen y cómo interpretar correctamente las abreviaturas y símbolos que suelen aparecer.',

    themes: [
      {
        id: '2.1',
        title: 'Partes de una entrada en el diccionario',
        text: 'Las entradas en el diccionario no solo contienen definiciones. También incluyen información gramatical, ejemplos y otros datos importantes.',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra una entrada típica de diccionario:',
          content: '<italic>valiente</italic> (adj.)\nQue actúa con valor y determinación ante situaciones difíciles o peligrosas.\nEjemplo: "El bombero fue valiente al entrar en el edificio en llamas."\nEtimología: del latín *valens*, -entis, ‘fuerte’.\nSinónimos: audaz, intrépido. Antónimos: cobarde, temeroso.\nUso: formal e informal.',
          textEnd: 'La entrada incluye la palabra, su categoría gramatical, la definición, un ejemplo de uso, su origen etimológico, sinónimos y antónimos, y una nota sobre su uso.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Explora la entrada',
          instructions: 'Observa la siguiente entrada y responde a las preguntas.\n\n<bold>ingenioso (adj.)</bold>\nQue tiene facilidad para inventar o encontrar soluciones.\n Ejemplo: "Presentó una solución ingeniosa al problema."\n Etimología: del latín *ingeniosus*.\n Sinónimos: creativo, astuto. Antónimos: torpe, lento.\n Uso: formal.',
          content: [
            {
              question: '1. ¿Cuál es la categoría gramatical?',
              options: ['a) Verbo', 'b) Adverbio', 'c) Adjetivo', 'd) Sustantivo'],
              correctAnswer: 'c) Adjetivo'
            },
            {
              question: '2. ¿Qué palabra es un sinónimo de "ingenioso"?',
              options: ['a) Lento', 'b) Creativo', 'c) Torpe', 'd) Frío'],
              correctAnswer: 'b) Creativo'
            },
            {
              question: '3. ¿Qué indica la etimología?',
              options: [
                'a) El significado actual',
                'b) El país donde se usa',
                'c) El origen de la palabra',
                'd) El uso en frases comunes'
              ],
              correctAnswer: 'c) El origen de la palabra'
            }
          ]
        }
      },
      {
        id: '2.2',
        title: 'Tipos de diccionarios',
        text: 'Existen diferentes tipos de diccionarios que se utilizan para propósitos distintos.',
        example: {
          type: 'table',
          textStart: 'Aquí te los presentamos de forma comparativa:',
          content: [
            ['Tipo de diccionario', 'Características principales'],
            ['Diccionario de lengua general', 'Ofrece definiciones, usos, y pronunciación de palabras comunes.'],
            ['Diccionario de sinónimos/antónimos', 'Presenta palabras con significados similares u opuestos.'],
            ['Diccionario técnico o especializado', 'Contiene términos propios de un área (medicina, derecho, informática).'],
            ['Diccionario en línea', 'Herramienta digital de acceso rápido, muchas veces con funciones extra.']
          ],
          textEnd: '\nEn el siguiente ejemplo, se utiliza un diccionario de sinónimos:\n<bold>rápido</bold>: ágil, veloz, ligero (sinónimos); lento, pausado (antónimos).\n\nEl diccionario de sinónimos ayuda a encontrar alternativas para enriquecer la expresión escrita y evitar repeticiones.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: ¿Qué diccionario usarías?',
          instructions: 'Indica qué tipo de diccionario usarías en cada situación.',
          content: [
            {
              question: '1. Quieres saber cómo se usa la palabra "código" en programación.',
              options: [
                'a) Diccionario general',
                'b) Diccionario técnico',
                'c) Diccionario de antónimos',
                'd) Diccionario en línea'
              ],
              correctAnswer: 'b) Diccionario técnico'
            },
            {
              question: '2. Necesitas sinónimos para la palabra "hermoso" en una redacción.',
              options: [
                'a) Diccionario general',
                'b) Diccionario técnico',
                'c) Diccionario de sinónimos',
                'd) Diccionario etimológico'
              ],
              correctAnswer: 'c) Diccionario de sinónimos'
            },
            {
              question: '3. Estás escribiendo un ensayo y necesitas confirmar si una palabra es formal o informal.',
              options: [
                'a) Diccionario técnico',
                'b) Diccionario de sinónimos',
                'c) Diccionario general',
                'd) Diccionario bilingüe'
              ],
              correctAnswer: 'c) Diccionario general'
            }
          ]
        }
      },
      {
        id: '2.3',
        title: 'Abreviaturas y símbolos en el diccionario',
        text: 'Los diccionarios utilizan abreviaturas y símbolos para ahorrar espacio. Es fundamental aprender a interpretarlos correctamente.',
        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Abreviatura', 'Significado'],
            ['s.', 'Sustantivo'],
            ['adj.', 'Adjetivo'],
            ['v.', 'Verbo'],
            ['f.', 'femenino'],
            ['m.', 'masculino'],
            ['pl.', 'plural'],
            ['fig.', 'sentido figurado']
          ],
          textEnd: '\nA continuación se muestra un ejemplo con abreviaturas:\n<bold>fragancia</bold> (s. f.): Olor agradable y suave. fig.: buena fama o reputación.\n\nExplicación: Se indica que la palabra es un sustantivo femenino y se da un significado literal y uno figurado.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Traduciendo abreviaturas',
          instructions: 'Relaciona cada abreviatura con su significado.',
          content: [
            {
              question: '1. adj.',
              options: [
                'a) femenino',
                'b) plural',
                'c) adjetivo',
                'd) sentido figurado',
                'e) verbo'
              ],
              correctAnswer: 'c) adjetivo'
            },
            {
              question: '2. v.',
              options: [
                'a) femenino',
                'b) plural',
                'c) adjetivo',
                'd) sentido figurado',
                'e) verbo'
              ],
              correctAnswer: 'e) verbo'
            },
            {
              question: '3. f.',
              options: [
                'a) femenino',
                'b) plural',
                'c) adjetivo',
                'd) sentido figurado',
                'e) verbo'
              ],
              correctAnswer: 'a) femenino'
            },
            {
              question: '4. pl.',
              options: [
                'a) femenino',
                'b) plural',
                'c) adjetivo',
                'd) sentido figurado',
                'e) verbo'
              ],
              correctAnswer: 'b) plural'
            },
            {
              question: '5. fig.',
              options: [
                'a) femenino',
                'b) plural',
                'c) adjetivo',
                'd) sentido figurado',
                'e) verbo'
              ],
              correctAnswer: 'd) sentido figurado'
            }
          ]
        }
      }                  
    ],

    summary: [
      'Las entradas del diccionario contienen información valiosa como categoría gramatical, definición, ejemplos, etimología, sinónimos, antónimos y uso.',
      'Existen distintos tipos de diccionarios: generales, de sinónimos/antónimos, técnicos y en línea, cada uno útil para distintas necesidades.',
      'Es importante comprender las abreviaturas y símbolos usados en los diccionarios para interpretar correctamente la información presentada.'
    ]    
  },
  {
    id: '3',
    title: 'Unidad 3: Ampliación del vocabulario mediante sinónimos y antónimos',
    topics: [
      {title: 'Definición de sinónimos y antónimos.'},
      {title: 'Sinónimos parciales y totales.'},
      {title: 'Antónimos graduales y complementarios.'},
      {title: 'Uso de sinónimos para evitar repeticiones y enriquecer la expresión.'},
      {title: 'Identificación de matices de significado entre sinónimos.'}
    ],
    introduction: 'Ampliar tu vocabulario no significa solo aprender palabras nuevas, sino también entender sus equivalentes y opuestos. Esta unidad te ayudará a usar sinónimos y antónimos de manera consciente para comunicarte con más precisión, claridad y variedad, tanto al hablar como al escribir.',

    themes: [
      {
        id: '3.1',
        title: 'Definición de sinónimos y antónimos',
        text: '<list><bold>Sinónimos:</bold> Palabras que tienen un significado igual o muy parecido.</list><list><bold>Antónimos:</bold> Palabras con significados opuestos.</list>',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se muestran sinónimos y antónimos:',
          content: '<italic>Rápido</italic>: veloz, ágil (sinónimos); lento (antónimo).',
          textEnd: '"Veloz" y "ágil" tienen significados parecidos a "rápido"; "lento" es lo contrario.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Identifica sinónimos y antónimos',
          instructions: 'Selecciona el sinónimo y el antónimo correspondiente a cada palabra destacada.',
          content: [
            {
              question: '1. Fuerte',
              options: ['a) Débil (antónimo)', 'b) Robusto (sinónimo)', 'c) Lento', 'd) Pequeño'],
              correctAnswer: 'b) Robusto (sinónimo)'
            },
            {
              question: '2. Triste',
              options: ['a) Contento (antónimo)', 'b) Alegre (sinónimo)', 'c) Oscuro', 'd) Sincero'],
              correctAnswer: 'b) Alegre (sinónimo)'
            },
            {
              question: '3. Feliz',
              options: ['a) Enojado', 'b) Contento', 'c) Amable', 'd) Lloroso'],
              correctAnswer: 'b) Contento'
            },
            {
              question: '4. Hablar',
              options: ['a) Decir', 'b) Escuchar', 'c) Mirar', 'd) Andar'],
              correctAnswer: 'a) Decir'
            },
            {
              question: '5. Apagar',
              options: ['a) Encender', 'b) Aparecer', 'c) Cortar', 'd) Gastar'],
              correctAnswer: 'a) Encender'
            }
          ]
        }
      },
      {
        id: '3.2',
        title: 'Sinónimos parciales y totales',
        text: '<list><bold>Totales:</bold> Se pueden intercambiar sin cambiar el significado.</list><list><bold>Parciales:</bold> Tienen significados parecidos, pero se usan en contextos distintos.</list>',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content: '<italic>Casa</italic> y <italic>vivienda</italic> (sinónimos totales)\n<italic>Mirar</italic> y <italic>observar</italic> (sinónimos parciales: "observar" implica más atención).',
          textEnd: '"Casa" y "vivienda" significan lo mismo en cualquier contexto; "mirar" y "observar" no siempre se pueden intercambiar.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: ¿Total o parcial?',
          instructions: 'Indica si los siguientes pares de palabras son sinónimos totales o parciales.',
          content: [
            {
              question: '1. Alegría - Felicidad',
              options: ['Total', 'Parcial'],
              correctAnswer: 'Total'
            },
            {
              question: '2. Comprar - Adquirir',
              options: ['Total', 'Parcial'],
              correctAnswer: 'Total'
            },
            {
              question: '3. Comenzar - Iniciar',
              options: ['Total', 'Parcial'],
              correctAnswer: 'Total'
            },
            {
              question: '4. Niño - Infante',
              options: ['Total', 'Parcial'],
              correctAnswer: 'Parcial'
            },
            {
              question: '5. Ver - Contemplar',
              options: ['Total', 'Parcial'],
              correctAnswer: 'Parcial'
            }
          ]
        }
      },
      {
        id: '3.3',
        title: 'Antónimos graduales y complementarios',
        text: '<list><bold>Graduales:</bold> Existe un punto intermedio (frío/caliente → templado).</list><list><bold>Complementarios:</bold> No hay término medio (vivo/muerto).</list>',
        example: {
          type: 'text',
          textStart: 'Observa el siguiente ejemplo:',
          content: '<italic>Alto - Bajo</italic> (graduales)\n<italic>Presente - Ausente</italic> (complementarios)',
          textEnd: 'En el primer caso hay grados de estatura; en el segundo solo se está o no se está.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Clasifica los antónimos',
          instructions: 'Señala si los siguientes pares son antónimos graduales o complementarios.',
          content: [
            {
              question: '1. Día - Noche',
              options: ['Graduales', 'Complementarios'],
              correctAnswer: 'Graduales'
            },
            {
              question: '2. Bueno - Malo',
              options: ['Graduales', 'Complementarios'],
              correctAnswer: 'Graduales'
            },
            {
              question: '3. Vivo - Muerto',
              options: ['Graduales', 'Complementarios'],
              correctAnswer: 'Complementarios'
            },
            {
              question: '4. Grande - Pequeño',
              options: ['Graduales', 'Complementarios'],
              correctAnswer: 'Graduales'
            },
            {
              question: '5. Encendido - Apagado',
              options: ['Graduales', 'Complementarios'],
              correctAnswer: 'Complementarios'
            }
          ]
        }
      },
      {
        id: '3.4',
        title: 'Uso de sinónimos para enriquecer la expresión',
        text: 'Evitar repeticiones mejora la calidad del texto y lo hace más interesante.',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo, un texto repetitivo es mejorado con sinónimos:',
          content: '<italic>Original:</italic> "El niño era bueno. El niño ayudaba. El niño compartía."\n<italic>Mejorado:</italic> "El niño era bondadoso. Prestaba ayuda a los demás y mostraba generosidad."',
          textEnd: 'Usar sinónimos hace que el texto sea más fluido y menos repetitivo.'
        },
        activity: {
          type: 'input',
          title: 'Actividad: Reescribe con sinónimos',
          instructions: 'Reescribe el siguiente párrafo usando sinónimos para las palabras subrayadas.',
          content: 'El niño era muy bueno. Siempre ayudaba a sus amigos y era muy feliz cuando jugaban juntos.'
        }
      },
      {
        id: '3.5',
        title: 'Matices de significado entre sinónimos',
        text: 'No todos los sinónimos expresan exactamente lo mismo. Algunos tienen matices que cambian la intensidad, el tono o el contexto.',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content: '<italic>Caminar</italic>, <italic>andar</italic>, <italic>pasear</italic>, <italic>deambular</italic>.',
          textEnd: 'Aunque son sinónimos, "pasear" implica disfrute, "deambular" sugiere falta de rumbo.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Elige el mejor sinónimo según el contexto',
          instructions: 'Elige el sinónimo que mejor se adapte al contexto de la oración.',
          content: [
            {
              question: '1. Salió a ______ por la ciudad sin rumbo fijo.',
              options: ['Pasear', 'Deambular', 'Correr', 'Caminar'],
              correctAnswer: 'Deambular'
            },
            {
              question: '2. Decidimos ______ por el parque para relajarnos.',
              options: ['Deambular', 'Trotar', 'Pasear', 'Correr'],
              correctAnswer: 'Pasear'
            },
            {
              question: '3. El atleta ______ a gran velocidad en la pista.',
              options: ['Camina', 'Deambula', 'Corre', 'Pasea'],
              correctAnswer: 'Corre'
            },
            {
              question: '4. En la noche, el anciano solía ______ sin saber bien a dónde ir.',
              options: ['Pasear', 'Correr', 'Deambular', 'Saltar'],
              correctAnswer: 'Deambular'
            },
            {
              question: '5. Nos gusta ______ después de cenar.',
              options: ['Pasear', 'Caminar', 'Deambular', 'Correr'],
              correctAnswer: 'Pasear'
            }
          ]
        }
      }                                    
    ],

    summary: [
      'Los sinónimos permiten expresar ideas similares con distintas palabras.',
      'Los antónimos enriquecen la expresión y permiten contrastar significados.',
      'Existen sinónimos totales (intercambiables) y parciales (contexto específico).',
      'Los antónimos pueden ser graduales (con grados) o complementarios (excluyentes).',
      'Usar sinónimos evita repeticiones y mejora la fluidez de los textos.',
      'Comprender los matices de significado ayuda a elegir la palabra más precisa según el contexto.'
    ]    
  },
  {
    id: '4',
    title: 'Unidad 4: Uso de prefijos y sufijos para deducir significados',
    topics: [
      {title: 'Prefijos comunes:',
        subtopics: [
          'Negación (in-, des-, a-).',
          'Intensidad (super-, ultra-).',
          'Repetición (re-).',
          'Posición (sub-, sobre-).'
        ]
      },
      {title: 'Sufijos comunes:',
        subtopics: [
          'Acción (-ción, -ado).',
          'Cualidad (-oso, -al).',
          'Profesional (-ista, -ero).',
          'Lugar (-ario, -orio).'
        ]
      },
      {title: 'Cambio de categoría gramatical mediante prefijos y sufijos.'}
    ],
    introduction: 'Los prefijos y sufijos son fragmentos que se añaden al inicio o final de una palabra para modificar su significado. Reconocerlos te permite deducir el sentido de muchas palabras desconocidas y ampliar tu vocabulario con mayor rapidez.',

    themes: [
      {
        id: '4.1',
        title: 'Prefijos comunes',
        text: 'Los prefijos se colocan al inicio de una palabra y alteran su significado.',
        example: {
          type: 'table',
          textStart: 'Aquí algunos ejemplos organizados por tipo:',
          content: [
            ['Prefijo', 'Tipo', 'Significado', 'Ejemplo', 'Significado de la palabra'],
            ['in-', 'Negación', 'No, contrario', 'inactivo', 'que no está activo'],
            ['des-', 'Negación', 'Quitar, invertir', 'desorden', 'falta de orden'],
            ['re-', 'Repetición', 'Otra vez', 'rehacer', 'hacer de nuevo'],
            ['sub-', 'Posición', 'Debajo', 'subterráneo', 'debajo de la tierra'],
            ['super-', 'Intensidad', 'Más allá, exceso', 'superpoder', 'poder extraordinario']
          ],
          textEnd: '\nEn el siguiente ejemplo, se puede deducir el significado por el prefijo:\n\n<italic><subheading>“El edificio subterráneo está protegido de los cambios climáticos.”</subheading></italic>\nEl prefijo *sub-* indica que el edificio está *debajo* del nivel del suelo.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Descubre el significado del prefijo',
          instructions: 'Lee cada palabra y selecciona el significado del prefijo que contiene.',
          content: [
            {
              question: '1. Releer',
              options: [
                'Leer por primera vez',
                'Leer mal',
                'Leer nuevamente',
                'Leer en voz alta'
              ],
              correctAnswer: 'Leer nuevamente'
            },
            {
              question: '2. Inmóvil',
              options: [
                'Que no se mueve',
                'Que se mueve mucho',
                'Que es invisible',
                'Que se transforma'
              ],
              correctAnswer: 'Que no se mueve'
            },
            {
              question: '3. Submarino',
              options: [
                'Encima del mar',
                'Lejos del mar',
                'Debajo del mar',
                'Cerca del mar'
              ],
              correctAnswer: 'Debajo del mar'
            },
            {
              question: '4. Desconectar',
              options: [
                'Volver a conectar',
                'Cortar la conexión',
                'Hacer una nueva conexión',
                'Unir varias conexiones'
              ],
              correctAnswer: 'Cortar la conexión'
            },
            {
              question: '5. Superdotado',
              options: [
                'Que tiene pocos talentos',
                'Que no tiene talento',
                'Que tiene talento común',
                'Que tiene talentos extraordinarios'
              ],
              correctAnswer: 'Que tiene talentos extraordinarios'
            }
          ]
        }
      },
      {
        id: '4.2',
        title: 'Sufijos comunes',
        text: 'Los sufijos se colocan al final de una palabra y pueden expresar acciones, cualidades, profesiones o lugares.',
        example: {
          type: 'table',
          textStart: 'Aquí un resumen:',
          content: [
            ['Sufijo', 'Tipo', 'Significado', 'Ejemplo', 'Significado de la palabra'],
            ['-ción', 'Acción', 'Resultado de una acción', 'creación', 'acto de crear'],
            ['-oso', 'Cualidad', 'Abundancia o intensidad', 'sabroso', 'que tiene buen sabor'],
            ['-ista', 'Profesional', 'Persona que practica algo', 'pianista', 'persona que toca el piano'],
            ['-ario', 'Lugar', 'Espacio relacionado', 'acuario', 'recipiente para peces']
          ],
          textEnd: '\nA continuación se muestra un ejemplo:\n\n<italic><subheading>“El jardinero trabaja con dedicación para mantener todo limpio.”</subheading></italic>\nEl sufijo <bold>-ero</bold> indica que la persona se dedica profesionalmente al cuidado del jardín.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Identifica el significado del sufijo',
          instructions: 'Escoge el significado correcto del sufijo de cada palabra.',
          content: [
            {
              question: '1. Panadero',
              options: [
                'Lugar con pan',
                'Acción de pan',
                'Persona que hace pan',
                'Pan en el horno'
              ],
              correctAnswer: 'Persona que hace pan'
            },
            {
              question: '2. Amistoso',
              options: [
                'Lleno de amistad',
                'Relacionado con el amor',
                'Lugar para amigos',
                'Persona sola'
              ],
              correctAnswer: 'Lleno de amistad'
            },
            {
              question: '3. Estación',
              options: [
                'Persona que estaciona',
                'Acción o lugar donde algo ocurre',
                'Profesional de transporte',
                'Tipo de palabra'
              ],
              correctAnswer: 'Acción o lugar donde algo ocurre'
            },
            {
              question: '4. Limosnero',
              options: [
                'Persona que da limosna',
                'Persona que pide limosna',
                'Lugar de limosnas',
                'Acción de limosnear'
              ],
              correctAnswer: 'Persona que pide limosna'
            },
            {
              question: '5. Laboratorio',
              options: [
                'Acción de trabajar',
                'Lugar donde se trabaja',
                'Persona que trabaja',
                'Objeto de laboratorio'
              ],
              correctAnswer: 'Lugar donde se trabaja'
            }
          ]
        }
      },
      {
        id: '4.3',
        title: 'Cambio de categoría gramatical mediante prefijos y sufijos',
        text: 'Los prefijos y sufijos también pueden transformar la categoría gramatical de una palabra (de verbo a sustantivo, de adjetivo a sustantivo, etc.).',
        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Base', 'Afijo', 'Nueva palabra', 'Nueva categoría'],
            ['feliz', '-idad', 'felicidad', 'Sustantivo'],
            ['limpiar', '-eza', 'limpieza', 'Sustantivo'],
            ['activo', 'in-', 'inactivo', 'Adjetivo'],
            ['nación', '-al', 'nacional', 'Adjetivo'],
            ['correr', 're-', 'recorrer', 'Verbo']
          ],
          textEnd: '\nEn el siguiente ejemplo se observa un cambio de categoría:\n<italic><subheading>“Su felicidad era evidente al ver el regalo.”</subheading></italic>\nLa palabra "feliz" (adjetivo) cambia a "felicidad" (sustantivo) con el sufijo <italic>-idad</italic>.'
        },
        activity: {
          type: 're-write',
          title: 'Actividad: Transforma las palabras',
          instructions: 'Reescribe cada palabra transformándola con un prefijo o sufijo según lo indicado.',
          content: [
            {
              original: 'triste → sustantivo',
              correct: 'tristeza'
            },
            {
              original: 'moderno → antónimo',
              correct: 'anticuado'
            },
            {
              original: 'crear → sustantivo',
              correct: 'creación'
            },
            {
              original: 'nación → adjetivo',
              correct: 'nacional'
            },
            {
              original: 'movilizar → antónimo',
              correct: 'inmovilizar'
            }
          ]
        }
      }                        
    ],

    summary: [
      'Los prefijos se añaden al inicio de la palabra y modifican su significado (negación, repetición, posición, etc.).',
      'Los sufijos se agregan al final de la palabra y aportan significados como acción, cualidad, profesión o lugar.',
      'Algunos prefijos y sufijos permiten cambiar la categoría gramatical de una palabra.',
      'Reconocer prefijos y sufijos facilita la comprensión de palabras nuevas y enriquece el vocabulario.'
    ]    
  },
  {
    id: '5',
    title: 'Unidad 5: Expresiones idiomáticas y frases hechas',
    topics: [
      {title: 'Definición de expresiones idiomáticas y frases hechas.'},
      {title: 'Significado literal y figurado.'},
      {title: 'Ejemplos comunes de frases hechas y su origen.'},
      {title: 'Uso adecuado según el contexto y el registro lingüístico.'}
    ],
    introduction: 'Las expresiones idiomáticas y frases hechas son construcciones lingüísticas cuyo significado no se deduce literalmente de las palabras que las componen. Comprenderlas es fundamental para interpretar correctamente textos y expresiones orales en diversos contextos.',

    themes: [
      {
        id: '5.1',
        title: '¿Qué son las expresiones idiomáticas y frases hechas?',
        text: '<list>Expresión idiomática: conjunto de palabras que juntas tienen un significado diferente al que tienen por separado.</list><list>Frase hecha: expresión fija y establecida, usada frecuentemente en la lengua oral y escrita.</list>',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content: '<italic>“Estar entre la espada y la pared.”</italic>',
          textEnd: 'Literalmente, estar entre una espada y una pared no tiene sentido práctico, pero figuradamente significa estar en una situación difícil, sin salida fácil.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: ¿Literal o figurado?',
          instructions: 'Indica si la oración tiene un significado literal (L) o figurado (F).',
          content: [
            {
              question: '1. María *rompió el hielo* en la reunión hablando de su perro.',
              options: ['L', 'F'],
              correctAnswer: 'F'
            },
            {
              question: '2. El niño *se cayó* en el patio.',
              options: ['L', 'F'],
              correctAnswer: 'L'
            },
            {
              question: '3. Cuando se fue la luz, todos *se quedaron en blanco*.',
              options: ['L', 'F'],
              correctAnswer: 'F'
            },
            {
              question: '4. Juan *dio en el clavo* con su propuesta.',
              options: ['L', 'F'],
              correctAnswer: 'F'
            },
            {
              question: '5. Clara *tiene los pies en la tierra*.',
              options: ['L', 'F'],
              correctAnswer: 'F'
            }
          ]
        }
      },
      {
        id: '5.2',
        title: 'Significado literal y figurado',
        text: 'El significado literal es aquel que se entiende de manera directa, tal como se dice. En cambio, el significado figurado es simbólico o metafórico, y se utiliza para expresar ideas de manera más creativa o indirecta.',
      
        example: {
          type: 'table',
          textStart: 'A continuación se presenta una tabla con expresiones que muestran ambos significados:',
          content: [
            ['Expresión', 'Significado literal', 'Significado figurado'],
            ['Tirar la toalla', 'Lanzar una toalla al suelo', 'Rendirse, abandonar una lucha'],
            ['Estar en las nubes', 'Flotar entre las nubes', 'Estar distraído'],
            ['Hacer la vista gorda', 'No mirar', 'Ignorar algo a propósito'],
            ['Estar hasta las narices', 'Tener algo cerca de la nariz', 'Estar harto o cansado de algo'],
            ['Buscarle tres pies al gato', 'Contar los pies de un gato', 'Complicar algo innecesariamente']
          ],
          textEnd: '\nEn el siguiente ejemplo se usa una expresión idiomática en contexto:<italic><subheading>“Mi jefe hizo la vista gorda cuando llegué tarde.”</subheading></italic>\nEl jefe eligió ignorar voluntariamente que la persona llegó tarde.'
        },
      
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Interpreta la expresión',
          instructions: 'Selecciona el significado correcto de cada expresión idiomática.',
          content: [
            {
              question: '1. “Tirar la toalla”',
              options: [
                'Secarse con una toalla',
                'Hacer limpieza',
                'Rendirse',
                'Lanzar algo al suelo'
              ],
              correctAnswer: 'Rendirse'
            },
            {
              question: '2. “Estar en las nubes”',
              options: [
                'Volar',
                'Soñar despierto',
                'Tener frío',
                'Llorar'
              ],
              correctAnswer: 'Soñar despierto'
            },
            {
              question: '3. “Hacer la vista gorda”',
              options: [
                'Ver mal',
                'Hacer ejercicio visual',
                'Ignorar algo intencionalmente',
                'Cerrar los ojos por cansancio'
              ],
              correctAnswer: 'Ignorar algo intencionalmente'
            },
            {
              question: '4. “Estar hasta las narices”',
              options: [
                'Tener alergia',
                'Estar muy molesto',
                'Tener frío',
                'Oler algo muy fuerte'
              ],
              correctAnswer: 'Estar muy molesto'
            },
            {
              question: '5. “Buscarle tres pies al gato”',
              options: [
                'Buscar animales',
                'Estudiar biología',
                'Hacer algo innecesariamente complicado',
                'Contar patas'
              ],
              correctAnswer: 'Hacer algo innecesariamente complicado'
            }
          ]
        }
      },
      {
        id: '5.3',
        title: 'Uso adecuado según contexto y registro',
        text: 'Algunas expresiones son informales y se usan más en la conversación cotidiana, mientras que otras son aceptables en textos escritos o más formales.',
      
        example: {
          type: 'table',
          textStart: 'A continuación se muestra una tabla con expresiones, su registro y contexto apropiado:',
          content: [
            ['Expresión', 'Registro', 'Contexto apropiado'],
            ['Estar hasta el cuello', 'Informal', 'Conversaciones casuales'],
            ['A buen entendedor, pocas palabras', 'Formal o informal', 'Reuniones, escritos argumentativos'],
            ['No tener pelos en la lengua', 'Informal', 'Críticas o comentarios directos'],
            ['Más vale tarde que nunca', 'General', 'Conversaciones o textos reflexivos'],
            ['Meter la pata', 'Informal', 'Reconocer errores']
          ],
          textEnd: '\nEn el siguiente ejemplo se emplea una frase hecha informal:<italic><subheading>“Creo que metí la pata cuando mencioné su exnovio.”</subheading></italic>\n“Meter la pata” se usa informalmente para reconocer que se cometió un error.'
        },
      
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Contexto correcto',
          instructions: 'Elige la opción donde se usaría mejor la expresión dada.',
          content: [
            {
              question: '1. “Más vale tarde que nunca”',
              options: [
                'Disculparse por llegar con retraso',
                'Pedir un taxi',
                'Cerrar una puerta',
                'Comer un postre'
              ],
              correctAnswer: 'Disculparse por llegar con retraso'
            },
            {
              question: '2. “No tener pelos en la lengua”',
              options: [
                'Describir a alguien directo al hablar',
                'Hablar con dificultad',
                'Tener hambre',
                'Tener buena dicción'
              ],
              correctAnswer: 'Describir a alguien directo al hablar'
            },
            {
              question: '3. “Estar hasta el cuello”',
              options: [
                'Tener ropa abrigada',
                'Tener mucho trabajo o problemas',
                'Estar en la piscina',
                'Pasar frío'
              ],
              correctAnswer: 'Tener mucho trabajo o problemas'
            },
            {
              question: '4. “A buen entendedor, pocas palabras”',
              options: [
                'En un contexto donde se espera discreción',
                'Cuando alguien habla mucho',
                'En una receta de cocina',
                'En una canción'
              ],
              correctAnswer: 'En un contexto donde se espera discreción'
            },
            {
              question: '5. “Meter la pata”',
              options: [
                'Felicitar a alguien',
                'Olvidar una fecha importante',
                'Arreglar una situación',
                'Hacer ejercicio'
              ],
              correctAnswer: 'Olvidar una fecha importante'
            }
          ]
        }
      },
      {
        id: '5.4',
        title: '',
        text: '',
        activity: {
          type: 'input',
          title: 'Actividad: Redacta con expresiones idiomáticas',
          instructions: 'Escribe un párrafo corto (5-6 líneas) en el que uses al menos tres expresiones idiomáticas de las vistas en esta unidad. Puedes hablar de una experiencia personal, una anécdota ficticia o una situación cotidiana.',
          content: ''
        }
      }                  
    ],

    summary: [
      'Las expresiones idiomáticas y frases hechas son construcciones que no deben interpretarse literalmente.',
      'Tienen un significado figurado que se debe aprender por uso o contexto.',
      'Algunas expresiones tienen origen histórico o cultural.',
      'Es importante usarlas según el contexto y el registro adecuado (formal/informal).',
      'Dominar estas expresiones mejora la comprensión lectora y la fluidez comunicativa.'
    ]    
  }
]