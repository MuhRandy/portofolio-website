import { IconBrandFramer } from "@tabler/icons";
import { IconBrandReact } from "@tabler/icons";
import { IconBrandTailwind } from "@tabler/icons";
import clsx from "clsx";
import DragNDrop from "../DragNDrop";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../utils/firebase-config";
import {
  getDownloadURL,
  uploadBytes,
  ref as storageRef,
} from "firebase/storage";
import { useAppContext } from "../../App";

const AddPorto = () => {
  const { navigate, setIsLoading, isLoading, setRenderCount, renderCount } =
    useAppContext;

  const [projectName, setProjectName] = useState();
  const [projectDescription, setProjectDescription] = useState();
  const [file, setFile] = useState();

  // add doc on firebase database on posts collection then navigate to home
  const addProject = async (imgURL, imgPath) => {
    const postCollectionRef = collection(db, "projects");
    await addDoc(postCollectionRef, {
      projectName,
      projectDescription,
      imgUrl: imgURL,
      imgPath,
      timestamp: serverTimestamp(),
      author: {
        id: auth.currentUser?.uid,
      },
    }).catch((err) => console.log(err));
    setRenderCount(renderCount + 1);
    navigate("/");
  };

  // upload image in storage and then save downloadUrl to referred doc on firestore
  const uploadProject = () => {
    if (file === null) {
      alert("Please select an image");
      return;
    }

    setIsLoading(true);

    const imgPath = `project-image/${uuidv4()}`;
    const imageRef = storageRef(storage, imgPath);

    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            addProject(url, imgPath);
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
        <DragNDrop file={file} setFile={setFile} />
        <div className="py-4 mb-2 px-2 flex flex-col w-full">
          <input
            type="text"
            placeholder="Nama Portfolio"
            className={clsx("text-center text-md font-medium", [
              "sm:text-lg",
              "md:text-xl",
            ])}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <textarea
            name="porto-desc"
            placeholder="Deskripsi Portfolio"
            className="text-center text-slate-600 text-sm dark:text-slate-200 w-full h-[100px]"
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        <div className="flex absolute bottom-0 right-0">
          <IconBrandTailwind className="text-blue-500" stroke={1} />
          <IconBrandReact className="text-blue-800" stroke={1} />
          <IconBrandFramer stroke={1} />
        </div>
      </div>
      <div>
        <button
          className="border bg-black text-white rounded-md py-1 w-[70px]"
          onClick={uploadProject}
        >
          Submit
        </button>
        <button
          className="border bg-black text-white rounded-md py-1 w-[70px]"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AddPorto;
