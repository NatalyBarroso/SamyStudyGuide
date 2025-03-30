"use client";
import { useEffect, useState, useRef } from "react";

const useTypingEffect = (fullText: string, typingSpeed = 150, deleteSpeed = 100, delay = 1000) => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const currentIndexRef = useRef(0);

  useEffect(() => {
      let timer: NodeJS.Timeout;
      
      const typeText = () => {
        if (isTyping) {
          if (currentIndexRef.current < fullText.length) {
            setText(fullText.substring(0, currentIndexRef.current + 1));
            currentIndexRef.current += 1;
            timer = setTimeout(typeText, typingSpeed); // Velocidad de escritura
          } else {
            // Pausa antes de comenzar a borrar
            setTimeout(() => {
              setIsTyping(false);
            }, delay);
          }
        } else {
          if (currentIndexRef.current > 0) {
            currentIndexRef.current -= 1;
            setText(fullText.substring(0, currentIndexRef.current));
            timer = setTimeout(typeText, deleteSpeed); // Velocidad de borrado
          } else {
            // Pausa antes de comenzar a escribir de nuevo
            setTimeout(() => {
              setIsTyping(true);
            }, delay/2);
          }
        }
      };
      
      timer = setTimeout(typeText, 100);
      
      return () => clearTimeout(timer);
    }, [isTyping, fullText, typingSpeed, deleteSpeed, delay]); // Solo se ejecuta cuando cambia isTyping
    return text;
}

export default useTypingEffect;