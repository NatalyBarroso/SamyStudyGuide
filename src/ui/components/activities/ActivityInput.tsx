import StyledText from "@/ui/components/common/StyledText";
import { useEffect, useState } from "react";

interface ActivityOpenProps {
  title: string;
  instructions: string;
  content: string;
}

const ActivityInput = ({ title, instructions, content }: ActivityOpenProps) => {
  const storageKey = `activity-${title}`; // Clave para guardar en localStorage
  const [response, setResponse] = useState<string>(""); // Estado para guardar la respuesta del usuario

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      setResponse(saved);
    }
  }, [storageKey]);

  const handleSave = () => {
    localStorage.setItem(storageKey, response);
    alert("Respuesta guardada!");
  }

  return (
    <div className="my-8">
      <h3 className="text-base sm:text-lg font-bold font-[family-name:var(--font-courier-prime)]">
        {title}
      </h3>

      <div className="my-4">
        <StyledText text={instructions} />
      </div>

      <div className="space-y-2">
        <StyledText text={content} />
      </div>

      <div className="mt-6">
        <label htmlFor="respuesta" className="block mb-2 font-semibold">Tu respuesta:</label>
        <textarea
          id="respuesta"
          rows={5}
          className="w-full border border-gray-400 bg-gray-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          placeholder="Escribe tu respuesta aquí..."
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />
      </div>
      {/* Boton para guardar la respuesta */}
      <button
          className="mt-6 px-4 py-2 bg-[var(--primary-color)] text-white rounded hover:bg-[var(--secondary-color)] transition-colors duration-300 cursor-pointer"
          onClick={handleSave}
        >
          Enviar respuesta
        </button>
    </div>
  );
};

export default ActivityInput;
