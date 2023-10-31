const Input = ({ type = 'text', name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      className="border rounded-md border-black p-1 text-sm w-[50vw]"
      placeholder={placeholder}
    />
  );
};

export default Input;
