import React, { useState, useEffect } from "react";
import { MusicPlayer } from "./MusicPlayer";
import { FaHeadphones, FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";
function AudioList({ songsObj }) {
  const [songs, setSongs] = useState(songsObj);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].image);
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    const allSongs = document.querySelectorAll(".songs");
    function changeActive() {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allSongs.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  const changeFavourite = (id) => {
    songsObj.forEach((song) => {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });

    setSongs([...songs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
    setAuto(true);
  };
  return (
    <div className="audio-list">
      <h2 className="title">
        The list <span>{`${songsObj.length}`} songs</span>
      </h2>

      <div className="songs-container">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.song, song?.image)}
            >
              <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>
              <div className="song">
                <div className="img-box">
                  <img src={song?.image} alt="" />
                </div>
                <div className="section">
                  <p className="song-name">
                    {song?.songName}
                    <span className="song-span">{song?.artist}</span>
                  </p>

                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      95,490,102
                    </p>

                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      03:04
                    </p>
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <MusicPlayer song={song} imgSrc={img} autoplay={auto} />
    </div>
  );
}

export { AudioList };
