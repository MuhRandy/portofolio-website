function Skill({ children }) {
  return (
    <div className="flex justify-start mt-10">
      <div>
        <h1 className="text-3xl font-medium font-libre text-start">My Skill</h1>
        <div className="flex justify-center mt-4 gap-4 text-xl font-medium">
          {children}
        </div>
      </div>
    </div>
  );
}

function List({ children }) {
  return (
    <div className="border-2 border-black rounded-2xl px-2 flex items-center gap-2">
      {children}
    </div>
  );
}

Skill.List = List;

export default Skill;
