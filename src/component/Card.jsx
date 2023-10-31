export default function Card({ img, name, link }) {
  return (
    <div>
      <img src={img} alt={name} className="shadow-black shadow-sm" />
      <a href={`https://muhrandy.github.io/${link}`}>
        <h1 className="text-center text-2xl font-medium text-secondary py-4 underline">
          {name}
        </h1>
      </a>
    </div>
  );
}
