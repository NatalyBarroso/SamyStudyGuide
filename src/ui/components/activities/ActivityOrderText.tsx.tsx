'use client'
import { useState } from 'react'
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { SortableItem } from './items/SortableItem'

interface OrderItem {
  id: string
  text: string
}

interface ActivityOrderTextProps {
  title: string
  instructions: string
  content: OrderItem[]
  correctOrder: string[] // Orden correcto de los fragmentos (por id)
}

const ActivityOrderText = ({ title, instructions, content, correctOrder }: ActivityOrderTextProps) => {
  const [items, setItems] = useState<OrderItem[]>(content)
  const [feedback, setFeedback] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  )

  const handleDragEnd = (event: import('@dnd-kit/core').DragEndEvent) => {
    const { active, over } = event
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id)
      const newIndex = over ? items.findIndex((item) => item.id === over.id) : -1
      setItems((items) => arrayMove(items, oldIndex, newIndex))
    }
  }

  const checkAnswer = () => {
    const currentOrder = items.map((item) => item.id)
    const isCorrect = currentOrder.every((id, index) => id === correctOrder[index])
    setFeedback(isCorrect ? '¡Correcto! Has ordenado el texto correctamente.' : 'Revisa el orden de los fragmentos.')
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-courier-prime)]">{title}</h3>
      <p className="mb-4">{instructions}</p>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          <ul className="space-y-3">
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id} text={item.text} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>

      <button
        onClick={checkAnswer}
        className="mt-6 px-4 py-2 rounded bg-[var(--primary-color)] text-white font-semibold hover:bg-[var(--secondary-color)] transition cursor-pointer"
      >
        Revisar respuesta
      </button>

      {feedback && <p className="mt-4 font-semibold">{feedback}</p>}
    </div>
  )
}

export default ActivityOrderText
