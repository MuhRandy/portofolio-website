const button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border bg-black text-white rounded-md py-1 w-[70px]"
    >
      {children}
    </button>
  );
};

export default button;
