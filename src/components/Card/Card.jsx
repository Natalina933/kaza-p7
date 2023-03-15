import React from "react";

function Card({ appartTitle, appartPicture }) {
    return (
    <div>
        <img src={appartPicture} alt={appartPicture} />
        <h3>{appartTitle}</h3>
        </div>
    );
}

export default Card;
