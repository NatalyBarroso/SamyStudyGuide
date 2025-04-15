import { Unit } from "@/core/domain/entities/Unit"

export const module8: readonly Unit[] = [
  {
    id: '1',
    title: 'Unidad 1: Estructura de un cuento',
    topics: [
      { title: 'Introducción: presentación de los personajes, el ambiente y el contexto.' },
      { title: 'Desarrollo: planteamiento del conflicto y las acciones de los personajes.' },
      { title: 'Clímax: punto de mayor tensión en la historia.' },
      { title: 'Desenlace: resolución del conflicto y conclusión de la historia.' },
      {
        title: 'Tipos de narrador:',
        subtopics: [
          'Narrador omnisciente.',
          'Narrador testigo.',
          'Narrador en primera persona.',
          'Narrador en tercera persona.'
        ]
      }
    ],
    introduction: 'En esta unidad aprenderás a reconocer las partes fundamentales que componen un cuento y el propósito de cada una dentro de la narrativa. Comprender la estructura de un cuento no solo te permitirá disfrutar más de la lectura, sino que también te dará herramientas para analizar, interpretar y crear tus propias historias.',

    themes: [
      {
        id: '1.1',
        title: 'Explorando la estructura narrativa',
        text: '<subheading>Introducción:</subheading> Es el punto de partida de la historia. Aquí se presentan los personajes principales, se describe el lugar donde ocurren los hechos y se establece el tono general del cuento. La introducción sienta las bases para que el lector comprenda el contexto en el que se desarrollará la acción. En muchos casos, también se anticipa el tipo de conflicto que se avecina.\n\n<subheading>Desarrollo:</subheading> En esta parte comienza la acción. Los personajes enfrentan un conflicto o problema que deben resolver. Es el momento donde se construye la tensión narrativa y se muestran las decisiones, obstáculos y transformaciones que viven los personajes. El desarrollo puede incluir giros en la historia que mantienen el interés del lector.\n\n<subheading>Clímax:</subheading> Es el momento de mayor intensidad emocional o dramática. Aquí se toma una decisión crucial o sucede un evento inesperado que cambia el curso de la historia. Es el punto de quiebre donde se define el destino de los personajes o el resultado del conflicto principal. Todo lo que se ha construido en el desarrollo llega a este punto de máxima tensión.\n\n<subheading>Desenlace:</subheading> Es la parte final del cuento, donde se resuelve el conflicto y se muestran las consecuencias de las acciones tomadas por los personajes. Puede tener un final cerrado (donde todo queda claro y resuelto) o abierto (dejando algunas preguntas sin respuesta). El desenlace da cierre a la experiencia del lector.',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un cuento breve con sus partes identificadas:',
          content: '<italic>“Había una vez una niña llamada Clara que vivía cerca del bosque (Introducción). Un día, al escuchar un ruido extraño, decidió adentrarse entre los árboles (Desarrollo). Descubrió que un zorro había quedado atrapado en una trampa. Clara dudó si ayudarlo, pues temía que la atacara (Clímax). Finalmente, reunió valor, lo liberó, y el zorro la miró agradecido antes de desaparecer entre los arbustos (Desenlace).”</italic>',
          textEnd: 'Este ejemplo muestra cómo cada parte impulsa la acción del cuento y contribuye a una narrativa coherente y significativa.\n<italic><subheading>Para entender mejor las partes de un cuento, imagina que estás viendo una película:</subheading></italic>\nAl inicio conoces a los personajes y el escenario (Introducción).\nLuego aparece un problema o situación que los personajes deben enfrentar (Desarrollo).\nEn algún momento las cosas llegan a un punto de máxima tensión (Clímax).\nFinalmente, el conflicto se resuelve y la historia llega a su fin (Desenlace).'
        }
      },
      {
        id: '1.2',
        title: 'Tipos de narrador',
        text: 'El narrador es la voz que nos cuenta la historia, y su elección influye profundamente en cómo percibimos los hechos, a los personajes y sus emociones. No todos los cuentos están narrados desde la misma perspectiva, y entender qué tipo de narrador se utiliza nos permite captar mejor el tono y el alcance del relato. Veamos los principales tipos:\n\n<list>Narrador omnisciente.</list><list>Narrador testigo.</list><list>Narrador en primera persona.</list><list>Narrador en tercera persona.</list>',
        example: {
          type: 'table',
          textStart: 'En el siguiente ejemplo se muestran fragmentos con diferentes tipos de narrador:',
          content: [
            ['Tipo de narrador', 'Características principales'],
            ['Omnisciente', 'Conoce todo lo que piensan y sienten los personajes.'],
            ['Testigo', 'Narra desde fuera, observando los hechos sin participar directamente.'],
            ['Primera persona', 'El personaje narra su propia historia.'],
            ['Tercera persona', 'Narra desde fuera usando él/ella/ellos, puede ser limitado u omnisciente.']
          ],
          textEnd: '\n<italic><subheading>"Yo sabía que no debía entrar a ese lugar, pero la curiosidad pudo más que el miedo."</subheading></italic> (Primera persona)\n<italic><subheading>"Luis observaba desde la colina cómo el pueblo ardía. Nada podía hacer."</subheading></italic> (Tercera persona limitada)\n<italic><subheading>"El niño no sabía que su hermana ya lo había perdonado, aunque su corazón seguía dolido."</subheading></italic> (Narrador omnisciente)\nCada tipo de narrador influye en la forma en que percibimos la historia y lo que sabemos sobre los personajes.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Identifica el tipo de narrador',
          instructions: 'Lee el siguiente fragmento y elige el tipo de narrador que corresponde.',
          content: [
            {
              question: '"Daniel regresó a casa con el trofeo en la mano, mientras su familia lo recibía con abrazos."',
              options: ['Omnisciente', 'Primera persona', 'Tercera persona'],
              correctAnswer: 'Omnisciente'
            },
            {
              question: '"Durante la carrera, Daniel tropezó y pensó que ya no ganaría."',
              options: ['Omnisciente', 'Primera persona', 'Tercera persona'],
              correctAnswer: 'Primera persona'
            },
            {
              question: '"Daniel siempre había soñado con ser el mejor corredor de su escuela."',
              options: ['Omnisciente', 'Primera persona', 'Tercera persona'],
              correctAnswer: 'Tercera persona'
            },
            {
              question: '"Pero en los últimos metros, aceleró con todas sus fuerzas y logró adelantar a sus rivales."',
              options: ['Omnisciente', 'Primera persona', 'Tercera persona'],
              correctAnswer: 'Primera persona'
            },
            {
              question: '"Todos los días entrenaba en el parque, lloviera o hiciera sol."',
              options: ['Omnisciente', 'Primera persona', 'Tercera persona'],
              correctAnswer: 'Omnisciente'
            }
          ]
        },
        subthemes: [
          {
            id: '1.2.1',
            title: 'Actividad: Elige el tipo de narrador',
            text: '',
            activity: {
              type: 'multiple-choice',
              title: '',
              instructions: 'Lee cada fragmento y elige qué tipo de narrador se utiliza.',
              content: [
                {
                  question: '1. "Ella no sabía que estaba siendo observada desde la oscuridad del bosque."',
                  options: ['Primera persona', 'Tercera persona', 'Omnisciente', 'Testigo'],
                  correctAnswer: 'Omnisciente'
                },
                {
                  question: '2. "Nos perdimos en la ciudad y tuvimos que dormir en una estación de tren abandonada."',
                  options: ['Tercera persona', 'Testigo', 'Omnisciente', 'Primera persona'],
                  correctAnswer: 'Primera persona'
                },
                {
                  question: '3. "Carlos escuchó el disparo, pero no sabía de dónde provenía."',
                  options: ['Primera persona', 'Omnisciente', 'Tercera persona', 'Testigo'],
                  correctAnswer: 'Tercera persona'
                },
                {
                  question: '4. "No podía soportar la idea de dejarla atrás. Pero debía seguir."',
                  options: ['Testigo', 'Tercera persona', 'Primera persona', 'Omnisciente'],
                  correctAnswer: 'Primera persona'
                },
                {
                  question: '5. "El profesor creía que todo estaba bajo control, pero sus estudiantes ya habían ideado un plan."',
                  options: ['Testigo', 'Tercera persona', 'Omnisciente', 'Primera persona'],
                  correctAnswer: 'Omnisciente'
                }
              ]
            }
          }
        ]
      }
    ],

    summary: [
      'Un cuento se organiza en cuatro partes: introducción, desarrollo, clímax y desenlace.',
      'Cada parte tiene una función específica en la narración y contribuye al sentido global de la historia.',
      'El tipo de narrador influye en la forma de presentar los hechos y en lo que el lector puede conocer.',
      'Comprender la estructura y la voz narrativa permite una lectura más crítica y profunda del cuento.'
    ]
  },
  {
    id: '2',
    title: 'Unidad 2: Características de los personajes',
    topics: [
      {
        title: 'Tipos de personajes:',
        subtopics: [
          'Protagonista.',
          'Antagonista.',
          'Personajes secundarios.',
          'Personajes incidentales.'
        ]
      },
      {
        title: 'Caracterización directa e indirecta:',
        subtopics: [
          'Caracterización directa: descripción explícita del narrador.',
          'Caracterización indirecta: inferencia a través de diálogos, acciones y decisiones.'
        ]
      },
      {
        title: 'Evolución de los personajes:',
        subtopics: [
          'Personajes estáticos (sin cambio).',
          'Personajes dinámicos (con cambio y evolución).'
        ]
      },
      { title: 'Motivaciones y conflictos internos de los personajes.' }
    ],
    introduction: 'En esta unidad aprenderás a reconocer los distintos tipos de personajes que habitan un cuento, cómo se construyen sus características a través de la narración y cuál es su función dentro del desarrollo de la historia. También explorarás la evolución que pueden experimentar a lo largo del relato y cómo sus decisiones revelan sus motivaciones más profundas. Comprender a los personajes te permitirá conectar mejor con la historia y analizarla con mayor profundidad.',

    themes: [
      {
        id: '2.1',
        title: 'Tipos de personajes',
        text: 'Un cuento suele estar formado por varios tipos de personajes, cada uno con un rol distinto en la historia.',
        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Tipo de personaje', 'Función narrativa'],
            ['Protagonista', 'Es el personaje principal. La historia gira en torno a sus decisiones y conflictos.'],
            ['Antagonista', 'Se opone al protagonista y genera el conflicto o tensión principal.'],
            ['Secundarios', 'Acompañan al protagonista o al antagonista, y ayudan a enriquecer la historia.'],
            ['Incidentales', 'Aparecen brevemente y no tienen un impacto directo en el conflicto principal.']
          ],
          textEnd: '\nA continuación se muestra un ejemplo con diferentes tipos de personajes:\n<italic><subheading>“María, una joven curiosa (protagonista), decide resolver el misterio del bosque encantado. Sin embargo, un espíritu guardián (antagonista) intenta detenerla. Su mejor amigo, Julián (personaje secundario), la acompaña durante el viaje. En una posada conocen a una anciana (personaje incidental) que les da un mapa antiguo.”</subheading></italic>\nEste ejemplo ilustra cómo cada personaje cumple una función específica dentro de la narración.'
        }
      },
      {
        id: '2.2',
        title: 'Caracterización directa e indirecta',
        text: 'Los personajes pueden ser descritos de dos maneras:\n\n<list>Caracterización directa: El narrador nos dice explícitamente cómo es el personaje.</list><list>Caracterización indirecta: Descubrimos cómo es el personaje a través de sus palabras, acciones y decisiones.</list>',
        example: {
          type: 'text',
          textStart: 'En el siguiente ejemplo se observan ambos tipos de caracterización:',
          content: '<italic>“Laura era valiente y decidida. Nunca dudaba en defender lo que creía justo”</italic> (caracterización directa).\n<italic>“Laura se levantó, enfrentó al ladrón con firmeza y gritó con voz clara: \'¡No te llevarás nada!\'”</italic> (caracterización indirecta).',
          textEnd: 'Ambas formas ayudan al lector a construir una imagen clara del personaje.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: ¿Cómo conoces al personaje?',
          instructions: 'Lee cada oración y clasifica si se trata de caracterización directa o indirecta.',
          content: [
            {
              question: '"Pedro era egoísta y no pensaba en los demás."',
              options: ['Directa', 'Indirecta'],
              correctAnswer: 'Directa'
            },
            {
              question: '"Pedro fingió estar enfermo para no ayudar a su hermana con la mudanza."',
              options: ['Directa', 'Indirecta'],
              correctAnswer: 'Indirecta'
            },
            {
              question: '"Camila tenía el cabello rizado, ojos grandes y una sonrisa brillante."',
              options: ['Directa', 'Indirecta'],
              correctAnswer: 'Directa'
            },
            {
              question: '"Camila compartió su comida con un desconocido sin pensarlo dos veces."',
              options: ['Directa', 'Indirecta'],
              correctAnswer: 'Indirecta'
            },
            {
              question: '"Martina era conocida por su generosidad."',
              options: ['Directa', 'Indirecta'],
              correctAnswer: 'Directa'
            }
          ]
        }
      },
      {
        id: '2.3',
        title: 'Evolución de los personajes',
        text: 'No todos los personajes cambian durante una historia, pero algunos experimentan una transformación significativa. A esto se le llama evolución del personaje:\n\n<list>Estáticos: No cambian, mantienen su forma de pensar, actuar y sentir.</list><list>Dinámicos: Cambian como resultado de sus experiencias a lo largo del cuento.</list>',
        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: '<italic>“Tomás era un joven miedoso que evitaba todo tipo de retos. Pero tras ayudar a su comunidad durante una tormenta, descubrió su valentía y se convirtió en líder del grupo.”</italic>',
          textEnd: 'Este personaje es dinámico, ya que cambia como resultado de sus vivencias.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: ¿Estático o dinámico?',
          instructions: 'Lee los fragmentos y determina si el personaje es estático o dinámico.',
          content: [
            {
              question: '"Ana siguió negándose a perdonar a su hermana, sin importar lo que pasara."',
              options: ['Estático', 'Dinámico'],
              correctAnswer: 'Estático'
            },
            {
              question: '"Carlos solía ser egoísta, pero luego de cuidar a su abuela enferma, se volvió más compasivo."',
              options: ['Estático', 'Dinámico'],
              correctAnswer: 'Dinámico'
            },
            {
              question: '"Iván nunca dejó de mentir, incluso cuando lo descubrieron."',
              options: ['Estático', 'Dinámico'],
              correctAnswer: 'Estático'
            },
            {
              question: '"Marta, al perder su empleo, decidió reinventarse y aprendió un nuevo oficio."',
              options: ['Estático', 'Dinámico'],
              correctAnswer: 'Dinámico'
            },
            {
              question: '"Luis mantuvo siempre su actitud burlona, sin importar las consecuencias."',
              options: ['Estático', 'Dinámico'],
              correctAnswer: 'Estático'
            }
          ]
        }
      },
      {
        id: '2.4',
        title: 'Motivaciones y conflictos internos',
        text: 'Las acciones de los personajes no son aleatorias. Detrás de cada decisión hay una motivación: algo que desean, temen o necesitan. A menudo, esto se relaciona con un conflicto interno, es decir, una lucha emocional o moral que viven dentro de sí mismos.',
        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: '<italic>“Sofía deseaba ser reconocida por su padre, pero temía decepcionarlo. Cuando tuvo la oportunidad de tomar una decisión importante, dudó entre seguir su sueño o hacer lo que él esperaba.”</italic>',
          textEnd: 'Este ejemplo muestra un conflicto interno entre el deseo de libertad y la necesidad de aprobación.'
        }
      }
    ],

    summary: [
      'Existen diferentes tipos de personajes con funciones distintas en la historia.',
      'Podemos conocer a los personajes a través de descripciones explícitas (caracterización directa) o a través de sus acciones y palabras (caracterización indirecta).',
      'Algunos personajes cambian durante la historia (dinámicos) y otros se mantienen igual (estáticos).',
      'Las motivaciones y los conflictos internos dan profundidad a los personajes y los hacen más humanos.'
    ]
  },
  {
    id: '3',
    title: 'Unidad 3: Comprensión de figuras retóricas',
    topics: [
      { title: 'Metáfora: comparación implícita entre dos elementos.' },
      { title: 'Símil: comparación explícita utilizando términos como "como", "parece" o "se asemeja a".' },
      { title: 'Analogía: relación de semejanza entre dos conceptos o situaciones.' },
      { title: 'Reiteración: repetición de una palabra o frase para dar énfasis.' },
      { title: 'Hipérbole: exageración intencional para resaltar una idea.' },
      { title: 'Personificación: atribución de características humanas a objetos o animales.' },
      { title: 'Ironía: expresión que da a entender lo contrario de lo que se dice.' }
    ],
    introduction: 'En esta unidad aprenderás a reconocer e interpretar las figuras retóricas que los autores utilizan en los cuentos para enriquecer su lenguaje, evocar imágenes poderosas y transmitir emociones profundas. Estas herramientas literarias no solo embellecen el texto, sino que también ayudan al lector a conectarse con los personajes, los conflictos y los temas de manera más significativa.',

    themes: [
      {
        id: '3.1',
        title: 'Explorando las figuras retóricas',
        text: 'Las figuras retóricas son recursos del lenguaje que los autores emplean para enriquecer la expresión y hacer más vívido su mensaje. A través de ellas, un texto adquiere ritmo, emoción y profundidad simbólica.\n\n<subheading>Metáfora:</subheading> Consiste en decir que una cosa es otra para destacar una cualidad o semejanza sin usar nexos comparativos.\n\n<subheading>Símil:</subheading> Establece una comparación entre dos elementos con conectores como "como", "parece", "igual que".\n\n<subheading>Analogía:</subheading> Compara relaciones entre pares de elementos, ayudando a explicar una idea compleja con otra más familiar.\n\n<subheading>Reiteración:</subheading> Repetición intencional de palabras o frases para enfatizar un sentimiento o idea.\n\n<subheading>Hipérbole:</subheading> Uso de exageraciones para dar mayor fuerza a una imagen o mensaje.\n\n<subheading>Personificación:</subheading> Da cualidades humanas a seres inanimados, animales o conceptos.\n\n<subheading>Ironía:</subheading> Expresa lo contrario de lo que se dice, generando un efecto humorístico o crítico.',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un fragmento con varias figuras retóricas:',
          content: '<italic>“El sol lloraba detrás de las nubes mientras Pedro corría como el viento. Su corazón era un tambor furioso, golpeando dentro de su pecho. Nadie, ni siquiera el tiempo, podía alcanzarlo.”</italic>',
          textEnd: 'Aquí se observa personificación ("el sol lloraba"), un símil ("corría como el viento"), y una metáfora ("su corazón era un tambor furioso"). Estas figuras intensifican el dramatismo y la emoción de la escena.'
        },
        activity: {
          type: 'multiple-choice',
          title: 'Actividad: Identifica la figura retórica',
          instructions: 'Lee cada fragmento y elige qué figura retórica se utiliza.',
          content: [
            {
              question: '1. "Tus palabras son puñales que atraviesan el alma."',
              options: ['Metáfora', 'Símil', 'Ironía', 'Analogía'],
              correctAnswer: 'Metáfora'
            },
            {
              question: '2. "La luna se asomó curiosa entre las cortinas del cielo."',
              options: ['Personificación', 'Hipérbole', 'Reiteración', 'Símil'],
              correctAnswer: 'Personificación'
            },
            {
              question: '3. "Tengo tanta hambre que me comería una montaña."',
              options: ['Metáfora', 'Hipérbole', 'Ironía', 'Símil'],
              correctAnswer: 'Hipérbole'
            },
            {
              question: '4. "La vida es como una carrera de obstáculos."',
              options: ['Metáfora', 'Analogía', 'Símil', 'Personificación'],
              correctAnswer: 'Símil'
            },
            {
              question: '5. "Repitió y repitió la misma frase como un eco eterno."',
              options: ['Reiteración', 'Ironía', 'Símil', 'Metáfora'],
              correctAnswer: 'Reiteración'
            }
          ]
        }
      },
      {
        id: '3.2',
        title: 'Analogías en los cuentos',
        text: 'Una analogía no solo compara, sino que ayuda a entender mejor una idea.',
        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: '<italic>“Leer es a la mente lo que el ejercicio es al cuerpo.”</italic>',
          textEnd: 'Esta analogía compara dos relaciones: leer y mente, ejercicio y cuerpo, mostrando que ambos procesos fortalecen su respectiva dimensión.'
        },
        activity: {
          type: 'multiple-inputs',
          title: 'Actividad: Completa con la figura retórica adecuada',
          instructions: 'Completa cada oración con una figura retórica que dé fuerza al mensaje. Puedes usar metáforas, símiles, hipérboles, etc.',
          content: [
            'Cuando él habla, su voz ________.',
            'Aquella espera fue tan larga que ________.',
            'El miedo se arrastró ________.',
            'Su tristeza era ________.',
            'Brillaba como ________.'
          ]
        }
      },
      {
        id: '3.3',
        title: 'Ironía: decir lo contrario para decir más',
        text: 'La ironía puede ser sutil o evidente. Se usa para expresar lo contrario de lo que se dice, muchas veces con un tono burlón o crítico.',
        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: '<italic>“¡Qué puntual eres! Llegaste solo media hora tarde, como siempre.”</italic>',
          textEnd: 'Aunque parece un elogio, en realidad es una crítica a la falta de puntualidad. Esa contradicción genera el efecto irónico.'
        }
      }
    ],

    summary: [
      'Las figuras retóricas enriquecen el lenguaje de los cuentos y permiten expresar emociones, sensaciones y significados profundos.',
      'Metáforas, símiles, analogías, hipérboles, reiteraciones, personificaciones e ironías son recursos comunes que embellecen la narrativa.',
      'Identificarlas e interpretarlas permite una lectura más sensible y creativa.',
      'Saber usarlas también mejora la expresión escrita y la capacidad de comunicar ideas de forma más vívida y poética.'
    ]
  },
  {
    id: '4',
    title: 'Unidad 4: Análisis e interpretación de cuentos',
    topics: [
      {
        title: 'Intención del autor:',
        subtopics: [
          'Mensaje explícito e implícito.',
          'Uso de símbolos y referencias culturales.'
        ]
      },
      {
        title: 'Tema central:',
        subtopics: [
          'Interpretación del conflicto principal.',
          'Relación entre el tema y las acciones de los personajes.'
        ]
      },
      {
        title: 'Tono y estilo:',
        subtopics: [
          'Lenguaje formal e informal.',
          'Uso de diálogos y descripciones.',
          'Velocidad y ritmo narrativo.'
        ]
      },
      {
        title: 'Interpretación personal:',
        subtopics: [
          'Opinión crítica sobre el mensaje y el desarrollo de la historia.',
          'Evaluación de la efectividad de las decisiones narrativas.'
        ]
      }
    ],
    introduction: 'En esta unidad pondrás en práctica todo lo aprendido hasta ahora para analizar e interpretar cuentos de forma integral. Examinarás la intención del autor, el tema central del cuento, el tono y estilo narrativo, así como tus propias interpretaciones personales. Esta unidad busca desarrollar tu pensamiento crítico, tu capacidad de argumentación y tu sensibilidad literaria.',

    themes: [
      {
        id: '4.1',
        title: 'La intención del autor',
        text: 'Todo cuento transmite una idea, ya sea de forma directa o simbólica. Entender lo que el autor quiere comunicar es clave para una lectura profunda.\n\n<list>Mensaje explícito: Se expresa claramente en el cuento.</list><list>Mensaje implícito: No está dicho directamente; el lector debe deducirlo.</list>',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content: '<italic>“Tras encontrar una billetera en la calle, Andrés la devolvió sin esperar nada a cambio. El dueño le ofreció una recompensa, pero él la rechazó con una sonrisa.”</italic>',
          textEnd: 'El mensaje explícito es que Andrés actuó con honestidad. El mensaje implícito podría ser que la bondad no necesita reconocimiento.'
        },
        activity: {
          type: 'multiple-inputs',
          title: 'Actividad: ¿Qué quiso decir el autor?',
          instructions: 'Lee los fragmentos y completa con el mensaje implícito que mejor los represente.',
          content: [
            '"Julia siempre ayudaba a sus compañeros, incluso cuando ellos no lo hacían por ella."',
            '"Carlos mintió para conseguir lo que quería, pero al final nadie confió más en él."',
            '"El anciano cuidaba cada día su jardín, aunque nadie pasara a verlo."',
            '"Nadie escuchaba a Ana, hasta que fue ella quien resolvió el problema más grande del grupo."',
            '"La familia discutía todo el tiempo, pero el abuelo siempre lograba reunirlos con una historia."'
          ]
        }
      },
      {
        id: '4.2',
        title: 'El tema central y el conflicto',
        text: 'El tema es la idea principal del cuento. Muchas veces se revela a través del conflicto que enfrentan los personajes.',

        example: {
          type: 'table',
          textStart: '',
          content: [
            ['Elemento', 'Ejemplo'],
            ['Tema central', 'La búsqueda de la identidad'],
            ['Conflicto', 'Un joven duda entre seguir sus sueños o cumplir las expectativas de su familia']
          ],
          textEnd: '\n<italic><subheading>“Lucía quería estudiar arte, pero sus padres insistían en que estudiara medicina. Durante el verano, participó en un concurso de pintura y ganó el primer lugar. Esa experiencia cambió su rumbo.”</subheading></italic>\nEl tema es la lucha por la vocación. El conflicto está en la tensión entre el deseo personal y la presión familiar.'
        }
      },
      {
        id: '4.3',
        title: 'Tono y estilo del cuento',
        text: 'El tono y el estilo del autor influyen en cómo se percibe la historia.\n\n<list><bold>Tono:</bold> Puede ser serio, humorístico, triste, reflexivo...</list><list><bold>Estilo:</bold> Se refiere al uso del lenguaje, ritmo, diálogos, descripciones...</list>',

        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content: '<italic>“¿Otra vez tarde, Ricardo?—dijo la profesora con una ceja levantada—. Eres más impredecible que el clima.”</italic>',
          textEnd: 'El tono es humorístico, el estilo informal y con uso de diálogo.'
        },

        activity: {
          type: 'fill-in-the-blanks',
          title: 'Actividad: Identifica tono y estilo',
          instructions: 'Lee cada oración y completa con el tono y el estilo presentes.',
          content: [
            {
              sentence: '“Las lágrimas corrían silenciosas por su rostro mientras el reloj marcaba la hora final.” Tono: ___ / Estilo: ___',
              answer: 'triste / descriptivo'
            },
            {
              sentence: '“¡Qué gran idea!—exclamó Tomás—. Seguro que nada podría salir mal.” Tono: ___ / Estilo: ___',
              answer: 'irónico / informal con diálogo'
            },
            {
              sentence: '“Cada rincón de la vieja biblioteca olía a secretos y polvo del pasado.” Tono: ___ / Estilo: ___',
              answer: 'nostálgico / poético'
            },
            {
              sentence: '“Otra misión cumplida. Ahora solo faltaban tres... pensó el agente sin mostrar emoción.” Tono: ___ / Estilo: ___',
              answer: 'serio / narrativo objetivo'
            },
            {
              sentence: '“El viento aullaba como si el bosque quisiera hablar con ella.” Tono: ___ / Estilo: ___',
              answer: 'misterioso / simbólico'
            }
          ]
        }
      },
      {
        id: '4.4',
        title: 'Interpretación personal',
        text: 'No hay una sola forma de leer un cuento. Lo importante es sustentar tu opinión con ejemplos del texto.',

        example: {
          type: 'text',
          textStart: 'A continuación se muestra un ejemplo:',
          content: '<italic>“Creo que el mensaje del cuento es que no debemos tener miedo al cambio. El personaje principal renuncia a una vida segura por algo incierto, pero encuentra felicidad. Me pareció una buena decisión narrativa que el autor muestre ese cambio a través de pequeños actos cotidianos.”</italic>',
          textEnd: ''
        },

        activity: {
          type: 'multiple-inputs',
          title: 'Actividad: Tu mirada crítica',
          instructions: 'Lee cada afirmación y elige la interpretación personal más adecuada.',
          content: [
            'El personaje renuncia a algo importante por otra persona.',
            'El final del cuento es abierto, ¿qué crees que significa?',
            '¿El título refleja bien el tema del cuento?',
            '¿Hubieras tomado las mismas decisiones que el protagonista?',
            '¿Qué simboliza el objeto que aparece repetidamente en la historia?'
          ]
        }
      }
    ],

    summary: [
      'La intención del autor puede ser explícita o implícita y muchas veces usa símbolos para transmitir su mensaje.',
      'El tema central se revela a través del conflicto de los personajes.',
      'El tono y estilo afectan la forma en que el lector interpreta la historia.',
      'La interpretación personal es valiosa siempre que esté bien argumentada.'
    ]
  },
  {
    id: '5',
    title: 'Unidad 5: Creación de un cuento original',
    topics: [
      {title: 'Planificación:',
        subtopics: [
          'Definir el conflicto central.',
          'Crear un esquema narrativo (introducción, desarrollo, clímax, desenlace).'
        ]
      },
      {title: 'Desarrollo de personajes:',
        subtopics: [
          'Protagonista, antagonista y personajes secundarios.',
          'Motivaciones y conflictos internos.'
        ]
      },
      {title: 'Uso de lenguaje literario:',
        subtopics: [
          'Uso de metáforas, símiles y otras figuras retóricas.',
          'Estilo narrativo y tono adecuado.'
        ]
      }
    ],
    introduction: 'En esta unidad darás el paso final: convertirte en autor. Utilizarás todo lo que has aprendido sobre estructura narrativa, desarrollo de personajes y lenguaje literario para crear tu propio cuento original. A través de la planificación, la redacción y la revisión, desarrollarás una historia coherente, con personajes complejos y un estilo narrativo personal.',

    themes: [
      {
        id: '5.1',
        title: 'Planificación: El mapa de tu cuento',
        text: 'Antes de escribir, necesitas planificar los elementos principales de tu historia. Una buena planificación te ayudará a mantener la coherencia narrativa.',
        example: {
          type: 'table',
          textStart: 'A continuación se muestra una tabla con los elementos clave para planificar tu cuento:',
          content: [
            ['Elemento', 'Pregunta guía'],
            ['Conflicto', '¿Qué problema enfrentará el protagonista?'],
            ['Personajes', '¿Quiénes participan y qué quieren lograr?'],
            ['Escenario', '¿Dónde y cuándo ocurre la historia?'],
            ['Estructura', '¿Cómo se desarrolla la trama?']
          ],
          textEnd: ''
        },
        activity: {
          type: 'multiple-inputs',
          title: 'Actividad: Esquema de cuento',
          instructions: 'Completa este esquema con las ideas de tu cuento original.',
          content: [
            'Título provisional:',
            'Conflicto principal:',
            'Introducción (personajes y ambiente):',
            'Desarrollo (acciones principales):',
            'Clímax (punto de mayor tensión):',
            'Desenlace (resolución del conflicto):'
          ]
        }
      },
      {
        id: '5.2',
        title: 'Desarrollo de personajes: Profundidad y humanidad',
        text: 'Los personajes deben ser creíbles, tener motivaciones claras y reaccionar de forma coherente ante los conflictos.',
        example: {
          type: 'text',
          textStart: 'A continuación se muestra un perfil breve de personaje:',
          content: '<italic>“Elena, 14 años, vive con su abuela. Es reservada, observadora y valiente. Su miedo a defraudar a los demás la hace callar cosas importantes. Sueña con ser escritora, pero teme mostrar sus textos.”</italic>',
          textEnd: 'Este personaje tiene características físicas, psicológicas, un conflicto interno y una meta personal. Todo eso la vuelve interesante y compleja.'
        },
        activity: {
          type: 'multiple-inputs',
          title: 'Actividad: Crea tu personaje',
          instructions: 'Elige un protagonista y un antagonista. Describe brevemente su aspecto, personalidad, motivaciones y conflicto interno.',
          content: [
            'Nombre del protagonista:',
            'Edad y aspecto físico:',
            'Rasgos de personalidad:',
            'Deseo o meta principal:',
            'Miedo o conflicto interno:',
            'Nombre del antagonista:',
            'Relación con el protagonista:',
            'Qué lo motiva a actuar:'
          ]
        }
      },
      {
        id: '5.3',
        title: 'Lenguaje literario: Darle vida a las palabras',
        text: 'Tu historia no solo debe tener una buena trama, sino también un estilo propio. Las figuras retóricas pueden ayudarte a hacer tu cuento más evocador.',
        example: {
          type: 'text',
          textStart: 'Ejemplo:',
          content: '<italic>“El miedo se le enredaba en los tobillos como raíces invisibles. A cada paso, sentía que su alma pesaba más que su cuerpo.”</italic>',
          textEnd: 'Aquí se usa personificación y símil para representar una emoción de manera vívida y poética.'
        },
        activity: {
          type: 'multiple-inputs',
          title: 'Actividad: Añade figuras retóricas',
          instructions: 'Enriquece estas frases simples utilizando alguna figura literaria (símil, metáfora, personificación o hipérbole).',
          content: [
            'El cielo estaba oscuro.',
            'Caminó sin hablar.',
            'Sentía miedo.',
            'El sol brillaba fuerte.',
            'Se puso muy feliz.'
          ]
        }
      }                  
    ],
    summary: [
      'La creación de un cuento comienza con una planificación clara del conflicto y la estructura narrativa.',
      'Los personajes deben tener profundidad, con motivaciones, metas y conflictos internos bien definidos.',
      'El uso del lenguaje literario y un estilo personal enriquecen la historia y conectan emocionalmente con el lector.',
      'Esta unidad te invita a convertirte en narrador y creador, utilizando todas las herramientas vistas a lo largo del módulo para dar vida a una historia única.'
    ]    
  }
]