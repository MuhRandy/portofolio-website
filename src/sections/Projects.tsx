import Card from "../component/Projects/Card";
import "swiper/css";
import { register } from "swiper/element/bundle";
import Section from "../component/Section";
import { useContext } from "react";
import { AppContext } from "../App";
import { useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { db } from "../utils/firebase-config";
import { IconLoader3 } from "@tabler/icons-react";

register();

export default function Projects() {
  const { isAuth, isLoading, setIsLoading, renderCount } =
    useContext(AppContext);
  const [projects, setProjects] = useState<any[]>([]);

  // get projects data from firestore
  // --------

  // database ref
  const projectsCollectionRef = collection(db, "projects");

  // database query, order by timestamp and desc it
  const q = query(projectsCollectionRef, orderBy("timestamp", "desc"));

  // get the data
  const getProjects = async () => {
    setIsLoading(true);
    const data = await getDocs(q);
    setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, [renderCount]);
  // --------

  return (
    <Section id="project">
      <Section.Title className={"mb-5"}>My Project</Section.Title>
      {isAuth && <a href={"/add-portfolio"}>+ Tambah Portfolio</a>}
      {!isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <Card
              key={project.id}
              name={project.projectName}
              img={project.imgUrl}
              link={project.projectLink}
              desc={project.projectDescription}
            />
          ))}
        </div>
      ) : (
        <div className="h-[50vh] flex justify-center items-center">
          <IconLoader3 className="animate-spin" size={100} />
        </div>
      )}
    </Section>
  );
}
