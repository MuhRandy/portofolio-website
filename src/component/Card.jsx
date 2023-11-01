import clsx from "clsx";

export default function Card({ img, name, link }) {
  return (
    <div>
      <img src={img} alt={name} className="shadow-black shadow-sm" />
      <a href={`https://muhrandy.github.io/${link}`}>
        <h1
          className={clsx(
            "text-center text-md font-medium text-secondary py-4 underline",
            ["sm:text-lg", "md:text-xl", "lg:text-2xl"]
          )}
        >
          {name}
        </h1>
      </a>
    </div>
  );
}
