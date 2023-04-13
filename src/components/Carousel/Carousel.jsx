import React, { useState } from "react";
import leftarrow from "../../assets/leftarrow.svg";
import rightarrow from "../../assets/rightarrow.svg";

function Carousel({ appartPictures }) {
  const [indexImage, setIndexImage] = useState(0);
  function backImage() {
    setIndexImage(
      (indexImage + appartPictures.length - 1) % appartPictures.length
    );
  }
  function nextImage() {
    setIndexImage((indexImage + 1) % appartPictures.length);
  }

  const bulletPoints = appartPictures.map((_,index)=>(
    <span
    key={index}
    className={index=== indexImage ? "active": ""}
    onClick={()=>setIndexImage(index)}/>
  ));
  return (
    <div className="carousel">
      <img className="leftarrow" src={leftarrow} alt="/" onClick={backImage} />
      <img src={appartPictures[indexImage]} alt="" />
      <img
        className="rightarrow"
        src={rightarrow}
        alt="/"
        onClick={nextImage}
      />
      <div className="bulletPoints">{bulletPoints }</div>
      <p>{indexImage+1}/{appartPictures.length}</p>

    </div>
  );
}

export default Carousel;
