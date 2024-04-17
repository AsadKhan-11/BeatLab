import React, { useRef, useState } from "react";
import "./Playing.css";
import songs from "../SongCard/songsData";

function Playing() {
  const [current, setCurrent] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[current]);
  const [isPlaying, setisPlaying] = useState(false);
  const audRef = useRef(currentSong.song);

  const play = (e) => {
    e.preventDefault();
    if (isPlaying) {
      audRef.current.pause();
    } else {
      audRef.current.play();
    }
    setisPlaying((prev) => !prev);
    console.log(isPlaying);
  };

  const next = (e) => {
    e.preventDefault();
    const nextSong = (current + 1) % songs.length;
    setCurrent(nextSong);
    setCurrentSong(songs[current]);
    setisPlaying(true);
    audRef.current.src = currentSong.song;
    console.log(audRef.current);
  };

  return (
    <>
      <section className="playing-sec">
        <div className="playing-box">
          <img
            src={currentSong.img}
            alt="Now Playing image"
            className="playing-img"
          />

          <h2 className="playing-title">{currentSong.name}</h2>
        </div>
        <div className="control-btns">
          <button className="prev-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
              />
            </svg>
          </button>
          <button className="play-btn" onClick={play}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </button>
          <button className="next-btn" onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
              />
            </svg>
          </button>
        </div>
        <audio ref={audRef} src={currentSong.song} controls />
      </section>
    </>
  );
}

export default Playing;