import React from "react";
import Heart from "./Heart.jsx";

const Player = ({ name, hearts, onClick, onHeartClick, currentPlayer, index }) => {
  const isCurrentPlayer = currentPlayer === index;
  const remainingHearts = hearts.filter(heart => !heart).length;
  const isEliminated = remainingHearts === 0;

  return (
    <div 
      className={`player-item ${isCurrentPlayer ? 'current-player' : ''} ${isEliminated ? 'eliminated' : ''}`}
      onClick={onClick}
    >
      <div className="player-info">
        <div className="player-name-section">
          <span className="player-name">{name}</span>
          {isCurrentPlayer && <span className="current-indicator">Aktuell</span>}
          {isEliminated && <span className="eliminated-indicator">Raus</span>}
        </div>
        <div className="player-stats">
          <span className="hearts-remaining">{remainingHearts} ❤️</span>
        </div>
      </div>
      
      <div className="hearts-container">
        {hearts.map((crossed, heartIndex) => (
          <Heart
            key={heartIndex}
            crossed={crossed}
            onClick={(e) => {
              e.stopPropagation();
              onHeartClick(heartIndex);
            }}
          />
        ))}
      </div>
      
      <button 
        className="remove-player-btn"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        title="Spieler entfernen"
      >
        ×
      </button>
    </div>
  );
};

export default Player;