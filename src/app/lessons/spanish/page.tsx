'use client';
import Header from "../../../ui/components/layout/Header";
import "../../../styles/globals.css";
import { useRouter } from "next/navigation";

export default function Spanish() {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <Header />
      <h1 className="font-[family-name:var(--font-courier-prime)] text-2xl ml-20 mb-12">ESPAÑOL</h1>
      <div className="flex flex-row gap-6 items-center">
        <h2 className="font-[family-name:var(--font-cutive-mono)] text-xl ml-40">Niveles</h2>
        <button className="bg-[var(--primary-color)] p-3 ml-4 rounded-sm cursor-pointer" onClick={() => router.push('/lessons/spanish/primaria')}>
          <h3 className="font-[family-name:var(--font-cutive-mono)] text-xl text-white">Primaria</h3>
        </button>
        <button className="bg-[var(--primary-color)] p-3 rounded-sm cursor-pointer">
          <h3 className="font-[family-name:var(--font-cutive-mono)] text-xl text-white">Secundaria</h3>
        </button>
      </div>
      {/* Linea separadora */}
      <hr className="border-t-6 border-black mt-8 mx-20" />
      <div className="flex flex-col items-center justify-center py-10">
        <div className="bg-[var(--asset-color)] flex flex-row w-[90%] max-w-[1200px] h-[400px] gap-4 rounded-lg shadow-md p-8">
          {/* Flash Cards */}
          <div className="flex flex-col justify-center w-1/2 items-center">
            <h2 className="font-[family-name:var(--font-cutive-mono)] text-2xl mb-4 text-gray-800">
              Flash Cards
            </h2>
            <div className="flex bg-[var(--secondary-color)] w-[80%] h-[200px] rounded-xl shadow-lg justify-center items-center px-8">
              <p className="font-[family-name:var(--font-cutive-mono)] text-white text-center leading-relaxed">
                50 flash cards para practicar palabras claves.
              </p>
            </div>
          </div>

          {/* Mock Exam */}
          <div className="flex flex-col justify-center w-1/2 items-center">
            <h2 className="font-[family-name:var(--font-cutive-mono)] text-2xl mb-4 text-gray-800">
              Mock Exam
            </h2>
            <p className="font-[family-name:var(--font-cutive-mono)] mb-6 text-gray-700 leading-relaxed">
              Contesta 50 preguntas para probar tu conocimiento.
            </p>
            <button className="font-[family-name:var(--font-cutive-mono)] w-[200px] border border-black py-2 rounded-sm cursor-pointer hover:bg-black hover:text-white transition duration-300">
              START
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-black w-full h-12 flex items-center justify-center mt-10">
        <p className="text-white text-sm">© 2025 Todos los derechos reservados</p>
      </footer>
    </div>
  )
}