import React from "react";
import { useLoaderData } from "react-router-dom";
import { API_getLodgingById } from "../../API";
import Carousel from "../../components/Carousel/Carousel";
import Collapse from "../../components/Collapse/Collapse";
import InfosHost from "../../components/InfosAppart/InfosHost";
import Tags from "../../components/InfosAppart/Tags";

export const getLodgingById = async ({ params }) => {
  const { lodgingId } = params;
  const appart = await API_getLodgingById(lodgingId);
  if (!appart) {
    throw new Error("Appart Not found");
  }
  return { appart };
};

function Lodging() {
  const { appart } = useLoaderData();
  return (
    <>
      <div className="lodging__page">
        <div className="lodging__carousel">
          <Carousel appartPictures={appart.pictures} />
        </div>
        <div className="lodging__infos">
          <div className="lodging__title">
            <h1>{appart.title}</h1>
            <h2>{appart.location}</h2>
          </div>
          <div className="lodging__tags">
            <ol className="itemsTags">
              <Tags tags={appart.tags} />
            </ol>
          </div>
          <div className="lodging__wrapper">
            <InfosHost appart={appart} />
          </div>
        </div>
        <Collapse title="Description">
          <p>{appart.description}</p>
        </Collapse>
        <Collapse title="Equipements">
          <ul>
            {
            appart.equipments.map((equipts, index) => {
              return <li key={index}>{equipts}</li>;
            })
            }
          </ul>
        </Collapse>
      </div>
    </>
  );
}
export default Lodging;
