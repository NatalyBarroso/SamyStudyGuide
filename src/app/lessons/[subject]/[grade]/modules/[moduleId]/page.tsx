/**
 * Route: /lessons/[subject]/[grade]/modules/[moduleId]
 * 
 * Module Page - Samy's Study Guide
 *
 * This dynamic page (located in modules/[moduleId]) displays detailed information about a specific module.
 * It loads and renders module data such as title, description, introduction, and objectives,
 * and fetches the list of units associated with the module.
 *
 * Technologies:
 * - React (Client Component)
 * - Next.js dynamic routing
 * - Tailwind CSS for responsive design
 * - Custom module loader from the infrastructure layer
 */

'use client'
import Header from "@/ui/components/layout/Header";
import Footer from "@/ui/components/layout/Footer";
import { use, useEffect, useState } from 'react'
import Image from "next/image";
import { modules_data } from "@/infrastructure/db/spanish/primaria/modules-data";
import { Unit } from "@/core/domain/entities/Unit";
import { loadModule } from "@/infrastructure/db/loaders/loadModule";

// Props for dynamic route parameters
interface Props {
  params: Promise<{
    subject: string;
    grade: string;
    moduleId: string;
  }>;
}

export default function ModulePage({ params }: Props) {
  const { subject, grade, moduleId } = use(params);

  // Find static module metadata
  const currentModule = modules_data.find(m => m.id === moduleId);

  // Local state to hold dynamically loaded units
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    loadModule(subject, grade, moduleId).then(units => {
      // console.log("Unidades cargadas:", units);
      setUnits(units);
    });
  }, [subject, grade, moduleId]);


  if (!currentModule) {
    return <div className="p-4">Módulo no encontrado.</div>;
  }

  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-start min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 text-base sm:text-lg">
        <div className="flex flex-col justify-start w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-[family-name:var(--font-courier-prime)]">
            {currentModule.title}
          </h1>
          <p className="font-[family-name:var(--font-cutive-mono)] text-justify text-sm sm:text-base">
            {currentModule.description}
          </p>
        </div>

        <hr className="w-full border-t-2 sm:border-t-4 border-black mx-2 sm:mx-4 md:mx-10 my-4" />

        {/* Units counter */}
        <div className="flex flex-row justify-end items-center w-full mb-4">
          <p className="text-xs sm:text-sm font-bold font-[family-name:var(--font-courier-prime)]">Unit 0-{units.length}</p>
        </div>

        <div className="w-full font-[family-name:var(--font-cutive-mono)]">

          {/* Module introduction */}
          <h2 className="text-base sm:text-lg font-bold mt-8 mb-2 font-[family-name:var(--font-courier-prime)]">INTRODUCCIÓN</h2>
          {currentModule.introduction.split('\n').map((line, idx) => (
            <p key={idx} className="mb-2">{line}</p>
          ))}

          {/* Module objectives */}
          <h2 className="mt-8 text-base sm:text-lg font-[family-name:var(--font-courier-prime)] font-bold">Objetivos del Módulo</h2>
          <ul className="list-disc list-inside my-4 text-base sm:text-lg">
            {currentModule.goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fixed button for mobiles */}
      <div className="lg:hidden">
        <button
          className="fixed bottom-2 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-[var(--primary-color)] rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors duration-300 z-50"
          onClick={() =>
            window.location.href = `/lessons/${subject}/${grade}/modules/${moduleId}/units/1`
          }
        >
          <Image src="/icons/mingcute--right-line.svg" alt="Ir al siguiente" width={24} height={24} priority />
        </button>
      </div>

      {/* Desktop button */}
      <div className="hidden lg:flex lg:justify-end lg:px-16 lg:mt-8 mb-5">
        <button
          className="w-14 h-14 bg-[var(--primary-color)] rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors duration-300 cursor-pointer"
          onClick={() =>
            window.location.href = `/lessons/${subject}/${grade}/modules/${moduleId}/units/1`
          }
        >
          <Image src="/icons/mingcute--right-line.svg" alt="Ir al siguiente" width={24} height={24} priority />
        </button>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
