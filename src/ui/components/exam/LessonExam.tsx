'use client'
import { ExamProblems, Sections } from "@/core/domain/entities/Exam"
import MultipleChoice from "./problems/MultipleChoice"
import DragAndDrop from "./problems/DragAndDrop"
import MultipleSelect from "./problems/MultipleSlect"
import ClassifyText from "./problems/ClassifyText"
import { useState } from "react"
import Image from "next/image"

interface LessonExamProps {
  title: string
  description: string
  sections: Sections[]
  grade: string
  subject: string
  moduleId: string
}

const LessonExam = ({ title, description, sections, grade, subject, moduleId }: LessonExamProps) => {
  const [showResults, setShowResults] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const renderExamProblems = (examProblem: ExamProblems, index: number) => {
    switch (examProblem.type) {
      case 'multiple-choice': return <MultipleChoice key={index} {...examProblem} showResult={showResults} />
      case 'drag-and-drop': return <DragAndDrop key={index} {...examProblem} showResults={showResults} />
      case 'multiple-select': return <MultipleSelect key={index} {...examProblem} showResults={showResults} />
      case 'classify-text': return <ClassifyText key={index} {...examProblem} showResults={showResults} />
      default: return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 font-[family-name:var(--font-courier-prime)]">{title}</h1>
      <p className="mb-6 text-base sm:text-lg font-[family-name:var(--font-cutive-mono)]">{description}</p>

      <div className="space-y-8">
        {sections.map((section, sectionIndex) => (
          <div key={section.id} className="my-18">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-courier-prime)] mb-4">
              <span className="border-b-[3px] border-[#7E99A3] pb-1 font-semibold">{section.title}</span>
            </h2>

            <div className="flex flex-col gap-1">
              {section.problems.map((problem, index) => (
                <div key={index}>
                  {renderExamProblems(problem, sectionIndex)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6 lg:px-2">
        <button
          className="px-4 py-2 rounded bg-[var(--primary-color)] text-white font-semibold hover:bg-[var(--secondary-color)] transition cursor-pointer"
          onClick={() => {
            setShowResults(true);
            setButtonDisabled(true);
          }}
          disabled={buttonDisabled}
        >
          Revisar respuestas
        </button>

        {showResults && (
          <button
            className="w-14 h-14 bg-[var(--primary-color)] rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors duration-300 cursor-pointer"
            onClick={() =>
              window.location.href = `/lessons/${subject}/${grade}/modules/${moduleId}/review`
            }
          >
            <Image src="/icons/mingcute--right-line.svg" alt="Ir al siguiente" width={24} height={24} priority />
          </button>
        )}
      </div>
    </div >
  )
}

export default LessonExam
