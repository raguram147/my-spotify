import React from "react";
import "../styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { PlayListMenu } from "./PlayListMenu";
import { PlayList } from "./PlayList";
import { TrackList } from "./TrackList";
function LeftMenu() {
  return (
    <div className="left-menu">
      <div className="logo-container">
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className="serach-box">
        <input type="text" placeholder="Search.."></input>
        <i>
          <BiSearchAlt />
        </i>
      </div>
      <Menu title={"Menu"} menuObj={MenuList}></Menu>
      <PlayListMenu title={"PlayList"} playListObj={PlayList} />
      <TrackList />
    </div>
  );
}

export { LeftMenu };
