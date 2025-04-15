import React from "react";
import StyledText from "@/ui/components/common/StyledText";

const NoteCard = ({ children }: { children: string }) => {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 my-6 rounded-md shadow-sm">
      <div className="text-sm sm:text-base text-gray-800 leading-relaxed">
        <StyledText text={children} />
      </div>
    </div>
  );
};

export default NoteCard;
