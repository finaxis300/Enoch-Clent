import React, { useState } from 'react'
import classnames from 'classnames'
import Link from 'next/link'

const Header: React.FC = () => {
  const [searchMenu, setSearchMenu] = useState<boolean>(false)
  const [switchAccount, setSwitchAccount] = useState<boolean>(false)
  const [switchModal, setSwitchModal] = useState<boolean>(false)

  return (
    <>
      <div className='row'>
        <header className='custom-header'>
          <div className='ezl-dashboard-header'>
            <div className='menu-left'>
              <div className='menu-wrap'>
                <a href='#menu' className='menu-link'>
                  <img
                    src='/images/Menu.png'
                    alt='Menu'
                    className='img-fluid'
                  />
                </a>
              </div>
              <div className='header-logo'>
                <a href='javascript:void(0)'>
                  <img
                    src='/images/logo.png'
                    alt='logo'
                    className='img-fluid'
                  />
                </a>
              </div>
            </div>
            <div className='menuright-side'>
              <div className='right-search'>
                <form className='search-form'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Fund, ISIN, Keyword '
                    />
                    <button className='search-form-btn'>
                      <img
                        className='search-img'
                        src='/images/search.png'
                        alt='search'
                      />
                    </button>
                  </div>
                </form>
              </div>
              <div className='menu-mid-sect'>
                <ul id='submenubar'>
                  <li className=''>
                    <div className='menu-times-notifi'>
                      <img
                        src='/images/home.png'
                        alt='home'
                        className='img-fluid'
                      />
                    </div>
                    <a href='javascript:void(0)'>Home</a>
                  </li>
                  <li className=''>
                    <div className='menu-times-notifi'>
                      <img
                        src='/images/network.png'
                        alt='network'
                        className='img-fluid'
                      />
                      <span>0</span>
                    </div>
                    <a href='javascript:void(0)'>My Network</a>
                  </li>
                  <li className=''>
                    <div className='menu-times-notifi'>
                      <img
                        src='/images/Chat.png'
                        alt='Chat'
                        className='img-fluid'
                      />
                      <span>0</span>
                    </div>
                    <a href='javascript:void(0)'>Messaging</a>
                  </li>
                  <li className='ether-block'>
                    <div className='menu-times-notifi mr-2'>
                      <img
                        src='/images/Ethereum.png'
                        alt='Ethereum'
                        className='img-fluid'
                      />
                    </div>
                    <a href='javascript:void(0)'>
                      ETH Mainnet <i className='fa fa-angle-right'></i>
                    </a>
                  </li>
                  <li className='connect-wallet-block'>
                    <a href='javascript:void(0)'>Connect Wallet</a>
                  </li>
                  <li className='connect-wallet-block'>
                    <a href='javascript:void(0)'>
                      <span>
                        <img
                          src='/images/cart.png'
                          className='img-fluid mr-2'
                        />
                      </span>
                      Cart
                    </a>
                  </li>
                </ul>
                <div className='toggle-menu'>
                  <div className='d-inline-block'>
                    <i
                      className='fa fa-bars'
                      aria-hidden='true'
                      id='submenu-toggle'
                    ></i>
                  </div>
                </div>
              </div>

              <div className='ezl-notificaion'>
                <div className='position-relative notificaion-dropdown ezl-notificaion-marg'>
                  <a href='javascript:void(0)' className='popup'>
                    <img src='/images/help.png' alt='help' />
                  </a>
                </div>
                <div className=' position-relative notificaion-dropdown'>
                  <a href='javascript:void(0)' className='popup'>
                    <img src='/images/alertBell.png' alt='Bell' />
                    <span className='notificaion-spn'>10</span>
                  </a>
                </div>
              </div>
              <div className='ezl-user-ac'>
                <div className='account-d dropdown'>
                  <div className='dropdown-buttn'>
                    <span className='popup'>
                      <div
                        className='user-img'
                        onClick={() => setSwitchAccount(true)}
                      >
                        <img
                          src='/images/user-ReginaCooper.png'
                          alt='user image'
                          className='img-fluid'
                        />
                      </div>
                    </span>
                    <div
                      id='myPopup'
                      className={classnames('popupbox dropdown-menu', {
                        show: switchAccount
                      })}
                    >
                      <ul className=''>
                        <li>
                          <div className='enoch-usr-prof'>
                            <span>
                              <img
                                src='/images/user-pro-pic.png'
                                className='img-fluid'
                                alt='profile- pic'
                              />{' '}
                              EncchUser007
                            </span>
                            <span>
                              <a href='#'>Change</a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className='enoch-usr-status-block'>
                            <div className='usr-status-left'>Online Status</div>
                            <div className='usr-status-right'>
                              <div className='post-switch'>
                                <label className='postswitch'>
                                  <input type='checkbox' checked={true} />
                                  <span className='post-slider round'></span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className='enoch-usr-status-block'>
                            <a href='#'>Public Profile</a>
                          </div>
                          <div className='enoch-usr-status-block mb-0'>
                            <a href='#'>User Settings</a>
                          </div>
                        </li>
                        <li>
                          <div className='enoch-usr-status-block'>
                            <a href='#'>Billing</a>
                          </div>
                          <div className='enoch-usr-status-block'>
                            <a href='#'>Help Center</a>
                          </div>
                          <div className='enoch-usr-status-block'>
                            <a href='#'>Verify Account (KYC)</a>
                          </div>
                          <div className='enoch-usr-status-block mb-0'>
                            <a href='#' className='orange-clr'>
                              Upgrade to Premium
                            </a>
                          </div>
                        </li>
                        <li className='mt-4'>
                          <div className='enoch-usr-status-block mb-0'>
                            Free Bonus
                            <span>
                              <a href='#' className='btn freebonus-btn'>
                                $50/500 $Enoch{' '}
                              </a>
                            </span>
                          </div>
                        </li>
                        <li className='mt-4'>
                          <div
                            className='enoch-usr-status-block mb-0'
                            onClick={() => setSwitchModal(true)}
                          >
                            <a
                              href='#'
                              data-toggle='modal'
                              data-target='switch-user-modal'
                            >
                              Switch Account
                            </a>
                          </div>
                        </li>
                        <li className='mt-4 mb-0 pb-0'>
                          <div className='enoch-usr-status-block mb-0'>
                            <a href='#' className='post-red-clr'>
                              Logout
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='switch-user-modal-block'>
            <div
              id='switch-user-modal'
              className={classnames('modal fade', {
                open: switchModal
              })}
            >
              {/* <!-- Modal content --> */}
              <div className='modal-content switch-user-modal-content'>
                <span className='close' onClick={() => setSwitchModal(false)}>
                  <img
                    src='/images/postCross.png'
                    alt='close'
                    className='img-fluid'
                    data-dismiss='modal'
                  />
                </span>
                <h2>Which account would you like to use?</h2>
                <div className='switch-user-modal-list'>
                  <ul>
                    <li>
                      <img
                        src='/images/postUser1.png'
                        className='img-fluid'
                        alt='pic'
                      />{' '}
                      <span>Robert Rose</span>
                    </li>
                    <li>
                      <img
                        src='/images/postUser2.png'
                        className='img-fluid'
                        alt='pic'
                      />{' '}
                      <span>88mph</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className='dApp-menu-btn'>
          <a onClick={() => setSearchMenu(true)}>
            <img
              src='/images/LeftSide-Menu.png'
              alt='menu'
              className='img-fluid'
              data-toggle='modal'
              data-target='right-top-modal'
            />
          </a>
          <div className='right-top-modal-block'>
            <div
              id='right-top-modal'
              className={classnames('modal fade', {
                open: searchMenu
              })}
            >
              {/* <!-- Modal content --> */}
              <div className='modal-content right-top-modal-content'>
                <span className='close' onClick={() => setSearchMenu(false)}>
                  <img
                    src='/images/postCross2.png'
                    alt='close'
                    className='img-fluid'
                    data-dismiss='modal'
                  />
                </span>
                <div className='right-top-body-block'>
                  <form className='right-search-form'>
                    <div className='right-form-group'>
                      <img
                        src='/images/help-Search.png'
                        className='img-fluid'
                        alt='search'
                      />
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Search menu...'
                      />
                    </div>
                  </form>
                  <ul>
                    <li>
                      <div className='right-modal-lft'>
                        <img
                          src='/images/planner3.png'
                          className='img-fluid'
                          alt='planner'
                        />
                      </div>
                      <div className='right-modal-right'>
                        <h3>Events</h3>
                        <p>
                          Organise or find events and other things to do online
                          and nearby
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='right-modal-lft'>
                        <img
                          src='/images/handshake3.png'
                          className='img-fluid'
                          alt='handshake'
                        />
                      </div>
                      <div className='right-modal-right'>
                        <h3>Find Friends</h3>
                        <p>
                          Organise or find events and other things to do online
                          and nearby
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='right-modal-lft'>
                        <img
                          src='/images/network2.png'
                          className='img-fluid'
                          alt='network'
                        />
                      </div>
                      <div className='right-modal-right'>
                        <h3>Community</h3>
                        <p>
                          Organise or find events and other things to do online
                          and nearby
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='right-modal-lft'>
                        <img
                          src='/images/envelope1.png'
                          className='img-fluid'
                          alt='envelope'
                        />
                      </div>
                      <div className='right-modal-right'>
                        <h3>News Feed</h3>
                        <p>
                          Organise or find events and other things to do online
                          and nearby
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='right-modal-lft'>
                        <img
                          src='/images/flag1.png'
                          className='img-fluid'
                          alt='flag'
                        />
                      </div>
                      <div className='right-modal-right'>
                        <h3>Create Company Pages</h3>
                        <p>
                          Organise or find events and other things to do online
                          and nearby
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
