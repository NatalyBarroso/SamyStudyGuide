'use client'
import { useState } from 'react'
import StyledText from '../common/StyledText'

interface FillInTheBlankItem {
  sentence: string // Ejemplo: "_______ de la Segunda Guerra Mundial, se establecieron acuerdos de paz."
  answer: string   // Ejemplo: "Después"
}

interface ActivityFillInTheBlanksProps {
  title: string
  instructions: string
  content: FillInTheBlankItem[]
}

const ActivityFillInTheBlanks = ({ title, instructions, content }: ActivityFillInTheBlanksProps) => {
  const [responses, setResponses] = useState<string[]>(Array(content.length).fill(''))
  const [showResults, setShowResults] = useState(false)

  const handleChange = (index: number, value: string) => {
    const updated = [...responses]
    updated[index] = value
    setResponses(updated)
    setShowResults(false)
  }

  const checkCorrect = (response: string, answer: string) =>
    response.trim().toLowerCase() === answer.trim().toLowerCase()

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-2 font-courier-prime">{title}</h3>
      <div className="my-4">
        <StyledText text={instructions} />
      </div>

      <div className="flex flex-col gap-6">
        {content.map((item, index) => {
          const parts = item.sentence.split('_______')
          const isCorrect = checkCorrect(responses[index], item.answer)

          return (
            <div key={index} className="p-4 border rounded shadow-sm bg-white">
              <p className="mb-2 text-sm font-medium">Oración {index + 1}</p>
              <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg">
                <span>{parts[0]}</span>
                <input
                  type="text"
                  value={responses[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="border-b-2 border-gray-400 px-2 py-1 focus:outline-none focus:border-[var(--primary-color)]"
                />
                <span>{parts[1]}</span>
              </div>

              {showResults && (
                <p className={`mt-2 text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isCorrect ? '¡Correcto!' : `Incorrecto. Respuesta correcta: "${item.answer}"`}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {/* Botón de revisión */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => setShowResults(true)}
          className="px-4 py-2 bg-[var(--primary-color)] text-white rounded hover:bg-[var(--secondary-color)] transition-colors cursor-pointer"
        >
          Revisar respuestas
        </button>
      </div>
    </div>
  )
}

export default ActivityFillInTheBlanks
