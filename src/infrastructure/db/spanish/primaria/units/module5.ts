import { Unit } from "@/core/domain/entities/Unit";

export const module5: readonly Unit[] = [
  {
    id: '1',
    title: 'Unidad 1: Uso de las letras v y b',
    topics: [
      { title: 'Reglas para el uso de la letra v.' },
      { title: 'Reglas para el uso de la letra b.' },
      { title: 'Casos especiales y excepciones.' }
    ],
    introduction: 'El uso correcto de las letras v y b es uno de los desafíos más comunes en la ortografía del español, ya que su pronunciación es prácticamente idéntica en la mayoría de los países hispanohablantes. Sin embargo, existen reglas claras que ayudan a distinguir cuándo usar cada una. En esta unidad, aprenderás a identificar las principales normas ortográficas que regulan el uso de la v y la b, así como algunos casos especiales y excepciones.',

    themes: [
      {
        id: '1.1',
        title: 'Reglas para el uso de la letra v',
        text: 'La letra v se utiliza en diversas palabras siguiendo patrones que permiten evitar errores ortográficos. A continuación, se presentan las principales reglas de uso, acompañadas de ejemplos y observaciones.',

        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Regla', 'Descripción', 'Ejemplos'],
            ['1', 'Se escribe v después de las consonantes n, d y b.', 'invierno, advertencia, obvio'],
            ['2', 'En adjetivos terminados en -ava, -ave, -avo, -eva, -eve, -evo, excepto árabe y nube.', 'octavo, suave, nueva'],
            ['3', 'En los verbos terminados en -olver y sus derivados.', 'resolver → resuelvo, volver → volvemos'],
            ['4', 'En las formas verbales irregulares que no tienen b en su infinitivo.', 'estuve (estar), anduve (andar)']
          ],
          textEnd: 'Estos patrones facilitan la escritura correcta de palabras de uso frecuente y ayudan a identificar errores comunes.'
        },

        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Elige la opción correcta',
          instructions: 'Selecciona la palabra escrita correctamente en cada par.',
          content: [
            {
              question: '1.',
              options: ['a) invierno', 'b) inbierno'],
              correctAnswer: 'a) invierno'
            },
            {
              question: '2.',
              options: ['a) nube', 'b) nuve'],
              correctAnswer: 'a) nube'
            },
            {
              question: '3.',
              options: ['a) resolber', 'b) resolver'],
              correctAnswer: 'b) resolver'
            },
            {
              question: '4.',
              options: ['a) andeve', 'b) anduve'],
              correctAnswer: 'b) anduve'
            }
          ]
        }
      },
      {
        id: '1.2',
        title: 'Reglas para el uso de la letra b',
        text: 'La letra b tiene su propio conjunto de reglas que permiten su uso correcto en contextos determinados. A continuación, se explican sus principales aplicaciones.',

        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Regla', 'Descripción', 'Ejemplos'],
            ['1', 'Se escribe b después de la letra m.', 'cambiar, tambor'],
            ['2', 'En palabras que comienzan con bu, bur o bus.', 'bueno, burla, buscar'],
            ['3', 'En los verbos terminados en -bir, excepto hervir, servir y vivir y sus compuestos.', 'escribir, recibir'],
            ['4', 'En los pretéritos imperfectos de los verbos terminados en -ar y del verbo ir.', 'caminaba, estudiábamos, iba']
          ],
          textEnd: 'Estas normas son esenciales para escribir correctamente una gran variedad de verbos y sustantivos comunes.'
        },

        activity: {
          type: 'fill-in-the-blanks',
          title: 'Actividad: Completa la palabra con v o b',
          instructions: 'Escribe la letra correcta (v o b) para completar cada palabra.',
          content: [
            { sentence: 'camina_a', answer: 'b' },
            { sentence: '_urla', answer: 'b' },
            { sentence: 'escri_ir', answer: 'b' },
            { sentence: '_olver', answer: 'v' }
          ]
        }
      },
      {
        id: '1.3',
        title: 'Casos especiales y excepciones',
        text: 'No todas las palabras siguen reglas estrictas. Algunas deben memorizarse debido a su uso frecuente y a que presentan excepciones.',

        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Palabra', 'Comentario'],
            ['árabe', 'Excepción a la terminación -ave'],
            ['nube', 'Excepción a la terminación -ve'],
            ['llovizna', 'Excepción a las reglas comunes'],
            ['hervir, servir, vivir', 'No siguen la regla de los verbos terminados en -bir']
          ],
          textEnd: 'Estas palabras suelen aprenderse con la práctica y la exposición continua a textos correctamente escritos.'
        },

        activity: {
          type: 'classify-text',
          title: 'Actividad: Verdadero o falso',
          instructions: 'Lee cada afirmación y selecciona si es verdadera o falsa.',
          options: ['Verdadero', 'Falso'],
          content: [
            {
              text: 'Todas las palabras que terminan en bir se escriben con b.',
              correctAnswer: 'Falso'
            },
            {
              text: 'Nube es una excepción a la regla de los adjetivos terminados en ve.',
              correctAnswer: 'Verdadero'
            },
            {
              text: 'La palabra burla se escribe con v.',
              correctAnswer: 'Falso'
            }
          ]
        }
      }
    ],

    summary: [
      'La v se utiliza en palabras con ciertas terminaciones y tras letras específicas como n, d y b.',
      'La b se emplea tras m, en ciertas raíces y en tiempos verbales específicos.',
      'Existen excepciones que deben aprenderse por repetición y observación.',
      'Las tablas y actividades sirvieron para organizar y reforzar el aprendizaje de manera clara y práctica.'
    ]
  },
  {
    id: '2',
    title: 'Unidad 2: Uso de las letras s, c y z',
    topics: [
      { title: 'Uso de la letra s en adjetivos y sustantivos.' },
      { title: 'Uso de la letra c en diminutivos y verbos terminados en –cer.' },
      { title: 'Uso de la letra z en sustantivos abstractos y adjetivos terminados en –izo o –iza.' }
    ],
    introduction: 'Las letras s, c y z presentan dificultades ortográficas en el español debido a que su pronunciación puede ser similar o idéntica, especialmente en regiones donde predomina el seseo. A pesar de esto, existen reglas ortográficas precisas que nos permiten distinguir su uso correcto. En esta unidad, aprenderás a identificar cuándo usar cada letra, basándote en patrones morfológicos, gramaticales y semánticos, y con el apoyo de ejemplos comentados y consejos prácticos.',

    themes: [
      {
        id: '2.1',
        title: 'Uso de la letra s en adjetivos y sustantivos',
        text: 'La letra s es común en muchas palabras que expresan cualidades, sentimientos o procedencias. Saber identificar ciertos sufijos te ayudará a escribir correctamente.',

        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Contexto', 'Regla', 'Ejemplos con explicación'],
            ['Adjetivos terminados en -oso, -osa', 'Se escriben con s y suelen expresar abundancia o intensidad', 'Hermoso describe a alguien o algo que tiene belleza; curiosa indica interés o deseo de saber algo.'],
            ['Gentilicios terminados en -ense', 'Se escriben con s y se refieren al lugar de origen', 'Costarricense refiere a una persona de Costa Rica; canadiense a alguien de Canadá.'],
            ['Nombres abstractos terminados en -ismo, -ista', 'Representan doctrinas, ideologías o profesiones', 'Socialismo es una doctrina política; artista es una persona que practica el arte.']
          ],
          textEnd: ''
        },

        activity: {
          type: 'fill-in-the-blanks',
          title: 'Actividad: Completa con s, c o z',
          instructions: 'Completa las siguientes palabras con la letra correcta: s, c o z. Piensa en la regla ortográfica que se aplica en cada caso.',
          content: [
            { sentence: 'curio_a', answer: 's' },
            { sentence: 'fran_es', answer: 'c' },
            { sentence: 'delica_ión', answer: 'c' },
            { sentence: 'vehemen_ia', answer: 'c' },
            { sentence: 'fertili_ar', answer: 'z' }
          ]
        },

        note: '<bold>Consejo:</bold> Si la palabra termina en -oso o -ista, piensa si se refiere a una cualidad o profesión: probablemente lleva s.'
      },
      {
        id: '2.2',
        title: 'Uso de la letra c en diminutivos y verbos terminados en –cer',
        text: 'La letra c se emplea en palabras que expresan disminución (diminutivos) y en la mayoría de los verbos terminados en –cer o –cir. Estas reglas te ayudarán a no confundirlas con s o z.',

        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Contexto', 'Regla', 'Ejemplos con explicación'],
            ['Diminutivos en -cito, -ecillo', 'Se usa c si la palabra base no termina en s', 'Florecita viene de flor; indica algo pequeño y lleva c por regla de los diminutivos. Pececillo es el diminutivo de pez.'],
            ['Verbos terminados en –cer, –cir (excepto toser, coser, asir)', 'Se escriben con c en infinitivo', 'Nacer, parecer y conducir siguen esta regla; toser y asir son excepciones.']
          ],
          textEnd: ''
        },

        activity: {
          type: 'classify-text',
          title: 'Actividad: Verdadero o falso',
          instructions: 'Lee cada afirmación y selecciona si es verdadera o falsa.',
          options: ['Verdadero', 'Falso'],
          content: [
            {
              text: 'Conoser se escribe con s porque termina en ser.',
              correctAnswer: 'Falso'
            },
            {
              text: 'Pececillo es un diminutivo correcto.',
              correctAnswer: 'Verdadero'
            },
            {
              text: 'Toser se escribe con c porque termina en cer.',
              correctAnswer: 'Falso'
            }
          ]
        },

        note: '<bold>Consejo:</bold> Si ves un verbo que termina en cer o cir (y no es toser, coser o asir), lo más probable es que se escriba con c.'
      },
      {
        id: '2.3',
        title: 'Uso de la letra z en sustantivos abstractos y adjetivos terminados en –izo, –iza',
        text: 'La letra z suele aparecer en palabras que expresan cualidades o condiciones abstractas. También se usa en adjetivos que terminan en –izo o –iza.',

        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Contexto', 'Regla', 'Ejemplos con explicación'],
            ['Sustantivos abstractos terminados en -ez, -eza', 'Derivan de adjetivos y expresan cualidades', 'Belleza viene de bello, expresa una cualidad; honradez proviene de honrado.'],
            ['Adjetivos terminados en –izo, –iza', 'Indican tendencia o propiedad', 'Mestiza indica mezcla racial; cobriza refiere a algo con tono o color de cobre.']
          ],
          textEnd: ''
        },

        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Elige la opción correcta',
          instructions: 'Selecciona la palabra escrita correctamente en cada par.',
          content: [
            {
              question: '1.',
              options: ['a) belesa', 'b) belleza'],
              correctAnswer: 'b) belleza'
            },
            {
              question: '2.',
              options: ['a) mestisa', 'b) mestiza'],
              correctAnswer: 'b) mestiza'
            },
            {
              question: '3.',
              options: ['a) rapidez', 'b) rapicez'],
              correctAnswer: 'a) rapidez'
            }
          ]
        },

        note: '<bold>Consejo:</bold> Si una palabra termina en -eza y se refiere a una cualidad, seguramente se escribe con z.'
      }
    ],

    summary: [
      'La s aparece en adjetivos que terminan en oso, en gentilicios como costarricense, y en sustantivos como socialismo o artista.',
      'La c se emplea en diminutivos como pececillo y en verbos como nacer y conducir.',
      'La z se encuentra en sustantivos abstractos como belleza y en adjetivos terminados en izo o iza, como mestiza.',
      'Recordar las excepciones y practicar con ejemplos ayuda a evitar errores comunes.'
    ]
  },
  {
    id: '3',
    title: 'Unidad 3: Uso de las letras ll y y',
    topics: [
      { title: 'Uso de la letra ll en diminutivos y verbos terminados en –illar, –ullar, –ollar.' },
      { title: 'Uso de la letra y en formas verbales terminadas en –uir y en plural de palabras terminadas en –y.' },
      { title: 'Palabras homófonas con ll y y.' }
    ],
    introduction: 'El uso correcto de las letras ll y y representa una de las confusiones ortográficas más frecuentes en la escritura del español. Esto se debe a que, en muchas regiones hispanohablantes, ambas letras tienen una pronunciación muy similar o incluso idéntica (yeísmo). Sin embargo, hay reglas ortográficas claras que permiten diferenciar cuándo usar cada una correctamente.\n\nEn esta unidad, aprenderás a aplicar estas reglas en palabras derivadas, verbos, diminutivos, y formas verbales comunes. También conocerás ejemplos de palabras homófonas —aquellas que suenan igual pero se escriben distinto— que suelen causar confusión.',

    themes: [
      {
        id: '3.1',
        title: 'Uso de la letra ll en diminutivos y verbos terminados en –illar, –ullar, –ollar',
        text: 'La letra ll suele emplearse en:\n\n<list>Diminutivos de palabras que no terminan en vocal fuerte (a, e, o).<list>Verbos cuyo infinitivo termina en –illar, –ullar o –ollar, con algunas excepciones.',

        example: {
          type: 'table',
          textStart: 'A continuación, se muestra una tabla con ejemplos y su explicación:',
          content: [
            ['Palabra', 'Explicación'],
            ['silla', 'Diminutivo de silla es sillita, no siyita. Se conserva la ll.'],
            ['martillar', 'Verbo terminado en –illar. Significa golpear con martillo.'],
            ['aullar', 'Verbo de los lobos, termina en –ullar.'],
            ['desarrollar', 'Aunque es una palabra compleja, proviene del verbo arrollar, con ll.']
          ],
          textEnd: ''
        },

        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Detecta la palabra mal escrita',
          instructions: 'Elige la palabra escrita incorrectamente en cada grupo:',
          content: [
            {
              question: '1.',
              options: ['silla', 'martiyar', 'rodilla'],
              correctAnswer: 'martiyar'
            },
            {
              question: '2.',
              options: ['aullar', 'arroyar', 'oyente'],
              correctAnswer: 'arroyar'
            },
            {
              question: '3.',
              options: ['callar', 'apoyarse', 'yamar'],
              correctAnswer: 'yamar'
            }
          ]
        },

        note: '<bold>Consejo:</bold> Si al formar el diminutivo se escucha una pronunciación fuerte similar a "li", casi siempre va con ll.'
      },
      {
        id: '3.2',
        title: 'Uso de la letra Y en formas verbales terminadas en –uir y en plural de palabras terminadas en –y',
        text: 'La <bold>y</bold> aparece frecuentemente en:\n<list>Formas verbales derivadas de verbos terminados en –uir (sin vocal antes de la i).</list><list>Plurales de palabras que terminan en –y.</list>',

        example: {
          type: 'table',
          textStart: 'En esta tabla se presentan ejemplos con su explicación:',
          content: [
            ['Palabra', 'Explicación'],
            ['construyen', 'Forma del verbo construir conjugado en presente.'],
            ['huyó', 'Pasado del verbo huir, lleva y por regla.'],
            ['leyes', 'Plural de ley, cambia y por i y se añade -es.'],
            ['reyes', 'Plural de rey.']
          ],
          textEnd: ''
        },

        activity: {
          type: 'drag-and-drop',
          title: 'Actividad: Clasifica las palabras',
          instructions: 'Coloca las siguientes palabras en la categoría que corresponda:',
          content: {
            categories: [
              'Verbos derivados de -uir',
              'Plurales de palabras terminadas en -y',
              'Otras'
            ],
            items: [
              { text: 'construye', category: 'Verbos derivados de -uir' },
              { text: 'incluyeron', category: 'Verbos derivados de -uir' },
              { text: 'leyes', category: 'Plurales de palabras terminadas en -y' },
              { text: 'reyes', category: 'Plurales de palabras terminadas en -y' },
              { text: 'hoy', category: 'Otras' },
              { text: 'buey', category: 'Otras' }
            ]
          }
        }
      },
      {
        id: "3.3",
        title: "Palabras homófonas con ll y y",
        text: `<subheading>¿Qué son las palabras homófonas?</subheading>
      Las homófonas son palabras que suenan igual pero se escriben distinto y tienen significados diferentes. En el caso de <bold>ll</bold> y <bold>y</bold>, hay muchos ejemplos que pueden generar confusión.
      
      <subheading>Comparación de palabras homófonas</subheading>
      A continuación se muestra una tabla comparativa de palabras homófonas comunes:`,
        example: {
          type: "table",
          textStart: "",
          content: [
            ["Palabra con ll", "Palabra con y", "Diferencia de significado"],
            ["halla", "haya", "*Halla* = encontrar / *Haya* = forma del verbo haber o tipo de árbol"],
            ["calló", "cayó", "*Calló* = guardar silencio / *Cayó* = del verbo caer"],
            ["llanta", "yanta", "*Llanta* = rueda / *Yanta* = forma antigua o regional de llanta"]
          ],
          textEnd: ""
        },
        note: "<bold>Consejo:</bold> Cuando dudes, intenta sustituir la palabra en contexto. Si puedes reemplazar por \"encontrar\", probablemente es <italic>halla</italic>. Si puedes reemplazar por \"árbol\" o \"verbo haber\", es <italic>haya</italic>.",
        activity: {
          type: "fill-in-the-blanks",
          title: "Actividad: Usa la palabra correcta",
          instructions: "Completa las siguientes oraciones con la palabra adecuada (*haya* / *halla*, *calló* / *cayó*).",
          content: [
            {
              sentence: "Ojalá no se ______ nadie durante el simulacro.",
              answer: "caiga"
            },
            {
              sentence: "No creo que ______ terminado la tarea.",
              answer: "haya"
            },
            {
              sentence: "Juan se ______ al ver el obstáculo.",
              answer: "cayó"
            },
            {
              sentence: "María ______ la solución en el libro.",
              answer: "halló"
            }
          ]
        }
      },
    ],

    summary: [
      "La letra ll se utiliza principalmente en diminutivos y en verbos terminados en –illar, –ullar, –ollar. Por ejemplo: martillar, aullar, arrollar.",
      "La letra Y se usa en conjugaciones de verbos terminados en –uir como huir → huyó y en el plural de palabras terminadas en –y: rey → reyes.",
      "Existen muchas palabras homófonas entre ll y Y, como halla/haya o calló/cayó, que requieren atención al contexto para usarlas correctamente.",
      "A través de las actividades pudiste identificar errores comunes, aplicar reglas ortográficas específicas y fortalecer tu comprensión contextual del uso de ll y Y"
    ]
  },
  {
    id: '4',
    title: 'Unidad 4: Uso de las letras g y j',
    topics: [
      { title: 'Uso de la letra g en palabras terminadas en –ger, –gir (excepto tejer y crujir).' },
      { title: 'Uso de la letra j en palabras terminadas en –aje y –eje.' },
      { title: 'Casos excepcionales y excepciones.' }
    ],
    introduction: 'El uso de las letras <italic>g</italic> y <italic>j</italic> puede resultar confuso debido a que, en muchas palabras del español, ambas producen un sonido similar (/x/), especialmente cuando se combinan con las vocales <italic>e</italic> y <italic>i</italic>. Sin embargo, su uso se rige por reglas claras que permiten distinguir en qué contextos debe emplearse una u otra. En esta unidad aprenderás a identificar esas reglas, reconocer palabras que constituyen excepciones y aplicar el conocimiento adquirido mediante ejemplos y actividades.',

    themes: [
      {
        id: "4.1",
        title: "Uso de la letra g en palabras terminadas en -ger y -gir",
        text: `<subheading>Regla ortográfica</subheading>
      Las palabras que terminan en <italic>-ger</italic> o <italic>-gir</italic> deben escribirse con <bold>g</bold>, ya que esta letra representa el sonido suave /x/ en estos contextos.`,
        example: {
          type: "table",
          textStart: "A continuación se muestra una tabla con ejemplos y explicaciones:",
          content: [
            ["Palabra", "Explicación"],
            ["proteger", "Verbo terminado en -ger, significa resguardar."],
            ["dirigir", "Verbo terminado en -gir, significa guiar."],
            ["exigir", "Aunque parece irregular, sigue el patrón de -gir."],
            ["corregir", "Derivado de -gir, indica rectificar o enmendar."]
          ],
          textEnd: ""
        },
        note: "<bold>Consejo:</bold> Si la palabra es un verbo que termina en <italic>-gir</italic> o <italic>-ger</italic> y no es <italic>tejer</italic> o <italic>crujir</italic>, muy probablemente se escribe con <bold>g</bold>.",
        activity: {
          type: "fill-in-the-blanks",
          title: "Actividad: Completa con g o j",
          instructions: "Completa cada palabra usando la letra correcta (*g* o *j*) según las reglas aprendidas.",
          content: [
            {
              sentence: "prote_er",
              answer: "g"
            },
            {
              sentence: "diri_ir",
              answer: "g"
            },
            {
              sentence: "te_er",
              answer: "j"
            },
            {
              sentence: "corri_o",
              answer: "j"
            }
          ]
        }
      },
      {
        id: "4.2",
        title: "Uso de la letra j en palabras terminadas en -aje y -eje",
        text: `<subheading>Regla ortográfica</subheading>
      La terminación <italic>-aje</italic> se usa para formar sustantivos abstractos o colectivos, mientras que <italic>-eje</italic> aparece en algunos sustantivos derivados. En ambos casos, se escribe con <bold>j</bold>.`,
        example: {
          type: "table",
          textStart: "A continuación se muestra una tabla con ejemplos y explicaciones:",
          content: [
            ["Palabra", "Explicación"],
            ["coraje", "Sustantivo que expresa valor o enojo, termina en -aje."],
            ["viaje", "Sustantivo que indica desplazamiento, también -aje."],
            ["pasaje", "Lugar o billete, terminación en -aje."],
            ["hereje", "Persona que profesa creencias contrarias a una religión oficial."]
          ],
          textEnd: ""
        },
        note: "<bold>Consejo:</bold> Si una palabra termina en <italic>-aje</italic> o <italic>-eje</italic>, se escribe con <bold>j</bold>, sin excepciones.",
        activity: {
          type: "drag-and-drop",
          title: "Actividad: Clasifica según su terminación",
          instructions: "Clasifica las siguientes palabras según su terminación en la tabla correspondiente. Esto te ayudará a reforzar la identificación visual de los patrones ortográficos asociados a <italic>g</italic> y <italic>j</italic>.",
          content: {
            categories: [
              "Termina en -aje (lleva j)",
              "Termina en -eje (lleva j)",
              "Termina en -ger/-gir (lleva g)"
            ],
            items: [
              { text: "coraje", category: "Termina en -aje (lleva j)" },
              { text: "viaje", category: "Termina en -aje (lleva j)" },
              { text: "pasaje", category: "Termina en -aje (lleva j)" },
              { text: "hereje", category: "Termina en -eje (lleva j)" },
              { text: "proteger", category: "Termina en -ger/-gir (lleva g)" },
              { text: "dirigir", category: "Termina en -ger/-gir (lleva g)" }
            ]
          }
        }
      },
      {
        id: "4.3",
        title: "Casos excepcionales y excepciones",
        text: `<subheading>¿Qué ocurre con las excepciones?</subheading>
      Aunque la mayoría de las palabras siguen reglas predecibles, hay excepciones que debes memorizar.`,
        example: {
          type: "table",
          textStart: "A continuación se muestra una tabla con ejemplos de palabras que no siguen las reglas comunes:",
          content: [
            ["Palabra", "Comentario"],
            ["tejer", "Excepción a la regla de los verbos en -ger/-gir."],
            ["crujir", "Otra excepción, termina en -jir."],
            ["reflejo", "No termina en -eje a pesar de sonar similar; sin embargo, se escribe con j."]
          ],
          textEnd: ""
        },
        note: "<bold>Consejo:</bold> Aprende las excepciones más comunes y practica su escritura en contexto.",
        activity: {
          type: "multiple-choice",
          title: "Actividad: Verdadero o falso",
          instructions: "Lee cada enunciado y determina si es verdadero o falso, basándote en las reglas ortográficas estudiadas en esta unidad.",
          content: [
            {
              question: "Todos los verbos terminados en *gir* se escriben con g.",
              options: ["Verdadero", "Falso"],
              correctAnswer: "Falso"
            },
            {
              question: "Las palabras terminadas en *aje* se escriben con j.",
              options: ["Verdadero", "Falso"],
              correctAnswer: "Verdadero"
            },
            {
              question: "*Crujir* y *tejer* siguen la regla de los verbos terminados en *ger*.",
              options: ["Verdadero", "Falso"],
              correctAnswer: "Falso"
            }
          ]
        }
      }
    ],

    summary: [
      'Las palabras terminadas en ger y gir se escriben con g, excepto tejer y crujir.',
      'Las palabras terminadas en aje y eje se escriben con j, sin excepciones.',
      'Algunas palabras rompen las reglas generales, por lo que es necesario aprenderlas de memoria.',
      'Las actividades ayudaron a reforzar el reconocimiento de patrones ortográficos y excepciones.'
    ]
  },
  {
    id: '5',
    title: 'Unidad 5: Palabras homófonas',
    topics: [
      { title: 'Definición de palabras homófonas.' },
      { title: 'Ejemplos comunes de palabras homófonas (vaca – baca, caza – casa, vaya – valla).' },
      { title: 'Estrategias para evitar errores con palabras homófonas.' }
    ],
    introduction: 'Las palabras homófonas son aquellas que suenan igual pero se escriben de forma diferente y tienen significados distintos. Este tipo de palabras puede generar confusión al escribir, especialmente en contextos donde se confía demasiado en la pronunciación y no se presta suficiente atención al significado. En el español, el fenómeno del seseo (la pronunciación igual de la <italic>s</italic>, <italic>c</italic> y <italic>z</italic> en algunas regiones) y el yeísmo (la pronunciación similar de la <italic>ll</italic> y la <italic>y</italic>) acentúa este problema.\n\nAprender a identificar y diferenciar palabras homófonas es fundamental para mejorar la precisión ortográfica y la claridad en la escritura. A lo largo de esta unidad, veremos definiciones, ejemplos representativos y estrategias útiles para evitar errores frecuentes.',

    themes: [
      {
        id: "5.1",
        title: "Definición de palabras homófonas",
        text: `<subheading>¿Qué son las palabras homófonas?</subheading>
      Las <bold>palabras homófonas</bold> son aquellas que tienen la misma pronunciación, pero diferente escritura y significado. Pueden pertenecer a distintas categorías gramaticales y generar ambigüedades si no se contextualizan correctamente.`,
        example: {
          type: "text",
          textStart: "Ejemplo general:",
          content: "Haya (del verbo haber o árbol) vs. halla (del verbo hallar)",
          textEnd: "Estas palabras pueden diferenciarse correctamente solo si se comprende su uso dentro de la oración."
        },
        activity: {
          type: "multiple-choice",
          title: "Actividad: Identifica el tipo de palabra",
          instructions: "Lee cada par de palabras y responde si son homófonas o no:",
          content: [
            {
              question: "¿calló / cayó?",
              options: ["Sí, son homófonas", "No, no son homófonas"],
              correctAnswer: "Sí, son homófonas"
            },
            {
              question: "¿tubo / tuvo?",
              options: ["Sí, son homófonas", "No, no son homófonas"],
              correctAnswer: "Sí, son homófonas"
            },
            {
              question: "¿sabía / savia?",
              options: ["Sí, son homófonas", "No, no son homófonas"],
              correctAnswer: "Sí, son homófonas"
            },
            {
              question: "¿perro / pero?",
              options: ["Sí, son homófonas", "No, no son homófonas"],
              correctAnswer: "No, no son homófonas"
            }
          ]
        }
      },
      {
        id: "5.2",
        title: "Ejemplos comunes de palabras homófonas",
        text: `A continuación se muestra una tabla con algunos de los pares de palabras homófonas más comunes en el español. Incluye su definición y una oración de ejemplo para comprender su uso en contexto:`,
        example: {
          type: "table",
          textStart: "A continuación se muestra una tabla con algunos de los pares de palabras homófonas más comunes en el español. Incluye su definición y una oración de ejemplo para comprender su uso en contexto:",
          content: [
            ["Palabra 1", "Significado", "Palabra 2", "Significado", "Ejemplo en contexto"],
            ["vaca", "Animal mamífero de granja", "baca", "Portaequipaje de un auto", "La *vaca* pastaba mientras Juan colocaba las maletas en la *baca*."],
            ["caza", "Del verbo cazar (atrapar animales)", "casa", "Lugar para habitar", "Mi padre *caza* con arco y vive en una *casa* en el campo."],
            ["vaya", "Verbo ir, modo subjuntivo", "valla", "Reja o cercado", "Espero que *vaya* al parque donde pusieron una nueva *valla*."],
            ["tuvo", "Del verbo tener", "tubo", "Objeto cilíndrico", "El niño *tuvo* fiebre y tomó agua con un *tubo*."]
          ],
          textEnd: ""
        },
        activity: {
          type: "fill-in-the-blanks",
          title: "Actividad: Completa con la palabra correcta",
          instructions: "Selecciona la palabra adecuada para completar las oraciones:",
          content: [
            {
              sentence: "La ______ estaba decorada con luces navideñas. (valla / vaya)",
              answer: "valla"
            },
            {
              sentence: "No creo que ______ tiempo de llegar. (vaya / valla)",
              answer: "vaya"
            },
            {
              sentence: "El mecánico cambió el ______ dañado. (tuvo / tubo)",
              answer: "tubo"
            },
            {
              sentence: "Ana ______ que estudiar para el examen. (tuvo / tubo)",
              answer: "tuvo"
            }
          ]
        }
      },
      {
        id: "5.3",
        title: "Estrategias para evitar errores con palabras homófonas",
        text: 'Para no confundir palabras homófonas al escribir, se recomienda seguir estas estrategias:\n<list><bold>Leer en contexto:<bold> Si dudas entre dos palabras, piensa en el significado general de la oración.</list><list><bold>Reemplazar por sinónimos:</bold> Si puedes cambiar una palabra por otra con significado parecido, podrás verificar si está bien escrita. Ejemplo: haya por exista, halla por encuentra.</list><list><bold>Conocer su función gramatical:</bold> Identificar si es un sustantivo, verbo, adjetivo, etc.</list><list><bold>Practicar con oraciones:</bold> Cuanto más uses estas palabras en contexto, más fácil será recordarlas correctamente.</list>',
        activity: {
          type: "input",
          title: "Actividad: Reflexiona y corrige",
          instructions: "Lee las siguientes oraciones, identifica la palabra homófona usada incorrectamente y escríbela bien.",
          content: `1. Ojalá halla terminado la tarea a tiempo.  
      2. Pedro boto la basura y luego regresó.  
      3. Mi tío caza en la montaña, donde está su caza.`
        },
      }
    ],

    summary: [
      'Las palabras homófonas suenan igual pero tienen diferente escritura y significado.',
      'Son frecuentes en el español debido a fenómenos como el seseo y el yeísmo.',
      'Algunos pares comunes incluyen: vaca/baca, caza/casa, vaya/valla, tuvo/tubo.',
      'Para diferenciarlas correctamente es fundamental analizar el contexto, reconocer su función gramatical y practicar con ejemplos reales.'
    ]    
  },
  {
    id: '6',
    title: 'Unidad 6: Reglas de acentuación',
    topics: [
      {title: 'Acentuación de palabras agudas.'},
      {title: 'Acentuación de palabras graves.'},
      {title: 'Acentuación de palabras esdrújulas y sobresdrújulas.'},
      {title: 'Uso de la tilde diacrítica en monosílabos (tú/tu, sí/si, té/te).'}
    ],
    introduction: 'Una correcta acentuación permite que las palabras se pronuncien adecuadamente y que el sentido de las oraciones sea claro. En esta unidad aprenderás a reconocer los distintos tipos de palabras según la ubicación de su sílaba tónica, y aplicarás las reglas para colocar o no colocar tilde según corresponda. Además, conocerás el uso especial de la tilde diacrítica, que ayuda a distinguir palabras que se escriben igual pero tienen significados distintos.\n\nPara facilitar la comprensión, cada tema se presenta con ejemplos visuales, cuadros comparativos, ejercicios y trucos de memorización.',

    themes: [
      {
        id: '6.1',
        title: 'Acentuación de palabras agudas',
        text: 'Regla: Llevan tilde las palabras agudas (la sílaba tónica es la última) <bold>solo si terminan en vocal, n o s</bold>.',
      
        example: {
          type: 'table',
          textStart: 'Visualiza el patrón:',
          content: [
            ['Palabra', 'Tipo', 'Lleva tilde?', 'Explicación'],
            ['camión', 'Aguda', 'Sí', 'Termina en n'],
            ['reloj', 'Aguda', 'No', 'Termina en j'],
            ['café', 'Aguda', 'Sí', 'Termina en vocal'],
            ['papel', 'Aguda', 'No', 'Termina en l']
          ],
          textEnd: ''
        },
      
        activity: {
          type: 'multiple-select',
          title: 'Actividad: Identifica palabras agudas con tilde',
          instructions: 'Selecciona del siguiente grupo las palabras agudas que deben llevar tilde:',
          content: [
            {
              question: '',
              options: ['leccion', 'compas', 'doctor', 'bebé'],
              correctAnswers: ['leccion', 'compas', 'bebé']
            }
          ]
        },
      
        note: '<bold>Truco:</bold> Si la última sílaba suena fuerte y termina en vocal, n o s, pon tilde.'
      },
      {
        id: '6.2',
        title: 'Acentuación de palabras graves',
        text: 'Regla: Las palabras graves (sílaba tónica en la penúltima) llevan tilde <bold>solo si NO terminan en vocal, n o s</bold>.',
      
        example: {
          type: 'table',
          textStart: 'Cuadro comparativo:',
          content: [
            ['Palabra', 'Termina en...', 'Lleva tilde?', 'Ejemplo de uso'],
            ['árbol', 'consonante distinta de n o s', 'Sí', 'El árbol da sombra.'],
            ['casa', 'vocal', 'No', 'Mi casa es blanca.'],
            ['créditos', 's', 'No', 'Tiene muchos créditos.'],
            ['difícil', 'l', 'Sí', 'El examen fue difícil.']
          ],
          textEnd: ''
        },
      
        activity: {
          type: 're-write',
          title: 'Actividad: Corrige las palabras si es necesario',
          instructions: 'Observa las siguientes palabras y escribe correctamente aquellas que deben llevar tilde:',
          content: [
            { original: 'examen', correct: 'examen' },
            { original: 'facil', correct: 'fácil' },
            { original: 'azucar', correct: 'azúcar' },
            { original: 'lapiz', correct: 'lápiz' }
          ]
        },
      
        note: '<bold>Truco:</bold> Si la fuerza está en la penúltima sílaba y la palabra no termina en vocal, n o s, lleva tilde.'
      },
      {
        id: '6.3',
        title: 'Acentuación de palabras esdrújulas y sobresdrújulas',
        text: 'Regla: <bold>Siempre llevan tilde</bold>, sin importar en qué letra terminan.\n\n<subheading>Esquema visual:</subheading>\n<list><bold>Esdrújulas</bold>: La sílaba tónica está en la antepenúltima.</list><list><italic>Ejemplo:</italic> pájaro, médico, lógico</list><list><bold>Sobresdrújulas</bold>: La sílaba tónica está antes de la antepenúltima (generalmente en formas verbales con pronombres).</list><list><italic>Ejemplo:</italic> dándomelo, explícanselo, repítemelo</list>',
      
        activity: {
          type: 'classify-text',
          title: 'Actividad: Clasifica según el tipo de palabra',
          instructions: 'Indica si cada una de las siguientes palabras es aguda, grave, esdrújula o sobresdrújula:',
          options: ['aguda', 'grave', 'esdrújula', 'sobresdrújula'],
          content: [
            { text: 'científico', correctAnswer: 'esdrújula' },
            { text: 'explicándoselo', correctAnswer: 'sobresdrújula' },
            { text: 'mesa', correctAnswer: 'grave' },
            { text: 'cálculo', correctAnswer: 'esdrújula' }
          ]
        },
      
        note: '<bold>Truco:</bold> Si una palabra suena “larga y cargada de acento” al principio, probablemente es esdrújula o sobresdrújula. Siempre lleva tilde.'
      },
      {
        id: '6.4',
        title: 'Uso de la tilde diacrítica en monosílabos',
        text: 'Los monosílabos no se acentúan, <bold>excepto</bold> cuando se usa la <bold>tilde diacrítica</bold> para diferenciar palabras que se escriben igual.',
      
        example: {
          type: 'table',
          textStart: '<italic>Ejemplos:</italic>',
          content: [
            ['Palabra', 'Con tilde', 'Sin tilde', 'Diferencia'],
            ['tú', 'pronombre personal', 'tu', 'determinante posesivo'],
            ['sí', 'afirmación', 'si', 'condicional o nota musical'],
            ['té', 'bebida', 'te', 'pronombre'],
            ['él', 'pronombre personal', 'el', 'artículo']
          ],
          textEnd: ''
        },
      
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Elige la opción correcta según el contexto',
          instructions: 'Selecciona la palabra adecuada para cada oración según su función:',
          content: [
            {
              question: '(Tú / Tu) cuaderno está roto.',
              options: ['Tú', 'Tu'],
              correctAnswer: 'Tu'
            },
            {
              question: 'No sé (si / sí) iré al cine.',
              options: ['si', 'sí'],
              correctAnswer: 'si'
            },
            {
              question: 'Me gusta el (té / te) verde.',
              options: ['té', 'te'],
              correctAnswer: 'té'
            },
            {
              question: '(El / Él) tiene razón.',
              options: ['El', 'Él'],
              correctAnswer: 'Él'
            }
          ]
        },
      
        note: '<bold>Truco:</bold> Si la palabra monosílaba puede tener dos usos diferentes, la tilde diacrítica suele indicar el más específico o enfático.'
      }      
    ],

    summary: [
      'Las palabras agudas llevan tilde si terminan en vocal, n o s.',
      'Las palabras graves llevan tilde si no terminan en vocal, n o s.',
      'Las esdrújulas y sobresdrújulas siempre llevan tilde.',
      'Los monosílabos no se acentúan, salvo los que llevan tilde diacrítica para diferenciarse.'
    ]    
  },
  {
    id: '7',
    title: 'Unidad 7: Uso de los signos de puntuación',
    topics: [
      {title: 'Uso del punto (final, seguido, y aparte).'},
      {title: 'Uso de la coma (enumeraciones, aclaraciones, vocativos).'},
      {title: 'Uso de los dos puntos y el punto y coma.'},
      {title: 'Uso de signos de interrogación y exclamación.'},
      {title: 'Uso de comillas y paréntesis.'}
    ],
    introduction: 'La puntuación es una herramienta fundamental para organizar y dar sentido a los textos escritos. El uso correcto de los signos de puntuación permite separar ideas, aclarar significados, establecer pausas y jerarquizar la información. En esta unidad aprenderás las reglas y funciones principales de los signos de puntuación más comunes, con ejemplos prácticos y actividades para reforzar su aplicación.',

    themes: [
      {
        id: '7.1',
        title: 'Uso del punto (final, seguido y aparte)',
        text: 'El punto se utiliza para indicar el final de una idea completa.\n\n<list><bold>Punto final</bold>: cierra un texto o sección.</list><list><bold>Punto seguido</bold>: separa oraciones dentro de un mismo párrafo.</list><list><bold>Punto y aparte</bold>: separa párrafos dentro de un texto.</list>',
      
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo del uso de punto seguido:',
          content: 'Salimos muy temprano. El cielo estaba despejado. Llegamos sin contratiempos.',
          textEnd: 'Este ejemplo presenta tres oraciones completas dentro de un mismo párrafo, separadas por punto seguido.'
        },
      
        activity: {
          type: 'input',
          title: 'Actividad: Distingue los tipos de punto',
          instructions: 'Lee el siguiente texto y reescríbelo aplicando correctamente los puntos finales, seguidos y aparte para separar las ideas:',
          content: '"El día estaba nublado decidimos salir de todos modos la lluvia nos sorprendió a mitad del camino nos refugiamos bajo un árbol"'
        }
      },
      {
        id: '7.2',
        title: 'Uso de la coma (enumeraciones, aclaraciones, vocativos)',
        text: 'La coma indica una pausa breve. Se emplea en:\n\n<list><bold>Enumeraciones</bold>: para separar elementos dentro de una lista.</list><list><bold>Aclaraciones</bold>: para insertar información adicional sin alterar el sentido principal.</list><list><bold>Vocativos</bold>: para llamar o dirigirse directamente a alguien.</list>',
      
        example: {
          type: 'text',
          textStart: 'A continuación se muestran tres ejemplos de uso de la coma:',
          content:
            'Compramos pan, leche, queso y frutas.\nPedro, el hermano de Ana, llegó tarde.\nMaría, ven aquí.',
          textEnd:
            'El primer ejemplo muestra una enumeración; el segundo, una aclaración; y el tercero, un vocativo.'
        },
      
        activity: {
          type: 're-write',
          title: 'Actividad: Corrige con comas según el caso',
          instructions:
            'Agrega comas donde sea necesario en las siguientes oraciones para que su significado sea claro y correcto:',
          content: [
            {
              original: 'Marta Juan y Luis estudiaron juntos',
              correct: 'Marta, Juan y Luis estudiaron juntos.'
            },
            {
              original: 'Te presento a Carlos mi primo',
              correct: 'Te presento a Carlos, mi primo.'
            },
            {
              original: 'Pablo ven aquí',
              correct: 'Pablo, ven aquí.'
            },
            {
              original: 'Este libro sin duda es el mejor que he leído',
              correct: 'Este libro, sin duda, es el mejor que he leído.'
            },
            {
              original: 'Laura mi mejor amiga llegará mañana',
              correct: 'Laura, mi mejor amiga, llegará mañana.'
            }
          ]
        }
      },
      {
        id: '7.3',
        title: 'Uso de los dos puntos y el punto y coma',
        text: '<list><bold>Dos puntos (:)</bold>: anuncian una explicación, una enumeración o una cita directa.</list>\n<list><bold>Punto y coma (;)</bold>: separa elementos complejos o ideas con comas internas.</list>',
      
        example: {
          type: 'text',
          textStart: 'En los siguientes ejemplos se puede observar el uso adecuado de los dos puntos y el punto y coma:',
          content: 'Llevó de todo: ropa, comida y herramientas.\nLlegaron Ana, la más joven; Pedro, el mayor; y Luisa, la tía.',
          textEnd: 'El primer ejemplo introduce una enumeración con dos puntos; el segundo separa elementos complejos con punto y coma.'
        },
      
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Elige el signo correcto',
          instructions: 'Selecciona si el espacio en blanco debe ir con dos puntos (:) o punto y coma (;):',
          content: [
            {
              question: '1. Compró los siguientes ingredientes___ harina, huevos, azúcar y chocolate.',
              options: [':', ';'],
              correctAnswer: ':'
            },
            {
              question: '2. Carlos vino temprano___ sin embargo, no pudo entrar.',
              options: [':', ';'],
              correctAnswer: ';'
            },
            {
              question: '3. Marta preparó el salón___ colocó las sillas___ ordenó las mesas___ y encendió las luces.',
              options: [': ; ;', '; ; ;', ': : :', '; : ;'],
              correctAnswer: ': ; ;'
            }
          ]
        }
      },
      {
        id: '7.4',
        title: 'Uso de signos de interrogación y exclamación',
        text: 'Estos signos indican preguntas y expresiones emotivas, respectivamente. En español se usan <bold>al inicio y al final</bold> de la oración.',
      
        example: {
          type: 'text',
          textStart: 'A continuación se muestran dos ejemplos de su uso:',
          content: '¿Qué hora es?\n¡Qué sorpresa!',
          textEnd: 'El primer ejemplo expresa una pregunta; el segundo, una exclamación de asombro.'
        },
      
        activity: {
          type: 're-write',
          title: 'Actividad: Completa con signos de interrogación o exclamación',
          instructions: 'Agrega los signos de interrogación (¿?) o exclamación (¡!) que faltan en las siguientes frases:',
          content: [
            {
              original: 'Dónde estás',
              correct: '¿Dónde estás?'
            },
            {
              original: 'No puedo creer que ganamos',
              correct: '¡No puedo creer que ganamos!'
            },
            {
              original: 'Cómo se llama tu profesor',
              correct: '¿Cómo se llama tu profesor?'
            }
          ]
        }
      },
      {
        id: '7.5',
        title: 'Uso de comillas y paréntesis',
        text: '<list><bold>Comillas (“ ”)</bold>: se usan para citas textuales, destacar palabras o marcar un uso especial.</list><list><bold>Paréntesis ( )</bold>: encierran información adicional o aclaratoria.</list>',
      
        example: {
          type: 'text',
          textStart: 'En el siguiente apartado se presentan dos ejemplos representativos:',
          content: 'El niño dijo: “No quiero dormir”.\nNació en 1990 (año del mundial).',
          textEnd: 'El primer ejemplo incluye una cita textual entre comillas; el segundo presenta una información extra dentro de paréntesis.'
        },
      
        activity: {
          type: 're-write',
          title: 'Actividad: Usa comillas o paréntesis según el caso',
          instructions: 'Reescribe las siguientes oraciones colocando comillas o paréntesis donde corresponda para que el texto sea claro y correcto:',
          content: [
            {
              original: 'Juan dijo No tengo miedo',
              correct: 'Juan dijo: “No tengo miedo”.'
            },
            {
              original: 'Mi perro aunque es pequeño es muy valiente',
              correct: 'Mi perro (aunque es pequeño) es muy valiente.'
            },
            {
              original: 'La palabra estrategia es clave en este juego',
              correct: 'La palabra “estrategia” es clave en este juego.'
            }
          ]
        }
      }                  
    ],

    summary: [
      'El punto separa oraciones o párrafos y marca el final de ideas completas.',
      'La coma indica pausas para enumerar, aclarar o dirigirse a alguien.',
      'Los dos puntos introducen una explicación o lista; el punto y coma separa ideas relacionadas con pausas internas.',
      'Los signos de interrogación y exclamación expresan preguntas y emociones.',
      'Las comillas destacan palabras o citas; los paréntesis insertan información adicional.'
    ]    
  }
]