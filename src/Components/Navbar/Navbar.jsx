import React from "react";
import "./Navbar.css";
import Song from "../SongCard/Song";
function Navbar() {
  return (
    <>
      <section className="navbar-sec">
        <h2 className="nav-icon">BeatLab</h2>
        <Song />
      </section>
    </>
  );
}

export default Navbar;
