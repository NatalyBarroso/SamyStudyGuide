import { Unit } from "@/core/domain/entities/Unit";

export const module5: readonly Unit[] = [
  {
    id: '1',
    title: 'Unidad 1: Uso de las letras v y b',
    topics: [
      {title: 'Reglas para el uso de la letra v.'},
      {title: 'Reglas para el uso de la letra b.'},
      {title: 'Casos especiales y excepciones.'}
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
      }      
    ]
  }
]