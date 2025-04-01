"use client";
import useTypingEffect from "../../hooks/useTypingEffect";
import Image from "next/image";

const Header = () => {
  const text = useTypingEffect("SAMY'S STUDY GUIDE");
  return (
    <header className="px-4 py-3 flex justify-between items-center sm:px-6 md:px-8 lg:px-12">
  <div
    className="flex flex-row items-center gap-2 cursor-pointer"
    onClick={() => window.location.href = "/lessons"}
  >
    <Image
      className="px-1"
      src="/icons/famicons--book.svg"
      alt="Lessons icon"
      width={30}
      height={30}
      priority
      style={{ fill: '#1E1E1E' }}
    />
    <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-courier-prime)]">
      Lessons
    </p>
  </div>
  <div
    className="flex items-center gap-2 cursor-pointer"
    onClick={() => window.location.href = "/"}
  >
    <Image
      className="px-1"
      src="/icons/ic--baseline-school.svg"
      alt="School icon"
      width={30}
      height={30}
      priority
      style={{ fill: '#1E1E1E' }}
    />
    <h1 className="relative text-xs sm:text-sm md:text-base font-[family-name:var(--font-cutive-mono)]">
      {text}
      <span className="inline-block w-0.5 h-3 ml-1 bg-black animate-pulse"></span>
    </h1>
  </div>
</header>

  )
}

export default Header;