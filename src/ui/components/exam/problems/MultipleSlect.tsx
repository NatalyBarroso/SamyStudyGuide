import { useState } from "react"

export interface MultipleSelectProps {
  question: string
  options: string[]
  correctAnswers?: string[]
  showResults: boolean
}

export default function MultipleSelect({ question, options, correctAnswers, showResults }: MultipleSelectProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    )
  }

  const allCorrectSelected = correctAnswers?.every(answer => selectedOptions.includes(answer))
  const noIncorrectSelected = selectedOptions.every(answer => correctAnswers?.includes(answer))
  const isAnswerCorrect = allCorrectSelected && noIncorrectSelected

  return (
    <div className="space-y-4 mt-12">
      <p className="font-semibold text-xl font-[family-name:var(--font-courier-prime)]">
        1. {question}
      </p>

      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedOptions.includes(option)
          const isCorrect = correctAnswers?.includes(option)

          let bgColor = 'bg-[var(--asset-color)]'
          if (showResults) {
            if (isSelected && isCorrect) {
              bgColor = 'bg-[var(--correct-answer-color)]'
            } else if (isSelected && !isCorrect) {
              bgColor = 'bg-[var(--wrong-answer-color)]'
            } else if (!isSelected && isCorrect) {
              bgColor = 'bg-[var(--correct-answer-color)]'
            }
          }

          return (
            <label
              key={index}
              className={`flex items-start gap-4 p-2 rounded-md cursor-pointer transition-all 
                ${isSelected ? `${bgColor} border` : 'hover:bg-gray-50'} 
              `}
            >
              <input
                type="checkbox"
                value={option}
                checked={isSelected}
                onChange={() => toggleOption(option)}
                className="mt-1 accent-[var(--primary-color)]"
                disabled={showResults}
              />
              <span className="text-gray-800 text-md font-[family-name:var(--font-cutive-mono)]">{option}</span>
            </label>
          )
        })}
      </div>

      {showResults && (
        <div className="mt-2 text-md font-[family-name:var(--font-cutive-mono)] text-[var(--correct-answer-text)]">
          {isAnswerCorrect ? (
            <p>Respuesta correcta</p>
          ) : (
            <>
              <p>Estas son las respuestas correctas:</p>
              <ul className="list-disc ml-5 mt-1">
                {correctAnswers?.map((answer, index) => (
                  <li key={index}>{answer}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  )
}
