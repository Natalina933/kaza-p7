import React from "react";
import "../Carousel/Carousel.scss";

function Carousel({ carouselPictures }) {
    console.log(carouselPictures);
    return (
    <div className="carousel">
        <button className="prev">prev</button>
        <img src={carouselPictures[0]} alt="" />
        <button className="next">next</button>
        </div>
    );
}

export default Carousel;
