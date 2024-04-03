import React, { useEffect } from "react";
import "./Song.css";
import axios from "axios";
import image from "/vite.svg";
function Song() {
  return (
    <>
      <section className="card-sec">
        <img src={image} alt="" className="card-img" />
      </section>
    </>
  );
}

export default Song;
