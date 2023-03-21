import React from "react";

function Banner(props) {
    const { imageSrc, title } = props;
    return (
    <div className="banner">
        <img src={imageSrc} alt="Paysage" />
        <h1>{title}</h1>
    </div>
    );
}

export default Banner;
