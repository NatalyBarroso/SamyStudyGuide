'use client'
import { useState } from 'react'

interface MultiSelectQuestion {
  question: string
  options: string[]
  correctAnswers: string[]
}

interface ActivityMultipleSelectProps {
  title: string
  instructions: string
  content: MultiSelectQuestion[]
}

const ActivityMultipleSelect = ({ title, instructions, content }: ActivityMultipleSelectProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string[]>>({})
  const [showResults, setShowResults] = useState(false)

  const handleToggle = (questionIndex: number, option: string) => {
    setSelectedAnswers(prev => {
      const current = prev[questionIndex] || []
      const updated = current.includes(option)
        ? current.filter(o => o !== option)
        : [...current, option]
      return { ...prev, [questionIndex]: updated }
    })
  }

  const isCorrect = (selected: string[], correct: string[]) => {
    const sortedA = [...selected].sort()
    const sortedB = [...correct].sort()
    return JSON.stringify(sortedA) === JSON.stringify(sortedB)
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-2 font-courier-prime">{title}</h3>
      <p className="mb-4">{instructions}</p>

      <div className="flex flex-col gap-6">
        {content.map((item, index) => {
          const selected = selectedAnswers[index] || []
          const correct = item.correctAnswers
          const answered = showResults && selected.length > 0
          const correctStatus = answered ? isCorrect(selected, correct) : null

          return (
            <div key={index} className="border rounded-md p-4 shadow-sm bg-white">
              <p className="font-semibold mb-2">{index + 1}. {item.question}</p>
              <ul className="flex flex-col gap-2">
                {item.options.map((option, optIdx) => {
                  const isChecked = selected.includes(option)
                  const isCorrectOption = correct.includes(option)

                  return (
                    <li key={optIdx}>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          value={option}
                          checked={isChecked}
                          onChange={() => handleToggle(index, option)}
                          className="accent-[var(--primary-color)]"
                        />
                        <span className={`
                          ${showResults ? (
                            isCorrectOption
                              ? 'text-green-700 font-semibold'
                              : isChecked
                                ? 'text-red-600 line-through'
                                : ''
                          ) : ''}
                        `}>
                          {option}
                        </span>
                      </label>
                    </li>
                  )
                })}
              </ul>

              {answered && (
                <p className={`mt-3 text-sm font-medium ${correctStatus ? 'text-green-600' : 'text-red-600'}`}>
                  {correctStatus ? '¡Correcto!' : 'Incorrecto'}
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
          className="px-4 py-2 bg-[var(--primary-color)] text-white rounded hover:bg-[var(--secondary-color)] transition-colors"
        >
          Revisar respuestas
        </button>
      </div>
    </div>
  )
}

export default ActivityMultipleSelect
