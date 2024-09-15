import React, { useState, useCallback } from "react";
import classnames from "classnames";
import { useDropzone, FileRejection, FileError } from "react-dropzone";
import SingleFileUploadWithProgress from "../../../uploads/ProfilePicUpload";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state/index";
import CoverImageUpload from "../../../uploads/CoverImageUpload";
import ProfilePicUpload from "../../../uploads/ProfilePicUpload";
import ModalCoverPhoto from "./ModalCoverPhoto";
import ModalProfilePic from "./ModalProfilePic";

export interface UploadableFile {
  file: File;
  errors: FileError[];
}

const BoardingJourProfile: React.FC = () => {
  const [files, setFiles] = useState<UploadableFile[]>([]);

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const profilePictureUrlValue = useSelector(
    (state: State) => state.profilePictureUrl
  );

  const coverImageUrlValue = useSelector((state: State) => state.coverImageUrl);

  return (
    <>
      <div className="dApp-home-profile-sect">
        <div className="dApp-home-cover-And-DP-sect">
          <div className="dApp-home-cover-photo">
            <img
              src={
                coverImageUrlValue.length > 0
                  ? coverImageUrlValue
                  : "/images/dApp-cover-photo-img.png"
              }
              alt="cover-photo"
              className="img-fluid h-100"
            />
          </div>
          <div className="dApp-home-profile-pic">
            <div className="dApp-profile-picture">
              <div className="dApp-profile-picture-img">
                <img
                  src={
                    profilePictureUrlValue.length > 0
                      ? profilePictureUrlValue
                      : "/images/dApp-DP.png"
                  }
                  alt="profile-picture"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
          <div className="dApp-home-profile-edit-btn">
            <button data-toggle="modal" data-target="#dApp-home-profile-modal">
              <a className="white-color-txt">Edit Profile</a>
            </button>
          </div>

          <div className="dApp-home-username-sect">
            <h1>Robert Rose</h1>
            <a href="#">@roserobert01</a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
          <div className="dApp-home-user-info">
            <ul>
              <li className="active">
                <span>
                  <img
                    src="/images/dAppPin.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                London, England
              </li>
              <li className="active">
                <span>
                  <img
                    src="/images/dAppGlobe.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                Podcast.com
              </li>
              <li className="active">
                <span>
                  <img
                    src="/images/dAppCalendar.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                Joined July 2021
              </li>
            </ul>
            <ul>
              <li className="active">
                <span>
                  <img
                    src="/images/dApp-Ballon.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </span>
                15 Sep 1983
              </li>
            </ul>
          </div>
          <div className="dApp-home-user-followers-sect">
            <ul>
              <li>
                05 <span>Following</span>
              </li>
              <li>
                03 <span>Followers</span>
              </li>
            </ul>

            <div className="dApp-home-user-followers-imgs">
              <img
                src="/images/followers%20.png"
                alt="dp"
                className="img-fluid pr-3"
              />
              <img
                src="/images/Platium.png"
                alt="dp"
                className="img-fluid pr-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div className="dApp-home-profile-modal-sect">
        <div className="modal fade" id="dApp-home-profile-modal" role="dialog">
          <div className="modal-dialog">
            {/* <!-- Modal content--> */}
            <div className="modal-content">
              <div className="dApp-home-profile-modal-header">
                <h4 className="modal-title">Edit Profile</h4>
                <div
                  className="close dApp-home-profile-modal-close"
                  data-dismiss="modal"
                >
                  <img
                    src="/images/hCross.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="modal-body">
                <div>
                  <ModalCoverPhoto />
                  <ModalProfilePic />

                  <div className="dApp-home-profile-modal-form">
                    <form>
                      <div className="input-name input-fild">
                        <label>Name</label>
                        <input type="text" placeholder="Robert Rose" />
                      </div>

                      <div className="Edit-username input-fild">
                        <label>Edit username</label>
                        <input
                          type="text"
                          placeholder="@userenoch007"
                          value="@Robertrose06"
                          id="Edit-username-input"
                        />
                        <div className="username-dropdown">
                          <p className="success">
                            Great this username is available! So It is yours!
                          </p>
                          <p className="error">Username not available! </p>
                          <h6>Can’t think of one? Use one of these:</h6>
                          <ul id="username_list">
                            <li>Robert-Fun</li>
                            <li>Robert-Fun6882</li>
                            <li>Robert-Fun6882</li>
                          </ul>
                          <button id="edit-userName-btn" className="disable">
                            <a href="#">Continue</a>
                          </button>
                        </div>
                      </div>
                      <div className="Bio input-fild">
                        <label>Bio</label>
                        <textarea placeholder="Write your Bio"></textarea>
                      </div>

                      <div className="City-dropdown input-fild">
                        <label>City</label>
                        <div className="City-dropdown-box" id="City-drop-box">
                          Select City
                        </div>
                        <div className="City-dropdown-list">
                          <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                          </ul>
                        </div>
                      </div>

                      <div className="Country-dropdown input-fild">
                        <label>Select Country</label>
                        <div
                          className="Country-dropdown-box"
                          id="Country-drop-box"
                        >
                          Select Country
                        </div>
                        <div className="Country-dropdown-list">
                          <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                          </ul>
                        </div>
                      </div>

                      <div className="Website input-fild">
                        <label>Website</label>
                        <input type="text" placeholder="your website" />
                      </div>

                      <div className="Date-of-birth input-fild">
                        <label>Date of birth</label>
                        <input type="text" placeholder="Date of birth" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button data-dismiss="modal">
                  <a className="white-color-txt">Save</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardingJourProfile;
