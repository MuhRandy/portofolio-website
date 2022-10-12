import profil from "../assets/profil.jpg";

export default function About() {
  return (
    <section id="About">
      <div className="bg-secondary text-primary min-h-screen flex items-center justify-center">
        <div className="w-[50%] text-center font-sans">
          <img
            src={profil}
            alt="profil"
            className="h-[220px] mx-auto rounded-full"
          />
          <h1 className="font-medium text-4xl">Hallo, I am Muhammad Randy</h1>
          <p className="text-navbar text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            odit, necessitatibus hic a voluptas laborum dicta ipsam quasi
            voluptatibus, quam cupiditate nisi atque eligendi molestias dolor
            eum fuga cum eius.
          </p>
        </div>
      </div>
    </section>
  );
}
