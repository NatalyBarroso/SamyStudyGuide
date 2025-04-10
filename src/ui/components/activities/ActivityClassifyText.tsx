'use client'
import { useState } from 'react'
import StyledText from "@/ui/components/common/StyledText";

interface ClassificationItem {
  text: string
  correctAnswer: string
}

interface ActivityClassifyProps {
  title: string
  instructions: string
  options: string[]
  content: ClassificationItem[]
}

const ActivityClassify = ({ title, instructions, options, content }: ActivityClassifyProps) => {
  const [answers, setAnswers] = useState<(string | null)[]>(Array(content.length).fill(null))
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (index: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
  }

  const checkAnswer = (index: number) => {
    return answers[index] === content[index].correctAnswer
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-courier-prime)]">{title}</h3>
      <div className="my-4">
        <StyledText text={instructions} />
      </div>

      <div className="flex flex-col gap-4">
        {content.map((item, index) => (
          <div key={index} className="border rounded-md p-4 bg-white shadow-sm">
            <p className="mb-2 font-medium font-semibold text-[var(--secondary-color)] font-[family-name:var(--font-courier-prime)]">{item.text}</p>
            <div className="flex flex-wrap gap-4">
              {options.map(option => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleSelect(index, option)}
                    className="accent-[var(--primary-color)]"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>

            {showResults && (
              <p className={`mt-2 text-sm font-semibold ${checkAnswer(index) ? 'text-green-600' : 'text-red-600'}`}>
                {checkAnswer(index) ? 'Respuesta correcta' : `Incorrecto.`}
              </p>
            )}
          </div>
        ))}
      </div>

      <button
        className="mt-6 px-4 py-2 bg-[var(--primary-color)] text-white rounded hover:bg-[var(--secondary-color)] transition-colors duration-300 cursor-pointer"
        onClick={() => setShowResults(true)}
      >
        Revisar respuestas
      </button>
    </div>
  )
}

export default ActivityClassify
