import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import "../styles/MainContainer.css";
import { AudioList } from "./AudioList";
import { Banner } from "./Banner";
import { Songs } from "./Songs";
function MainContainer() {
  useEffect(() => {
    const allLi = document
      .querySelector(".main-menu-container .menu-list ul")
      .querySelectorAll("li");
    function changeActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);
  return (
    <div className="main-menu-container">
      <Banner />
      <div className="menu-list">
        <ul>
          <li>
            <a href="/">Popular</a>
          </li>
          <li>
            <a href="/">Albums</a>
          </li>
          <li>
            <a href="/">Songs</a>
          </li>
          <li>
            <a href="/">Fans</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
        <p>
          <i>
            <FaUsers />
          </i>
          11.3M<span>Followers</span>
        </p>
      </div>
      <AudioList songsObj={Songs} />
    </div>
  );
}

export { MainContainer };
