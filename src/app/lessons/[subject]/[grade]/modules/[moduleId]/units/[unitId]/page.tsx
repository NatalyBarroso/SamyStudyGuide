/**
 * Route: /lessons/[subject]/[grade]/modules/[moduleId]/units/[unitId]
 * 
 * Unit Page - Samy's Study Guide
 *
 * This page (in units/[unitId]) displays the full content of a single unit.
 * It includes an introduction, key topics, and associated themes and subthemes.
 * At the end, it shows a summary and provides navigation to the next unit or exam.
 *
 * Technologies:
 * - React (Client Component)
 * - Next.js dynamic routing
 * - Tailwind CSS for styling
 * - Modular design with components like ThemeCard, SubthemeCard, StyledText
 * - Dynamic unit loading from database with fallback exam redirection
 */

'use client'
import Header from "@/ui/components/layout/Header";
import Footer from "@/ui/components/layout/Footer";
import ThemeCard from "@/ui/components/themes/ThemeCard";
import SubthemeCard from "@/ui/components/themes/SubThemeCard";
import { loadModule } from "@/infrastructure/db/loaders/loadModule";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Unit } from "@/core/domain/entities/Unit";
import { use, useEffect, useState } from "react";
import StyledText from "@/ui/components/common/StyledText";
import { exams_modules } from "@/infrastructure/db/spanish/primaria/exams-modules";

interface Props {
  params: Promise<{
    subject: string;
    grade: string;
    moduleId: string;
    unitId: string;
  }>;
}

export default function UnitPage({ params }: Props) {
  const { subject, grade, moduleId, unitId } = use(params);
  const router = useRouter();

  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    loadModule(subject, grade, moduleId).then(setUnits);
  }, [subject, grade, moduleId]);

  const currentUnit = units.find((u) => u.id === unitId);
  const currentIndex = units.findIndex((u) => u.id === unitId);
  const nextUnit = units[currentIndex + 1];

  if (!currentUnit) return <div className="p-4">Unidad no encontrada</div>

  return (
    <div>
      <Header />

      {/* Unit title */}
      <div className="flex flex-col justify-start min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 text-base sm:text-lg">
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-[family-name:var(--font-courier-prime)]">
            {currentUnit?.title}
          </h1>
          <hr className="w-full border-t-2 sm:border-t-4 border-black my-2" />
        </div>

        <div className="flex flex-row justify-end items-center w-full mb-4">
          <p className="text-xs sm:text-sm font-bold font-[family-name:var(--font-courier-prime)]">
            Unit {currentIndex + 1}-{units.length}
          </p>
        </div>

        <div className="w-full font-[family-name:var(--font-cutive-mono)]">
          <h2 className="text-base sm:text-lg font-bold mt-8 mb-2 font-[family-name:var(--font-courier-prime)]">
            INTRODUCCIÓN
          </h2>
          {currentUnit?.introduction && (
            <StyledText text={currentUnit.introduction} />
          )}

          {/* Key topics of the unit */}
          <h2 className="mt-8 text-base sm:text-lg font-[family-name:var(--font-courier-prime)] font-bold">
            Temas clave
          </h2>
          <ul className="list-disc list-inside my-4 text-sm sm:text-base">
            {currentUnit?.topics.map((topic, index) => (
              <li key={index} className="text-lg mb-2">
                {topic.title}
                {topic.subtopics && (
                  <ul className="list-disc list-inside ml-6 mt-1">
                    {topic.subtopics.map((sub, subIndex) => (
                      <li key={subIndex} className="text-base">{sub}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Themes and subthemes */}
        {currentUnit?.themes && (
          <div className="flex flex-col gap-6 mt-4">
            {currentUnit.themes.map((theme, index) => (
              <div key={index} className="w-full">
                <ThemeCard
                  title={theme.title}
                  text={theme.text}
                  example={theme.example}
                  activity={theme.activity}
                  note={theme.note}
                />
                {theme.subthemes?.map((sub, subIndex) => (
                  <SubthemeCard
                    key={subIndex}
                    title={sub.title}
                    text={sub.text}
                    example={sub.example}
                    activity={sub.activity}
                    note={sub.note}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Unit Summary */}
      {currentUnit?.summary && (
        <div className="mt-4 px-4 sm:px-8 md:px-12 lg:px-16 text-base sm:text-lg font-[family-name:var(--font-cutive-mono)]">
          <h3 className="font-bold mb-2 lg:text-xl font-[family-name:var(--font-courier-prime)]">Resumen de la unidad</h3>
          <ul className="list-disc list-inside">
            {currentUnit.summary.map((string, index) => (
              <li key={index}>{string}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile next button (bottom right) */}
      <div className="lg:hidden">
        <button className="fixed bottom-2 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-[var(--primary-color)] rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors duration-300 z-50">
          <Image src="/icons/mingcute--right-line.svg" alt="Ir al siguiente" width={24} height={24} priority />
        </button>
      </div>

      {/* Desktop next button (top right) */}
      <div className="hidden lg:flex lg:justify-end lg:px-16 lg:mt-8 mb-5">
        <button
          className="w-14 h-14 bg-[var(--primary-color)] rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors duration-300 cursor-pointer"
          onClick={() => {
            if (nextUnit) {
              router.push(`/lessons/${subject}/${grade}/modules/${moduleId}/units/${nextUnit.id}`);
            } else {
              const exam = exams_modules.find((e) => e.id === moduleId)
              if (exam) {
                router.push(`/lessons/${subject}/${grade}/modules/${moduleId}/exam/${exam.id}`);
              } else {
                <p>Examen no encontrado</p>
                console.warn("Examen no encontrado para este módulo.");
              }
            }
          }}
        >
          <Image src="/icons/mingcute--right-line.svg" alt="Ir al siguiente" width={24} height={24} priority />
        </button>
      </div>

      <Footer />
    </div>
  );
}
