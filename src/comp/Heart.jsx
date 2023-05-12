import React from "react";

const Heart = ({ crossed, onClick }) => (
  <span
    onClick={onClick}
    style={{
      textDecoration: crossed ? "line-through" : "none",
      marginRight: "5px",
    }}
  >
    ❤️
  </span>
);

export default Heart;
