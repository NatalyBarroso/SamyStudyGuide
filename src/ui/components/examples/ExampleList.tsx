interface ExampleListProps {
  textStart: string;
  listItems: string[];
  textEnd: string;
}

const ExampleList = ({ textStart, listItems, textEnd }: ExampleListProps) => {
  return (
    <div className="my-8 bg-[#c9cdce] border border-[#CBD5E1] rounded-sm p-4 shadow-sm">
      <p className="mb-2">{textStart}</p>
      <div className="bg-white/70 p-4 rounded-sm">
        <ul className="list-disc list-inside">
          {listItems.map((string, index) => (
            <li key={index}>{string}</li>
          ))}
        </ul>
      </div>
      <p>{textEnd}</p>
    </div>
  )
}

export default ExampleList