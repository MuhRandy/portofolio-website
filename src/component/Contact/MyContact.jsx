export default function MyContact({ children }) {
  return (
    <div>
      <h1 className="text-5xl font-libre font-medium text-black text-center mb-[70px]">
        My Contact
      </h1>
      <div className="flex items-center justify-center pt-5 gap-5 text-3xl font-medium font-serif">
        {children}
      </div>
    </div>
  );
}

function List({ href, children }) {
  return (
    <a href={href} className="flex items-center justify-center">
      {children}
    </a>
  );
}

MyContact.List = List;
