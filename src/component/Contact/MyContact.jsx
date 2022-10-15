export default function MyContact({ children }) {
  return (
    <section
      id="Contact"
      className="bg-white flex flex-col items-center justify-center h-[90vh]"
    >
      <h1 className="text-3xl md:text-5xl font-libre font-medium text-black text-center md:mb-[70px]">
        My Contact
      </h1>
      <div className="flex items-center justify-center pt-5 gap-5 text-xl md:text-3xl font-medium font-serif">
        {children}
      </div>
    </section>
  );
}

function List({ href, children }) {
  return (
    <a href={href} className="flex items-center justify-center gap-1">
      {children}
    </a>
  );
}

MyContact.List = List;
