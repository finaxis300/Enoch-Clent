
import React, { Component } from 'react';
import Footer from './components/Common/Footer';


import Header from './components/Common/Header';


class Home extends Component {
  state = {
    moment: '',
  };
  constructor(props) {
    super(props);

    this.state = {
      popup: false,

    };
  }


  render() {

    return (
      <>

        <Header />
        <div class="row">
          <div class="Ezeo-header-section">
            <div class="Ezeo-header-section-lft">
              <h2>Accelerate <br /><span>Blockchain</span> Adoption</h2>
              <p>Enoch provides the expertise and tools to support your blockchain journey</p>
              <div>
                <img src="images/head-logos.png" alt="logos" class="img-fluid" />
              </div>
              <div class="ezeo-subscribe-box">
                <h3>Be the first to know prizes  </h3>
                <form>
                  <div class="ezeo-subscribe-inputbox">
                    <input type="text" class="form-input" placeholder="your mail id" />
                    <button type="submit" class="ezeo-subscribe-btn"><img src="/images/arrow-right.png" alt="arrow-right" class="img-fluid" /></button>
                  </div>
                </form>
              </div>
              <div class="ezeo-contact-sect">
                <h3>CONTACT US</h3>
                <ul>
                  <li>CONTRIBUTOR</li>
                  <li>BUSINESS</li>
                  <li>INVESTOR</li>
                  <li>PARTNERS</li>
                  <li>MEDIA</li>
                </ul>
              </div>
            </div>
            <div class="Ezeo-header-section-right">
              <img src="/images/header-right-img.png" alt="logos" class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="ezeo-home-section1-bg">
            <div class="Ezeo-container">
              <div class="ezeo-home-section1">
                <div class="ezeo-home-section1-head">
                  <h2>We're a team of passionate technologists striving to build a fully integrated suite of financial products for crypto.</h2>
                  <p>Enoch is a trusted and experienced blockchain technology provider. We understand the technological needs of our customers, the challenges faced when considering blockchain technology and the best solutions to ensure successful blockchain deployments. We know that you want real business impact from any new technology.</p>
                </div>
                <div class="row">
                  <div class="col-lg-3">
                    <div class="ezeo-sect1-block">
                      <div class="ezeo-sect1-circle"><img src="/images/defi.png" alt="DeFi products in a dashboard" class="img-fluid" /></div>
                      <h3>DeFi products <br />in a dashboard</h3>
                      <p>Enabling users to interact with both traditional and digital assets in an open and global context.</p>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="ezeo-sect1-block">
                      <div class="ezeo-sect1-circle"><img src="/images/nfts.png" alt="NFTS WITH UTILITY AND INHERENT VALUE" class="img-fluid" /></div>
                      <h3>NFTS WITH UTILITY AND<br /> INHERENT VALUE</h3>
                      <p> proprietary NFT models, multi-utility functions, cross-platform inoperability and technology that enables true economic supply and demand fueling LIQUID NFT trading markets</p>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="ezeo-sect1-block">
                      <div class="ezeo-sect1-circle"><img src="/images/token.png" alt="Token Swaps, Automated Liquidity Mining " class="img-fluid" /></div>
                      <h3>Token Swaps, Automated <br />Liquidity Mining </h3>
                      <p> Leveraging the Layer2 protocol prior to ETH 2.0 dramatically improves the efficiency of on-chain clearing and settlement and effectively reduces Gas consumption.</p>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="ezeo-sect1-block">
                      <div class="ezeo-sect1-circle"><img src="/images/support.png" alt="Layer2 Support" class="img-fluid" /></div>
                      <h3>Layer2 <br />Support</h3>
                      <p> Leveraging the Layer2 protocol prior to ETH 2.0 dramatically improves the efficiency of on-chain clearing and settlement and effectively reduces Gas consumption.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="Ezeo-container">
            <div class="ezeo-home-section2">
              <div class="row">
                <div class="col-lg-6">
                  <div class="ezeo-home-section2-lft">
                    <img src="images/vdo-bg.png" alt="video" class="img-fluid" />
                    <div class="vdo-playbtn"><img src="/images/play-btn.png" alt="video" class="img-fluid" /></div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="ezeo-home-section2-right">
                    <h2>RUNNING PROJECT</h2>
                    <h3>Projects Statistics</h3>
                    <p class="ezeo-txtline1">Enoch  by the numbers</p>
                    <p class="ezeo-txtline2">We're proud of our history and growth and worked hard to get here.</p>
                    <div class="ezeo-projects">
                      <h3>Celebrate with us.</h3>
                      <ul>
                        <li>
                          <h3 class="ezeo-blue-clr">1.3.2017</h3>
                          <p>DATE FOUNDED</p>
                        </li>
                        <li>
                          <h3 class="ezeo-green-clr">70k+</h3>
                          <p>GPUs Accessible to <br /> the NETWORK</p>
                        </li>
                        <li>
                          <h3 class="ezeo-pink-clr">$2.9M</h3>
                          <p>TOTAL  LPD STACK</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="Ezeo-container">
            <div class="ezeo-home-section3">
              <div class="ezeo-home-section3-hd">
                <h2>GET STARTED</h2>
                <h3>What role will you play <br />in the Enoch?</h3>
                <p>Jump in by choosing the options that best describes  your intrests</p>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="ezeo-txt-block">
                    <h3>How to earn?</h3>
                    <p>Build exciting projects and upskill on development while earning USDT and other tokens. Find mentorship by connecting with talented developers and leaders of Blockchain top c. </p>
                    <div class="ezeo-earn-btn-block">
                      <span><a href="#" class="btn earn-btn">JOIN A HACKATHON</a></span>
                      <span><a href="#" class="btn earn-btn">Stake Liquidity Pool (LP)</a></span>
                      <span><a href="#" class="btn earn-btn mr-0">DEFI Staking</a></span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="ezeo-img-block offset-md-1">
                    <img src="/images/earn.png" alt="earn" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="row flex-row-reverse ezeo-margin-140">
                <div class="col-md-6">
                  <div class="ezeo-txt-block">
                    <h3>Support Projects</h3>
                    <p>Discover great open source projects working hard to impact the ecosystem. Get involved by funding, supporting, or mentoring projects to help push the Ethereum ecosystem forward. </p>
                    <div class="ezeo-earn-btn-block">
                      <span><a href="#" class="btn earn-btn">Create a Grant </a></span>
                      <span><a href="#" class="btn earn-btn">Get Involved</a></span>
                      <span><a href="#" class="btn earn-btn mr-0">Invest in Projects</a></span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="ezeo-img-block">
                    <img src="/images/support-project.png" alt="support-project" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="row ezeo-margin-140">
                <div class="col-md-6">
                  <div class="ezeo-txt-block2">
                    <h2>GET STARTED</h2>
                    <h3>Curious about<br />how Enoch Works?</h3>
                    <p>Through storytelling, illustration, and data, the Element Zero Primer explains, at a high level, the problem Enoch  solves and how it works.</p>
                    <div class="ezeo-earn-btn-block">
                      <span><a href="#" class="btn earn-btn2 mr-0">See more  </a></span>

                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="ezeo-img-block offset-md-1">
                    <img src="/images/zero-element.png" alt="zero-element" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="Ezeo-container">
            <div class="ezeo-home-section4">
              <div class="ezeo-home-section4-hd">
                <h2>Who's behind Enoch?</h2>
                <p>Enoch  is an open project that believes in open source code and creative contribution
from people with diverse interests and skillsets. Join us.</p>
                <div class="ezeo-checkout-btn-block"><a href="#" class="btn checkout-btn">MEET EZL INC.</a></div>
              </div>
              <div class="ezeo-home-whos-behind">
                <img src="/images/whos-behind.png" alt="whos-behind" class="img-fluid" />
              </div>

              <p class="ezeo-home-section4-bottomline">Intrested in joining Enoch ? <span><a href="#">Visit our open position</a></span></p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="ezeo-startup-sect">
            <p>Enoch provides the expertise and tools to support your blockchain journey</p>
            <p><a href="#" class="btn startup-btn">KNOW MORE</a></p>
            <div class="ezeo-startup-top"><span>STARTUP</span><span>Accelerator</span></div>
          </div>
        </div>

        <div class="row">
          <div class="Ezeo-container">
            <div class="ezeo-home-section6">
              <div class="ezeo-home-section6-hd">
                <h2>Our Partners</h2>
                <p>Enoch provides the expertise and tools to support your blockchain journey</p>
              </div>
              <div class="ezeo-home-section6-logos">
                <ul class="ezeo-home-section6-logos-list1">
                  <li><img src="images/company-logo1.png" alt="logo" class="img-fluid" /></li>
                  <li><img src="images/company-logo2.png" alt="logo" class="img-fluid" /></li>
                  <li><img src="images/company-logo3.png" alt="logo" class="img-fluid" /></li>
                  <li><img src="images/company-logo4.png" alt="logo" class="img-fluid" /></li>
                </ul>
                <ul class="ezeo-home-section6-logos-list2">
                  <li><img src="images/company-logo5.png" alt="logo" class="img-fluid" /></li>
                  <li><img src="images/company-logo6.png" alt="logo" class="img-fluid" /></li>
                  <li><img src="images/company-logo7.png" alt="logo" class="img-fluid" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="Ezeo-container">
            <div class="ezeo-home-section7">
              <h2>Join the Enoch?</h2>
              <p>Enoch provides the expertise and tools to support your blockchain journey</p>
              <ul>
                <li>
                  <div class="ezeo-home-section7-logos">
                    <div class="ezeo-home-section7-img"><img src="/images/Discord-Server.png" alt="Discord-Server" class="img-fluid" /></div>
                    <p>Discord Server</p>
                  </div>
                </li>
                <li>
                  <div class="ezeo-home-section7-logos">
                    <div class="ezeo-home-section7-img"><img src="/images/Reddit-EZL.png" alt="Reddit-EZL" class="img-fluid" /></div>
                    <p>Reddit.com/EZL</p>
                  </div>
                </li>
                <li>
                  <div class="ezeo-home-section7-logos">
                    <div class="ezeo-home-section7-img"><img src="/images/TwitterEZL.png" alt="TwitterEZL" class="img-fluid" /></div>
                    <p>Twitter/EZL</p>
                  </div>
                </li>
                <li>
                  <div class="ezeo-home-section7-logos">
                    <div class="ezeo-home-section7-img"><img src="/images/GithubEZL.png" alt="GithubEZL" class="img-fluid" /></div>
                    <p>Github/EZL</p>
                  </div>
                </li>
                <li>
                  <div class="ezeo-home-section7-logos">
                    <div class="ezeo-home-section7-img"><img src="/images/TelegramEZL.png" alt="Telegram/EZL" class="img-fluid" /></div>
                    <p>Telegram/EZL</p>
                  </div>
                </li>
                <li>
                  <div class="ezeo-home-section7-logos">
                    <div class="ezeo-home-section7-img"><img src="/images/MediumEZL.png" alt="Medium/EZL" class="img-fluid" /></div>
                    <p>Medium/EZL</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="Ezeo-container">
            <div class="ezeo-home-section8">
              <div class="row ezeo-margin-140">
                <div class="col-md-6">
                  <div class="ezeo-img-block">
                    <img src="/images/stay-informed.png" alt="stay-informed" class="img-fluid" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="ezeo-txt-block3">
                    <h3>Stay Informed</h3>
                    <p>Enoch provides the expertise and tools to support your blockchain journey</p>
                    <form>
                      <div class="ezeo-subscribe-inputbox">
                        <input type="text" class="form-input" placeholder="your mail id" />
                        <button type="submit" class="ezeo-subscribe-btn2"><img src="/images/arrow-right.png" alt="arrow-right" class="img-fluid" /></button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Footer />










      </>
    );
  }
}

export default Home;
