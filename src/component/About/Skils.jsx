function Skill({ children }) {
  return (
    <div className="flex justify-center md:justify-start mt-10 flex-col">
      <h1 className="text-xl md:text-3xl font-medium font-libre text-center md:text-start">
        My Skill:
      </h1>
      <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-2 md:gap-4 text-base md:text-xl font-medium">
        {children}
      </div>
    </div>
  );
}

function List({ children }) {
  return (
    <div className=" border-[1px] md:border-2 border-black rounded-2xl px-2 flex items-center gap-2">
      {children}
    </div>
  );
}

Skill.List = List;

export default Skill;
