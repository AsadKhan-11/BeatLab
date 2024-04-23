import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/SongCard/Card";
import Playing from "./Components/Playing/Playing";
import song from "./Components/SongCard/songsData";

function App() {
  const [selectedSong, setSelectedSong] = useState(song[0]);
  const [currentSong, setCurrentSong] = useState(selectedSong);

  return (
    <>
      <section className="complete-container">
        <Navbar />
        <Card
          setSelectedSong={setSelectedSong}
          setCurrentSong={setCurrentSong}
        />
        <Playing
          setSelectedSong={setSelectedSong}
          selectedSong={selectedSong}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />
      </section>
    </>
  );
}

export default App;
