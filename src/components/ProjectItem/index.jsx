import list from "daisyui/components/list";
import React from "react";

const ProjectItem = ({ details }) => {
  const { title, description, link, github, img } = details;

  return (
    <li className="card bg-base-100 w-[220px] h-[350px] shadow-sm">
      <figure>
        <img src={img} alt="project thumbnail" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions flex items-center justify-start gap-4">
          <a href={github} target="_blank">
            <button className="btn btn-primary">GitHub</button>
          </a>
          {link !== "" && (
            <a href={link} target="_blank">
              <button className="btn btn-primary">Demo</button>
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
