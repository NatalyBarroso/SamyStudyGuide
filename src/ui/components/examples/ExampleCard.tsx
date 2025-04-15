import StyledText from "../common/StyledText";

interface ExampleCardProps {
  textStart: string;
  content: string;
  textEnd: string;
}

const ExampleCard = ({ textStart, textEnd, content }: ExampleCardProps) => {
  return (
    <div className="my-8 bg-[#c9cdce] border border-[#CBD5E1] rounded-sm p-4 shadow-sm">
      {textStart && (
        <div className="mb-2">
          <StyledText text={textStart} />
        </div>
      )}
      <div className="bg-white/70 p-4 rounded-md border-l-4 border-[#7E99A3]">
        {content.split('\n').map((line, index) => (
          // <p key={index} className="italic text-sm sm:text-base mb-2">{line}</p>
          <div key={index} className="text-sm sm:text-base mb-2">
            <StyledText text={line} />
          </div>
        ))}
      </div>
      {textEnd && (
        <div className="mt-2">
          <StyledText text={textEnd} />
        </div>
      )}
    </div>
  )
}

export default ExampleCard