import React, { Component } from 'react';

const Logo = "'/img/logo.png';"


import Link from 'next/link';


class Header extends Component {
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
          <header class="custom-header">
            <div class="ezl-dashboard-header">
              <div class="menu-left">
                <div class="menu-wrap">
                  <a href="#menu" class="menu-link"><img src="/images/Menu.png" alt="Menu" class="img-fluid" /></a>
                </div>
                <div class="header-logo"><a href="#"><img src="/images/logo.png" alt="logo" class="img-fluid" /></a></div>
              </div>
              <div class="menuright-side">
                <div class="right-search">
                  <form class="search-form">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Fund, ISIN, Keyword " />
                      <button class="search-form-btn" type="Submit"><img class="search-img" src="/images/search.png" alt="search" /></button>
                    </div>
                  </form>
                </div>
                <div class="menu-mid-sect">
                  <ul id="submenubar">
                    <li class="pl-0"><span><img src="/images/home.png" alt="home" class="img-fluid" /></span><a href="#">HomE</a></li>
                    <li class=""><span><img src="/images/network.png" alt="network" class="img-fluid" /></span><a href="#">NETWORK</a></li>
                    <li class=""><span><img src="/images/project.png" alt="project" class="img-fluid" /></span><a href="#">PROJECTS</a></li>
                    <li class=""><span><img src="/images/hackathon.png" alt="hackathon" class="img-fluid" /></span><a href="#">Hackathon</a></li>
                    <li class=""><span><img src="/images/bounties.png" alt="bounties" class="img-fluid" /></span><a href="#">Bounteis</a></li>
                    <li class=""><span><img src="/images/jobs.png" alt="jobs" class="img-fluid" /></span><a href="#">Jobs</a></li>

                  </ul>
                  <div class="toggle-menu">
                    <div onclick="subtogglediv('submenubar','submenu-toggle');" class="d-inline-block">
                      <i class="fa fa-bars" aria-hidden="true" id="submenu-toggle"></i>
                    </div>
                  </div>
                </div>

                <div class="ezl-notificaion">
                  <div class="position-relative notificaion-dropdown ezl-notificaion-marg">
                    <a href="#" class="popup"><img src="/images/mail.png" alt="inbox" /></a>

                  </div>
                  <div class=" position-relative notificaion-dropdown">
                    <a href="#" class="popup"><img src="/images/Bell.png" alt="Bell" /><span class="notificaion-spn"></span></a>

                  </div>
                </div>
                <div class="ezl-user-ac">

                  <div class="account-d dropdown">
                    <div class="dropdown-buttn"><span class="popup" onclick="popupFunction()"><div class="user-img"><img src="/images/user-img.png" alt="user image" class="img-fluid" /></div></span>
                      <div class="popupbox dropdown-menu" id="myPopup">
                        <ul class="">
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </header>
        </div>

      </>
    );
  }
}

export default Header;
