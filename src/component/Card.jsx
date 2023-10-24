export default function Card({ img, name }) {
  return (
    <div>
      <img src={img} alt={img} className="shadow-black shadow-sm" />
      <h1 className="text-center text-2xl font-medium text-secondary py-4 underline">
        {name}
      </h1>
    </div>
  );
}
