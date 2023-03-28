import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Collapse from "../../components/Collapse/Collapse";
import InfosAppart from "../../components/InfosAppart/InfosAppart";
import InfosHost from "../../components/InfosAppart/InfosHost";
function Lodging({ apparts }) {
  const { lodgingId } = useParams();
  const appart = apparts.find((appart) => appart.id === lodgingId);
  console.log(appart);
  return (
    <>
      <div className="lodging__page">
        <div className="lodging__carousel">
          <Carousel appartPictures={appart.pictures} />
        </div>
        <InfosAppart appart={appart} />
        <div className="lodging__wrapper">
          <InfosHost appart={appart} />
          <Collapse appart={appart} />
        </div>
      </div>
    </>
  );
}
export default Lodging;
