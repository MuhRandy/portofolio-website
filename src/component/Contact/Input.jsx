import clsx from "clsx";

const Input = ({ type = "text", name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      className={clsx(
        "p-1 px-2 w-[50vw] rounded-md ",
        "text-sm",
        "border border-black",
        "sm:text-lg sm:border-2",
        "dark:border-white dark:bg-slate-700 dark:text-white"
      )}
      placeholder={placeholder}
    />
  );
};

export default Input;
