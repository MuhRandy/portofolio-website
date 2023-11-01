import clsx from "clsx";

const Input = ({ type = "text", name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      className={clsx(
        "border rounded-md border-black p-1 text-sm w-[50vw]",
        "sm:text-lg sm:border-2"
      )}
      placeholder={placeholder}
    />
  );
};

export default Input;
