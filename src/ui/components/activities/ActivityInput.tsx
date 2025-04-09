interface ActivityOpenProps {
  title: string;
  instructions: string;
  content: string;
}

const ActivityInput = ({ title, instructions, content }: ActivityOpenProps) => {
  return (
    <div className="my-8">
      <h3 className="text-base sm:text-lg font-bold font-[family-name:var(--font-courier-prime)">{title}</h3>
      <p className="my-4">{instructions}</p>
      {content.split('\n').map((line, index) => (
        <p key={index} className="italic">{line}</p>
      ))}
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
  )
}

export default ActivityInput