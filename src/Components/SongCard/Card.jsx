import React, { useEffect } from "react";
import "./Card.css";
import Song from "./Song/Song";
import songs from "./songsData";

function Card() {
  return (
    <>
      <section className="card-sec">
        {songs.map((song, index) => {
          console.log(songs);
          return (
            <div key={index}>
              <Song name={song.name} img={song.img} audio={song.song} />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Card;
