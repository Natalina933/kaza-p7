import React from "react";
import { Link } from "react-router-dom";

function Card({ appartTitle, appartPicture, lodgingId }) {
  return (
    <Link className="card" to={'../lodging/'+ lodgingId}>
      <div className="cards-wrapper">
        <div className="background-dark">
        <img src={appartPicture} alt={appartPicture} />
          <h3>{appartTitle}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
