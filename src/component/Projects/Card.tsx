import { IconBrandReact } from "@tabler/icons-react";
import { IconBrandFramer } from "@tabler/icons-react";
import { IconBrandTailwind } from "@tabler/icons-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../App";
import { deleteObject, ref } from "firebase/storage";
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../utils/firebase-config";
import { IconTrashFilled } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";
import { Link } from "react-router-dom";

type CardProps = {
  img: string;
  name: string;
  link: string;
  desc: string;
  projectID: string;
  projectImgPath: string;
};

const Card = ({
  img,
  name,
  link,
  desc,
  projectID,
  projectImgPath,
}: CardProps) => {
  const { renderCount, isAuth, setIsLoading, setRenderCount } =
    useContext(AppContext);

  // delete doc or article on firebase database based on doc id
  const deletePost = async (id: string, imgPath: string) => {
    setIsLoading(true);
    const imgRef = ref(storage, imgPath);
    const postDoc = doc(db, "projects", id);

    // delete image on storage
    deleteObject(imgRef).catch((err) => console.log(err));
    // delete post on firestore
    await deleteDoc(postDoc);
    setRenderCount(renderCount + 1);
    setIsLoading(false);
  };

  const deleteConfirmation = (id: string, imgPath: string) => {
    if (confirm(`Are you sure to delete ${name}`)) {
      deletePost(id, imgPath);
    }
  };

  return (
    <motion.div
      initial={{ left: "-100px" }}
      whileInView={{ left: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="shadow-sm border rounded-lg overflow-hidden relative h-full"
    >
      {isAuth && (
        <div className="absolute right-0 top-0 flex backdrop:blur-md bg-white">
          <IconTrashFilled
            className="text-red-600 cursor-pointer"
            onClick={() => deleteConfirmation(projectID, projectImgPath)}
          />
          <Link to={`edit-project?id=${projectID}`}>
            <IconEdit className="cursor-pointer" />
          </Link>
        </div>
      )}
      <a href={`${link}`}>
        <div className="mx-2 mt-2 rounded-md overflow-hidden">
          <img src={img} alt={name} className="shadow-black shadow-sm" />
        </div>
        <div className="py-4 mb-2 px-2">
          <h1
            className={clsx("text-center text-md font-medium", [
              "sm:text-lg",
              "md:text-xl",
            ])}
          >
            {name}
          </h1>
          <p className="text-center text-slate-600 text-sm dark:text-slate-200">
            {desc}
          </p>
        </div>
        <div className="flex absolute bottom-0 right-0">
          <IconBrandTailwind className="text-blue-500" stroke={1} />
          <IconBrandReact className="text-blue-800" stroke={1} />
          <IconBrandFramer stroke={1} />
        </div>
      </a>
    </motion.div>
  );
};

export default Card;
