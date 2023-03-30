import React from "react";
import Tags from "../InfosAppart/Tags";

function InfosAppart({ title, location, tags }) {
  return (
    <>
      <div className="lodging__title">
        <h1>{title}</h1>
        <h2>{location}</h2>
      </div>
      <div className="lodging__tags">
        <ol className="itemsTags">
          <Tags tags={tags} />
        </ol>
      </div>
    </>
  );
}

export default InfosAppart;
