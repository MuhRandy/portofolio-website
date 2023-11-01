import clsx from "clsx";

const AboutDescription = () => {
  return (
    <>
      <div className="flex flex-col leading-3">
        <span
          className={clsx("text-md font-bold", [
            "sm:text-xl sm:leading-3",
            "md:text-3xl md:leading-4",
            "lg:text-4xl lg:leading-5",
          ])}
        >
          Muhammad
        </span>
        <span
          className={clsx("text-lg font-bold", [
            "sm:text-2xl",
            "md:text-4xl",
            "lg:text-5xl",
          ])}
        >
          Randy
        </span>
      </div>
      <div
        className={clsx("text-sm text-justify", [
          "sm:w-[40vw] sm:text-lg",
          "md:text-xl",
          "lg:text-2xl lg:w-[30vw]",
        ])}
      >
        A beginner software developer from Indonesia who focus on frontend
        website developer.
      </div>
    </>
  );
};

export default AboutDescription;
