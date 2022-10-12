export default function Card() {
  const project = [
    {
      name: "Project 1",
      img: "https://via.placeholder.com/300",
    },
    {
      name: "Project 1",
      img: "https://via.placeholder.com/300",
    },
    {
      name: "Project 1",
      img: "https://via.placeholder.com/300",
    },
  ];
  return (
    <div className="flex justify-center gap-5 py-5 flex-wrap">
      {project.map((i) => (
        <div className="h-[300px] bg-slate-400 basis-1/5">
          <img src={i.img} alt={i.img} />
          <h1 className="text-center text-xl font-medium text-primary">
            {i.name}
          </h1>
        </div>
      ))}
    </div>
  );
}
