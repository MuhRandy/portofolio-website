export default function Navbar() {
  const nav = ["About", "Work", "Contact"];
  return (
    <nav className="sticky top-0">
      <div className="flex justify-end gap-5 pr-3 text-xl font-medium bg-navbar text-primary py-2">
        {nav.map((i, key) => (
          <a key={key} href={`#${i}`}>
            {i}
          </a>
        ))}
      </div>
    </nav>
  );
}
