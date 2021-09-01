import React from "react";

const SenderMessage = () => {
  return (
    <div className="chat-block-sendr-parent">
      <div className="chat-block-sendr-block">
        <div className="chat-block-sendr">
          <div className="chat-block-dot">
            <a
              href="javascript:void(0)"
              data-toggle="dropdownpopup"
              data-link="chat-boot2"
            >
              <img src="images/dots-w.png" />
            </a>
            <div className="chat-block-dropbox dropdown-menu" id="chat-boot2">
              <ul>
                <li>
                  <a href="#">Quote</a>
                </li>
                <li>
                  <a href="#">Share message</a>
                </li>
                <li>
                  <a href="#">Forword via mail</a>
                </li>
                <li>
                  <a href="#">Download</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="chat-block-h">
            <p>@Robertrose </p>
            <p>Thank you, I will include KYC desk</p>
            <p>Thanks ,</p>
          </div>
          <h4>Regina Copper , Support Desk</h4>
        </div>
        <div className="chat-block-date">Yesterday</div>
      </div>
      <div className="chat-block-user-img">
        <img src="images/chat-user.png" className="img-fluid" alt="user" />
      </div>
    </div>
  );
};

export default SenderMessage;
