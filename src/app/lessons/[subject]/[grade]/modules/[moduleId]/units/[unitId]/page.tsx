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

      {/* Titulo de la unidad */}
      <div className="flex flex-col items-center justify-start min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 text-base sm:text-lg">
        <div className="flex flex-col justify-start w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-[family-name:var(--font-courier-prime)]">
            {currentUnit?.title}
          </h1>
        </div>

        <hr className="w-full border-t-2 sm:border-t-4 border-black mx-2 sm:mx-4 md:mx-10 my-4" />

        <div className="flex flex-row justify-end items-center w-full mb-4">
          <p className="text-xs sm:text-sm font-bold font-[family-name:var(--font-courier-prime)]">
            Unit {currentIndex + 1}-{units.length}
          </p>
        </div>

        <div className="w-full font-[family-name:var(--font-cutive-mono)]">
          <h2 className="text-base sm:text-lg font-bold mt-8 mb-2 font-[family-name:var(--font-courier-prime)]">
            INTRODUCCIÓN
          </h2>
          {currentUnit?.introduction.split("\n").map((line, idx) => (
            <p key={idx} className="mb-2">{line}</p>
          ))}

          {/* Temas clave de la unidad */}
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

        {currentUnit?.themes && (
          <div className="flex flex-col gap-6 mt-4">
            {currentUnit.themes.map((theme, index) => (
              <div key={index}>
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

      {/* Resumen de la unidad */}
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

      <div className="lg:hidden">
        <button className="fixed bottom-2 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-[var(--primary-color)] rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors duration-300 z-50">
          <Image src="/icons/mingcute--right-line.svg" alt="Ir al siguiente" width={24} height={24} priority />
        </button>
      </div>

      <div className="hidden lg:flex lg:justify-end lg:px-16 lg:mt-8 mb-5">
        <button
          className="w-14 h-14 bg-[var(--primary-color)] rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors duration-300 cursor-pointer"
          onClick={() => {
            if (nextUnit) {
              router.push(`/lessons/${subject}/${grade}/modules/${moduleId}/units/${nextUnit.id}`);
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
