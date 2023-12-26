import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
};

const Button = ({ children, onClick, isDisabled = false }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className="border bg-black text-white rounded-md py-1 w-[70px]"
    >
      {children}
    </button>
  );
};

export default Button;
