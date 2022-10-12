import profil from "../assets/profil.jpg";

export default function About() {
  const name = "Hello, I am Muhammad Randy";
  const description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Solutaodit, necessitatibus hic a voluptas laborum dicta ipsam quasi voluptatibus, quam cupiditate nisi atque eligendi molestias dolor eum fuga cum eius.";
  return (
    <section id="About">
      <div className="bg-secondary text-primary min-h-screen flex items-center justify-center">
        <div className="w-[50%] text-center font-sans">
          <img
            src={profil}
            alt="profil"
            className="h-[220px] mx-auto rounded-full"
          />
          <h1 className="font-medium text-4xl">{name}</h1>
          <p className="text-navbar text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
