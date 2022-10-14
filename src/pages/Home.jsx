import { HiOutlineCode } from "react-icons/hi";

export default function Home() {
  const name = "Hello, I am Randy";
  const description = "A passionate front end web developer";
  return (
    <div className="bg-white text-secondary h-[90vh] flex justify-center items-center mt-[]">
      <div className="w-[50%] text-center font-sans">
        <HiOutlineCode className="mx-auto text-[100px]" />
        <h1 className="font-medium text-5xl font-libre">{name}</h1>
        <h2 className="text-2xl mt-3 font-serif">{description}</h2>
      </div>
    </div>
  );
}
