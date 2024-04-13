import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/SongCard/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="complete-container">
        <Navbar />
        <Card />
      </section>
    </>
  );
}

export default App;
