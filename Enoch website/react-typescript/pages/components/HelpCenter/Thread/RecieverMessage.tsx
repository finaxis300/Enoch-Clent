import React from "react";

interface Props {
  message: any;
  date: any;
}

const RecieverMessage: React.FC<Props> = ({ message, date }) => {
  return (
    <div className="chat-block-reciever-block">
      <div className="chat-block-reciever">
        <div className="chat-block-dot">
          <a
            href="javascript:void(0)"
            data-toggle="dropdownpopup"
            data-link="chat-boot1"
          >
            <img src="images/dots-g.png" />
          </a>
          <div className="chat-block-dropbox dropdown-menu" id="chat-boot1">
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
        {message}
        {message}
        {message}

        <div className="chat-block-bottm">
          <div className="tableCell-image">
            <ul className="">
              <li>
                <a href="#">
                  <img src="images/image-icon.png" alt="icon" /> Image...
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  alt="icon"
                  data-toggle="modal"
                  data-target="attachment-modal"
                >
                  <img src="images/copyof.png" /> Copy...{" "}
                </a>
              </li>
              <li className="tableCell-list-last">
                <a href="#"> +2 </a>
              </li>
            </ul>
          </div>
          <div className="attach-modal-block">
            <div id="attachment-modal" className="modal fade">
              <div className="modal-content">
                <span className="close">
                  <img
                    src="images/hclose.png"
                    alt="close"
                    className="img-fluid"
                    data-dismiss="modal"
                  />
                </span>
                <div className="attach-body">
                  <div className="attach-body-left">
                    <div id="doc-DL" className="doccontent doc-block">
                      <img
                        src="images/drivinglicence.png"
                        alt="driving licence"
                        className="img-fluid"
                      />
                    </div>
                    <div id="doc-ID" className="doccontent">
                      <img
                        src="images/doc-img2.png"
                        alt="driving licence"
                        className="img-fluid"
                      />
                    </div>
                    <div id="doc-PDF" className="doccontent">
                      <img
                        src="images/doc-img3.png"
                        alt="driving licence"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="attach-body-right">
                    <ul>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="doctablinks d-active"
                          onclick="docfunction(event, 'doc-DL')"
                        >
                          <img
                            src="images/drivinglicence-small.png"
                            alt="driving licence"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="doctablinks"
                          onclick="docfunction(event, 'doc-ID')"
                        >
                          <img
                            src="images/doc2-small.png"
                            alt="doc2-small"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="doctablinks"
                          onclick="docfunction(event, 'doc-PDF')"
                        >
                          <img
                            src="images/PDF2-small.png"
                            alt="pdf"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-block-date">{date}</div>
    </div>
  );
};

export default RecieverMessage;
