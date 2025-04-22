import { exams_modules } from "@/infrastructure/db/spanish/primaria/exams-modules"
import LessonExam from "@/ui/components/exam/LessonExam"
import Header from "@/ui/components/layout/Header"
import { use } from "react"

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

  const exam_data = exams_modules.find(e => e.id === examId)

  if (!exam_data) {
    return <div className="p-4">Examen no encontrado</div>
  }

  return (
    <div>
      <Header />
      <div className="px-4 sm:px-8 py-6">
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