import StyledText from "@/ui/components/common/StyledText";

interface ActivityOpenProps {
  title: string;
  instructions: string;
  content: string;
}

const ActivityInput = ({ title, instructions, content }: ActivityOpenProps) => {
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
          className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          placeholder="Escribe tu respuesta aquí..."
        />
      </div>
    </div>
  );
};

export default ActivityInput;
