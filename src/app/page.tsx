/**
 * Route: /
 * 
 * Home Page - Samy's Study Guide
 *
 * This is the main landing page of the Samy's Study Guide educational platform.
 * It presents a minimal and centered layout that includes:
 * - A school-themed logo.
 * - A dynamic typing effect showcasing the site name.
 * - A call-to-action button that navigates users to the lessons section.
 * 
 * The page is styled with Tailwind CSS and uses responsive design principles.
 * It uses custom font variables and a client-side typing effect hook for interactivity.
 * 
 * Technologies:
 * - React (Client Component)
 * - Next.js Image optimization
 * - Custom React hook (useTypingEffect)
 * - Tailwind CSS for styling
 * - Next.js useRouter for navigation
 */

"use client";
import Image from "next/image";
import "../styles/globals.css";
import { useRouter } from "next/navigation";
import useTypingEffect from "../ui/hooks/useTypingEffect";

export default function Home() {
  const router = useRouter();
  const text = useTypingEffect("SAMY'S STUDY GUIDE");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:px-10 lg:px-20 gap-12 font-[family-name:var(--font-courier-prime)]">
      <div className="flex flex-col items-center gap-10">
        <Image
          className="mt-4 sm:mt-8"
          src="/icons/ic--baseline-school.svg"
          alt="logo.js logo"
          width={80}
          height={10}
          priority
          style={{ fill: '#1E1E1E' }}
        />
        <h1 className="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black px-4">
          {text}
          <span className={`inline-block w-1 h-8 ml-1 bg-black animate-pulse align-middle`}></span>
        </h1>
      </div>
      <div className="flex flex-col items-center gap-12 font-[family-name:var(--font-cutive-mono)] text-center">
        <button
          className="bg-[var(--primary-color)] px-8 sm:px-12 py-2 text-white text-lg sm:text-xl rounded-4xl cursor-pointer"
          onClick={() => router.push('/lessons')}
        >
          START<br />LESSONS
        </button>
        <p className="text-base sm:text-lg">Open the schools!!!</p>
      </div>
    </div>
  );
}
