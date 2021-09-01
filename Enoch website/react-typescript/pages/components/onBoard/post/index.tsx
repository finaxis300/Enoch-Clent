import React, { useState } from 'react'

const BoardingPost: React.FC = () => {
  return (
    <>
      <div id='Posts' className='tabcontent'>
        <div className='dApp-status-block'>
          <div className='dApp-status-heading'>
            <div className='dApp-status-heading-profile-pic'>
              <img
                src='/images/RobertRosePic.png'
                alt='DP'
                className='img-fluid'
              />
            </div>
            <div className='dApp-status-heading-text'>
              <h1>Robert Rose</h1>
              <h2>3 followers</h2>
              <h3>
                <span>
                  <img
                    src='/images/Clock.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                July 15
              </h3>
            </div>
            <div className='dApp-post-3dots'>
              <img
                src='/images/dApp-ThreeDots.png'
                alt='3dots'
                className='img-fluid'
              />
            </div>
          </div>

          <div className='dApp-status-caption-sect'>
            <p>
              Our interactive session on "Happiness at the Workplace" with the
              renowned communication speaker Mukund Trivedy was an eye-opener on
              various challenges faced by employees across the country. …
              <a href='#'>see more</a>
            </p>
          </div>

          <div className='dApp-status-react-sect'>
            <div className='dApp-status-react-icon'>
              <img src='/images/like.png' alt='icon' className='img-fluid' />
              <img src='/images/love.png' alt='icon' className='img-fluid' />
              <img src='/images/heart.png' alt='icon' className='img-fluid' />
              <img src='/images/clap.png' alt='icon' className='img-fluid' />
              <img src='/images/light.png' alt='icon' className='img-fluid' />
              <img src='/images/wow.png' alt='icon' className='img-fluid' />
            </div>
            <div className='dApp-status-react-text'>
              <h6>32 comments</h6>
              <h6>.</h6>
              <h6>56 Views</h6>
            </div>
          </div>

          <div className='dApp-status-like-comment-share-sect'>
            <ul>
              <li>
                <span>
                  <img
                    src='/images/like-icon.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Like</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/dislike.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Dislike</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/gift.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>{' '}
                <a href='#'>Gift</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/comment-icon.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Comment</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/dApp-share.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Share</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/Paper-Plane.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Send</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='dApp-status-block'>
          <div className='dApp-status-heading'>
            <div className='dApp-status-heading-profile-pic'>
              <img
                src='/images/RobertRosePic.png'
                alt='DP'
                className='img-fluid'
              />
            </div>
            <div className='dApp-status-heading-text'>
              <h1>Robert Rose</h1>
              <h2>3 followers</h2>
              <h3>
                <span>
                  <img
                    src='/images/Clock.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                July 2{' '}
              </h3>
            </div>
            <div className='dApp-post-3dots'>
              <img
                src='/images/dApp-ThreeDots.png'
                alt='3dots'
                className='img-fluid'
              />
            </div>
          </div>

          <div className='dApp-status-content-sect'>
            <img src='/images/post-img.png' alt='image' className='img-fluid' />
          </div>

          <div className='dApp-status-react-sect'>
            <div className='dApp-status-react-icon'>
              <img src='/images/like.png' alt='icon' className='img-fluid' />
              <img src='/images/love.png' alt='icon' className='img-fluid' />
              <img src='/images/heart.png' alt='icon' className='img-fluid' />
              <img src='/images/clap.png' alt='icon' className='img-fluid' />
              <img src='/images/light.png' alt='icon' className='img-fluid' />
              <img src='/images/wow.png' alt='icon' className='img-fluid' />
            </div>
            <div className='dApp-status-react-text'>
              <h6 className='active'>15,422</h6>
              <h6>.</h6>
              <h6>475 comments</h6>
              <h6>.</h6>
              <h6>676,614 Views</h6>
            </div>
          </div>

          <div className='dApp-status-like-comment-share-sect'>
            <ul>
              <li>
                <span>
                  <img
                    src='/images/like-icon.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Like</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/dislike.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Dislike</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/gift.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>{' '}
                <a href='#'>Gift</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/comment-icon.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Comment</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/dApp-share.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Share</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/Paper-Plane.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Send</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='dApp-status-block'>
          <div className='dApp-status-heading'>
            <div className='dApp-status-heading-profile-pic'>
              <img
                src='/images/RobertRosePic.png'
                alt='DP'
                className='img-fluid'
              />
            </div>
            <div className='dApp-status-heading-text'>
              <h1>Robert Rose</h1>
              <h2>3 followers</h2>
              <h3>
                <span>
                  <img
                    src='/images/Clock.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                July 15
              </h3>
            </div>
            <div className='dApp-post-3dots'>
              <img
                src='/images/dApp-ThreeDots.png'
                alt='3dots'
                className='img-fluid'
              />
            </div>
          </div>

          <div className='dApp-status-caption-sect'>
            <p>
              Our interactive session on "Happiness at the Workplace" with the
              renowned communication speaker Mukund Trivedy.
            </p>
          </div>

          <div className='dApp-status-react-sect'>
            <div className='dApp-status-react-icon'>
              <img src='/images/like.png' alt='icon' className='img-fluid' />
              <img src='/images/love.png' alt='icon' className='img-fluid' />
              <img src='/images/heart.png' alt='icon' className='img-fluid' />
              <img src='/images/clap.png' alt='icon' className='img-fluid' />
              <img src='/images/light.png' alt='icon' className='img-fluid' />
              <img src='/images/wow.png' alt='icon' className='img-fluid' />
            </div>
            <div className='dApp-status-react-text'>
              <h6>32 comments</h6>
              <h6>.</h6>
              <h6>56 Views</h6>
            </div>
          </div>

          <div className='dApp-status-like-comment-share-sect'>
            <ul>
              <li>
                <span>
                  <img
                    src='/images/like-icon.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Like</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/dislike.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Dislike</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/gift.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>{' '}
                <a href='#'>Gift</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/comment-icon.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Comment</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/dApp-share.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Share</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/Paper-Plane.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Send</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='dApp-status-block no-border'>
          <div className='dApp-status-heading'>
            <div className='dApp-status-heading-profile-pic'>
              <img
                src='/images/RobertRosePic.png'
                alt='DP'
                className='img-fluid'
              />
            </div>
            <div className='dApp-status-heading-text'>
              <h1>Robert Rose</h1>
              <h2>3 followers</h2>
              <h3>
                <span>
                  <img
                    src='/images/Clock.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                July 2{' '}
              </h3>
            </div>
            <div className='dApp-post-3dots'>
              <img
                src='/images/dApp-ThreeDots.png'
                alt='3dots'
                className='img-fluid'
              />
            </div>
          </div>

          <div className='dApp-status-content-sect'>
            <img
              src='/images/dApp-post-vedio.png'
              alt='image'
              className='img-fluid'
            />
            <div className='dApp-status-video-play-btn'>
              <img
                src='/images/dApp-play-btn.png'
                alt='play'
                className='img-fluid'
              />
            </div>
          </div>

          <div className='dApp-status-react-sect'>
            <div className='dApp-status-react-icon'>
              <img src='/images/like.png' alt='icon' className='img-fluid' />
              <img src='/images/love.png' alt='icon' className='img-fluid' />
              <img src='/images/heart.png' alt='icon' className='img-fluid' />
              <img src='/images/clap.png' alt='icon' className='img-fluid' />
              <img src='/images/light.png' alt='icon' className='img-fluid' />
              <img src='/images/wow.png' alt='icon' className='img-fluid' />
            </div>
            <div className='dApp-status-react-text'>
              <h6>22</h6>
              <h6>.</h6>
              <h6>475 comments</h6>
              <h6>.</h6>
              <h6>676,614 Views</h6>
            </div>
          </div>

          <div className='dApp-status-like-comment-share-sect'>
            <ul>
              <li>
                <span>
                  <img
                    src='/images/like-icon.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Like</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/dislike.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Dislike</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/gift.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>{' '}
                <a href='#'>Gift</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/comment-icon.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Comment</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/dApp-share.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Share</a>
              </li>

              <li>
                <span>
                  <img
                    src='/images/Paper-Plane.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
                <a href='#'>Send</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardingPost
