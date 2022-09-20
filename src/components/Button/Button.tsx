import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <button {...props} className="button__container">
      <span className="button__title">{title}</span>
    </button>
  );
};

export default Button;
