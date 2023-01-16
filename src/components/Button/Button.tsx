import React from "react";

interface ButtonPropsType {
  text: string;
}

function Button({ text }: ButtonPropsType) {
  return (
    <button data-testid="button-id" type="button">
      <span>{text}</span>
    </button>
  );
}

export default Button;
