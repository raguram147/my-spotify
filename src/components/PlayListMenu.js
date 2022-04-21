import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
function PlayListMenu({ title, playListObj }) {
  return (
    <div className="playlist-menu-container">
      <div className="name-container">
        <p>{title}</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className="playlist-container">
        {playListObj &&
          playListObj.map((x) => (
            <div className="play-list" key={x.id}>
              <i className="list-icon">
                <BsMusicNoteList></BsMusicNoteList>
              </i>
              <p>{x.name}</p>
              <i className="trash-icon">
                <BsTrash />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
}

export { PlayListMenu };
