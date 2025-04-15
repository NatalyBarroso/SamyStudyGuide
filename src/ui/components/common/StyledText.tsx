import React from "react";
import { transformTextToHTML } from "@/lib/transformTextToHTML";

interface StyledTextProps {
  text: string;
}

const StyledText: React.FC<StyledTextProps> = ({ text }) => {
  const html = transformTextToHTML(text);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default StyledText;
