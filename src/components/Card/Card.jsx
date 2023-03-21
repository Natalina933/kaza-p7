import React from "react";

function Card({ appartTitle, appartPicture }) {
  return (
    <div className="card">
      <img src={appartPicture} alt={appartPicture} />
      <h3>{appartTitle}</h3>
    </div>
  );
}

export default Card;
