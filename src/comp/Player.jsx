import React from "react";
import Heart from "./Heart.jsx";

const Player = ({ name, hearts, onClick, onHeartClick, currentPlayer, index }) => (
  <>
    <div onClick={onClick} style={{ display: "flex", alignItems: "center" }}>
      <p className="player" style={{ marginRight: "10px", cursor: "pointer", color: currentPlayer === index ? 'lightgreen' : "", fontWeight: currentPlayer === index ? '900' : "", fontSize: currentPlayer === index ? '1.5rem' : ""}}>{name}</p>
      {hearts.map((crossed, index) => (
        <Heart
          key={index}
          crossed={crossed}
          onClick={(e) => {
            e.stopPropagation(); // Prevent click event from propagating to the parent element
            onHeartClick(index);
          }}
        />
      ))}
    </div>
  </>
);

export default Player;
