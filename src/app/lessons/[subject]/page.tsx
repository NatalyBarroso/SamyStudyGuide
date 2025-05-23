/**
 * Route: /lessons/[subject]
 * 
 * Subject Lesson Page (e.g., Spanish) - Samy's Study Guide
 *
 * This dynamic page (inside [subject]) displays educational content for a specific subject.
 * It includes navigation elements, level selection buttons (e.g., Primaria, Secundaria),
 * and content previews such as flashcards and mock exams.
 * 
 * Technologies:
 * - React (Client Component)
 * - Next.js routing (dynamic folder structure)
 * - Tailwind CSS for styling
 */

'use client';
import Header from "../../../ui/components/layout/Header";
import Footer from "@/ui/components/layout/Footer";
import "../../../styles/globals.css";
import { useRouter } from "next/navigation";

export default function Spanish() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Title */}
      <h1 className="font-[family-name:var(--font-courier-prime)] text-2xl md:text-3xl px-4 md:px-10 mb-8 text-left">
        ESPAÑOL
      </h1>

      {/* Levels + buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center px-4 md:px-10 mb-6">
        <h2 className="font-[family-name:var(--font-cutive-mono)] text-xl">Niveles</h2>
        <button
          className="bg-[var(--primary-color)] px-4 py-2 rounded-sm cursor-pointer"
          onClick={() => router.push('/lessons/spanish/primaria')}
        >
          <h3 className="font-[family-name:var(--font-cutive-mono)] text-xl text-white">Primaria</h3>
        </button>
        <button className="bg-[var(--primary-color)] px-4 py-2 rounded-sm cursor-pointer">
          <h3 className="font-[family-name:var(--font-cutive-mono)] text-xl text-white">Secundaria</h3>
        </button>
      </div>

      {/* Separator line */}
      <hr className="border-t-4 border-black mx-4 md:mx-10 my-6" />

      {/* Main container */}
      <div className="flex flex-col items-center justify-center px-4 md:px-8 py-10">
        <div className="bg-[var(--asset-color)] flex flex-col lg:flex-row w-full max-w-[1200px] gap-6 rounded-lg shadow-md p-6">

          {/* Flash Cards */}
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
            <h2 className="font-[family-name:var(--font-cutive-mono)] text-2xl mb-4 text-gray-800">
              Flash Cards
            </h2>
            <div className="flex bg-[var(--secondary-color)] w-full max-w-[400px] h-[200px] rounded-xl shadow-lg justify-center items-center px-6">
              <p className="font-[family-name:var(--font-cutive-mono)] text-white text-center leading-relaxed">
                50 flash cards para practicar palabras claves.
              </p>
            </div>
          </div>

          {/* Mock Exam */}
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
            <h2 className="font-[family-name:var(--font-cutive-mono)] text-2xl mb-4 text-gray-800">
              Mock Exam
            </h2>
            <p className="font-[family-name:var(--font-cutive-mono)] mb-6 text-gray-700 leading-relaxed text-center px-2">
              Contesta 50 preguntas para probar tu conocimiento.
            </p>
            <button className="font-[family-name:var(--font-cutive-mono)] w-[200px] border border-black py-2 rounded-sm cursor-pointer hover:bg-black hover:text-white transition duration-300">
              START
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );

}