import React from "react";
import "./card01.css";
import { FaArrowRight } from "react-icons/fa";

const Card01 = () => {
  return (
    <div className="downloads--card01 px-5 py-4 space-between">
      <div className="card01__content">
        <div className="number py-3 px-4 fw-bold">1.</div>
        <div className="main--content__div">
          <div className="content__header ">
            <h1>Dashboard</h1>
            <div className="flying--btn bg-orange">Mac</div>
            <div className="flying--btn bg-purple tab-hide">Best Populer</div>
          </div>
          <div className="content__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              numquam saepe nostrum tempora officia, hic deserunt error
            </p>
          </div>
        </div>
      </div>
      <div className="card01__information space-between fw-bold">
        <div className="informatin--size space-between">
          <div className="size tob-show c-gray">Size</div>
          <span>220.4MB</span>
        </div>
        <div className="informatin--downloads space-between">
          <div className="downloads tob-show c-gray">Downloads</div>
          <span>1 000 000+</span>
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

export default Card01;
