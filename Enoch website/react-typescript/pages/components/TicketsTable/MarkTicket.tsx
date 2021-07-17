import React from "react";

interface Props {
  read: boolean;
}

const MarkTicket: React.FC<Props> = ({ read }) => {
  return (
    <div className="helpCenter-select pl-4">
      <div className="filterfancycheckbox">
        <label className="filtercheck_container">
          <input type="checkbox" name="foo" className="cbox" />
          <span className="filtercheckmark"></span>
        </label>
      </div>
      <div
        className="helpCenter-star"
        data-toggleclassName="starclass"
        data-className="start-color"
      >
        <i className="fa fa-star-o ratingstart" aria-hidden="true"></i>
        <i className="fa fa-star ratingstart2" aria-hidden="true"></i>
      </div>
      <div className="helpCenter-mailbox">
        <img
          src={!read ? "images/readmail.png" : "images/hlpmail.png"}
          alt="icon"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default MarkTicket;
