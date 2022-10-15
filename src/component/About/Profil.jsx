function Profil({ children }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
      {children}
    </div>
  );
}

function Image({ src }) {
  return (
    <div className=" w-40 h-40 md:h-60 md:w-60 mx-auto rounded-[20px] overflow-hidden border-2">
      <img src={src} alt="profil" />
    </div>
  );
}

function Description({ children }) {
  return (
    <div className="md:mt-5 w-[340px] md:w-[550px]">
      <h1 className="text-2xl md:text-4xl font-medium font-libre text-center">
        About Me
      </h1>
      <p className="text-lg md:text-2xl md:mt-[40px] font-serif text-center md:text-justify">
        {children}
      </p>
    </div>
  );
}

Profil.Image = Image;
Profil.Description = Description;

export default Profil;
