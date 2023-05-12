import React from "react";

const Heart = ({ crossed, onClick }) => (
  <span
    onClick={onClick}
    style={{
      display: crossed ? "none" : "block",
      marginRight: "5px",
      cursor: "pointer"
    }}
  >
    ❤️
  </span>
);

export default Heart;
