import {
  IconBrandFramer,
  IconBrandReact,
  IconBrandTailwind,
  IconLoader3,
} from "@tabler/icons-react";
import { useState, useContext, useEffect } from "react";
import { db, storage } from "../../utils/firebase-config";
import {
  DocumentData,
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
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

type AddPortoProp = {
  forEdit?: boolean;
};

const AddPorto = ({ forEdit = false }: AddPortoProp) => {
  const {
    isAuth,
    navigate,
    renderCount,
    isLoading,
    getSingleData,
    setRenderCount,
    setIsLoading,
  } = useContext(AppContext);

  const [projectName, setProjectName] = useState<string>();
  const [projectDescription, setProjectDescription] = useState<string>();
  const [projectLink, setProjectLink] = useState<string>();
  const [file, setFile] = useState<File | null>();
  const [projectEdited, setProjectEdited] = useState<DocumentData>();
  const [imgUrl, setImgUrl] = useState<string>("");
  const [imgPath, setImgPath] = useState<string>("");

  // get project id from search params and store it at projectID
  const searchParams = new URLSearchParams(location.search);
  const projectID: string = searchParams.get("id")!;

  useEffect(() => {
    // avoid navigate here when user not login
    if (!isAuth) {
      navigate("/");
    }

    // check is it for Edit
    if (forEdit) {
      getSingleData(setProjectEdited, projectID);
    }
  }, []);

  useEffect(() => {
    setProjectName(projectEdited?.projectName);
    setProjectDescription(projectEdited?.projectDescription);
    setProjectLink(projectEdited?.projectLink);
    setImgPath(projectEdited?.imgPath);
    setImgUrl(projectEdited?.imgUrl);
  }, [projectEdited]);

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

  // replace whatever change to the referred project id
  const updateCreateProject = async (imgURL: string, imgPath: string) => {
    const postCollectionRef = doc(db, "projects", projectID);
    await setDoc(postCollectionRef, {
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

  // Update project
  const updateProject = () => {
    if (file === null && imgUrl == "") {
      alert("Please select an image");
      return;
    }

    setIsLoading(true);

    // if file exist replace old file with new file
    if (Boolean(file)) {
      const imageRef = storageRef(storage, imgPath);

      uploadBytes(imageRef, file!)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              updateCreateProject(url, imgPath);
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      updateCreateProject(imgUrl, imgPath);
    }
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
        <DragNDrop file={file!} setFile={setFile} imgUrl={imgUrl} />
        <div className="py-4 mb-2 px-2 flex flex-col w-full">
          <input
            type="text"
            placeholder="Project Name"
            className={clsx("text-center text-md font-medium", [
              "sm:text-lg",
              "md:text-xl",
            ])}
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
          />
          <textarea
            name="porto-desc"
            placeholder="Project Description"
            className="text-center text-slate-600 text-sm dark:text-slate-200 w-full h-[100px]"
            onChange={(e) => setProjectDescription(e.target.value)}
            value={projectDescription}
          />
          <input
            type="text"
            placeholder="Link to Project"
            className={clsx("text-center text-md font-medium", [
              "sm:text-lg",
              "md:text-xl",
            ])}
            onChange={(e) => setProjectLink(e.target.value)}
            value={projectLink}
          />
        </div>
        <div className="flex absolute bottom-0 right-0">
          <IconBrandTailwind className="text-blue-500" stroke={1} />
          <IconBrandReact className="text-blue-800" stroke={1} />
          <IconBrandFramer stroke={1} />
        </div>
      </div>
      <div>
        <Button
          onClick={forEdit ? updateProject : uploadProject}
          isDisabled={isLoading}
        >
          {isLoading ? (
            <div className="flex justify-center">
              <IconLoader3 className="animate-spin" />
            </div>
          ) : forEdit ? (
            "Update"
          ) : (
            "Submit"
          )}
        </Button>
        <a href="/">
          <Button>Back</Button>
        </a>
      </div>
    </div>
  );
};

export default AddPorto;
