import { useState } from "react";
import { useTheme } from "../../context/theme-context";
import ProjectItem from "../ProjectItem";

import { projectsData } from "./projects";

const ProjectsPage = () => {
  const { theme, themes } = useTheme();
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectsData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const visibleProjects = projectsData.slice(startIdx, startIdx + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={`w-full p-20`}>
      <div className="flex justify-between w-full mb-6">
        <h2
          className={`text-2xl  ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        >
          <span className={` text-5xl font-semibold `}>P</span>
          rojects
        </h2>
        <hr
          className={` w-5/6 self-end ${
            theme === themes.light ? "text-black" : "text-white"
          }`}
        />
      </div>
      <ul className="flex flex-wrap gap-6 items-center justify-center">
        {visibleProjects.map((project) => (
          <ProjectItem key={project.id} details={project} />
        ))}
      </ul>
      <div className="flex justify-center items-center mt-10 ">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`btn h-8 w-40  ${
            theme === themes.light
              ? "text-black border-black bg-white hover:bg-black hover:text-white disabled:bg-sky-800"
              : "text-white border-white bg-neutral-900 hover:bg-white hover:text-black disabled:bg-neutral-800"
          }`}
        >
          Previous page
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`btn h-8 w-40  ${
            theme === themes.light
              ? "text-black border-black bg-white hover:bg-black hover:text-white disabled:bg-neutral-800"
              : "text-white border-white bg-neutral-900 hover:bg-white hover:text-black disabled:bg-neutral-800"
          }`}
        >
          Next
        </button>
      </div>
      <hr
        className={` w-1/3 mx-auto mt-8 ${
          theme === themes.light ? "text-black" : "text-white"
        }`}
      />
    </div>
  );
};

export default ProjectsPage;
