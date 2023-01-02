import Project from "./Project";
import { Projects } from "../Data/ProjectsData";
const ProjectSection = ({pages}) => {
  return Projects.map((project) => {
    return (
      <Project
        tag={project.tag}
        cate={project.cate}
        img={project.img}
        key={project.id}
        nam={project.nam}
        pages={pages}
      />
    );
  });
};
export default ProjectSection;
