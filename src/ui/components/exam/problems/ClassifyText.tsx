'use client'
import { useState } from 'react'

export interface ClassifyTextProps {
  text: string
  options: string[]
  instructions: string
  correctAnswer: string
}

export default function ClassifyText({ text, options, instructions }: ClassifyTextProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  return (
    <div className="mt-8 space-y-4">
      <div className="my-4">
        <p className="font-semibold text-xl font-[family-name:var(--font-courier-prime)]">{instructions}</p>
      </div>
      <p className="text-base italic font-[family-name:var(--font-courier-prime)]">{text}</p>

      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="classify-text"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => setSelectedAnswer(option)}
              className="accent-[var(--primary-color)]"
            />
            <span className="text-gray-800 text-lg font-[family-name:var(--font-cutive-mono)]">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
