/**
 * Route: /lessons/[subject]/[grade]
 * 
 * Grade-Level Lessons Page (e.g., Primaria) - Samy's Study Guide
 *
 * This dynamic page (inside [grade]) displays the list of available lessons for a specific grade level
 * and subject.
 * It dynamically renders a list of LessonCard components based on imported lesson data.
 *
 * Technologies:
 * - React (Client Component)
 * - Dynamic routing using Next.js
 * - Tailwind CSS for responsive and consistent styling
 * - Modular component structure (Header, Footer, LessonCard)
 */

import Header from "@/ui/components/layout/Header";
import Footer from "@/ui/components/layout/Footer";
import LessonCard from "@/ui/components/lessons/LessonCard";
import { lessons_spanish_p } from "@/core/domain/entities/LessonTopics";

export default function First() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main container */}
      <main className="flex flex-col items-center justify-start flex-grow px-4 py-8">
        <h1 className="font-[family-name:var(--font-courier-prime)] text-2xl sm:text-3xl mb-6 font-bold text-center">
          PRIMARIA
        </h1>

        <div className="bg-[var(--asset-color)] flex flex-col justify-center items-center w-full max-w-5xl gap-4 rounded-lg shadow-md px-4 py-6 sm:px-6 lg:px-10">
          {lessons_spanish_p.map((lesson, index) => (
            <LessonCard key={index} text={lesson.title} id={lesson.id} subject={lesson.subject} grade={lesson.grade} isCheck={false} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}