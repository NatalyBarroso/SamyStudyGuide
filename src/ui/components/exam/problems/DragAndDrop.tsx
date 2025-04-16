import { useState } from "react"

interface DragItem {
  text: string
  category: string
}

interface DragAndDropProps {
  instructions: string
  categories: string[]
  items: DragItem[]
}

const DragAndDrop = ({ categories, items, instructions }: DragAndDropProps) => {
  const [draggingItem, setDraggingItem] = useState<DragItem | null>(null)
  const [availableItems, setAvailableItems] = useState<DragItem[]>(items)

  const [answers, setAnswers] = useState<Record<string, DragItem[]>>(
    categories.reduce((acc, cat) => ({ ...acc, [cat]: [] }), {} as Record<string, DragItem[]>)
  )

  // const [feedback, setFeedback] = useState<Record<string, boolean> | null>(null)

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

  return (
    <div className="mt-8">
      <div className="my-4">
        <p className="font-semibold text-xl font-[family-name:var(--font-courier-prime)]">{instructions}</p>
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
        {categories.map((category, index) => (
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
                      className="text-red-500 text-sm hover:underline"
                    >
                      Quitar
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* {feedback && (
              <p className={`mt-2 text-sm font-semibold ${feedback[category] ? 'text-green-600' : 'text-red-600'}`}>
                {feedback[category] ? '¡Correcto!' : 'Revisa esta categoría'}
              </p>
            )} */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DragAndDrop