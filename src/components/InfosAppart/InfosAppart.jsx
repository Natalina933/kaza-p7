import React from "react";
import Tags from "../InfosAppart/Tags";

function InfosAppart({ appart }) {
  console.log(appart);
  return (
    <>
      <div className="lodging__title">
        <h1>{appart.title}</h1>
        <h2>{appart.location}</h2>
      </div>
      <div className="lodging__tags">
        <ol className="itemsTags">
          <Tags tags={appart.tags} />
        </ol>
      </div>
    </>
  );
}

export default InfosAppart;
