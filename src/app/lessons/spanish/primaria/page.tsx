import Header from "@/ui/components/layout/Header";
import LessonCard from "@/ui/components/lessons/LessonCard";
import { lessons_spanish_p } from "@/core/domain/entities/LessonTopics";

export default function first() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-[family-name:var(--font-courier-prime)] text-2xl mb-2 font-bold">PRIMARIA</h1>
        <div className="bg-[var(--asset-color)] flex flex-col justify-center items-center w-[80%] max-w-[1200px] h-[800px] gap-4 rounded-lg shadow-md p-8">
          {lessons_spanish_p.map((lesson, index) => (
            <LessonCard key={index} text={lesson.title} isCheck={false} />
          ))}
        </div>
      </div>
      <footer className="bg-black w-full h-12 flex items-center justify-center mt-10">
        <p className="text-white text-sm">© 2025 Todos los derechos reservados</p>
      </footer>
    </div>
  )
}