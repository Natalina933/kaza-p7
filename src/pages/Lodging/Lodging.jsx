import React from "react";
// import ImageC from "../../assets/bgHome2.jpg";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
</style>

function lodging({ apparts }) {
  console.log(apparts);
  return (
    <div className="wapperLodging">
      <div className="logoFooter">
        {/* <img className="imageC" src={ImageC} alt="image" /> */}
      </div>
      <h1>Paris center,</h1>
      <h2>Paris, ile de france</h2>
      <ul className="lodging__tag" >
        <li ><h3>Cosi</h3></li>
        <li ><h3>Canal</h3></li>
        <li ><h3>Paris 10</h3></li>
      </ul>

      <div className="host__lodging">
        <h3>Alex Dumas</h3>
        <div className="host__image"></div>
        <div className="host__wapper__stars">
          <div className="stars__host"></div>
          <div className="stars__host"></div>
          <div className="stars__host"></div>
          <div className="stars__host"></div>
          <div className="stars__host"></div>
        </div>
      </div>
      <div className="lodging__description">
        <p>description</p>
        <p>lorem50</p>
      </div>
    </div>
  );
}

export default lodging;
