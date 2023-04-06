import arrow from "../../assets/downarrow.svg";
import React, { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isActive, setIsActive] = useState(true);

  const displayContent = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="collapse">
        <div className="collapse__header" onClick={displayContent}>
          <h3>{title}</h3>
          <img src={arrow} alt="" className={isActive ? "rotate" : ""} />
        </div>
        {!isActive ? (
          <div className="collapse__contentDisplay">
            {children}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Collapse;
