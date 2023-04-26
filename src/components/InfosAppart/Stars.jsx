import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

function Stars({ rating }) {
const maxRating = 5; 
const stars = [];
for (let i = 1; i <= maxRating; i++) {
if (i <= rating) {
stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="active-star" />);
} else {
stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="inactive-star" />);
}
}
return <div>{stars}</div>;
}

export default Stars;