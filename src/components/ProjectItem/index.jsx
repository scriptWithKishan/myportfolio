import list from "daisyui/components/list";
import React from "react";

const ProjectItem = ({ details }) => {
  const { title, description, link, github, img } = details;

  return (
    <li className="w-[180px] card bg-base-100 lg:w-[220px] h-[350px] shadow-sm">
      <figure>
        <img src={img} alt="project thumbnail" />
      </figure>
      <div className="card-body">
        <h2 className="text-sm font-semibold lg:card-title">{title}</h2>
        <p className="text-xs lg:text-sm">{description}</p>
        <div className="gap-2 card-actions flex items-center justify-start lg:gap-4">
          <a href={github} target="_blank">
            <button className="btn-xs lg:btn btn btn-primary">GitHub</button>
          </a>
          {link !== "" && (
            <a href={link} target="_blank">
              <button className="btn-xs lg:btn btn btn-primary">Demo</button>
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
