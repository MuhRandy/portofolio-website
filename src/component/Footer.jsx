import clsx from "clsx";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="static bottom-0 left-0 right-0 pt-10">
      <div
        className={clsx(
          "gap-[5px] flex justify-center items-center pl-1 text-xs",
          "sm:text-base"
        )}
      >
        <AiOutlineCopyrightCircle /> 2023 Designed & Coded By Muhammad Randy
      </div>
    </div>
  );
}
