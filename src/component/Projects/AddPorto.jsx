import { IconBrandFramer } from "@tabler/icons";
import { IconBrandReact } from "@tabler/icons";
import { IconBrandTailwind } from "@tabler/icons";
import clsx from "clsx";

const AddPorto = () => {
  return (
    <div
      className={clsx(
        "w-full h-screen",
        "flex flex-col justify-center items-center gap-1"
      )}
    >
      <div
        className={clsx(
          "shadow-sm border rounded-lg overflow-hidden relative bg-white w-[400px]",
          "flex flex-col items-center"
        )}
      >
        <div
          className={clsx(
            "mt-2 rounded-md overflow-hidden border-dashed border-2 w-[calc(100%-16px)] h-[200px]",
            "flex justify-center items-center",
            "text-center"
          )}
        >
          React DropZone
        </div>
        <div className="py-4 mb-2 px-2 flex flex-col w-full">
          <input
            type="text"
            placeholder="Nama Portfolio"
            className={clsx("text-center text-md font-medium", [
              "sm:text-lg",
              "md:text-xl",
            ])}
          />
          <textarea
            name="porto-desc"
            placeholder="Deskripsi Portfolio"
            className="text-center text-slate-600 text-sm dark:text-slate-200 w-full h-[100px]"
          />
        </div>
        <div className="flex absolute bottom-0 right-0">
          <IconBrandTailwind className="text-blue-500" stroke={1} />
          <IconBrandReact className="text-blue-800" stroke={1} />
          <IconBrandFramer stroke={1} />
        </div>
      </div>
      <div>
        <button className="border bg-black text-white rounded-md py-1 w-[70px]">
          Submit
        </button>
        <button className="border bg-black text-white rounded-md py-1 w-[70px]">
          Back
        </button>
      </div>
    </div>
  );
};

export default AddPorto;
