import React from "react";

function Tags({tags}) {
  return <div className="lodging__tags">
  <ol>
    <li>{tags}</li>
  </ol>
  </div>;
}

export default Tags;