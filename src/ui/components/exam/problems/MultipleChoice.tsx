import { useState } from "react"

export interface MultipleChoiceProps {
  question: string
  options: string[]
  correctAnswer?: string
}

export default function MultipleChoice({ question, options }: MultipleChoiceProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)


  return (
    <div className="space-y-4 mt-12">
      <p className="font-semibold text-xl font-[family-name:var(--font-courier-prime)]">
        1. {question}
      </p>

      <div className="space-y-2">
        {options.map((option, index) => {
          const isSelected = selectedOption === option

          return (
            <label
              key={index}
              className={`flex items-start gap-4 p-2 rounded-md cursor-pointer transition-all 
                ${isSelected ? 'bg-[var(--asset-color)] border' : 'hover:bg-gray-50'} 
              `}
            >
              <input
                type="radio"
                value={option}
                checked={isSelected}
                onChange={() => setSelectedOption(option)}
                className="accent-[var(--primary-color)]"
              />
              <span className="text-gray-800 text-md font-[family-name:var(--font-cutive-mono)]">{option}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}