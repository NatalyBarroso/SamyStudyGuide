'use client';
import Image from 'next/image';
import { useState } from 'react';

interface LessonCardProps {
  text: string;
  isCheck: boolean;
  id: string;
}

const LessonCard = ({ text, id, isCheck = false }: LessonCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="bg-[var(--assets-color)] border-2 border-[var(--primary-color)] rounded-md w-full max-w-xl min-h-[60px] flex items-center justify-between px-4 py-2 hover:bg-[var(--primary-color)] hover:text-white transition duration-300 cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.location.href = `/lessons/spanish/primaria/modules/${id}`}
    >
      <h3 className="font-[family-name:var(--font-cutive-mono)] text-base sm:text-lg">{text}</h3>
      {isCheck && (
        <Image
          className="ml-4"
          src={hover ? "/icons/lets-icons--check-fill-light.svg" : "/icons/lets-icons--check-fill-dark.svg"}
          alt="check icon"
          width={24}
          height={24}
        />
      )}
    </div>
  );
  
}

export default LessonCard;