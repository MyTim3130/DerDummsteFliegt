import React from "react";

const Heart = ({ crossed, onClick }) => (
  <button
    className={`heart ${crossed ? 'heart-crossed' : 'heart-active'}`}
    onClick={onClick}
    title={crossed ? "Herz wiederherstellen" : "Herz entfernen"}
  >
    <span className="heart-icon">❤️</span>
    {crossed && <span className="heart-cross">✕</span>}
  </button>
);

export default Heart;