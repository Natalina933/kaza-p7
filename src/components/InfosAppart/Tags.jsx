import React from "react";

function Tags({tags}) {
  return <div className="lodging__tags">
  <ul>
    {tags.map((tag, index) => (
      <li key={index} className="tag">{tag}</li>
    ))}
  </ul>
</div>
}

export default Tags;
