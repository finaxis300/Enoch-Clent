import React, { useState } from 'react'

const BoardingMedia: React.FC = () => {
  return (
    <>
      <div id='Post-and-replies' className='tabcontent'>
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
                1h.
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
              src='/images/dApp-post-img.png'
              alt='image'
              className='img-fluid'
            />
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
              <h6>15,422</h6>
              <h6>.</h6>
              <h6 className='active'>475 comments</h6>
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

              <li className='dApp-post-comment-btn active'>
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

          <div className='dApp-post-comment-box'>
            <div className='dApp-post-comment-writing-sect'>
              <div className='dApp-post-comment-input-sect'>
                <div className='dApp-post-commenter-img'>
                  <img
                    src='/images/write-comment-img.png'
                    alt='dp'
                    className='img-fluid'
                  />
                </div>
              </div>
              <div className='dApp-post-comment-input-fild'>
                <textarea name='' id='' placeholder='Add a comment'></textarea>
                <div className='dApp-post-comment-emoje-and-gallery'>
                  <img
                    src='/images/emoji-icon.png'
                    alt=''
                    className='img-fluid'
                  />
                  <img
                    src='/images/dAppgallery.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
              </div>
            </div>

            <div className='Most-relevant'>
              <a href='#'>Most relevant</a>
            </div>

            <div className='dApp-post-comment-sect'>
              <div className='dApp-post-commenter-img'>
                <img
                  src='/images/commrnter-img.png'
                  alt='dp'
                  className='img-fluid'
                />
              </div>
              <div className='dApp-post-comment-right'>
                <div className='dApp-post-comment-text'>
                  <h1>Alex Jeff</h1>
                  <h2>912 followers</h2>
                  <p>
                    Our interactive session on "Happiness at the Workplace" with
                    the renowned communication speaker Mukund Trivedy was an
                    eye-opener on various challenges faced by employees across
                    the country. …<a href='#'>see more</a>
                  </p>
                  <div className='dApp-post-comment-3dots'>
                    <img
                      src='/images/dApp-ThreeDots.png'
                      alt='3Dots'
                      className='img-fluid'
                    />
                  </div>
                </div>

                <div className='dApp-like-and-reply-btn'>
                  <ul>
                    <li className='like'>Like</li>
                    <li className='reply active'>Reply</li>
                  </ul>
                </div>

                <div className='dApp-post-comment-writing-sect'>
                  <div className='dApp-post-comment-input-sect'>
                    <div className='dApp-post-commenter-img'>
                      <img
                        src='/images/comment-reply-dp.png'
                        alt='dp'
                        className='img-fluid'
                      />
                    </div>
                  </div>
                  <div className='dApp-post-comment-input-fild'>
                    <textarea
                      name=''
                      id=''
                      placeholder='Add a comment'
                    ></textarea>
                    <div className='dApp-post-comment-emoje-and-gallery'>
                      <img
                        src='/images/emoji-icon.png'
                        alt=''
                        className='img-fluid'
                      />
                      <img
                        src='/images/dAppgallery.png'
                        alt=''
                        className='img-fluid'
                      />
                    </div>
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

export default BoardingMedia

