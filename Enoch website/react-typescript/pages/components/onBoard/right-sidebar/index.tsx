import React, { useState } from 'react'

const RightSideBar: React.FC = () => {
  return (
    <>
      <div className='col-lg-3 p-lg-0 custom-col-lg-3'>
        <div className='dApp-What-happening-sect'>
          <div className='dApp-What-happeningheadings'>
            <h1>What’s happening</h1>
          </div>
          <div className='dApp-What-happening-news-sect'>
            <div className='dApp-What-happening-news'>
              <div className='dApp-What-happening-news-text'>
                <h2>
                  News . <span>2 minutes ago</span>
                </h2>
                <p>
                  Looking at the claim that discourse around ‘White Previlege’
                  can hamper white working class students.
                </p>
              </div>
              <div className='dApp-What-happening-news-photo'>
                <img
                  src='/images/dApp-news-pic-1.png'
                  alt='photo'
                  className='img-fluid'
                />
              </div>
            </div>
            <h6>
              Treanding with <a href='#'>#WhitePrevilege</a>
            </h6>
          </div>

          <div className='dApp-Trending-United-Kingdom-sect'>
            <h1>Trending in United Kingdom</h1>
            <a href='#'>#CryptoCash</a>
            <p>17.1K Pinned</p>
            <div className='dApp-Trending-United-Kingdom-3dots'>
              <img
                src='/images/dApp-ThreeDots.png'
                alt='3Dots'
                className='img-fluid'
              />
            </div>
          </div>
          <div className='dApp-Trending-United-Kingdom-sect'>
            <h1>Trending in United Kingdom</h1>
            <a href='#'>#CryptoCash</a>
            <p>17.1K Pinned</p>
            <div className='dApp-Trending-United-Kingdom-3dots'>
              <img
                src='/images/dApp-ThreeDots.png'
                alt='3Dots'
                className='img-fluid'
              />
            </div>
          </div>

          <div className='dApp-What-happening-news-sect'>
            <div className='dApp-What-happening-news'>
              <div className='dApp-What-happening-news-text'>
                <h2>
                  News . <span>2 minutes ago</span>
                </h2>
                <p>
                  Looking at the claim that discourse around ‘White Previlege’
                  can hamper white working className students.
                </p>
              </div>
              <div className='dApp-What-happening-news-photo'>
                <img
                  src='/images/dApp-news-pic-2.png'
                  alt='photo'
                  className='img-fluid'
                />
              </div>
            </div>
            <h6 className='pb-0'>
              Treanding with <a href='#'>#WhitePrevilege</a>
            </h6>
          </div>
        </div>

        <div className='dApp-Who-to-follow-sect'>
          <div className='dApp-Who-to-follow-headings'>
            <h1>Who to follow</h1>
          </div>
          <div className='dApp-Who-to-follow'>
            <div className='dApp-Who-to-follow-content'>
              <div className='dApp-Who-to-follow-dp'>
                <img
                  src='/images/dApp-DaisyBinder.png'
                  alt='photo'
                  className='img-fluid'
                />
              </div>
              <ul>
                <li className='profile-name'>
                  Daisy Binder{' '}
                  <span>
                    <img
                      src='/images/follow-green.png'
                      alt='icon'
                      className='img-fluid'
                    />
                  </span>
                </li>
                <li className='user-name'>@daisybinder</li>
                <li className='Promoted'>
                  <span>
                    <img
                      src='/images/External-Link.png'
                      alt='icon'
                      className='img-fluid'
                    />
                  </span>
                  Promoted
                </li>
              </ul>
            </div>
            <div className='dApp-Who-to-follow-btn'>
              <button>
                <a href='#'>Follow</a>
              </button>
            </div>
          </div>

          <div className='dApp-Who-to-follow'>
            <div className='dApp-Who-to-follow-content'>
              <div className='dApp-Who-to-follow-dp'>
                <img
                  src='/images/dApp-Curtis-Dawson.png'
                  alt='photo'
                  className='img-fluid'
                />
              </div>
              <ul>
                <li className='profile-name'>
                  Curtis Daws...
                  <span>
                    <img
                      src='/images/follow-green.png'
                      alt='icon'
                      className='img-fluid'
                    />
                  </span>
                </li>
                <li className='user-name'>@sratwars01</li>
              </ul>
            </div>
            <div className='dApp-Who-to-follow-btn'>
              <button>
                <a href='#'>Follow</a>
              </button>
            </div>
          </div>

          <div className='dApp-Who-to-follow'>
            <div className='dApp-Who-to-follow-content'>
              <div className='dApp-Who-to-follow-dp'>
                <img
                  src='/images/dApp-Janice-Hum.png'
                  alt='photo'
                  className='img-fluid'
                />
              </div>
              <ul>
                <li className='profile-name'>
                  Janice Hum
                  <span>
                    <img
                      src='/images/follow-green.png'
                      alt='icon'
                      className='img-fluid'
                    />
                  </span>
                </li>
                <li className='user-name'>@janhu</li>
              </ul>
            </div>
            <div className='dApp-Who-to-follow-btn'>
              <button>
                <a href='#'>Follow</a>
              </button>
            </div>
          </div>

          <div className='dApp-Who-to-follow'>
            <div className='dApp-Who-to-follow-content'>
              <div className='dApp-Who-to-follow-dp'>
                <img
                  src='/images/dApp-Lonnie-Hodges.png'
                  alt='photo'
                  className='img-fluid'
                />
              </div>
              <ul>
                <li className='profile-name'>
                  Lonnie Hodges
                  <span>
                    <img
                      src='/images/follow-green.png'
                      alt='icon'
                      className='img-fluid'
                    />
                  </span>
                </li>
                <li className='user-name'>@lonnie</li>
              </ul>
            </div>
            <div className='dApp-Who-to-follow-btn'>
              <button>
                <a href='#'>Follow</a>
              </button>
            </div>
          </div>

          <div className='dApp-Who-to-follow'>
            <div className='dApp-Who-to-follow-content'>
              <div className='dApp-Who-to-follow-dp'>
                <img
                  src='/images/dApp-Cary-Tingey.png'
                  alt='photo'
                  className='img-fluid'
                />
              </div>
              <ul>
                <li className='profile-name'>
                  Cary Tingey
                  <span>
                    <img
                      src='/images/follow-green.png'
                      alt='icon'
                      className='img-fluid'
                    />
                  </span>
                </li>
                <li className='user-name'>@caryting</li>
              </ul>
            </div>
            <div className='dApp-Who-to-follow-btn'>
              <button>
                <a href='#'>Follow</a>
              </button>
            </div>
          </div>
        </div>

        <div className='dApp-Topics-to-follow-sect'>
          <div className='dApp-Topics-to-follow-headings'>
            <h1>Topics to follow</h1>
          </div>
          <div className='dApp-Topics-to-follow'>
            <div className='dApp-Topics-to-follow-content'>
              <h2>
                Cricket{' '}
                <span>
                  <img
                    src='/images/follow-green.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
              </h2>
              <h3>Sport</h3>
            </div>
            <div className='dApp-Who-to-follow-btn'>
              <button>
                <a href='#'>Follow</a>
              </button>
            </div>
          </div>

          <div className='dApp-Topics-to-follow'>
            <div className='dApp-Topics-to-follow-content'>
              <h2>
                Business & finance{' '}
                <span>
                  <img
                    src='/images/follow-green.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
              </h2>
              <h3>All about business & finance</h3>
            </div>
            <div className='dApp-Who-to-follow-btn'>
              <button>
                <a href='#'>Follow</a>
              </button>
            </div>
          </div>

          <div className='dApp-Topics-to-follow'>
            <div className='dApp-Topics-to-follow-content'>
              <h2>
                Technology{' '}
                <span>
                  <img
                    src='/images/follow-green.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
              </h2>
              <h3>Latest gadgets</h3>
            </div>
            <div className='dApp-Who-to-follow-btn'>
              <button>
                <a href='#'>Follow</a>
              </button>
            </div>
          </div>

          <div className='dApp-Topics-to-follow'>
            <div className='dApp-Topics-to-follow-content'>
              <h2>
                Entertainment{' '}
                <span>
                  <img
                    src='/images/follow-green.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
              </h2>
              <h3>All about hollywood</h3>
            </div>
            <div className='dApp-Who-to-follow-btn'>
              <button>
                <a href='#'>Follow</a>
              </button>
            </div>
          </div>

          <div className='dApp-Topics-to-follow mb-0'>
            <div className='dApp-Topics-to-follow-content'>
              <h2>
                Careers{' '}
                <span>
                  <img
                    src='/images/follow-green.png'
                    alt='icon'
                    className='img-fluid'
                  />
                </span>
              </h2>
              <h3>Sport</h3>
            </div>
            <div className='dApp-Who-to-follow-btn'>
              <button>
                <a href='#'>Follow</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightSideBar

