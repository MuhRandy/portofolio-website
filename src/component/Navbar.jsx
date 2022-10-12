export default function Navbar() {
  return (
    <nav className="sticky top-0">
      <div className="flex justify-end gap-5 pr-3 text-xl font-medium bg-navbar text-primary py-2">
        <a href="#About">About Me</a>
        <a href="#Work">Work</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
