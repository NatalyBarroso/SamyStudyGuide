import StyledText from "@/ui/components/common/StyledText";

interface ExampleListProps {
  textStart: string;
  listItems: string[];
  textEnd: string;
}

const ExampleList = ({ textStart, listItems, textEnd }: ExampleListProps) => {
  return (
    <div className="my-8 bg-[#c9cdce] border border-[#CBD5E1] rounded-sm p-4 shadow-sm">
      {textStart && (
        <div className="mb-2">
          <StyledText text={textStart} />
        </div>
      )}

      <div className="bg-white/70 p-4 rounded-sm">
        <ul className="list-disc list-inside space-y-1">
          {listItems.map((string, index) => (
            <li key={index}>{string}</li>
          ))}
        </ul>
      </div>

      {textEnd && (
        <div className="mt-2">
          <StyledText text={textEnd} />
        </div>
      )}
    </div>
  );
};

export default ExampleList;
