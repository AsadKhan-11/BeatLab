import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Song from "./Components/SongCard/Song";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="complete-container">
        <Navbar />
        <Song />
      </section>
    </>
  );
}

export default App;
