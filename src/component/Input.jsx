const Input = ({ type = "text", name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      className="border-2 rounded-md border-black p-1 text-xl w-[40rem] h-10"
      placeholder={placeholder}
    />
  );
};

export default Input;
