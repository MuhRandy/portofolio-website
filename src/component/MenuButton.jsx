import clsx from "clsx";
import { HiMenu } from "react-icons/hi";

export default function MenuButton({ className, ...props }) {
  return (
    <button
      className={clsx(
        "flex h-9 w-9 items-center justify-center rounded-md bg-gray-200 ring-gray-300  transition-all hover:ring-2  dark:bg-gray-500",
        className
      )}
      {...props}
    >
      <HiMenu className="h-5 w-5" />
    </button>
  );
}
