import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="download--header space-between py-3">
      <div className="header__right ">
        Get Started With
        <a href="#download" className="mx-1 fw-bold">
          Download
        </a>
        <span className="px-2 py-1 ml-3">+2</span>
      </div>
      <div className="header__left space-between mobile-hide">
        <span className="left__size tab-hide ">Size</span>
        <span className="left__downloads tab-hide ">Downloads</span>
        <span className="left__sorted tab-hide ">
          Sorted By{" "}
          <a className="mx-1 fw-bold " href="#populer">
            Populer
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
