import { Unit } from "@/core/domain/entities/Unit";

export const module6: readonly Unit[] = [
  {
    id: '1',
    title: 'Unidad 1: Partes de una oración simple',
    topics: [
      {title: 'Sujeto y predicado.'},
      {title: 'Núcleo del sujeto y núcleo del predicado.'},
      {title: 'Complementos del verbo:', 
        subtopics: [
          'Objeto directo.',
          'Objeto indirecto.',
          'Complemento circunstancial (de tiempo, lugar, modo, causa).'
        ]
      },
      {title: 'Modificadores directos e indirectos del sujeto.'}
    ],
    introduction: 'En esta unidad, el estudiante aprenderá a identificar los elementos básicos que conforman una oración simple y su función dentro de la estructura gramatical. Comprender estos elementos es esencial para construir oraciones claras y coherentes, y para analizar correctamente la función de cada palabra en un enunciado.',

    themes: [
      {
        id: '1.1',
        title: 'Sujeto y predicado',
        text: 'Una oración simple siempre se divide en dos partes fundamentales:\n\n<list><bold>Sujeto</bold>: Es la parte que indica quién realiza la acción o de quién se habla.</list><list><bold>Predicado</bold>: Es lo que se dice del sujeto; incluye el verbo y toda la información adicional.</list>',
      
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo de oración con sus partes principales:',
          content: '“La niña canta una canción.”\nSujeto: “La niña”\nPredicado: “canta una canción”',
          textEnd: 'Este ejemplo muestra una oración simple donde se puede identificar claramente quién realiza la acción (la niña) y qué se dice de ella (que canta una canción).'
        },
      
        subthemes: [
          {
            id: '1.1.1',
            title: 'Características importantes',
            text: '<list>El sujeto debe concordar en persona y número con el verbo del predicado.</list><list>A veces, el sujeto no aparece explícito en la oración. En ese caso se llama <italic>sujeto tácito o elíptico</italic>.</list>',
      
            example: {
              type: 'text',
              textStart: 'Observa el siguiente ejemplo con sujeto tácito:',
              content: '“Corremos por el parque.” (Nosotros)',
              textEnd: 'Aquí no se menciona el sujeto, pero se sobreentiende que es “nosotros” por la forma verbal “corremos”.'
            },

            activity: {
              type: 'classify-text',
              title: 'Actividad: Identifica sujeto y predicado',
              instructions: 'Lee los siguientes fragmentos y clasifícalos como sujeto o predicado:',
              options: ['Sujeto', 'Predicado'],
              content: [
                { text: 'El perro', correctAnswer: 'Sujeto' },
                { text: 'duerme en su cama', correctAnswer: 'Predicado' },
                { text: 'Comimos pastel de chocolate', correctAnswer: 'Predicado' }, // sujeto tácito
                { text: 'Las flores del jardín', correctAnswer: 'Sujeto' },
                { text: 'crecieron rápido', correctAnswer: 'Predicado' },
                { text: 'Ana y Pedro', correctAnswer: 'Sujeto' },
                { text: 'corren por la playa', correctAnswer: 'Predicado' }
              ]
            }
          }
        ],
      },
      {
        id: '1.2',
        title: 'Núcleo del sujeto y núcleo del predicado',
        text: 'Cada parte de la oración tiene un elemento central:\n\n<list><bold>Núcleo del sujeto</bold>: Generalmente es un sustantivo o pronombre.</list><list><bold>Núcleo del predicado</bold>: Siempre es el verbo principal que indica la acción.</list>',
      
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo con identificación de los núcleos:',
          content: '“Los estudiantes atentos escuchaban con cuidado.”\nNúcleo del sujeto: estudiantes\nNúcleo del predicado: escuchaban',
          textEnd: 'Este ejemplo permite observar cómo el núcleo del sujeto (estudiantes) es acompañado por modificadores (“los”, “atentos”) y cómo el núcleo del predicado (escuchaban) lleva un complemento (“con cuidado”).'
        },

        subthemes: [
          {
            id: '1.2.1',
            title: 'Estructura visual:',
            text: '',
            example: {
              type: 'table',
              textStart: '',
              content: [
                ['Parte de la oración', 'Elemento', 'Núcleo'],
                ['Sujeto', 'Los estudiantes atentos', 'estudiantes'],
                ['Predicado', 'escuchaban con cuidado', 'escuchaban']
              ],
              textEnd: ''
            },
            note: '<bold>Nota:</bold> Los modificadores acompañan al núcleo, pero no lo reemplazan.'
          }
        ]
      },
      {
        id: '1.4',
        title: 'Complementos del verbo',
        text: 'Los complementos verbales amplían o completan el significado del verbo.',
        
        subthemes: [
          {
            id: '1.4.1',
            title: 'Objeto directo (OD)',
            text: '<list>Responde a la pregunta “¿Qué?” respecto al verbo.</list><list>Se puede sustituir por los pronombres lo, la, los, las.</list>',
            example: {
              type: 'text',
              textStart: 'Observa el siguiente ejemplo:',
              content: '“Pedro comió una manzana.”\nOD: una manzana (Pedro la comió)',
              textEnd: 'Este ejemplo muestra que “una manzana” es el objeto directo porque recibe directamente la acción de “comer”.'
            }
          },
          {
            id: '1.4.2',
            title: 'Objeto indirecto (OI)',
            text: '<list>Responde a la pregunta “¿A quién?” o “¿Para quién?”</list><list>Se puede sustituir por le, les.</list>',
            example: {
              type: 'text',
              textStart: 'A continuación se presenta un ejemplo:',
              content: '“María regaló flores a su madre.”\nOI: a su madre (María le regaló flores)',
              textEnd: 'Aquí, “a su madre” es el objeto indirecto porque es el destinatario de lo que María regaló.'
            }
          },
          {
            id: '1.4.3',
            title: 'Complemento circunstancial (CC)',
            text: 'Aporta información adicional sobre las circunstancias de la acción: tiempo, lugar, modo, causa, finalidad, etc.',
            example: {
              type: 'text',
              textStart: 'Observa el ejemplo siguiente:',
              content: '“Trabajamos en silencio durante la tarde.”\nCC de modo: en silencio\nCC de tiempo: durante la tarde',
              textEnd: 'Este ejemplo muestra cómo los complementos circunstanciales agregan detalles sobre cómo y cuándo ocurre la acción.'
            }
          }
        ],
      
        example: {
          type: 'table',
          textStart: 'Tabla de tipos de complementos circunstanciales:',
          content: [
            ['Tipo', 'Pregunta', 'Ejemplo'],
            ['Tiempo', '¿Cuándo?', 'durante la tarde'],
            ['Lugar', '¿Dónde?', 'en la biblioteca'],
            ['Modo', '¿Cómo?', 'con entusiasmo'],
            ['Causa', '¿Por qué?', 'por su esfuerzo']
          ],
          textEnd: ''
        }
      },
      {
        id: '1.5',
        title: 'Modificadores del sujeto',
        text: 'Los modificadores son palabras o frases que acompañan al núcleo del sujeto y aportan precisión.',
      
        subthemes: [
          {
            id: '1.5.1',
            title: 'Modificador directo (MD)',
            text: '<list>Se une al núcleo del sujeto sin preposición.</list>\n<list>Suelen ser adjetivos, artículos o determinantes.</list>',
            example: {
              type: 'text',
              textStart: 'A continuación se muestra un ejemplo:',
              content: '“La casa antigua fue demolida.”\nNúcleo: casa | MD: La, antigua',
              textEnd: 'En este caso, “La” y “antigua” modifican directamente a “casa”, aportando información sobre el artículo y la cualidad del sustantivo.'
            }
          },
          {
            id: '1.5.2',
            title: 'Modificador indirecto (MI)',
            text: 'Se une al núcleo del sujeto mediante una preposición.',
            example: {
              type: 'text',
              textStart: 'Observa el siguiente ejemplo:',
              content: '“El niño de la casa está llorando.”\nNúcleo: niño | MI: de la casa',
              textEnd: 'Aquí, “de la casa” modifica indirectamente al núcleo “niño”, indicando pertenencia o relación.'
            }
          }
        ],
      }                   
    ],

    summary: [
      'Las oraciones simples tienen una estructura básica: sujeto + predicado.',
      'El núcleo del sujeto suele ser un sustantivo, mientras que el del predicado es un verbo.',
      'Los verbos pueden ir acompañados de objetos directos e indirectos, y de complementos circunstanciales.',
      'Los modificadores del sujeto (directos o indirectos) enriquecen y precisan el significado del núcleo.',
      'Dominar la identificación de estos elementos permite construir mensajes coherentes y comprender mejor los textos.'
    ]    
  },
  {
    id: '2',
    title: 'Unidad 2: Concordancia entre sujeto y predicado',
    topics: [
      {title: 'Concordancia en número (singular y plural).'},
      {title: 'Concordancia en persona (primera, segunda y tercera).'},
      {title: 'Concordancia con sujetos compuestos.'},
      {title: 'Concordancia con sujetos colectivos e impersonales.'}
    ],
    introduction: 'En esta unidad, el estudiante aprenderá las reglas de concordancia gramatical entre el sujeto y el predicado, un aspecto fundamental para lograr oraciones correctas y coherentes. La concordancia consiste en hacer coincidir el verbo con el sujeto en cuanto al número (singular o plural) y la persona (primera, segunda o tercera). Además, se abordarán casos especiales como sujetos compuestos, colectivos e impersonales.',

    themes: [
      {
        id: '2.1',
        title: 'Concordancia en número',
        text: 'El verbo debe concordar en número con el sujeto: si el sujeto está en singular, el verbo también; si está en plural, el verbo también.',
      
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content:
            '“<italic>El niño juega en el jardín.</italic>”\n\n<bold>Sujeto:</bold> El niño (singular)\n<bold>Verbo:</bold> juega (forma singular)\n\n“<italic>Los niños juegan en el jardín.</italic>”\n\n<bold>Sujeto:</bold> Los niños (plural)\n<bold>Verbo:</bold> juegan (forma plural)',
          textEnd: 'En estos ejemplos se observa la correcta correspondencia entre el número del sujeto y el del verbo.'
        },
      
        activity: {
          type: 'fill-in-the-blanks',
          title: 'Actividad: Concordancia en número',
          instructions: 'Completa las siguientes oraciones con la forma correcta del verbo según el número del sujeto.',
          content: [
            { sentence: 'La maestra _______ (explicar) la lección con claridad.', answer: 'explica' },
            { sentence: 'Los perros _______ (ladrar) durante la noche.', answer: 'ladran' },
            { sentence: 'Mi hermana _______ (leer) muchos libros.', answer: 'lee' },
            { sentence: 'Las chicas _______ (cantar) en el escenario.', answer: 'cantan' },
            { sentence: 'El gato _______ (dormir) en el sofá.', answer: 'duerme' }
          ]
        }
      },
      {
        id: '2.2',
        title: 'Concordancia en persona',
        text: 'Los verbos deben concordar con el sujeto en persona gramatical:\n\n<list><bold>Primera persona:</bold> yo, nosotros/as</list><list><bold>Segunda persona:</bold> tú, ustedes, vos</list><list><bold>Tercera persona:</bold> él, ella, ellos/as, nombres</list>',
      
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content:
            '“Yo camino por el parque.” (Primera persona singular)\n\n“Tú escribes muy bien.” (Segunda persona singular)\n\n“Ellos juegan al fútbol.” (Tercera persona plural)',
          textEnd: 'En estos ejemplos, el verbo cambia su forma para concordar con la persona del sujeto.'
        },
      
        activity: {
          type: 'fill-in-the-blanks',
          title: 'Actividad: Concordancia en persona',
          instructions: 'Completa cada oración con la forma correcta del verbo según la persona del sujeto.',
          content: [
            {
              sentence: 'Yo _______ (leer/lees/leo) todas las noches.',
              answer: 'leo'
            },
            {
              sentence: 'Nosotros _______ (corres/corremos/corre) por el parque.',
              answer: 'corremos'
            },
            {
              sentence: 'Ustedes _______ (escribimos/escriben/escribes) poemas.',
              answer: 'escriben'
            },
            {
              sentence: 'Ella _______ (canta/cantas/canto) muy bien.',
              answer: 'canta'
            },
            {
              sentence: 'Tú _______ (dibujas/dibujo/dibujan) muy bonito.',
              answer: 'dibujas'
            }
          ]
        }
      },
      {
        id: '2.3',
        title: 'Concordancia con sujetos compuestos',
        text: 'Cuando el sujeto está formado por dos o más núcleos unidos por conjunciones (y, e, ni), el verbo se usa en plural.',
      
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content:
            '“<italic>Juan y Pedro estudian medicina.</italic>”\n\n<bold>Sujeto compuesto:</bold> Juan y Pedro\n<bold>Verbo:</bold> estudian (forma plural)\n\n“<italic>Ni la lluvia ni el viento detuvieron la carrera.</italic>”\n\n<bold>Sujeto compuesto negativo:</bold> Ni la lluvia ni el viento\n<bold>Verbo:</bold> detuvieron (forma plural)',
          textEnd: 'La presencia de múltiples sujetos exige que el verbo esté en plural.'
        },
      
        activity: {
          type: 'fill-in-the-blanks',
          title: 'Actividad: Concordancia con sujetos compuestos',
          instructions: 'Subraya el sujeto compuesto y escribe el verbo en la forma correcta.',
          content: [
            { sentence: 'Mi madre y mi padre _______ (trabajar) en casa.', answer: 'trabajan' },
            { sentence: 'El perro y el gato _______ (jugar) juntos.', answer: 'juegan' },
            { sentence: 'Carlos y tú _______ (correr) por el parque.', answer: 'corren' },
            { sentence: 'Ni Marta ni Julia _______ (aceptar) la invitación.', answer: 'aceptaron' },
            { sentence: 'Mis primos y yo _______ (viajar) cada verano.', answer: 'viajamos' }
          ]
        }
      },
      {
        id: '2.4',
        title: 'Concordancia con sujetos colectivos e impersonales',
        text: 'Los sustantivos colectivos (como "gente", "multitud", "equipo") aunque refieren a muchas personas, son gramaticalmente singulares, por lo que el verbo va en singular.',
      
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content: '<italic>“La multitud aplaudió con entusiasmo.”</italic>\n<bold>Sujeto colectivo:</bold> La multitud\n<bold>Verbo:</bold> aplaudió (forma singular)',
          textEnd: 'Por otro lado, las oraciones impersonales no tienen sujeto. En ellas, el verbo se usa en tercera persona del singular.'
        },
        note: 'Observa los siguientes ejemplos de oraciones impersonales:\n\n"Llueve mucho en esta región."\n"Hace frío esta mañana."',
      
        activity: {
          type: 'classify-text',
          title: 'Actividad: Concordancia con colectivos e impersonales',
          instructions: 'Lee cada oración e indica si se trata de una oración con sujeto colectivo o impersonal. Luego, evalúa si la concordancia verbal es correcta.',
          options: ['Colectivo', 'Impersonal'],
          content: [
            {
              text: '1. El equipo ganó el partido.',
              correctAnswer: 'Colectivo'
            },
            {
              text: '2. Hace mucho calor en verano.',
              correctAnswer: 'Impersonal'
            },
            {
              text: '3. La gente gritaban emocionada.',
              correctAnswer: 'Colectivo'
            },
            {
              text: '4. Hay comida para todos.',
              correctAnswer: 'Impersonal'
            },
            {
              text: '5. La familia cenó junta anoche.',
              correctAnswer: 'Colectivo'
            }
          ]
        }
      }                     
    ],

    summary: [
      'La concordancia entre sujeto y predicado asegura coherencia gramatical en la oración.',
      'El verbo debe coincidir con el sujeto en número (singular/plural) y persona (1.ª, 2.ª, 3.ª).',
      'En sujetos compuestos, el verbo va en plural.',
      'Los sujetos colectivos usan verbo en singular.',
      'Las oraciones impersonales se construyen con verbos en tercera persona singular.'
    ]    
  },
  {
    id: '3',
    title: 'Unidad 3: Tipos de oraciones compuestas',
    topics: [
      {title: 'Definición de oración compuesta.'},
      {title: 'Oraciones yuxtapuestas:'},
      {title: 'Oraciones coordinadas:',
        subtopics: [
          'Coordinadas copulativas.',
          'Coordinadas disyuntivas.',
          'Coordinadas adversativas.',
          'Coordinadas explicativas.',
          'Coordinadas distributivas.'
        ]
      },
      {title: 'Oraciones subordinadas:',
        subtopics: [
          'Sustantivas.',
          'Adjetivas.',
          'Adverbiales.'
        ]
      }
    ],
    introduction: 'Esta unidad enseña a diferenciar y construir oraciones compuestas, considerando los distintos tipos de relación entre las oraciones que las conforman. El dominio de estas estructuras permite expresar ideas complejas con mayor claridad, cohesión y precisión en el discurso.',

    themes: [
      {
        id: '3.1',
        title: '¿Qué es una oración compuesta?',
        text: 'Una <bold>oración compuesta</bold> está formada por dos o más proposiciones (oraciones simples) unidas entre sí. Estas proposiciones pueden estar relacionadas por signos de puntuación, conjunciones o palabras subordinantes.',
      
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content: '“Estudiamos toda la tarde, terminamos la tarea y vimos una película.”',
          textEnd: 'Este ejemplo contiene tres proposiciones unidas por comas y la conjunción “y”, formando una oración compuesta.'
        }
      },
      {
        id: '3.2',
        title: 'Oraciones yuxtapuestas',
        text: 'Las oraciones yuxtapuestas son aquellas que se unen sin nexos, utilizando signos de puntuación como la coma (,), el punto y coma (;) o los dos puntos (:).',
      
        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: '“Llegó el profesor; los alumnos guardaron silencio.”',
          textEnd: 'En este ejemplo, las dos proposiciones están separadas por punto y coma, sin ninguna conjunción, lo que caracteriza a las oraciones yuxtapuestas.'
        },
      
        activity: {
          type: 'fill-in-the-blanks',
          title: 'Actividad: Identifica oraciones yuxtapuestas',
          instructions: 'Lee cada oración e indica si están unidas únicamente por signos de puntuación (coma, punto y coma, dos puntos). Escribe "yuxtapuesta" si cumple con esta condición.',
          content: [
            { sentence: 'Salió el sol, los pájaros cantaron.', answer: 'yuxtapuesta' },
            { sentence: 'Estudiamos mucho; aprobamos el examen.', answer: 'yuxtapuesta' },
            { sentence: 'Juan se cayó: se lastimó la pierna.', answer: 'yuxtapuesta' },
            { sentence: 'No traje paraguas, me mojé.', answer: 'yuxtapuesta' },
            { sentence: 'Compramos los boletos, entramos a la función.', answer: 'yuxtapuesta' }
          ]
        }
      },
      {
        id: '3.3',
        title: 'Oraciones coordinadas',
        text: 'Las oraciones <bold>coordinadas</bold> están formadas por proposiciones independientes unidas por conjunciones. No dependen una de la otra para tener sentido completo.',
      
        subthemes: [
          {
            id: '3.3.1',
            title: 'Copulativas',
            text: '<list>Unen ideas que se suman.</list><list>Nexos: y, e, ni.</list>',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '“Luis toca la guitarra y canta muy bien.”',
              textEnd: ''
            }
          },
          {
            id: '3.3.2',
            title: 'Disyuntivas',
            text: '<list>Expresan opciones o alternativas.</list><list>Nexos: o, u.</list>',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '“¿Vienes conmigo o prefieres quedarte?”',
              textEnd: ''
            }
          },
          {
            id: '3.3.3',
            title: 'Adversativas',
            text: '<list>Indican oposición entre las proposiciones.</list><list>Nexos: pero, aunque, sin embargo, no obstante, sino.</list>',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '“Quería ir al cine, pero no tenía dinero.”',
              textEnd: ''
            }
          },
          {
            id: '3.3.4',
            title: 'Explicativas',
            text: '<list>La segunda proposición aclara o explica la primera.</list><list>Nexos: es decir, o sea, esto es.</list>',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '“Es muy aplicado, es decir, siempre entrega sus tareas.”',
              textEnd: ''
            }
          },
          {
            id: '3.3.5',
            title: 'Distributivas',
            text: '<list>Expresan acciones alternadas o distribuidas.</list><list>Nexos: ya... ya, bien... bien, unos... otros.</list>',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '“Unos cantaban, otros bailaban.”',
              textEnd: ''
            }
          }
        ],
      
        activity: {
          type: 'classify-text',
          title: 'Actividad: Clasifica oraciones coordinadas',
          instructions: 'Lee cada oración y clasifícala según el tipo de coordinación que presenta.',
          options: ['Copulativa', 'Disyuntiva', 'Adversativa', 'Explicativa', 'Distributiva'],
          content: [
            {
              text: '1. María estudia y su hermana trabaja.',
              correctAnswer: 'Copulativa'
            },
            {
              text: '2. Puedes tomar café o té.',
              correctAnswer: 'Disyuntiva'
            },
            {
              text: '3. Quiso entrar, pero ya habían cerrado.',
              correctAnswer: 'Adversativa'
            },
            {
              text: '4. El viaje fue largo, es decir, cansado.',
              correctAnswer: 'Explicativa'
            },
            {
              text: '5. Ya ríe, ya llora.',
              correctAnswer: 'Distributiva'
            }
          ]
        }
      },
      {
        id: '3.4',
        title: 'Oraciones subordinadas',
        text: 'Las oraciones <bold>subordinadas</bold> dependen de otra proposición principal para tener sentido. Se introducen mediante nexos subordinantes y cumplen funciones dentro de la oración principal (como sujeto, complemento, etc.).',
      
        subthemes: [
          {
            id: '3.4.1',
            title: 'Subordinadas sustantivas',
            text: '<list>Funcionan como un sustantivo dentro de la oración.</list>',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '“Me alegra que hayas venido.”\n(La proposición “que hayas venido” funciona como complemento del verbo “alegra”.)',
              textEnd: ''
            }
          },
          {
            id: '3.4.2',
            title: 'Subordinadas adjetivas',
            text: '<list>Desempeñan la función de un adjetivo, calificando a un sustantivo.</list>',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '“El libro que me prestaste es interesante.”\n(“Que me prestaste” califica a “libro”.)',
              textEnd: ''
            }
          },
          {
            id: '3.4.3',
            title: 'Subordinadas adverbiales',
            text: '<list>Cumplen la función de un adverbio (indican tiempo, lugar, modo, causa, etc.).</list>',
            example: {
              type: 'text',
              textStart: 'Ejemplo:',
              content: '“Lo hice porque me lo pediste.”\n(“Porque me lo pediste” indica causa.)',
              textEnd: ''
            }
          }
        ],
      
        activity: {
          type: 'classify-text',
          title: 'Actividad: Identifica oraciones subordinadas',
          instructions: 'Señala el tipo de oración subordinada (sustantiva, adjetiva o adverbial) presente en cada oración.',
          options: ['Sustantiva', 'Adjetiva', 'Adverbial'],
          content: [
            {
              text: '1. Espero que llegues a tiempo.',
              correctAnswer: 'Sustantiva'
            },
            {
              text: '2. El niño que corre es mi sobrino.',
              correctAnswer: 'Adjetiva'
            },
            {
              text: '3. Fuimos al parque cuando terminó la lluvia.',
              correctAnswer: 'Adverbial'
            },
            {
              text: '4. Me molesta que hablen durante la clase.',
              correctAnswer: 'Sustantiva'
            },
            {
              text: '5. La casa donde nací está lejos.',
              correctAnswer: 'Adjetiva'
            }
          ]
        }
      }                    
    ],

    summary: [
      'Las oraciones compuestas están formadas por dos o más proposiciones.',
      'Las yuxtapuestas se unen con signos de puntuación.',
      'Las coordinadas se enlazan con conjunciones y mantienen independencia.',
      'Las subordinadas dependen de la proposición principal y cumplen funciones gramaticales específicas.',
      'Identificar el tipo de oración compuesta permite mejorar la estructura y claridad de los textos complejos.'
    ]    
  },
  {
    id: '4',
    title: 'Unidad 4: Uso de nexos',
    topics: [
      {title: 'Definición y función de los nexos.'},
      {title: 'Nexos de coordinación:', 
        subtopics: [
          'Copulativos (y, e, ni).',
          'Disyuntivos (o, u).',
          'Adversativos (pero, sino, aunque).',
          'Explicativos (es decir, o sea).'
        ]
      },
      {title: 'Nexos de subordinación:',
        subtopics: [
          'Causales (porque, ya que).',
          'Finales (para que, a fin de que).',
          'Temporales (cuando, mientras).',
          'Condicionales (si, en caso de que).',
          'Concesivos (aunque, por más que).',
          'Comparativos (como, igual que).'
        ]
      }
    ], 
    introduction: 'En esta unidad, el estudiante aprenderá a utilizar correctamente los nexos para unir oraciones simples y formar oraciones compuestas. Los nexos son palabras o grupos de palabras que permiten relacionar ideas, expresar relaciones lógicas y construir textos coherentes y cohesionados.',

    themes: [
      {
        id: '4.1',
        title: 'Definición y función de los nexos',
        text: 'Los <bold>nexos</bold> son elementos que sirven para enlazar proposiciones u oraciones. Su función es establecer relaciones lógicas y estructurales entre ideas: suma, oposición, causa, consecuencia, tiempo, etc.',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content: '"María estudió mucho y aprobó el examen."\n\nEn este ejemplo, el nexo "y" une dos proposiciones que expresan acciones relacionadas. Este nexo establece una relación de suma.',
          textEnd: ''
        }
      },
      {
        id: '4.2',
        title: 'Nexos de coordinación',
        text: 'Los nexos de coordinación unen proposiciones que tienen el mismo valor gramatical. No hay dependencia entre ellas.',
        subthemes: [
          {
            id: '4.2.1',
            title: 'Copulativos',
            text: '<list>Unen oraciones o palabras con valor aditivo.</list><list><bold>Nexos:</bold> y, e, ni</list>',
            example: {
              type: 'text',
              textStart: '',
              content: '"Llegó Juan y empezamos la reunión."',
              textEnd: ''
            }
          },
          {
            id: '4.2.2',
            title: 'Disyuntivos',
            text: '<list>Expresan opción o alternancia.</list><list><bold>Nexos:</bold> o, u</list>',
            example: {
              type: 'text',
              textStart: '',
              content: '"Puedes venir ahora o esperar hasta mañana."',
              textEnd: ''
            }
          },
          {
            id: '4.2.3',
            title: 'Adversativos',
            text: '<list>Indican contraste u oposición.</list><list><bold>Nexos:</bold> pero, sino, aunque</list>',
            example: {
              type: 'text',
              textStart: '',
              content: '"Quiso hacerlo, pero no pudo."',
              textEnd: ''
            }
          },
          {
            id: '4.2.4',
            title: 'Explicativos',
            text: '<list>La segunda proposición aclara o explica la anterior.</list>\n<list><bold>Nexos:</bold> es decir, o sea</list>',
            example: {
              type: 'text',
              textStart: '',
              content: '"No trajo paraguas, es decir, se mojó."',
              textEnd: ''
            }
          }
        ],
        activity: {
          type: 'classify-text',
          title: 'Actividad: Identifica el tipo de nexo coordinado',
          instructions: 'Lee cada oración y subraya el nexo. Luego clasifícalo como copulativo, disyuntivo, adversativo o explicativo.',
          options: ['copulativo', 'disyuntivo', 'adversativo', 'explicativo'],
          content: [
            {
              text: 'No vino Juan, sino Pedro.',
              correctAnswer: 'adversativo'
            },
            {
              text: 'Marta canta y baila muy bien.',
              correctAnswer: 'copulativo'
            },
            {
              text: 'Puedes elegir carne o pescado.',
              correctAnswer: 'disyuntivo'
            },
            {
              text: 'No lo entendió, es decir, tuvo que volver a leer.',
              correctAnswer: 'explicativo'
            },
            {
              text: 'Quiso ayudar, pero llegó tarde.',
              correctAnswer: 'adversativo'
            }
          ]
        }
      },
      {
        id: '4.3',
        title: 'Nexos de subordinación',
        text: 'Los nexos subordinantes enlazan una oración principal con otra que depende de ella (subordinada).',
        subthemes: [
          {
            id: '4.3.1',
            title: 'Causales',
            text: '<list>Expresan la causa de lo que se afirma en la oración principal.</list>\n<list><bold>Nexos:</bold> porque, ya que</list>',
            example: {
              type: 'text',
              textStart: '',
              content: '"No vino porque estaba enfermo."',
              textEnd: ''
            }
          },
          {
            id: '4.3.2',
            title: 'Finales',
            text: '<list>Indican la finalidad o propósito.</list>\n<list><bold>Nexos:</bold> para que, a fin de que</list>',
            example: {
              type: 'text',
              textStart: '',
              content: '"Estudia mucho para que apruebe el examen."',
              textEnd: ''
            }
          },
          {
            id: '4.3.3',
            title: 'Temporales',
            text: '<list>Señalan el momento en que ocurre la acción.</list>\n<list><bold>Nexos:</bold> cuando, mientras</list>',
            example: {
              type: 'text',
              textStart: '',
              content: '"Lo llamó cuando llegó a casa."',
              textEnd: ''
            }
          },
          {
            id: '4.3.4',
            title: 'Condicionales',
            text: '<list>Indican una condición para que se cumpla la acción.</list>\n<list><bold>Nexos:</bold> si, en caso de que</list>',
            example: {
              type: 'text',
              textStart: '',
              content: '"Si estudias, aprobarás."',
              textEnd: ''
            }
          },
          {
            id: '4.3.5',
            title: 'Concesivos',
            text: '<list>Expresan una dificultad u oposición que no impide el cumplimiento de la acción.</list>\n<list><bold>Nexos:</bold> aunque, por más que</list>',
            example: {
              type: 'text',
              textStart: '',
              content: '"Aunque está cansado, seguirá trabajando."',
              textEnd: ''
            }
          },
          {
            id: '4.3.6',
            title: 'Comparativos',
            text: '<list>Establecen comparación entre dos elementos.</list>\n<list><bold>Nexos:</bold> como, igual que</list>',
            example: {
              type: 'text',
              textStart: '',
              content: '"Corre como un atleta profesional."',
              textEnd: ''
            }
          }
        ],
        activity: {
          type: 'fill-in-the-blanks',
          title: 'Actividad: Usa el nexo adecuado',
          instructions: 'Completa las siguientes oraciones con el nexo de subordinación que corresponda según el tipo indicado entre paréntesis.',
          content: [
            {
              sentence: '__________ estás aquí, aprovechemos para hablar.',
              answer: 'Cuando'
            },
            {
              sentence: 'Iré contigo __________ me lo pidas.',
              answer: 'si'
            },
            {
              sentence: 'Te ayudaré __________ no me guste.',
              answer: 'aunque'
            },
            {
              sentence: 'Comió rápido __________ tenía mucha hambre.',
              answer: 'porque'
            },
            {
              sentence: 'Hace deporte __________ mejorar su salud.',
              answer: 'para que'
            }
          ]
        }
      }                  
    ],

    summary: [
      'Los nexos unen oraciones y establecen relaciones lógicas entre ellas.',
      'Los nexos de coordinación unen proposiciones independientes: copulativos, disyuntivos, adversativos, explicativos.',
      'Los nexos de subordinación introducen oraciones dependientes: causales, finales, temporales, condicionales, concesivos y comparativos.',
      'El uso adecuado de nexos permite redactar oraciones compuestas con coherencia y cohesión.'
    ]    
  },
  {
    id: '5',
    title: 'Unidad 5: Construcción de oraciones complejas',
    topics: [
      {title: 'Combinar oraciones simples para formar oraciones compuestas.'},
      {title: 'Uso de nexos para establecer relaciones lógicas entre proposiciones.'},
      {title: 'Eliminación de redundancias y corrección de errores estructurales.'},
      {title: 'Coherencia y cohesión en la redacción de textos complejos.'}
    ],
    introduction: 'En esta unidad, el estudiante aplicará lo aprendido en las unidades anteriores para construir <bold>oraciones complejas</bold>, combinando proposiciones de forma coherente y cohesionada. El objetivo es lograr mayor claridad, fluidez y riqueza expresiva en la escritura, evitando repeticiones innecesarias y errores estructurales.',

    themes: [
      {
        id: '5.1',
        title: 'Combinar oraciones simples para formar oraciones compuestas',
        text: 'Una forma de enriquecer nuestros textos es combinar oraciones simples en estructuras más complejas. Esto permite expresar ideas relacionadas sin necesidad de separar cada pensamiento en una oración aislada.',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content: 'Oraciones simples:\n“El alumno estudia. El alumno quiere aprobar.”\n\nOración compuesta:\n“El alumno estudia porque quiere aprobar.”\n\nEste ejemplo muestra cómo dos ideas relacionadas pueden combinarse mediante un nexo causal para formar una sola oración con mayor coherencia.',
          textEnd: ''
        },
        activity: {
          type: 're-write',
          title: 'Actividad: Une las oraciones simples',
          instructions: 'Combina las oraciones simples en una sola oración compuesta usando el nexo adecuado.',
          content: [
            {
              original: 'Salió el sol. La lluvia cesó.',
              correct: 'Salió el sol cuando la lluvia cesó.'
            },
            {
              original: 'María preparó la comida. Sus hijos estaban hambrientos.',
              correct: 'María preparó la comida porque sus hijos estaban hambrientos.'
            },
            {
              original: 'Vamos al parque. Prefieres quedarte en casa.',
              correct: 'Vamos al parque o prefieres quedarte en casa.'
            },
            {
              original: 'El estudiante aprobó el examen. Se había esforzado mucho.',
              correct: 'El estudiante aprobó el examen, es decir, se había esforzado mucho.'
            },
            {
              original: 'Se levantó temprano. Llegó tarde.',
              correct: 'Se levantó temprano, pero llegó tarde.'
            }
          ]
        }
      },
      {
        "id": "5.2",
        "title": "Uso de nexos para establecer relaciones lógicas entre proposiciones",
        "text": "Como se vio en la unidad anterior, los <bold>nexos</bold> permiten establecer relaciones entre las partes de una oración compuesta. Elegir el nexo correcto mejora la claridad y la intención comunicativa del mensaje.",
        "example": {
          "type": "text",
          "textStart": "A continuación se muestra un ejemplo:",
          "content": "“Te acompaño si quieres.”\n\nAquí el nexo “si” establece una relación de condición.",
          "textEnd": "Para lograr una escritura efectiva, es importante:\n\n<list>Reconocer la relación entre las ideas (causa, consecuencia, condición, etc.).</list><list>Escoger el nexo adecuado.</list><list>Verificar que la estructura resultante sea gramaticalmente correcta.</list>"
        },
        "activity": {
          "type": "multiple-choice",
          "title": "Actividad: Escoge el nexo correcto",
          "instructions": "Elige el nexo que mejor exprese la relación entre las proposiciones.",
          "content": [
            {
              "question": "1. __________ estudió, aprobó el examen.",
              "options": ["porque", "aunque", "si"],
              "correctAnswer": "porque"
            },
            {
              "question": "2. No vino __________ estaba enfermo.",
              "options": ["aunque", "porque", "cuando"],
              "correctAnswer": "porque"
            },
            {
              "question": "3. Iré contigo __________ me llames.",
              "options": ["aunque", "si", "ya que"],
              "correctAnswer": "si"
            },
            {
              "question": "4. Me encanta la lectura, __________ la practico a diario.",
              "options": ["por eso", "aunque", "mientras"],
              "correctAnswer": "por eso"
            },
            {
              "question": "5. Ella no cocina, __________ lava los platos.",
              "options": ["sino", "pero", "y"],
              "correctAnswer": "pero"
            }
          ]
        }
      },
      {
        id: '5.2',
        title: 'Uso de nexos para establecer relaciones lógicas entre proposiciones',
        text: 'Como se vio en la unidad anterior, los <bold>nexos</bold> permiten establecer relaciones entre las partes de una oración compuesta. Elegir el nexo correcto mejora la claridad y la intención comunicativa del mensaje.\n\nPara lograr una escritura efectiva, es importante:\n<list>Reconocer la relación entre las ideas (causa, consecuencia, condición, etc.).</list><list>Escoger el nexo adecuado.</list><list>Verificar que la estructura resultante sea gramaticalmente correcta.</list>',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content: '“Te acompaño si quieres.”\n\nAquí el nexo “si” establece una relación de condición.',
          textEnd: ''
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Escoge el nexo correcto',
          instructions: 'Elige el nexo que mejor exprese la relación entre las proposiciones.',
          content: [
            {
              question: '1. __________ estudió, aprobó el examen.',
              options: ['porque', 'aunque', 'si'],
              correctAnswer: 'porque'
            },
            {
              question: '2. No vino __________ estaba enfermo.',
              options: ['aunque', 'porque', 'cuando'],
              correctAnswer: 'porque'
            },
            {
              question: '3. Iré contigo __________ me llames.',
              options: ['aunque', 'si', 'ya que'],
              correctAnswer: 'si'
            },
            {
              question: '4. Me encanta la lectura, __________ la practico a diario.',
              options: ['por eso', 'aunque', 'mientras'],
              correctAnswer: 'por eso'
            },
            {
              question: '5. Ella no cocina, __________ lava los platos.',
              options: ['sino', 'pero', 'y'],
              correctAnswer: 'pero'
            }
          ]
        }
      },
      {
        id: '5.3',
        title: 'Eliminación de redundancias y corrección de errores estructurales',
        text: 'Cuando se combinan oraciones, es importante evitar repeticiones innecesarias o estructuras incorrectas. La revisión gramatical permite mejorar la calidad del texto.\n\nTambién es importante cuidar el orden de los elementos para que la oración fluya de forma natural.',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content: 'Incorrecto: “Ella se fue porque ella tenía prisa.”\n\nCorrecto: “Ella se fue porque tenía prisa.”',
          textEnd: ''
        },
        activity: {
          type: 're-write',
          title: 'Actividad: Corrige las oraciones',
          instructions: 'Reescribe las siguientes oraciones eliminando repeticiones o errores de estructura.',
          content: [
            {
              original: 'El perro ladra porque el perro escucha ruidos.',
              correct: 'El perro ladra porque escucha ruidos.'
            },
            {
              original: 'Ellos fueron a la tienda, ellos compraron pan.',
              correct: 'Ellos fueron a la tienda y compraron pan.'
            },
            {
              original: 'Me gusta bailar porque me gusta mucho la música.',
              correct: 'Me gusta bailar porque disfruto mucho la música.'
            },
            {
              original: 'El niño juega mientras el niño canta.',
              correct: 'El niño juega mientras canta.'
            },
            {
              original: 'La profesora explicó la lección porque la lección era difícil.',
              correct: 'La profesora explicó la lección porque era difícil.'
            }
          ]
        }
      },
      {
        id: '5.4',
        title: 'Coherencia y cohesión en la redacción de textos complejos',
        text: '<subheading>Coherencia</subheading> es la propiedad del texto que permite que las ideas estén organizadas de forma lógica. <subheading>Cohesión</subheading> es la conexión gramatical y léxica entre los elementos del texto, lograda a través de nexos, pronombres y elipsis.',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo de texto con coherencia y cohesión:',
          content: '“Estaba cansado. Sin embargo, siguió trabajando porque tenía que entregar el informe.”',
          textEnd: ''
        },
        activity: {
          type: 'input',
          title: 'Actividad: Mejora la coherencia y cohesión',
          instructions: 'Une las siguientes oraciones en un párrafo coherente utilizando nexos adecuados.',
          content: 'Juan estudió toda la tarde. Juan tenía examen al día siguiente. Juan no salió con sus amigos. Juan aprobó el examen.'
        }
      }                                    
    ],

    summary: [
      'Combinar oraciones simples en estructuras compuestas mejora la fluidez del texto.',
      'El uso correcto de nexos establece relaciones lógicas entre proposiciones.',
      'Eliminar redundancias y errores estructurales mejora la calidad del mensaje.',
      'La coherencia y cohesión son esenciales para producir textos claros y bien organizados.'
    ]    
  }
]