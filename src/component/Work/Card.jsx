export default function Card({ children }) {
  return (
    <div className="flex justify-center gap-5 py-5 flex-wrap">{children}</div>
  );
}

function List({ imgSrc, projectName }) {
  return (
    <div className="basis-1/4 rounded-[20px] shadow-black shadow-sm w-[300px] overflow-hidden">
      <img src={imgSrc} alt={imgSrc} />
      <h1 className="text-center text-2xl font-medium text-secondary py-4">
        {projectName}
      </h1>
    </div>
  );
}

Card.List = List;
