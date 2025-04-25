/**
 * Route: /lessons/[subject]/[grade]/modules/[moduleId]/exam/[examId]
 * 
 * Exam Page - Samy's Study Guide
 *
 * This page (in exam/[examId]) renders the final exam for a specific module.
 * It uses dynamic route parameters to fetch the correct exam from the database.
 * If the exam exists, it renders the <LessonExam> component with all necessary data.
 *
 * Technologies:
 * - React (Client Component)
 * - Next.js dynamic routing
 * - Tailwind CSS for layout
 * - Modular component: <LessonExam> handles rendering and logic of the exam
 */

import { exams_modules } from "@/infrastructure/db/spanish/primaria/exams-modules"
import LessonExam from "@/ui/components/exam/LessonExam"
import Header from "@/ui/components/layout/Header"
import { use } from "react"

// Props include exam ID and context parameters from the URL
interface ExamProps {
  params: Promise<{
    examId: string
    subject: string
    grade: string
    moduleId: string
  }>
}

export default function ExamPage({ params }: ExamProps) {
  const { examId, subject, grade, moduleId } = use(params)

   // Find the exam by ID from local database
  const exam_data = exams_modules.find(e => e.id === examId)

  if (!exam_data) {
    return <div className="p-4">Examen no encontrado</div>
  }

  return (
    <div>
      <Header />
      <div className="px-4 sm:px-8 py-6">

        {/* Exam component */}
        <LessonExam
          title={exam_data.title}
          description={exam_data.description}
          sections={exam_data.sections}
          subject={subject}
          grade={grade}
          moduleId={moduleId}
        />
      </div>
    </div>
  )
}