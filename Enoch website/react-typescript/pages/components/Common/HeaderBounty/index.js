import React, { Component } from 'react';

const Logo = "'/img/logo.png';"


import Link from 'next/link';


class HeaderBounty extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }


  render() {
    return (
      <>
        <div class="row">
          <header class="banner-main">
            <div class="header-menu-main">
              <div class="Ezeo-container">
                <div class="header-menu">
                  <div class="header-menu-left">
                    <div class="barnd-logo">
                      <a href="/">
                        <img src="/images/Logo.png" alt="logo" class="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div class="header-menu-right">
                    <div class="menu-right" id="menubar">
                      <ul class="hover-menu">
                        <li><a href="javascript:void(0);">How it works</a></li>
                        <li class="dropdown">
                          <a href="javascript:void(0);">
                            Earn
							<i class="fa fa-chevron-down"></i>
                          </a>
                          <div class="dropdown-content">

                          </div>
                        </li>
                        <li class="">
                          <a href="/HackathonDetails">Hackathon</a>

                        </li>
                       
						<li class="">
                          <a href="/SupportProject">Support Projects
					
						  </a>
                          <div class="dropdown-content dropdown-content-list">

                          </div>
                        </li>
                        <li class="">
                          <a href="/Team">Team</a>

                        </li>
                        <li class="">
                          <a href="/Faq">FAQs</a>

                        </li>
                        <li>
                          <ul class="singnedin-users">
                            <li><a href="#"><img src="/images/notification-bell.png" alt="notification-bell" class="img-fluid" /></a></li>
                            <li><a href="#"><img src="/images/message.png" alt="message" class="img-fluid" /></a></li>
                            <li>
                              <img src="/images/user-login.png" alt="user-login" class="img-fluid" />
                              <a href="#" onclick="popupFunction();" class="active-user-drop"><i class="fa fa-chevron-down"></i></a>
                              <div id="myPopup" class="signedin-user-dtail">
                                <ul>
                                  <li></li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
              <div class="toggle-menu">
                <div onclick="togglediv('menubar','menu-toggle');" class="d-inline-block">
                  <i class="fa fa-bars" aria-hidden="true" id="menu-toggle"></i>
                </div>
              </div>
            </div>
          </header>
        </div>

      </>
    );
  }
}

export default HeaderBounty;
