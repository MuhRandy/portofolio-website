import Card from "../component/Work/Card";

export default function Work() {
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
    <section id="Work" className="min-h-[90vh]">
      <div className="bg-white pt-[44px]">
        <h1 className="text-5xl text-center">My Project</h1>
        <Card>
          {project.map((i) => (
            <Card.List imgSrc={i.img} projectName={i.name} />
          ))}
        </Card>
      </div>
    </section>
  );
}
