import React, { useEffect } from "react";
import "./Song.css";
import axios from "axios";
function Song() {
  useEffect(() => {
    const fetchSongs = async () => {
      const url = import.meta.env.REACT_APP_URL;
      const options = import.meta.env.REACT_APP_OPTIONS.split(",");

      const response = await axios.get(`${url}/`);
      console.log(options);
    };
    fetchSongs();
  }, []);

  return (
    <>
      <section className="card-sec"></section>
    </>
  );
}

export default Song;
