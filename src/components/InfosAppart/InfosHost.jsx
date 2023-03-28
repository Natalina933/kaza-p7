import React from "react";

function InfosHost({ appart }) {
  console.log(appart);
  return (
    <>
      <div className="lodging__wrapperHost">
        <div className="lodging__host">
          <div className="lodging__stars"></div>
          <div></div>
        </div>
        <h2>{appart.host.name}</h2>
        <div className="lodging__hostImg">
          <img src={appart.host.picture} alt={"Photo de " + appart.title} />
        </div>
      </div>
    </>
  );
}

export default InfosHost;
