import {
  IconBrandFramer,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";
import { useState, useContext, useEffect } from "react";
import { db, storage } from "../../utils/firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  getDownloadURL,
  uploadBytes,
  ref as storageRef,
} from "firebase/storage";
import { AppContext } from "../../App";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import DragNDrop from "../DragNDrop";
import Button from "../Button";

const AddPorto = () => {
  const { isAuth, navigate, renderCount, setRenderCount, setIsLoading } =
    useContext(AppContext);

  const [projectName, setProjectName] = useState<string>();
  const [projectDescription, setProjectDescription] = useState<string>();
  const [projectLink, setProjectLink] = useState<string>();
  const [file, setFile] = useState<File>();

  // add doc on firebase database on posts collection then navigate to home
  const addProject = async (imgURL: string, imgPath: string) => {
    const postCollectionRef = collection(db, "projects");
    await addDoc(postCollectionRef, {
      projectName,
      projectDescription,
      projectLink,
      imgUrl: imgURL,
      imgPath,
      timestamp: serverTimestamp(),
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

    uploadBytes(imageRef, file!)
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

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, []);

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
        <DragNDrop file={file!} setFile={setFile} />
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
