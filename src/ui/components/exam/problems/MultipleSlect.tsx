import { useState } from "react"

export interface MultipleSelectProps {
  question: string
  options: string[]
  correctAnswers?: string[]
}

export default function MultipleSelect({ question, options }: MultipleSelectProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    )
  }

  return (
    <div className="space-y-4 mt-12">
      <p className="font-semibold text-xl font-[family-name:var(--font-courier-prime)]">
        1. {question}
      </p>

      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedOptions.includes(option)

          return (
            <label
              key={index}
              className={`flex items-start gap-4 p-2 rounded-md cursor-pointer transition-all 
                ${isSelected ? 'bg-[var(--asset-color)] border' : 'hover:bg-gray-50'} 
              `}
            >
              <input
                type="checkbox"
                value={option}
                checked={isSelected}
                onChange={() => toggleOption(option)}
                className="mt-1 accent-[var(--primary-color)]"
              />
              <span className="text-gray-800 text-md font-[family-name:var(--font-cutive-mono)]">{option}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
