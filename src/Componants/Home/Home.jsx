import React from "react";
import "./home.css";

import { AiOutlinePlayCircle } from "react-icons/ai";
import { FaArrowCircleUp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home--section">
      <div className="home--container">
        <div className="home--buisness ">
          <span className="header--shadow">Stram Application</span>
          <div className="buisness__content">
            <h2>Buisness Conference</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              facilis suscipit reprehenderit aut porro, natus magnam vitae
              nesciunt ad, quia repudiandae delectus ducimus inventore pariatur{" "}
            </p>
          </div>
        </div>
        <div className="home--tutorial">
          <span className="header--shadow">Tuturial Introduce</span>
          <i>
            <AiOutlinePlayCircle />
          </i>
          <div className="tutorial__title">Solution and guid for meeting</div>
        </div>
        <div className="home--streaming">
          <span className="header--shadow">Meeting System</span>
          <div className="streamig__content">
            <div className="streaming__title">Streaming Experience</div>
            <p>
              Configuration and management of the video{" "}
              <a href="#straming">Straming Panel</a>
            </p>
          </div>
        </div>
        <div className="home--register-users">
          <div className="head desktop-hide">
            10M<span>+</span>
            <i>
              <FaArrowCircleUp />
            </i>
          </div>
          <p>
            Active and
            <a href="#register">register users</a>
            in the system and platform community
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
