import React, { Children } from "react";
import { TicketsInInbox } from "../../utilsData/TicketsTableData";
import Ticket from "../Ticket";

const TableBody: React.FC = () => {
  return (
    <div className="tableBody">
      {TicketsInInbox.map((ticket, key) => {
        return (
          <Ticket
            userName={ticket.userName}
            userImg={ticket.userImg}
            mainID={ticket.mainID}
            subID={ticket.subID}
            Subject={ticket.Subject}
            Category={ticket.Category}
            images={ticket.images}
            dateAndTime={ticket.dateAndTime}
            Status={ticket.Status}
            read={ticket.read}
          />
        );
      })}
    </div>
  );
};

export default TableBody;
