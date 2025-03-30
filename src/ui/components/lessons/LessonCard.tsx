'use client';
import Image from 'next/image';
import { useState } from 'react';

interface LessonCardProps {
  text: string;
  isCheck: boolean;
}

const LessonCard = ({ text, isCheck = false }: LessonCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="bg-[var(--assets-color)] border-2 border-[var(--primary-color)] rounded-md w-[600px] h-[60px] flex flex-row items-center justify-between hover:bg-[var(--primary-color)] hover:text-white transition duration-300 cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <h3 className="font-[family-name:var(--font-cutive-mono)] ml-4">{text}</h3>
      {isCheck && (
        <Image
          className="mr-4"
          src={hover ? "/icons/lets-icons--check-fill-light.svg" : "/icons/lets-icons--check-fill-dark.svg"}
          alt="logo-construction.js logo"
          width={30}
          height={10}
        />
      )}
    </div>
  )
}

export default LessonCard;