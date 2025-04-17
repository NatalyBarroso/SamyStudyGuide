import { useState } from "react"

export interface MultipleChoiceProps {
  question: string
  options: string[]
  correctAnswer?: string
  showResult: boolean
}

export default function MultipleChoice({ question, options, correctAnswer, showResult }: MultipleChoiceProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const isCorrect = selectedOption === correctAnswer
  const isIncorrect = selectedOption && selectedOption !== correctAnswer


  return (
    <div className="space-y-4 mt-12">
      <p className="font-semibold text-xl font-[family-name:var(--font-courier-prime)]">
        {question}
      </p>

      <div className="space-y-2">
        {options.map((option, index) => {
          const isSelected = selectedOption === option
          const isRightAnswer = correctAnswer === option

          let bgColor = 'bg-[var(--asset-color)]'
          if (showResult) {
            if (isSelected && isCorrect) {
              bgColor = 'bg-[var(--correct-answer-color)]'
            } else if ( isSelected && isIncorrect) {
              bgColor = 'bg-[var(--wrong-answer-color)]'
            } else if (!isSelected && isRightAnswer && isIncorrect) {
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
                type="radio"
                value={option}
                checked={isSelected}
                onChange={() => setSelectedOption(option)}
                className='accent-[var(--primary-color)]'
                disabled={showResult}
              />
              <span className="text-gray-800 text-md font-[family-name:var(--font-cutive-mono)]">{option}</span>
            </label>
          )
        })}
      </div>

      {showResult && selectedOption && (
        <div className="mt-2 text-md font-[family-name:var(--font-cutive-mono)] text-[var(--correct-answer-text)]">
          {isCorrect ? (
            <p>Respuesta correcta</p>
          ) : (
            <p>La respuesta correcta es <strong>{correctAnswer}</strong></p>
          )}
        </div>
      )}
    </div>
  )
}