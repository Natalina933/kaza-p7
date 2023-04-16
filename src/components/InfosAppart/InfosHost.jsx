import React from "react";
import Stars from "./Stars";

function InfosHost({ appart }) {
    console.log(appart);
    return (
    <>
            <div className="lodging__host">
                <div className="lodging__stars">
                <Stars rating={appart.rating} />
                </div>
            </div>
            <div className="lodging__hostInfos">
                <h2>{appart.host.name}</h2>
                <div className="lodging__hostImg">
                <img src={appart.host.picture} alt={"Photo de " + appart.title} />
                </div>
            </div>
    </>
    );
}

export default InfosHost;
