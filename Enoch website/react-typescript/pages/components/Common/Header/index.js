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
						<li><a href="#" class="btn ezeo-startbtn">GET STARTED</a></li>
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

export default Header;
