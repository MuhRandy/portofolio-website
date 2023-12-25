import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="border bg-black text-white rounded-md py-1 w-[70px]"
    >
      {children}
    </button>
  );
};

export default Button;
