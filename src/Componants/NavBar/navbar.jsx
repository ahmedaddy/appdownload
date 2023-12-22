import React from "react";
import "./navbar.css";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { BsXCircle } from "react-icons/bs";

const Navbar = () => {
  // function openNavbar() {
  //   let navbar = document.querySelector(".navbar nav ul "),
  //     button = document.querySelector(".navbar nav .icon");
  //   button.addEventListener("click", () => {
  //     navbar.style.display = "block";
  //   });
  // }
  function openNavbar() {
    document.querySelector(".navbar nav ul ").style.opacity = "1";
    document.querySelector(".navbar--closer__button").style.opacity = "1";
  }
  function closeNavbar() {
    document.querySelector(".navbar nav ul ").style.opacity = "0";
    document.querySelector(".navbar--closer__button").style.opacity = "0";
  }

  return (
    <div className=" navbar">
      <div className="logo ">
        <i>
          <VscActivateBreakpoints />
        </i>
        Solution
      </div>
      <nav className="space-between">
        <ul className="flex-align m-0">
          <li>
            <i className="navbar--closer__button">
              <BsXCircle onClick={closeNavbar} />
            </i>
            <a href="#aaa" className="px-3">
              About Technology
            </a>
          </li>
          <li>
            <a href="#aaa" className="px-3">
              Pricing
            </a>
          </li>
          <li>
            <a href="#aaa" className="px-3">
              Contact
            </a>
          </li>
          <li className="px-3 py-2">
            <a href="#aaa" className="download--files px-3 py-2">
              Download Files
              <span>2</span>
            </a>
          </li>
        </ul>
        <div className="icon" onClick={openNavbar}>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
