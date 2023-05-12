import { useState } from "react";
import "./App.css";
import Frage from "./comp/Frage.jsx";
import PlayerList from "./comp/PlayerList.jsx";
import "./CSS/Styles.css";

function App() {
  return (
    <>
      <div className="wholeWrapper">
        <PlayerList></PlayerList>

        <Frage></Frage>
      </div>
    </>
  );
}

export default App;
