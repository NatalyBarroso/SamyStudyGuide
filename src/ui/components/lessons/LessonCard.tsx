'use client';
import Image from 'next/image';
import { useState } from 'react';

interface LessonCardProps {
  text: string;
  isCheck: boolean;
  id: string;
  subject: string;
  grade: string;
}

const LessonCard = ({ text, id, subject, grade, isCheck }: LessonCardProps) => {
  const [hover, setHover] = useState(false);
  const [isHoveredReview, setIsHoveredReview] = useState(false);
  // const [isHoveredExam, setIsHoveredExam] = useState(false);

  return (
    <div className="flex flex-row items-center gap-2 w-full max-w-2xl">
      {/* Bloque de texto y check */}
      <div
        className="flex-1 bg-[var(--assets-color)] border-2 border-[var(--primary-color)] rounded-md min-h-[60px] flex items-center justify-between px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white transition duration-300 cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() =>
          window.location.href = `/lessons/${subject}/${grade}/modules/${id}`
        }
      >
        <h3 className="font-[family-name:var(--font-cutive-mono)] text-base sm:text-lg">
          {text}
        </h3>
        {isCheck && (
          <Image
            className="ml-4"
            src={
              hover
                ? "/icons/lets-icons--check-fill-light.svg"
                : "/icons/lets-icons--check-fill-dark.svg"
            }
            alt="check icon"
            width={24}
            height={24}
          />
        )}
      </div>

      {/* Botones redondos */}
      {isCheck && (
        <div className="flex gap-2">
          {/* <button
            className="w-10 h-10 flex-shrink-0 border-2 border-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition duration-300 cursor-pointer"
            onMouseEnter={() => setIsHoveredExam(true)}
            onMouseLeave={() => setIsHoveredExam(false)}
            onClick={() =>
              console.log("Acción del botón (puedes redirigir si gustas)")
            }
          >
            <Image
              src={
                isHoveredExam
                  ? "/icons/healthicons--i-exam-multiple-choice-outline-white.svg"
                  : "/icons/healthicons--i-exam-multiple-choice-outline.svg"
              }
              alt="Ir al siguiente"
              width={24}
              height={24}
            />
          </button> */}
          <button
            className="w-10 h-10 flex-shrink-0 border-2 border-[var(--primary-color)] rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition duration-300 cursor-pointer"
            onMouseEnter={() => setIsHoveredReview(true)}
            onMouseLeave={() => setIsHoveredReview(false)}
            onClick={() =>
              window.location.href = `/lessons/${subject}/${grade}/modules/${id}/review`
            }
          >
            <Image
              src={
                isHoveredReview
                  ? "/icons/material-symbols-light--rate-review-outline-rounded-white.svg"
                  : "/icons/material-symbols-light--rate-review-outline-rounded.svg"
              }
              alt="Ir al siguiente"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
    </div>

  );

}

export default LessonCard;