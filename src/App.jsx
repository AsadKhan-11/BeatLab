import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/SongCard/Card";
import Playing from "./Components/Playing/Playing";

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <>
      <section className="complete-container">
        <Navbar />
        <Card setSelectedSong={setSelectedSong} />
        <Playing selectedSong={selectedSong} />
      </section>
    </>
  );
}

export default App;
