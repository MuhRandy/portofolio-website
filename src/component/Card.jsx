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
    <div className="flex justify-center gap-5 py-5">
      {project.map((i, index) => (
        <div className="w-[300px] overflow-hidden">
          <img src={i.img} alt={i.img} className="shadow-black shadow-sm" />
          <h1 className="text-center text-2xl font-medium text-secondary py-4 underline">
            {i.name}
          </h1>
        </div>
      ))}
    </div>
  );
}
