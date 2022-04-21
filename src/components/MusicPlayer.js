// import React, { useState, useRef, useEffect } from "react";
// import "../styles/MusicPlayer.css";
// import {
//   FaBackward,
//   FaForward,
//   FaHeart,
//   FaPause,
//   FaPlay,
//   FaRegHeart,
//   FaShareAlt,
//   FaStepBackward,
//   FaStepForward,
// } from "react-icons/fa";
// import { BsDownload } from "react-icons/bs";
// function MusicPlayer({ song, imgSrc, autoplay }) {
//   const [isLove, setLove] = useState(false);
//   const [isPlay, setPlay] = useState(false);
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrenttime] = useState(0);
//   const audioPlayer = useRef();
//   const progressBar = useRef();
//   const animationRef = useRef(); //  reference to our animation

//   useEffect(() => {
//     const seconds = Math.floor(audioPlayer.current.duration);
//     setDuration(seconds);

//     // set max prop with out seconds in input[range]
//     progressBar.current.max = seconds;
//   }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);
//   const changeProgress = () => {
//     audioPlayer.current.currentTime = progressBar.current.value;

//     changeCurrentTime();
//   };
//   const changeLove = () => {
//     setLove(!isLove);
//   };
//   const playPause = () => {
//     const preValue = isPlay;
//     if (!preValue) {
//       audioPlayer.current.play();
//       animationRef.current = requestAnimationFrame(whilePlaying);
//     } else {
//       audioPlayer.current.pause();
//       cancelAnimationFrame(animationRef.current);
//     }
//     setPlay(!preValue);
//   };
//   const whilePlaying = () => {
//     progressBar.current.value = audioPlayer.current.currentTime;
//     changeCurrentTime();
//     // need to run more than once
//     animationRef.current = requestAnimationFrame(whilePlaying);
//   };

//   const calculateTime = (sec) => {
//     const minutes = Math.floor(sec / 60);
//     const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
//     const seconds = Math.floor(sec % 60);
//     const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
//     return `${returnMin} : ${returnSec}`;
//   };
//   const changeCurrentTime = () => {
//     progressBar.current.style.setProperty(
//       "--played-width",
//       `${(progressBar.current.value / duration) * 100}%`
//     );

//     setCurrenttime(progressBar.current.value);
//   };
//   return (
//     <div className="music-player">
//       <div className="song-img">
//         <img src={imgSrc} alt="Track"></img>
//       </div>
//       <div className="song-attribute">
//         <audio src={song} preload="metadata" ref={audioPlayer} />
//         <div className="top">
//           <div className="left">
//             <div className="loved" onClick={changeLove}>
//               {isLove ? (
//                 <i>
//                   <FaHeart />
//                 </i>
//               ) : (
//                 <i>
//                   <FaRegHeart />
//                 </i>
//               )}
//             </div>
//             <div className="download">
//               <i>
//                 <BsDownload />
//               </i>
//             </div>
//           </div>
//           <div className="middle">
//             <div className="b-ward">
//               <i>
//                 <FaStepBackward />
//               </i>
//               <i>
//                 <FaBackward />
//               </i>
//             </div>
//             <div className="play-pause" onClick={playPause}>
//               {isPlay ? (
//                 <i>
//                   <FaPause />
//                 </i>
//               ) : (
//                 <i>
//                   <FaPlay />
//                 </i>
//               )}
//             </div>
//             <div className="f-ward">
//               <i>
//                 <FaForward />
//               </i>
//               <i>
//                 <FaStepForward />
//               </i>
//             </div>
//           </div>
//           <div className="right">
//             <i>
//               <FaShareAlt />
//             </i>
//           </div>
//         </div>
//         <div className="bottom">
//           <div className="currentTime">{calculateTime(currentTime)}</div>
//           <input
//             type="range"
//             className="progressBar"
//             ref={progressBar}
//             defaultValue="0"
//             onChange={changeProgress}
//             autoPlay={autoplay}
//           />
//           <div className="duration">
//             {duration && !isNaN(duration) && calculateTime(duration)
//               ? duration && !isNaN(duration) && calculateTime(duration)
//               : "00:00"}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export { MusicPlayer };
import React, { useState, useRef, useEffect } from "react";
import "../styles/MusicPlayer.css";
import {
  FaRegHeart,
  FaHeart,
  FaForward,
  FaStepForward,
  FaStepBackward,
  FaBackward,
  FaPlay,
  FaPause,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function MusicPlayer({ song, imgSrc, auto }) {
  const [isLove, setLove] = useState(false);
  const [isPlaying, setPlay] = useState(false);
  //   duration state
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef(); //  reference to our animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    // need to run more than once
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    // progressBar.current.style.setProperty(
    //   "--played-width",
    //   `${(progressBar.current.value / duration) * 100}%`
    // );

    // setCurrenttime(progressBar.current.value);

    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

  const changeSongLove = () => {
    setLove(!isLove);
  };

  return (
    <div className="music-player">
      <div className="song-img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="song-attribute">
        <audio src={song} preload="metadata" ref={audioPlayer} />

        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeSongLove}>
              {isLove ? (
                <i>
                  <FaRegHeart />
                </i>
              ) : (
                <i>
                  <FaHeart />
                </i>
              )}
            </div>
            <i className="download">
              <BsDownload />
            </i>
          </div>

          <div className="middle">
            <div className="b-ward">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="play-pause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="f-ward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>

          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>

        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            defaultValue="0"
            onChange={changeProgress}
            autoPlay={auto}
          />
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? duration && !isNaN(duration) && calculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
