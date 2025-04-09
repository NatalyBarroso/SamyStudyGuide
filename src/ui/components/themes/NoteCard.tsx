const NoteCard = ({ children }: { children: string }) => {
  const parseNoteLine = (line: string, lineIndex: number) => {
    const regex = /<bold>(.*?)<\/bold>/g;
    const result: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(line)) !== null) {
      const [fullMatch, boldText] = match;
      const matchIndex = match.index ?? 0;

      if (lastIndex < matchIndex) {
        result.push(
          <span key={`text-${lineIndex}-${matchIndex}`} className="font-normal">
            {line.slice(lastIndex, matchIndex)}
          </span>
        );
      }

      result.push(
        <strong key={`bold-${lineIndex}-${matchIndex}`} className="font-semibold">
          {boldText}
        </strong>
      );

      lastIndex = matchIndex + fullMatch.length;
    }

    if (lastIndex < line.length) {
      result.push(
        <span key={`end-${lineIndex}`} className="font-normal">
          {line.slice(lastIndex)}
        </span>
      );
    }

    return <p key={`line-${lineIndex}`} className="mb-1">{result}</p>;
  };

  const lines = children.split('\n');

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 my-6 rounded-md shadow-sm">
      <div className="text-sm sm:text-base text-gray-800 leading-relaxed">
        {lines.map((line, index) => parseNoteLine(line, index))}
      </div>
    </div>
  );
};

export default NoteCard;

