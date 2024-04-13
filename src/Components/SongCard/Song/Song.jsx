import React from "react";
import "./Song.css";
function Song(props) {
  return (
    <>
      <div className="song-card">
        <img
          src={props.img}
          alt={`Image of ${props.name}`}
          className="song-img"
        />
        <h2 className="song-name">{props.name}</h2>
      </div>
    </>
  );
}

export default Song;
