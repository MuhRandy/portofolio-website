export default function Card({ children }) {
  return (
    <div className="md:mx-[20%]">
      <div className="flex justify-center gap-5 py-5 flex-wrap pt-[60px]">
        {children}
      </div>
    </div>
  );
}

function List({ imgSrc, projectName }) {
  return (
    <div className="basis-1/3 md:basis-1/4 rounded-[20px] shadow-black shadow-sm overflow-hidden flex justify-center items-center flex-col hover:scale-110">
      <img src={imgSrc} alt={imgSrc} />
      <h1 className="text-center text-lg md:text-2xl font-medium text-secondary">
        {projectName}
      </h1>
    </div>
  );
}

Card.List = List;
