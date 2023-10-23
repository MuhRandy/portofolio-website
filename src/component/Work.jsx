import Card from "./Card";

export default function Work() {
  return (
    <section id="Works">
      <div className="bg-white min-h-screen pt-[44px] mt-[300px] px-40">
        <h1 className="text-[59px] font-bold text-left flex flex-col font-inter">
          <span>My</span>
          <span className="mt-[-30px]">Project</span>
        </h1>
        <Card />
      </div>
    </section>
  );
}
