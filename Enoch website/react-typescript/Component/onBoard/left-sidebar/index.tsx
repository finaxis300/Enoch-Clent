import React, { useState } from 'react'
import Link from 'next/link'
const LeftSideBar: React.FC = () => {
  return (
    <>
      <div className='col-lg-3 p-lg-0 custom-col-lg-3'>
        <div className='dApp-Win-a-Day-Banner-sect'>
          <img
            src='/images/win-a-day-banner.png'
            alt='Banner'
            className='img-fluid'
          />
        </div>
        <div className='dApp-daily-bonous-Banner-sect'>
          <img
            src='/images/daily-bonous-banner.png'
            alt='Banner'
            className='img-fluid'
          />
        </div>

        <div className='dApp-home-Create-Post-sect'>
          <h1>Home</h1>
          <p>
            Your personal Enoch frontpage. Comehere to check in with your
            favorite communication.
          </p>
          <div className='dApp-home-Create-Post-btn-sect'>
            <Link
              href='/home-post/post'
            >
              <button className='Create-Post-btn'>
                <a>Create Post</a>
              </button>
            </Link>
            <button className="Create-Community-btn" data-toggle="modal" data-target="#CreateCommunity-Modal"><a href="#">Create Community</a></button>
          </div>
        </div>
        <div className="CreateCommunity-Modal-sect">
          <div className="modal" id="CreateCommunity-Modal">
            <div className="modal-dialog">
              <div className="modal-content">

                {/* <!-- Modal Header --> */}
                <div className="CreateCommunity-Modal-header">
                  {/* <!--<h4 class="modal-title">Add experience</h4>--> */}
                  <div className="close CreateCommunity-Modal-modal-close" data-dismiss="modal"><img src="/images/hCross.png" alt="icon" className="img-fluid" /></div>
                </div>

                {/* <!-- Modal body --> */}
                <div className="CreateCommunity-Modal-body">
                  <div className="input-name">
                    <h1>Name*</h1>
                    <p>Community names including capitalization cannot be changed.</p>
                    <input type="text" value="Enoch/" id="CreateCommunity-input-name-fild" />
                    <p className="input-name-error-text">Community already available, Please choose some diffrent name</p>
                    <p className="pt-1">21 character remaining </p>
                  </div>

                  <div className="Community-type">
                    <h1>Community type*</h1>

                    <div className="Community-type-radio-sect">
                      <label className="container"><strong>Public <span>Anyone can view, post, and comment to this community</span></strong>
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container"><strong>Restricted <span>Anyone can view this community, but only approved users can post</span></strong>
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="container"><strong>Private <span>Only approved users can view and submit to this community</span></strong>
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                    </div>


                  </div>

                  <div className="Adult-content-sect">
                    <h1>Adult content</h1>
                    <div className="Adult-content-Checkbox">
                      <input type="checkbox" />
                      <label>18+ year old community</label>
                    </div>
                  </div>

                  <div className="CreateCommunity-Modal-btn">

                    <button id="Create-Community-button"> <a href="/onboarding-journey/community">Create Community</a></button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftSideBar

