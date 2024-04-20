import React from "react";
import "./Song.css";
import "../Card";
import "../songsData";

function Song(props) {
  let current = 0;
  let currentSong = props.audio;

  var aud = document.createElement("audio");
  aud.id = "audio";
  aud.setAttribute("src", currentSong.src);

  const playSong = () => {
    aud.play();
    console.log(currentSong.src);
  };

  return (
    <>
      <div className="song-card">
        <img
          src={props.img}
          alt={`Image of ${props.name}`}
          className="song-img"
        />
        <h2 className="song-name">{props.name}</h2>

        <button className="play-btn" onClick={playSong}>
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
