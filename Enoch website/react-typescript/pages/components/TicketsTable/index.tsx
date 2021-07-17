import React from "react";
import Pagination from "./Pagination";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";

interface Props {
  currentMessageTab: string | undefined;
}

const TicketsTable: React.FC<Props> = ({ currentMessageTab }) => {
  const dispatch = useDispatch();

  const { changeMessageTab } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state);

  console.log(state.messageTab.messageTab);
  return (
    <>
      <div className="helpCenter-deatails-tbl table-responsive">
        <div className="helpCenter-table">
          <TableHead />
          <TableBody />
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default TicketsTable;
