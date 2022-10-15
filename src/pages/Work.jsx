import Card from "../component/Work/Card";

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

export default function Work() {
  return (
    <section id="Work" className="min-h-[90vh]">
      <div className="bg-white pt-[44px]">
        <h1 className="text-3xl md:text-5xl text-center">My Project</h1>
        <Card>
          {project.map((i, key) => (
            <Card.List key={key} imgSrc={i.img} projectName={i.name} />
          ))}
        </Card>
      </div>
    </section>
  );
}
