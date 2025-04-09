'use client'
import Header from "@/ui/components/layout/Header";
import Footer from "@/ui/components/layout/Footer";
import { use } from 'react'
import Image from "next/image";
import { modules_data } from "@/infrastructure/db/spanish/primaria/modules-data"; // Puedes dinamizar esto también si lo necesitas

interface Props {
  params: Promise<{ 
    subject: string;
    grade: string;
    moduleId: string;
  }>;
}

export default function ModulePage({ params }: Props) {
  const { subject, grade, moduleId } = use(params);
  const currentModule = modules_data.find(m => m.id === moduleId);

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

        <div className="flex flex-row justify-end items-center w-full mb-4">
          <p className="text-xs sm:text-sm font-bold font-[family-name:var(--font-courier-prime)]">Unit 0-5</p>
        </div>

        <div className="w-full font-[family-name:var(--font-cutive-mono)]">
          <h2 className="text-base sm:text-lg font-bold mt-8 mb-2 font-[family-name:var(--font-courier-prime)]">INTRODUCCIÓN</h2>
          {currentModule.introduction.split('\n').map((line, idx) => (
            <p key={idx} className="mb-2">{line}</p>
          ))}
          <h2 className="mt-8 text-base sm:text-lg font-[family-name:var(--font-courier-prime)] font-bold">Objetivos del Módulo</h2>
          <ul className="list-disc list-inside my-4 text-sm sm:text-base">
            {currentModule.goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Botón fijo para móviles */}
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

      {/* Botón para escritorio */}
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

      <Footer />
    </div>
  );
}
