import React, { useState } from "react";
import MessagesSection from "./MessagesSection";
import UsersSection from "./UsersSection";

interface Props {
  messages: any;
  subject: string;
}

const InboxTicketThread: React.FC<Props> = ({ messages, subject }) => {
  return (
    <div id="collapse-block2" className="tableRow-collapse-block">
      <MessagesSection messages={messages} subject={subject} />
      <UsersSection />
    </div>
  );
};

export default InboxTicketThread;
