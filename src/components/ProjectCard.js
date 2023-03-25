import "./ProjectCardStyle.css";
import pro1 from "../assests/project-1.png";
import pro2 from "../assests/project-2.jpg";
import pro3 from "../assests/project-3.jpg";

import React from "react";

import { NavLink } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="image" />
          <h2 className="project-title">Score keeper</h2>
          <div className="pro-details">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              non eleifend metus. Maecenas suscipit lorem lorem. Sed convallis
              pellentesque risus at rhoncus. Maecenas non iaculis velit. Nulla
              facilisi. Donec massa enim, commodo id luctus id, vehicula non
              purus.
            </p>
            <div className="pro-btns">
              <NavLink to="url" className="btn">
                View
              </NavLink>
              <NavLink to="url" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro2} alt="image" />
          <h2 className="project-title">Lorem Ipsum</h2>
          <div className="pro-details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              non eleifend metus. Maecenas suscipit lorem lorem. Sed convallis
              pellentesque risus at rhoncus. Maecenas non iaculis velit. Nulla
              facilisi. Donec massa enim, commodo id luctus id, vehicula non
              purus.
            </p>
            <div className="pro-btns">
              <NavLink to="url" className="btn">
                View
              </NavLink>
              <NavLink to="url" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro3} alt="image" />
          <h2 className="project-title">Lorem Ipsum</h2>
          <div className="pro-details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              non eleifend metus. Maecenas suscipit lorem lorem. Sed convallis
              pellentesque risus at rhoncus. Maecenas non iaculis velit. Nulla
              facilisi. Donec massa enim, commodo id luctus id, vehicula non
              purus.
            </p>
            <div className="pro-btns">
              <NavLink to="url" className="btn">
                View
              </NavLink>
              <NavLink to="url" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
