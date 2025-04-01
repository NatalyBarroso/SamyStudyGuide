import Header from "@/ui/components/layout/Header";
import Image from "next/image";
import { data_spanish_primaria } from "@/infrastructure/db/data-spanish-primaria"

export default function Module01() {
  return (
    <div>
      <Header />

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-start min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 text-base sm:text-lg">
        <div className="flex flex-col justify-start w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-[family-name:var(--font-courier-prime)]">
            {data_spanish_primaria[0].title}
          </h1>
          <p className="font-[family-name:var(--font-cutive-mono)] text-justify text-sm sm:text-base">
            {data_spanish_primaria[0].description}
          </p>
        </div>

        <hr className="w-full border-t-2 sm:border-t-4 border-black mx-2 sm:mx-4 md:mx-10 my-4" />

        <div className="flex flex-row justify-end items-center w-full mb-4">
          <p className="text-xs sm:text-sm font-bold font-[family-name:var(--font-courier-prime)]">Unit 0-5</p>
        </div>

        <div className="w-full font-[family-name:var(--font-cutive-mono)]">
          <h2 className="text-base sm:text-lg font-bold mt-8 mb-2 font-[family-name:var(--font-courier-prime)]">INTRODUCCIÓN</h2>
          <p className="text-justify text-sm sm:text-base">{data_spanish_primaria[0].introduction}</p>

          <h2 className="mt-8 text-base sm:text-lg font-[family-name:var(--font-courier-prime)] font-bold">Objetivos del Módulo</h2>
          <ul className="list-disc list-inside my-4 text-sm sm:text-base">
            {data_spanish_primaria[0].goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Botón fijo SOLO para móviles */}
      <div className="lg:hidden">
        <button
          className="fixed bottom-2 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-[var(--primary-color)] rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors duration-300 z-50"
        >
          <Image
            src="/icons/mingcute--right-line.svg"
            alt="Ir al siguiente"
            width={24}
            height={24}
            priority
          />
        </button>
      </div>

      {/* Botón estático para pantallas grandes */}
      <div className="hidden lg:flex lg:justify-end lg:px-16 lg:mt-8">
        <button
          className="w-14 h-14 bg-[var(--primary-color)] rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors duration-300"
        >
          <Image
            src="/icons/mingcute--right-line.svg"
            alt="Ir al siguiente"
            width={24}
            height={24}
            priority
          />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-black w-full h-10 sm:h-12 flex items-center justify-center mt-10">
        <p className="text-white text-xs sm:text-sm text-center px-2">© 2025 Todos los derechos reservados</p>
      </footer>
    </div>
  )


}