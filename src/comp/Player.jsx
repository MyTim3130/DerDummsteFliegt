import React from "react";
import Heart from "./Heart.jsx";

const Player = ({ name, hearts, onClick, onHeartClick }) => (
  <>
    <div onClick={onClick} style={{ display: "flex", alignItems: "center" }}>
      <p style={{ marginRight: "10px" }}>{name}</p>
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
