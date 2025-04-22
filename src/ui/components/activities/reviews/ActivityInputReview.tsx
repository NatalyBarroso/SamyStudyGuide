import { useEffect, useState } from "react";
import StyledText from "../../common/StyledText";

interface ActivityOpenProps {
  title: string;
  instructions: string;
  content: string;
}

const ActivityInputReview = ({ title, instructions, content }: ActivityOpenProps) => {
  const storageKey = `feedback-${title}`; // Clave para guardar en localStorage
  const [coment, setComent] = useState<string>(""); // Estado para guardar la respuesta del usuario
  const sotageKeyResponse = `activity-${title}`; // clave para obtener la respuesta guardada del estudiante
  const [response, setResponse] = useState<string>(""); // Estado para guardar la respuesta del estudiante

  // Cargar respuesta guardada al montar el compoenente
  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    const savedResponse = localStorage.getItem(sotageKeyResponse);
    setResponse(savedResponse || "");

    if (saved) {
      setComent(saved);
    }
  }, [storageKey, sotageKeyResponse]);

  const handleSave = () => {
    localStorage.setItem(storageKey, coment);
    alert("Comentario guardado!");
  }

  return (
    <div className="my-8">
      <h3 className="text-base sm:text-lg font-bold font-[family-name:var(--font-courier-prime)]">
        {title}
      </h3>

      <div className="my-4 font-[family-name:var(--font-cutive-mono)]">
        <StyledText text={instructions} />
      </div>

      <div className="space-y-2 font-[family-name:var(--font-cutive-mono)]">
        <StyledText text={content} />
      </div>

      <div className="mt-6">
        <label htmlFor="respuesta" className="block mb-2 font-semibold">Tu respuesta:</label>
        <textarea
          id="respuesta"
          rows={5}
          className="w-full border border-gray-400 bg-gray-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] font-[family-name:var(--font-cutive-mono)]"
          placeholder="Escribe tu respuesta aquí..."
          value={response}
          disabled={true}
        />
      </div>
      <div className="mt-6">
        <label htmlFor="respuesta" className="block mb-2 font-semibold">Comentario:</label>
        <textarea
          id="respuesta"
          rows={5}
          className="w-full border border-gray-400 bg-gray-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] font-[family-name:var(--font-cutive-mono)]"
          placeholder="Escribe tu comentario aquí..."
          value={coment}
          onChange={(e) => setComent(e.target.value)}
        />
      </div>
      {/* Boton para guardar la retroalimentacion */}
      <div className="flex justify-end">
        <button
          className="mt-6 px-4 py-2 bg-[var(--primary-color)] text-white rounded hover:bg-[var(--secondary-color)] transition-colors duration-300 cursor-pointer font-[family-name:var(--font-courier-prime)]"
          onClick={handleSave}
        >
          Guardar
        </button>
      </div>
    </div>
  )
}

export default ActivityInputReview;