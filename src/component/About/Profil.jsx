function Profil({ children }) {
  return (
    <div className="flex items-center justify-center gap-5">{children}</div>
  );
}

function Image({ src }) {
  return (
    <div className="h-60 w-60 mx-auto rounded-[20px] overflow-hidden border-2">
      <img src={src} alt="profil" />
    </div>
  );
}

function Description({ children }) {
  return (
    <div className="mt-5 w-[550px]">
      <h1 className="text-4xl font-medium font-libre text-center">About Me</h1>
      <p className="text-2xl mt-[40px] font-serif text-justify">{children}</p>
    </div>
  );
}

Profil.Image = Image;
Profil.Description = Description;

export default Profil;
