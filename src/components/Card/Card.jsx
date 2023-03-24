import React from "react";
import { Link } from "react-router-dom";

function Card({ appartTitle, appartPicture, lodgingId }) {
  return (
    <Link className="card" to={'../lodging/'+ lodgingId}>
      <img src={appartPicture} alt={appartPicture} />
      <h3>{appartTitle}</h3>
    </Link>
  );
}

export default Card;
