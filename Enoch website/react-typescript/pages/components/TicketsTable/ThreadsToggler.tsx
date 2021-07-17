import React from "react";

const ThreadsToggler = () => {
  return (
    <div className="hlp-collapse-bttn">
      <span className="tableCell-collapse-btn">
        <img
          src="images/Plus.png"
          alt="Plus"
          className="img-fluid collpse-plus"
        />
        <img
          src="images/Minus.png"
          alt="Minus"
          className="img-fluid collpse-minus"
        />
      </span>
    </div>
  );
};

export default ThreadsToggler;
