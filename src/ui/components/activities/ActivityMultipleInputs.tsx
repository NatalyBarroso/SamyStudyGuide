'use client'
import { useState } from 'react'
import StyledText from '../common/StyledText'

interface ActivityMultipleInputsProps {
  title: string
  instructions: string
  content: string[]
}

const ActivityMultipleInputs = ({ title, instructions, content }: ActivityMultipleInputsProps) => {
  const [responses, setResponses] = useState<string[]>(Array(content.length).fill(''))
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (index: number, value: string) => {
    const updated = [...responses]
    updated[index] = value
    setResponses(updated)
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-courier-prime)]">{title}</h3>
      <div className="my-4">
        <StyledText text={instructions} />
      </div>

      <div className="flex flex-col gap-6">
        {content.map((sentence, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p className="font-medium border-b-[3px] border-[var(--primary-color)] pb-1">
              {index + 1}. {sentence}
            </p>
            <textarea
              placeholder="Escribe tu versión aquí..."
              value={responses[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              rows={3}
              className="w-full border border-gray-400 bg-gray-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            />
          </div>
        ))}
      </div>

      <button
        className="mt-6 px-4 py-2 bg-[var(--primary-color)] text-white rounded hover:bg-[var(--secondary-color)] transition-colors duration-300"
        onClick={handleSubmit}
      >
        Enviar respuestas
      </button>

      {submitted && (
        <p className="mt-4 text-green-600 font-semibold">
          Tus respuestas han sido enviadas para revisión.
        </p>
      )}
    </div>
  )
}

export default ActivityMultipleInputs
