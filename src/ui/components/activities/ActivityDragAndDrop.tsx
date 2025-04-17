'use client'
import { useState } from 'react'
import StyledText from '../common/StyledText'

interface DragItem {
  text: string
  category: string
}

interface ActivityDragAndDropsProps {
  title: string
  instructions: string
  content: {
    categories: string[]
    items: DragItem[]
  }
}

const ActivityDragAndDrops = ({ title, instructions, content }: ActivityDragAndDropsProps) => {
  const [draggingItem, setDraggingItem] = useState<DragItem | null>(null)
  const [availableItems, setAvailableItems] = useState<DragItem[]>(content.items)

  const [answers, setAnswers] = useState<Record<string, DragItem[]>>(
    content.categories.reduce((acc, cat) => ({ ...acc, [cat]: [] }), {} as Record<string, DragItem[]>)
  )

  const [feedback, setFeedback] = useState<Record<string, boolean> | null>(null)

  const handleDrop = (category: string) => {
    if (draggingItem) {
      setAnswers(prev => ({
        ...prev,
        [category]: [...prev[category], draggingItem]
      }))
      setAvailableItems(prev => prev.filter(i => i.text !== draggingItem.text))
      setDraggingItem(null)
    }
  }

  const handleReturn = (category: string, index: number) => {
    const item = answers[category][index]
    setAnswers(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index)
    }))
    setAvailableItems(prev => [...prev, item])
  }

  const checkAnswers = () => {
    const result: Record<string, boolean> = {}

    for (const category of content.categories) {
      const correctItems = content.items.filter(i => i.category === category).map(i => i.text).sort()
      const userItems = answers[category].map(i => i.text).sort()
      result[category] = JSON.stringify(correctItems) === JSON.stringify(userItems)
    }

    setFeedback(result)
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-courier-prime)]">{title}</h3>
      <div className="my-4">
        <StyledText text={instructions} />
      </div>

      {/* Opciones disponibles */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Opciones:</p>
        <div className="flex flex-wrap gap-2">
          {availableItems.map((item, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => setDraggingItem(item)}
              className="bg-gray-100 border rounded px-3 py-2 cursor-grab hover:bg-gray-200"
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Categorías */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {content.categories.map((category, index) => (
          <div
            key={index}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(category)}
            className="border-2 border-dashed border-gray-400 rounded-md p-4 min-h-[140px] bg-white"
          >
            <h4 className="font-semibold mb-2">{category}</h4>

            {answers[category].length === 0 ? (
              <p className="text-sm text-gray-400 italic">Arrastra aquí...</p>
            ) : (
              <ul className="space-y-2">
                {answers[category].map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center border px-2 py-1 rounded">
                    <span>{item.text}</span>
                    <button
                      onClick={() => handleReturn(category, idx)}
                      className="text-red-500 text-sm hover:underline cursor-pointer"
                    >
                      Quitar
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {feedback && (
              <p className={`mt-2 text-sm font-semibold ${feedback[category] ? 'text-green-600' : 'text-red-600'}`}>
                {feedback[category] ? '¡Correcto!' : 'Revisa esta categoría'}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Botón de revisión */}
      <div className="flex justify-end">
        <button
          onClick={checkAnswers}
          className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white px-4 py-2 rounded-md transition-colors cursor-pointer"
        >
          Revisar respuestas
        </button>
      </div>
    </div>
  )
}

export default ActivityDragAndDrops
