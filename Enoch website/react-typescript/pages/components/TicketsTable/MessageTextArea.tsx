import React, { useState } from "react";

interface Props {
  setThreadMessages: React.Dispatch<any>;
  threadMessages: any;
}

const MessageTextArea: React.FC<Props> = ({
  threadMessages,
  setThreadMessages,
}) => {
  const [message, setMessage] = useState("");

  const getTodaysDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return today;
  };

  const addMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    setThreadMessages([
      ...threadMessages,
      {
        type: "receiver",
        message: (
          <>
            <p>{message}</p>
          </>
        ),
        date: getTodaysDate(),
      },
    ]);
    setMessage("");
  };

  return (
    <div className="chat-block-text-editor">
      <div className="chat-block-editor-header">
        <div className="editor-font">
          <img src="images/Textarea/Font.png" alt="font" />
          <img src="images/Textarea/arrow.png" alt="font" className="ml-1" />
        </div>
        <ul>
          <li>
            <img src="images/Textarea/Bold.png" alt="font" />
          </li>
          <li>
            <img src="images/Textarea/Italic.png" alt="font" />
          </li>
          <li>
            <img src="images/Textarea/Underline.png" alt="font" />
          </li>
        </ul>
        <ul>
          <li>
            <img src="images/Textarea/Link.png" alt="font" />
          </li>
          <li>
            <img src="images/Textarea/Smile.png" alt="font" />
          </li>
          <li>
            <img src="images/Textarea/Image.png" alt="font" />
          </li>
        </ul>
        <ul className="border-right-0">
          <li>
            <img src="images/Textarea/List.png" alt="font" />
          </li>
          <li>
            <img src="images/Textarea/Numbered List.png" alt="font" />
          </li>
          <li>
            <img src="images/Textarea/Align-Left.png" alt="font" />
          </li>
          <li>
            <img src="images/Textarea/Align-Center.png" alt="font" />
          </li>
          <li>
            <img src="images/Textarea/Align-Right.png" alt="font" />
          </li>
          <li>
            <img src="images/Textarea/Align-Justify.png" alt="font" />
          </li>
        </ul>
      </div>
      <div className="chat-block-txteditor">
        <div className="chat-block-txteditor-scroll">
          <div className="chat-block-editor-txtarea">
            <textarea
              value={message}
              onChange={addMessage}
              placeholder="Type something"
            ></textarea>
          </div>
          <div className="chat-block-btn">
            <span className="btn chat-send-btn">
              <span onClick={sendMessage} className="chat-send-btn-lft">
                Send
              </span>
              <span className="chat-send-btn-right">
                <img src="images/timed.png" alt="time" className="img-fluid" />
              </span>
            </span>
            <div className="chat-attached">
              <a href="#">
                <img
                  src="images/hattachment.png"
                  alt="hattachment"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageTextArea;
