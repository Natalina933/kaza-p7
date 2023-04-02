import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

function Stars({ rating }) {
const maxRating = 5; // Limite de 5 étoiles
const stars = [];
for (let i = 1; i <= maxRating; i++) {
if (i <= rating) {
stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="star" />);
} else {
stars.push(<FontAwesomeIcon key={i} icon={regularStar} className="star" />);
}
}
return <div>{stars}</div>;
}

export default Stars;