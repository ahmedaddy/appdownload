import React from "react";
import "./card02.css";
import { FaArrowRight } from "react-icons/fa";

const Card02 = () => {
  return (
    <div className="downloads--card02 px-5 py-4 space-between">
      <div className="card02__content">
        <div className="number py-3 px-4 fw-bold tab-hide">2.</div>
        <div className="main--content__div">
          <div className="content__header ">
            <h1>Management Panel</h1>
            <div className="flying--btn bg-orange">Windows</div>
          </div>
        </div>
      </div>
      <div className="card02__information space-between fw-bold">
        <div className="informatin--size space-between">
          <div className="size tob-show c-gray">Size</div>
          <span>2.24TB</span>
        </div>
        <div className="informatin--downloads space-between">
          <div className="downloads tob-show c-gray">Downloads</div>
          <span>500 000+</span>
        </div>
        <div className="informatin--download__btn">
          <a href="#btn" className="px-4 py-2">
            Download
            <i>
              <FaArrowRight />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card02;
