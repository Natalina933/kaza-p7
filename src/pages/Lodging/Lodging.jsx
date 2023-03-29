import React from "react";
import { useLoaderData } from "react-router-dom";
import { API_getLodgingById } from "../../API";
import Carousel from "../../components/Carousel/Carousel";
import Collapse from "../../components/Collapse/Collapse";
import InfosAppart from "../../components/InfosAppart/InfosAppart";
import InfosHost from "../../components/InfosAppart/InfosHost";

export const getLodgingById = async ({params})=>{
  const {lodgingId} = params
  const appart = await API_getLodgingById(lodgingId)
  if(!appart){
    throw new Error ('Appart Not found')
  }
  return {appart}
}

function Lodging() {
  const {appart} = useLoaderData()
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
