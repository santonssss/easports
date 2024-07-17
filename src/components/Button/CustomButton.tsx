import React from "react";

type Props = {
  text: string;
  onClick: () => void;
};

const CustomButton = ({ text, onClick }: Props) => {
  return (
    <button className="comments__button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
