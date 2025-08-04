import { useState } from "react";
import "./App.css";
import Frage from "./comp/Frage.jsx";
import PlayerList from "./comp/PlayerList.jsx";
import "./CSS/Styles.css";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(0);

  return (
    <div className="app-container">
      <div className="game-title">
        <h1>Der dümmste fliegt</h1>
        <p className="game-subtitle">Das ultimative Quizspiel</p>
      </div>
      
      <div className="wholeWrapper">
        <PlayerList currentPlayer={currentPlayer} />
        <Frage
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
        />
      </div>
    </div>
  );
}

export default App;