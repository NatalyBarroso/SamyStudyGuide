'use client';
import Image from "next/image";
import Header from "../../../ui/components/layout/Header";

export default function UnderConstruction() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center mt-40">
        <Image
          className="mt-4"
          src="/icons/material-symbols--construction.svg"
          alt="logo-construction.js logo"
          width={80}
          height={10}
          priority
          style={{ fill: '#1E1E1E' }}
        />
        <h1 className="font-[family-name:var(--font-courier-prime)] text-2xl">Under Construction</h1>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-[var(--primary-color)] m-16 px-16 py-3 text-white text-lg rounded-xl cursor-pointer">
          Go Back
        </button>
      </div>
    </div>
  )
}