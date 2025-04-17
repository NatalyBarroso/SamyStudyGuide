'use client'
import { useState } from 'react'
import StyledText from '../common/StyledText'

interface Question {
  question: string
  options: string[]
  correctAnswer?: string
}

interface ActivityMultipleChoiceProps {
  title: string
  instructions: string
  content: Question[]
}

const ActivityMultipleChoice = ({ title, instructions, content }: ActivityMultipleChoiceProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (questionIndex: number, option: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: option }))
    setShowResults(false)
  }

  const handleCheckAnswers = () => {
    setShowResults(true)
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-2 font-courier-prime">{title}</h3>
      <div className="my-4">
        <StyledText text={instructions} />
      </div>

      <div className="flex flex-col gap-6">
        {content.map((item, index) => {
          const userAnswer = selectedAnswers[index]
          const isCorrect = item.correctAnswer && userAnswer === item.correctAnswer

          return (
            <div key={index} className="border border-[#4C585B] rounded-sm p-4 shadow-sm bg-[#f2f5f6]">
              <p className="font-semibold mb-2">
                {item.question}
              </p>
              <ul className="flex flex-col gap-2">
                {item.options.map((option, optIdx) => (
                  <li key={optIdx}>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio"
                        // name={`question-${index}`}
                        value={option}
                        checked={userAnswer === option}
                        onChange={() => handleSelect(index, option)}
                        className="accent-[var(--primary-color)]" />
                      <span>{option}</span>
                    </label>
                  </li>
                ))}
              </ul>

              {/* Mostrar retroalimentacion */}
              {showResults && item.correctAnswer && (
                <div className="mt-2 text-sm font-semibold">
                  {isCorrect ? (
                    <span className="text-green-600">✅ Respuesta correcta</span>
                  ) : (
                    <span className="text-red-600">
                      ❌ Respuesta incorrecta.
                    </span>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Botón de verificación */}
      <div className="mt-6">
        <button
          onClick={handleCheckAnswers}
          className="bg-[var(--primary-color)] text-white font-semibold py-2 px-4 rounded hover:bg-[var(--secondary-color)] transition-colors cursor-pointer"
        >
          Verificar respuestas
        </button>
      </div>
    </div>
  )
}

export default ActivityMultipleChoice