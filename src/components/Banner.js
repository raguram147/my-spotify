import React from "react";
import Artist from "../img/artist.jpg";
import Check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
function Banner() {
  return (
    <div className="banner">
      <img src={Artist} alt="Banner" className="main-banner-img"></img>
      <div className="content">
        <div className="breadcrumb">
          <p>
            Home <span>/Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>Beast</h2>
              <img src={Check} alt="Check icon"></img>
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>
              111,234,009 <span>Monthly Listeners</span>
            </p>
          </div>
          <div className="right">
            <a href="/">Play</a>
            <a href="/">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-layer"></div>
    </div>
  );
}

export { Banner };
