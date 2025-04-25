/**
 * Route: /lessons
 * 
 * Lessons Home Page - Samy's Study Guide
 *
 * This page serves as the main entry point to the lessons section of the Samy's Study Guide platform.
 * It displays a categorized grid of subjects, allowing users to explore different areas of study.
 * Each subject is presented as a clickable card that routes the user to the corresponding content or a placeholder.
 *
 * Features:
 * - Dynamic navigation using Next.js' useRouter.
 * - Cards representing subject areas: Spanish, Math, Natural Sciences, Social Sciences.
 * - Responsive design using Tailwind CSS utility classes.
 * - Includes a custom Header component for consistent navigation across the site.
 * 
 * Technologies:
 * - React (Client Component)
 * - Next.js routing
 * - Tailwind CSS for styling
 * - Next.js Image optimization
 */

'use client';
import Header from "../../ui/components/layout/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LessonsHome() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center py-2">
        <h1 className="font-[family-name:var(--font-courier-prime)] text-2xl md:text-3xl mb-2 text-center">LESSONS</h1>
        <div className="bg-[var(--asset-color)] w-full min-h-[610px] py-4 px-2 sm:py-6 sm:px-4 md:px-8 lg:px-16 xl:px-80 rounded-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 h-[550px]">

            {/* Card: ESPAÑOL */}
            <div className="bg-[var(--secondary-color)] rounded-2xl cursor-pointer p-4 flex flex-col h-full" onClick={() => router.push('/lessons/spanish')}>
              <div className="bg-[var(--asset-color)] flex items-center justify-center rounded-full w-12 h-12 sm:w-13 sm:h-13 ml-8 mt-4">
                <Image
                  className="mt-0"
                  src="../icons/ri--book-line.svg"
                  alt="logo.js logo"
                  width={30}
                  height={10}
                  priority
                />
              </div>
              <div className="flex-grow flex flex-col justify-start">
                <h3 className="text-white text-left mx-2 sm:mx-6 mt-4 text-xl font-[family-name:var(--font-cutive-mono)]">ESPAÑOL</h3>
                <p className="text-white mx-2 sm:mx-6 mt-4 font-[family-name:var(--font-cutive-mono)]">Mejora tus habilidades de lectura, escritura y comprension del lenguaje espñol.</p>
              </div>
            </div>

            {/* Card: MATEMÁTICAS */}
            <div className="bg-[var(--secondary-color)] rounded-2xl cursor-pointer p-4 flex flex-col h-full" onClick={() => router.push('/status/under-construction')}>
              <div className="bg-[var(--asset-color)] flex items-center justify-center rounded-full w-12 h-12 sm:w-13 sm:h-13 ml-8 mt-4">
                <Image
                  className="mt-0"
                  src="../icons/proicons--calculator.svg"
                  alt="logo.js logo"
                  width={30}
                  height={10}
                  priority
                />
              </div>
              <div className="flex-grow flex flex-col justify-start">
                <h3 className="text-white text-left mx-2 sm:mx-6 mt-4 text-xl font-[family-name:var(--font-cutive-mono)]">MATEMÁTICAS</h3>
                <p className="text-white mx-2 sm:mx-6 mt-4 font-[family-name:var(--font-cutive-mono)]">Desarrolla tu pensamiento lógico y resolución de problemas matemáticos.</p>
              </div>
            </div>

            {/* Card: CIENCIAS NATURALES */}
            <div className="bg-[var(--secondary-color)] rounded-2xl cursor-pointer p-4 flex flex-col h-full" onClick={() => router.push('/status/under-construction')}>
              <div className="bg-[var(--asset-color)] flex items-center justify-center rounded-full w-12 h-12 sm:w-13 sm:h-13 ml-8 mt-4">
                <Image
                  className="mt-0"
                  src="../icons/ri--leaf-line.svg"
                  alt="logo.js logo"
                  width={30}
                  height={10}
                  priority
                />
              </div>
              <div className="flex-grow flex flex-col justify-start">
                <h3 className="text-white text-left mx-2 sm:mx-6 mt-4 text-xl font-[family-name:var(--font-cutive-mono)]">CIENCIAS NATURALES</h3>
                <p className="text-white mx-2 sm:mx-6 mt-4 font-[family-name:var(--font-cutive-mono)]">Explora el fascinante mundo de la biología, química y física.</p>
              </div>
            </div>

            {/* Card: CIENCIAS SOCIALES */}
            <div className="bg-[var(--secondary-color)] rounded-2xl cursor-pointer p-4 flex flex-col h-full" onClick={() => router.push('/status/under-construction')}>
              <div className="bg-[var(--asset-color)] flex items-center justify-center rounded-full w-12 h-12 sm:w-13 sm:h-13 ml-8 mt-4">
                <Image
                  className="mt-0"
                  src="../icons/fluent-mdl2--world.svg"
                  alt="logo.js logo"
                  width={30}
                  height={10}
                  priority
                />
              </div>
              <div className="flex-grow flex flex-col justify-start">
                <h3 className="text-white text-left mx-2 sm:mx-6 mt-4 text-xl font-[family-name:var(--font-cutive-mono)]">CIENCIAS SOCIALES</h3>
                <p className="text-white mx-2 sm:mx-6 mt-4 font-[family-name:var(--font-cutive-mono)]">Descubre la historia, geografía y las culturas del mundo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}