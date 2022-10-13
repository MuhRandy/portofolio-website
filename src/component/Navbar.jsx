export default function Navbar() {
  const nav = ["About", "Work", "Contact"];
  return (
    <nav className="sticky top-0 left-0 right-0 border-b-2 bg-white">
      <div className="flex justify-between text-secondary font-medium">
        <h1 className="flex items-center text-3xl font-libre">
          Randy Portofolio
        </h1>
        <div className="flex justify-center gap-5 pr-3 text-xl py-2">
          {nav.map((i, key) => (
            <a key={key} href={`#${i}`}>
              {i}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
