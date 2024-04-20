import React, { useEffect } from "react";
import "./Card.css";
import Song from "./Song/Song";
import songs from "./songsData";

function Card() {
  return (
    <>
      <section className="card-sec">
        {songs.map((song, index) => {
          return (
            <div className="playing-card" key={index}>
              <Song name={song.name} img={song.img} audio={song.song} />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Card;
