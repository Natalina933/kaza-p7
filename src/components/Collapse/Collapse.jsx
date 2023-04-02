import arrow from "../../assets/downarrow.svg";
import React, { useState } from "react";

const Collapse = ({ id, title, content }) => {
  const [isActive, setIsActive] = useState(true);

  const displayContent = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div key={id} className="collapse">
        <div className="collapse__header">
          <h3>{title}</h3>
          <img
            src={arrow}
            alt=""
            onClick={displayContent}
            className={isActive ? "rotate" : ""}
          />
        </div>
        {!isActive ? (
          <div className="collapse__contentDisplay">
            <p>{content}</p>
          </div>
        ) : (
          <div className="collapse__content">
            <p>{content}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Collapse;
