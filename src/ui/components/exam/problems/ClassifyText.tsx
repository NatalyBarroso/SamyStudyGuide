'use client'
import { useState } from 'react'

export interface ClassifyTextProps {
  text: string
  options: string[]
  instructions: string
  correctAnswer: string
  showResults: boolean
}

export default function ClassifyText({ text, options, instructions, correctAnswer, showResults }: ClassifyTextProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const isCorrect = selectedAnswer === correctAnswer
  const isIncorrect = selectedAnswer && selectedAnswer !== correctAnswer

  return (
    <div className="mt-8 space-y-4">
      <div className="my-4">
        <p className="font-semibold text-xl font-[family-name:var(--font-courier-prime)]">{instructions}</p>
      </div>
      <p className="text-base italic font-[family-name:var(--font-courier-prime)]">{text}</p>

      <div className="flex flex-wrap gap-4">
        {options.map((option) => {
          const isSelected = selectedAnswer === option

          let borderColor = 'border-b-[3px] border-[#7E99A3]'
          if (showResults) {
            if (isSelected && isCorrect) {
              borderColor = 'border-b-[3px] border-[#B3D9B3]'
            } else if (isSelected && isIncorrect) {
              borderColor = 'border-b-[3px] border-[#D8B6B6]'
            }
          }
          return (
            <label key={option} className={`flex items-center gap-2 cursor-pointer ${isSelected ? `${borderColor}` : `hover:border-b-[3px] border-gray-50`}`}>
              <input
                type="radio"
                name="classify-text"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => setSelectedAnswer(option)}
                className="accent-[var(--primary-color)]"
                disabled={showResults}
              />
              <span className="text-gray-800 text-lg font-[family-name:var(--font-cutive-mono)]">{option}</span>
            </label>
          )
        })}
      </div>

      {showResults && selectedAnswer && (
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
