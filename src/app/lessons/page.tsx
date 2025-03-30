'use client';
import Header from "../../ui/components/layout/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LessonsHome() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <h1 className=" font-[family-name:var(--font-courier-prime)] text-2xl mt-0 mb-3">LESSONS</h1>
        <div className="bg-[var(--asset-color)] w-full h-[610px] px-80 py-9 rounded-sm">
          <div className="grid grid-cols-2 grid-rows-2 gap-5 w-full h-full">
            <div className="bg-[var(--secondary-color)] rounded-2xl cursor-pointer" onClick={() => router.push('/lessons/spanish')}>
              <div className="bg-[var(--asset-color)] flex items-center justify-center rounded-full w-13 h-13 ml-12 mt-5">
                <Image
                  className="mt-0"
                  src="../icons/ri--book-line.svg"
                  alt="logo.js logo"
                  width={30}
                  height={10}
                  priority
                />
              </div>
              <h3 className="text-white ml-10 mt-4 text-xl font-[family-name:var(--font-cutive-mono)]">ESPAÑOL</h3>
              <p className="text-white mx-10 mt-4 font-[family-name:var(--font-cutive-mono)]">Mejora tus habilidades de lectura, escritura y comprension del lenguaje espñol.</p>
            </div>
            <div className="bg-[var(--secondary-color)] rounded-2xl cursor-pointer" onClick={() => router.push('/status/under-construction')}>
              <div className="bg-[var(--asset-color)] flex items-center justify-center rounded-full w-13 h-13 ml-12 mt-5">
                <Image
                  className="mt-0"
                  src="../icons/proicons--calculator.svg"
                  alt="logo.js logo"
                  width={30}
                  height={10}
                  priority
                />
              </div>
              <h3 className="text-white ml-10 mt-4 text-xl font-[family-name:var(--font-cutive-mono)]">MATEMATICAS</h3>
              <p className="text-white mx-10 mt-4 font-[family-name:var(--font-cutive-mono)]">Desarrolla tu pensamiento lógico y resolución de problemas matemáticos.</p>
            </div>
            <div className="bg-[var(--secondary-color)] rounded-2xl cursor-pointer" onClick={() => router.push('/status/under-construction')}>
              <div className="bg-[var(--asset-color)] flex items-center justify-center rounded-full w-13 h-13 ml-12 mt-5">
                <Image
                  className="mt-0"
                  src="../icons/ri--leaf-line.svg"
                  alt="logo.js logo"
                  width={30}
                  height={10}
                  priority
                />
              </div>
              <h3 className="text-white ml-10 mt-4 text-xl font-[family-name:var(--font-cutive-mono)]">CIENCIAS<br />NATURALEZ</h3>
              <p className="text-white mx-10 mt-4 font-[family-name:var(--font-cutive-mono)]">Explora el fascinante mundo de la biología, química y física.</p>
            </div>
            <div className="bg-[var(--secondary-color)] rounded-2xl cursor-pointer" onClick={() => router.push('/status/under-construction')}>
              <div className="bg-[var(--asset-color)] flex items-center justify-center rounded-full w-13 h-13 ml-12 mt-5">
                <Image
                  className="mt-0"
                  src="../icons/fluent-mdl2--world.svg"
                  alt="logo.js logo"
                  width={30}
                  height={10}
                  priority
                />
              </div>
              <h3 className="text-white ml-10 mt-4 text-xl font-[family-name:var(--font-cutive-mono)]">CIENCIAS<br />SOCIALES</h3>
              <p className="text-white mx-10 mt-4 font-[family-name:var(--font-cutive-mono)]">Descrube la historia, geografia y las culturas del mundo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}