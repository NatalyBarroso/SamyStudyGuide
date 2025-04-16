'use client'
import { Sections } from "@/core/domain/entities/Exam"
import ActivityInput from '@/ui/components/activities/ActivityInput'
import ActivityMultipleChoice from '@/ui/components/activities/ActivityMultipleChoice'
import ActivityMultipleSelect from '@/ui/components/activities/ActivityMultipleSelect'
import ActivityDragAndDrops from '@/ui/components/activities/ActivityDragAndDrop'
import ActivityFillInTheBlanks from '@/ui/components/activities/ActivityFillInTheBlanks'
import ActivityClassifyText from '@/ui/components/activities/ActivityClassifyText'
import ActivityOrderText from '@/ui/components/activities/ActivityOrderText.tsx'
import ActivityReWrite from '../activities/ActivityReWrite'
import ActivityMultipleInputs from '../activities/ActivityMultipleInputs'
import { Activity } from "@/core/domain/entities/Activities"
import { useState } from "react"

interface LessonExamProps {
  title: string
  description: string
  sections: Sections[]
}

const LessonExam = ({ title, description, sections }: LessonExamProps) => {
  const [showResults, setShowResults] = useState(false)

  const renderActivity = (activity: Activity, index: number) => {
    switch (activity.type) {
      case 'input': return <ActivityInput key={index} {...activity} />
      case 'multiple-choice': return <ActivityMultipleChoice key={index} {...activity} showResults={showResults} />
      case 'multiple-select': return <ActivityMultipleSelect key={index} {...activity} />
      case 'drag-and-drop': return <ActivityDragAndDrops key={index} {...activity} showResults={showResults} />
      case 'fill-in-the-blanks': return <ActivityFillInTheBlanks key={index} {...activity} />
      case 'classify-text': return <ActivityClassifyText key={index} {...activity} showResults={showResults} />
      case 'order-text': return <ActivityOrderText key={index} {...activity} showResults={showResults} />
      case 're-write': return <ActivityReWrite key={index} {...activity} />
      case 'multiple-inputs': return <ActivityMultipleInputs key={index} {...activity} />
      default: return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 font-[family-name:var(--font-courier-prime)]">{title}</h1>
      <p className="mb-6 text-base sm:text-lg font-[family-name:var(--font-cutive-mono)]">{description}</p>

      <div className="space-y-8">
        {sections.map((section, sectionIndex) => (
          <div key={section.id} className="mb-8">
            <h2 className="text-xl font-bold font-[family-name:var(--font-courier-prime)] mb-4">
            <span className="border-b-[3px] border-[#7E99A3] pb-1 font-semibold">{section.title}</span>
            </h2>

            <div className="flex flex-col gap-1">
              {section.activities.map((activity, index) => (
                <div key={index}>
                  {renderActivity(activity, sectionIndex)}
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
      <button className="mt-6 px-4 py-2 rounded bg-[var(--primary-color)] text-white font-semibold hover:bg-[var(--secondary-color)] transition cursor-pointer" onClick={() => setShowResults(true)}>Revisar respuestas</button>
    </div>
  )
}

export default LessonExam

