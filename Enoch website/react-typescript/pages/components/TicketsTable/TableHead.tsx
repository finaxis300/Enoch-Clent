import React, { useState } from "react";
import { MarkData, TableHeadCellData } from "../../utilsData/TicketsTableData";
import TableHeadCell from "./TableHeadCell";

const TableHead = () => {
  const [showMarkOptions, setShowMarkOptions] = useState(false);
  const toggleMarkOptionsShow = () => {
    setShowMarkOptions(!showMarkOptions);
  };

  console.log(showMarkOptions);
  return (
    <div className="tableHeading enable">
      <div className="tableCell pl-0">
        <div className="hlp-filter-dropbox">
          <div className="dropdown">
            <div className="fancycheckbox">
              <label className="filtercheck_container">
                <input type="checkbox" className="buttons cebox" />
                <span className="filtercheckmark"></span>
              </label>
            </div>
            <div className="filter-dropbttn">
              <img
                src="images/Polygon-drop.png"
                alt="icon"
                className="pl-4"
                // data-toggle="dropdownpopup"
                // data-link="filterdiv"
                onClick={toggleMarkOptionsShow}
              />
            </div>
            <div
              className={
                showMarkOptions
                  ? "drop-active dropdown-menu option-menu "
                  : "dropdown-menu option-menu"
              }
              //   id="filterdiv"
            >
              <div className="filteration">
                <ul>
                  {MarkData.map((data, key) => (
                    <li key={key}>{data}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <span className="refresh-tbl">
            <a href="#">
              <img src="images/hupdate.png" alt="icon" className="img-fluid" />
            </a>
          </span>
        </div>
      </div>
      {TableHeadCellData.map((data, key) => (
        <TableHeadCell
          data={data}
          last={key === TableHeadCellData.length - 1}
        />
      ))}
    </div>
  );
};

export default TableHead;
