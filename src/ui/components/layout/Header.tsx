"use client";
import useTypingEffect from "../../hooks/useTypingEffect";
import Image from "next/image";

const Header = () => {
  const text = useTypingEffect("SAMY'S STUDY GUIDE");
  return (
    <header className="p-4 flex justify-end items-center">
      <div className="flex items-center cursor-pointer" onClick={() => window.location.href = "/"}>
        <Image
          className="px-1"
          src="/icons/ic--baseline-school.svg"
          alt="logo.js logo"
          width={30}
          height={10}
          priority
          style={{ fill: '#1E1E1E' }}
        />
        <h1 className="relative text-sm font-[family-name:var(--font-cutive-mono)]">
          {text}
          <span className={`inline-block w-0.5 h-3 ml-1 bg-black animate-pulse`}></span>
        </h1>
      </div>
    </header>
  )
}

export default Header;