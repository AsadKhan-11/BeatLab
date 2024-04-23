import React from "react";
import "./Song.css";
import song from "../songsData";

function Song({ name, img, audio, setSelectedSong }) {
  const handleClick = () => {
    setSelectedSong({ name, img, audio });
  };

  return (
    <>
      <div className="song-card">
        <img src={img} alt={`Image of ${name}`} className="song-img" />
        <h2 className="song-name">{name}</h2>

        <button className="play-btn" onClick={handleClick}>
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
      </div>
    </>
  );
}

export default Song;
