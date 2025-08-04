import React, { useState } from "react";
import Player from "./Player.jsx";
import "../CSS/PlayerList.css";

const PlayerList = (props) => {
  const [playerNames, setPlayerNames] = useState([]);
  const [hearts, setHearts] = useState([]);
  const [newName, setNewName] = useState("");
  const [heartCount, setHeartCount] = useState(3);

  const nameHandler = () => {
    if (newName.trim() === "") return;
    
    setPlayerNames((prevPlayerNames) => [...prevPlayerNames, newName.trim()]);
    setHearts((prevHearts) => [...prevHearts, Array(heartCount).fill(false)]);
    setNewName("");
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleHeartCountChange = (e) => {
    setHeartCount(Number(e.target.value));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      nameHandler();
    }
  };

  const removeName = (index) => {
    setPlayerNames((prevPlayerNames) =>
      prevPlayerNames.filter((_, i) => i !== index)
    );
    setHearts((prevHearts) => prevHearts.filter((_, i) => i !== index));
  };

  const toggleHeart = (playerIndex, heartIndex) => {
    setHearts((prevHearts) =>
      prevHearts.map((playerHearts, index) =>
        index === playerIndex
          ? playerHearts.map((crossed, i) =>
              i === heartIndex ? !crossed : crossed
            )
          : playerHearts
      )
    );
  };

  const activePlayers = playerNames.filter((_, index) => 
    hearts[index] && hearts[index].some(heart => !heart)
  );

  return (
    <div className="newNameWrapper">
      <div className="player-section">
        <h3 className="section-title">Spieler hinzufügen</h3>
        
        <div className="nameInput">
          <div className="input-group">
            <input
              type="text"
              value={newName}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Spielername eingeben..."
              maxLength={20}
            />
          </div>
          
          <div className="heart-counter">
            <label htmlFor="heart-range">Leben:</label>
            <input
              id="heart-range"
              type="range"
              min="1"
              max="5"
              value={heartCount}
              onChange={handleHeartCountChange}
            />
            <div className="heart-counter-display">
              {heartCount}
            </div>
          </div>
          
          <button 
            className="add-player-btn"
            onClick={nameHandler}
            disabled={newName.trim() === ""}
          >
            Spieler hinzufügen
          </button>
        </div>
      </div>

      <div className="player-section">
        <h3 className="section-title">
          Spieler ({activePlayers.length}/{playerNames.length})
        </h3>
        
        <div className="players-list">
          {playerNames.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">🎮</div>
              <p>Noch keine Spieler hinzugefügt</p>
            </div>
          ) : (
            playerNames.map((name, index) => (
              <Player
                key={`${name}-${index}`}
                currentPlayer={props.currentPlayer}
                index={index}
                name={name}
                hearts={hearts[index]}
                onClick={() => removeName(index)}
                onHeartClick={(heartIndex) => toggleHeart(index, heartIndex)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerList;