import Header from "@/ui/components/layout/Header";
import LessonCard from "@/ui/components/lessons/LessonCard";
import { lessons_spanish_p } from "@/core/domain/entities/LessonTopics";

export default function First() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-start flex-grow px-4 py-8">
        <h1 className="font-[family-name:var(--font-courier-prime)] text-2xl sm:text-3xl mb-6 font-bold text-center">
          PRIMARIA
        </h1>

        <div className="bg-[var(--asset-color)] flex flex-col justify-center items-center w-full max-w-5xl gap-4 rounded-lg shadow-md px-4 py-6 sm:px-6 lg:px-10">
          {lessons_spanish_p.map((lesson, index) => (
            <LessonCard key={index} text={lesson.title} id={lesson.id} isCheck={false} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black w-full h-12 flex items-center justify-center mt-10">
        <p className="text-white text-sm">© 2025 Todos los derechos reservados</p>
      </footer>
    </div>
  );
}