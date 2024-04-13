import React, { useEffect } from "react";
import "./Card.css";
import Song from "./Song/Song";

function Card() {
  var ys = new Audio("./Songs/ys.mp3");
  var red = new Audio("./Songs/Babbu.mp3");
  var friends = new Audio("./Songs/FRIENDS.mp3");

  const songs = [
    { song: ys, name: "Therapy time", img: "./Song/Pictures/ys.jpg" },
    { song: red, name: "Red Challenger", img: "./Song/Pictures/red.jpg" },
    { song: friends, name: "FRIENDS", img: "./Song/Pictures/marsh.jpg" },
  ];
  console.log(songs);
  return (
    <>
      <section className="card-sec">
        {songs.map((song, index) => {
          return (
            <div key={index}>
              <Song name={song.name} img={song.img} />;
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Card;
