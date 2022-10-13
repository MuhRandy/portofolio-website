export default function Card() {
  const project = [
    {
      name: "Project 1",
      img: "https://via.placeholder.com/500",
    },
    {
      name: "Project 1",
      img: "https://via.placeholder.com/500",
    },
    {
      name: "Project 1",
      img: "https://via.placeholder.com/500",
    },
    {
      name: "Project 1",
      img: "https://via.placeholder.com/500",
    },
  ];
  return (
    <div className="flex justify-center gap-5 py-5 flex-wrap">
      {project.map((i) => (
        <div className="basis-1/4 rounded-[20px] shadow-black shadow-sm w-[300px] overflow-hidden">
          <img src={i.img} alt={i.img} />
          <h1 className="text-center text-2xl font-medium text-secondary py-4">
            {i.name}
          </h1>
        </div>
      ))}
    </div>
  );
}
