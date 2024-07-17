import React, { useState } from "react";
import "./RibbonDescription.css";

type Props = {
  text: string;
};

const RibbonDescription = ({ text }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = text.split(" ");
  const shouldTruncate = words.length > 26;
  const displayText =
    shouldTruncate && !isExpanded
      ? words.slice(0, 26).join(" ") + " ..."
      : text;

  return (
    <p className="ribbonDescription">
      {displayText}
      {shouldTruncate && (
        <span onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Скрыть" : "Читать дальше"}
        </span>
      )}
    </p>
  );
};

export default RibbonDescription;
