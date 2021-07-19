import React, { useState } from "react";
import MessageTextArea from "./MessageTextArea";
import RecieverMessage from "./RecieverMessage";
import SenderMessage from "./SenderMessage";

interface Props {
  messages: any;
  subject: string;
}

const MessagesSection: React.FC<Props> = ({ messages, subject }) => {
  const [threadMessages, setThreadMessages] = useState(messages);

  return (
    <div className="tableRow-collapse-block-lft">
      <h3>{subject}</h3>
      <div className="tableRow-collapse-chat-block">
        {threadMessages?.map((message: any, key: any) => {
          if (message.type === "receiver") {
            return (
              <RecieverMessage message={message.message} date={message.date} />
            );
          } else if (message.type === "sender") {
            return <SenderMessage />;
          }
        })}
      </div>
      <MessageTextArea
        threadMessages={threadMessages}
        setThreadMessages={setThreadMessages}
      />
    </div>
  );
};

export default MessagesSection;
