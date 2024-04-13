import React, { useEffect } from "react";
import "./Card.css";
import Song from "./Song/Song";
import image1 from "./Song/Pictures/ys.jpg";
import image2 from "./Song/Pictures/red.jpg";
import image3 from "./Song/Pictures/marsh.jpg";

function Card() {
  var ys = new Audio("./Songs/ys.mp3");
  var red = new Audio("./Songs/Babbu.mp3");
  var friends = new Audio("./Songs/FRIENDS.mp3");

  const songs = [
    { song: ys, name: "Therapy time", img: image1 },
    { song: red, name: "Red Challenger", img: image2 },
    { song: friends, name: "FRIENDS", img: image3 },
  ];
  return (
    <>
      <section className="card-sec">
        {songs.map((song, index) => {
          console.log(songs);
          return (
            <div key={index}>
              <Song name={song.name} img={song.img} />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Card;
