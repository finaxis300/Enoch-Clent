import React from "react";

const UsersSection = () => {
  return (
    <div className="tableRow-collapse-block-right">
      <h3>Message thread </h3>
      <div className="hlpcenter-message-thrd-block">
        <ul>
          <li>
            <div className="message-thrd-block-user">
              <div className="thread-usr-img">
                <img src="images/avtr.png" alt="user" className="img-fluid" />
              </div>
              <h2>You</h2>
              <p className="message-thrd-date">10/05/2021</p>
            </div>
          </li>
          <li>
            <div className="message-thrd-block-user">
              <div className="thread-usr-img">
                <img
                  src="images/chat-user.png"
                  alt="user"
                  className="img-fluid"
                />
              </div>
              <p className="thread-usr-txt">Regina Cooper</p>
              <p className="thread-usr-txt1">Support Desk</p>
              <p className="message-thrd-date">Yesterday</p>
            </div>
          </li>
          <li>
            <div className="message-thrd-block-user">
              <p className="thread-usr-txt2">Regina include Jack</p>
            </div>
          </li>
          <li>
            <div className="message-thrd-block-user">
              <div className="thread-usr-img">
                <img src="images/user3.png" alt="user" className="img-fluid" />
              </div>
              <p className="thread-usr-txt">Jack WIlliams</p>
              <p className="thread-usr-txt1">KYC Desk</p>
              <p className="message-thrd-date">12:14 PM</p>
            </div>
          </li>
          <li className="thread-bottom">
            <div className="message-thrd-block-user">
              <p className="thread-usr-txt2">
                Added Luciana Kereney &amp; Annita Feggins
              </p>
            </div>
          </li>
          <li>
            <div className="thread-split-block">
              <div className="message-thrd-block-user">
                <div className="thread-usr-img">
                  <img
                    src="images/user4.png"
                    alt="user"
                    className="img-fluid"
                  />
                </div>
                <p className="thread-usr-txt">Luciana Kerney</p>
                <p className="thread-usr-txt1">KYC Desk</p>
                <p className="message-thrd-date">12/05/2021</p>
              </div>
              <div className="message-thrd-block-user">
                <div className="thread-usr-img">
                  <img
                    src="images/user5.png"
                    alt="user"
                    className="img-fluid"
                  />
                </div>
                <p className="thread-usr-txt">Annita Feggins</p>
                <p className="thread-usr-txt1">KYC Desk</p>
                <p className="message-thrd-date">12/05/2021</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UsersSection;
