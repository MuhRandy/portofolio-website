import { HiOutlineCode } from "react-icons/hi";

export default function Home() {
  const name = "Hello, I am Randy";
  const description = "A passionate front end web developer";
  return (
    <div className="bg-white text-secondary h-[90vh] flex justify-center items-center font-sans flex-col">
      <HiOutlineCode className="text-[100px]" />
      <h1 className="font-medium text-2xl md:text-5xl font-libre">{name}</h1>
      <h2 className="text-lg md:text-2xl mt-3 font-serif">{description}</h2>
    </div>
  );
}
