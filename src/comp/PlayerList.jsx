import React, { useState } from "react";
import Player from "./Player.jsx";
import "../CSS/PlayerList.css";

const PlayerList = (props) => {
  const [playerNames, setPlayerNames] = useState([]);
  const [hearts, setHearts] = useState([]);
  const [newName, setNewName] = useState("");
  const [heartCount, setHeartCount] = useState(5);

  const nameHandler = () => {
    setPlayerNames((prevPlayerNames) => [...prevPlayerNames, newName]);
    setHearts((prevHearts) => [...prevHearts, Array(heartCount).fill(false)]);
    setNewName("");
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleHeartCountChange = (e) => {
    setHeartCount(Number(e.target.value));
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

  return (
    <>
      <div className="newNameWrapper">
        <div className="nameInput">
          <input
            value={newName}
            onChange={handleInputChange}
            placeholder="name..."
          ></input>
          <input
            type="range"
            min="1"
            max="5"
            value={heartCount}
            onChange={handleHeartCountChange}
          />
          <span>{heartCount}</span>
        </div>
        <button onClick={nameHandler}>Add New Name</button>
        <div>
          {playerNames.map((name, index) => (
            <Player
              currentPlayer={props.currentPlayer}
              index={index}
              key={index}
              name={name}
              hearts={hearts[index]}
              onClick={() => removeName(index)}
              onHeartClick={(heartIndex) => toggleHeart(index, heartIndex)}
            ></Player>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayerList;
