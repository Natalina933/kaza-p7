import React from "react";

function Banner(props) {
    const { imageSrc, title } = props;
    return (
    <div className="banner">
        <img src={imageSrc} alt="Paysage" />
        <div className="overlay">
            <h1>{title}</h1>
        </div>
    </div>
    );
}

export default Banner;
