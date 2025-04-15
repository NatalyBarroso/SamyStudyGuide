'use client'
import { useState } from 'react'

interface RewriteItem {
  original: string
  correct: string
}

interface ActivityReWriteProps {
  title: string
  instructions: string
  content: RewriteItem[]
}

const ActivityReWrite = ({ title, instructions, content }: ActivityReWriteProps) => {
  const [answers, setAnswers] = useState<string[]>(Array(content.length).fill(''))
  const [showResults, setShowResults] = useState(false)

  const handleChange = (index: number, value: string) => {
    const updated = [...answers]
    updated[index] = value
    setAnswers(updated)
  }

  const normalize = (text: string) => text.trim().toLowerCase()

  const checkAnswer = (index: number) => {
    return normalize(answers[index]) === normalize(content[index].correct)
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-courier-prime)]">{title}</h3>
      <p className="mb-4">{instructions}</p>

      <div className="flex flex-col gap-6">
        {content.map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap sm:flex-nowrap items-start sm:items-center gap-4 w-full"
          >
            <div className="w-full sm:w-[300px] bg-gray-50 border border-gray-300 rounded-md p-3 text-sm sm:text-base font-mono text-gray-800 shadow-sm">
              <span className="font-semibold mr-1">{index + 1}.</span>
              {item.original}
            </div>

            <input
              type="text"
              value={answers[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              className="flex-1 min-w-[200px] border border-gray-400 rounded px-3 py-2 text-sm sm:text-base"
              placeholder="Escribe la corrección"
            />

            {showResults && (
              <span className={`text-sm font-semibold mt-1 sm:mt-0 ${checkAnswer(index) ? 'text-green-600' : 'text-red-600'}`}>
                {checkAnswer(index) ? 'Correcto' : `Incorrecto → ${item.correct}`}
              </span>
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

export default ActivityReWrite
