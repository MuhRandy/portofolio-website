import clsx from "clsx";

const Input = ({ type = "text", name, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      className={clsx(
        "p-1 px-2 min-w-[30vw] rounded-md ",
        "text-sm",
        "border border-black",
        "sm:text-lg sm:border-2",
        "dark:border-white dark:bg-slate-700 dark:text-white"
      )}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
