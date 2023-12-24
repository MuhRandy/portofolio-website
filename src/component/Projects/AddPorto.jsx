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
import { AppContext } from "../../App";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button";

const AddPorto = () => {
  const useAppContext = useContext(AppContext);

  const [projectName, setProjectName] = useState();
  const [projectDescription, setProjectDescription] = useState();
  const [projectLink, setProjectLink] = useState();
  const [file, setFile] = useState();

  // add doc on firebase database on posts collection then navigate to home
  const addProject = async (imgURL, imgPath) => {
    const postCollectionRef = collection(db, "projects");
    await addDoc(postCollectionRef, {
      projectName,
      projectDescription,
      projectLink,
      imgUrl: imgURL,
      imgPath,
      timestamp: serverTimestamp(),
    }).catch((err) => console.log(err));
    useAppContext.setRenderCount(useAppContext.renderCount + 1);
    useAppContext.navigate("/");
  };

  // upload image in storage and then save downloadUrl to referred doc on firestore
  const uploadProject = () => {
    if (file === null) {
      alert("Please select an image");
      return;
    }

    useAppContext.setIsLoading(true);

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
            placeholder="Project Name"
            className={clsx("text-center text-md font-medium", [
              "sm:text-lg",
              "md:text-xl",
            ])}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <textarea
            name="porto-desc"
            placeholder="Project Description"
            className="text-center text-slate-600 text-sm dark:text-slate-200 w-full h-[100px]"
            onChange={(e) => setProjectDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Link to Project"
            className={clsx("text-center text-md font-medium", [
              "sm:text-lg",
              "md:text-xl",
            ])}
            onChange={(e) => setProjectLink(e.target.value)}
          />
        </div>
        <div className="flex absolute bottom-0 right-0">
          <IconBrandTailwind className="text-blue-500" stroke={1} />
          <IconBrandReact className="text-blue-800" stroke={1} />
          <IconBrandFramer stroke={1} />
        </div>
      </div>
      <div>
        <Button onClick={uploadProject}>Submit</Button>
        <a href="/">
          <Button>Back</Button>
        </a>
      </div>
    </div>
  );
};

export default AddPorto;
