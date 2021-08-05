import React, { useState } from 'react'
import classnames from 'classnames'

const BoardingJourProfile: React.FC = () => {
  return (
    <>
      <div className='dApp-home-profile-sect'>
        <div className='dApp-home-cover-And-DP-sect'>
          <div className='dApp-home-cover-photo'>
            <img
              src='/images/dApp-cover-photo-img.png'
              alt='cover-photo'
              className='img-fluid h-100'
            />
          </div>
          <div className='dApp-home-profile-pic'>
            <div className='dApp-profile-picture'>
              <div className='dApp-profile-picture-img'>
                <img
                  src='/images/dApp-DP.png'
                  alt='profile-picture'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
          <div className='dApp-home-profile-edit-btn'>
            <button data-toggle='modal' data-target='#dApp-home-profile-modal'>
              <a className='white-color-txt'>Edit Profile</a>
            </button>
          </div>

          <div className='dApp-home-username-sect'>
            <h1>Robert Rose</h1>
            <a href='#'>@roserobert01</a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{' '}
            </p>
          </div>
          <div className='dApp-home-user-info'>
            <ul>
              <li className='active'>
                <span>
                  <img
                    src='/images/dAppPin.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                London, England
              </li>
              <li className='active'>
                <span>
                  <img
                    src='/images/dAppGlobe.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                Podcast.com
              </li>
              <li className='active'>
                <span>
                  <img
                    src='/images/dAppCalendar.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                Joined July 2021
              </li>
            </ul>
            <ul>
              <li className='active'>
                <span>
                  <img
                    src='/images/dApp-Ballon.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                15 Sep 1983
              </li>
            </ul>
          </div>
          <div className='dApp-home-user-followers-sect'>
            <ul>
              <li>
                05 <span>Following</span>
              </li>
              <li>
                03 <span>Followers</span>
              </li>
            </ul>

            <div className='dApp-home-user-followers-imgs'>
              <img
                src='/images/followers%20.png'
                alt='dp'
                className='img-fluid pr-3'
              />
              <img
                src='/images/Platium.png'
                alt='dp'
                className='img-fluid pr-0'
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div className='dApp-home-profile-modal-sect'>
        <div className='modal fade' id='dApp-home-profile-modal' role='dialog'>
          <div className='modal-dialog'>
            {/* <!-- Modal content--> */}
            <div className='modal-content'>
              <div className='dApp-home-profile-modal-header'>
                <h4 className='modal-title'>Edit Profile</h4>
                <div
                  className='close dApp-home-profile-modal-close'
                  data-dismiss='modal'
                >
                  <img
                    src='/images/hCross.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </div>
              </div>
              <div className='modal-body'>
                <div>
                  <div className='dApp-home-cover-photo'>
                    <img
                      src='/images/dApp-edit-cover-photo.png'
                      alt='cover-photo'
                      className='img-fluid h-100'
                    />
                    <div className='coverPhoto-change-btn'>
                      <span>
                        <img
                          src='/images/dApp-Camera.png'
                          alt='camera'
                          className='img-fluid'
                        />
                      </span>
                      <a href='#'>Cover image</a>
                    </div>
                  </div>
                  <div className='dApp-home-profile-pic'>
                    <div className='dApp-profile-picture'>
                      <div className='dApp-profile-picture-img'>
                        <img
                          src='/images/dApp-progile-pic.png'
                          alt='profile-picture'
                          className='img-fluid'
                        />
                      </div>
                      <input type='file' className='my_file update-profile' />
                    </div>
                  </div>
                  <div className='dApp-home-profile-modal-form'>
                    <form>
                      <div className='input-name input-fild'>
                        <label>Name</label>
                        <input type='text' placeholder='Robert Rose' />
                      </div>

                      <div className='Edit-username input-fild'>
                        <label>Edit username</label>
                        <input
                          type='text'
                          placeholder='@userenoch007'
                          id='Edit-username-input'
                        />
                        <div className='username-dropdown'>
                          <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                          </ul>
                        </div>
                      </div>

                      <div className='Bio input-fild'>
                        <label>Bio</label>
                        <textarea placeholder='Write your Bio'></textarea>
                      </div>

                      <div className='City-dropdown input-fild'>
                        <label>City</label>
                        <div className='City-dropdown-box' id='City-drop-box'>
                          Select City
                        </div>
                        <div className='City-dropdown-list'>
                          <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                          </ul>
                        </div>
                      </div>

                      <div className='Country-dropdown input-fild'>
                        <label>Select Country</label>
                        <div
                          className='Country-dropdown-box'
                          id='Country-drop-box'
                        >
                          Select Country
                        </div>
                        <div className='Country-dropdown-list'>
                          <ul>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                          </ul>
                        </div>
                      </div>

                      <div className='Website input-fild'>
                        <label>Website</label>
                        <input type='text' placeholder='your website' />
                      </div>

                      <div className='Date-of-birth input-fild'>
                        <label>Date of birth</label>
                        <input type='text' placeholder='Date of birth' />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button data-dismiss='modal'>
                  <a className='white-color-txt'>Save</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardingJourProfile
