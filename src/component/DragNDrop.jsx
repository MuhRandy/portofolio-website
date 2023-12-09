import clsx from "clsx";
import Dropzone from "react-dropzone";
import { cn } from "../utils/utils";

const DragNDrop = ({ file, imgUrl = "", setFile, className }) => {
  return (
    <Dropzone onDrop={(acceptedFiles) => setFile(acceptedFiles?.[0])}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section>
          <div
            {...getRootProps({
              className: cn(
                "cursor-pointer",
                "mt-2 mx-2 rounded-md overflow-hidden border-dashed border-4 h-[200px]",
                "flex justify-center items-center",
                "text-center",
                className
              ),
            })}
          >
            <input
              {...getInputProps({
                accept: "image/*",
              })}
            />
            {isDragActive ? (
              <p>Drop some files here</p>
            ) : (
              <>
                <p className={clsx({ hidden: file || imgUrl })}>
                  Drag 'n' drop some images here, or click to select files
                </p>
                {(file || imgUrl) && (
                  <img
                    src={
                      file ? URL.createObjectURL(file) : imgUrl ? imgUrl : ""
                    }
                    alt="header image for post"
                    className="w-full h-full object-cover object-center"
                  />
                )}
              </>
            )}
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default DragNDrop;
