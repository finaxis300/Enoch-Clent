import React from 'react';



class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popup: true,


    };
  }

  render() {

    return (
      <>
        <div class="row">
          <div class="col-lg-12 p-0">
            <div class="footer-main center-align">
              <div class="Ezeo-container">
                <div class="footer-content">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="row">
                        <div class="col-md-3">
                          <div class="ezeo-footer-logoblock">
                            <div class="footer-logo"><img src="images/Logo.png" alt="footer logo" class="img-fluid" /></div>
                            <div class="below-logo">
                              <p>
                                Enoch is committed to the ecology and research of PoS and staking blockchains, focusing on the development of high-quality PoS projects, and providing state of the art tools, services and research reports.
													</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="ezeo-footer-list">
                            <h3 class="footer-head">Participate</h3>
                            <ul class="footer-menu p-0">
                              <li><a href="javascript:void(0);">How it works</a></li>
                              <li><a href="javascript:void(0);">Staking </a></li>
                              <li><a href="/HackathonDetails">Hackathon</a></li>
                              <li><a href="/BountyDetails">Bounties</a></li>
                              <li><a href="javascript:void(0);">Support Projects</a></li>
                              <li><a href="javascript:void(0);">Ambassadors Progrram</a><span class="ezeo-comming">Coming</span></li>
                              <li><a href="javascript:void(0);">Lunch Partners Program </a><span class="ezeo-comming">Coming</span></li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="ezeo-footer-list">
                            <h3 class="footer-head">Company</h3>
                            <ul class="footer-menu p-0">
                              <li><a href="javascript:void(0);">Our Mission</a></li>
                              <li><a href="/Team">Team</a></li>
                              <li><a href="javascript:void(0);">Career</a><span><img src="/images/hire-icon.png" alt="hire-icon" class="ml-1 mr-1 img-fluid" /><a href="#">we are hiring</a></span></li>

                            </ul>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="ezeo-footer-list">
                            <h3 class="footer-head">Support</h3>
                            <ul class="footer-menu p-0">
                              <li><a href="javascript:void(0);">Contact us</a></li>
                              <li><a href="/Faq">FAQ</a></li>

                            </ul>
                          </div>
                        </div>

                      </div>
                      <div class="row">
                        <div class="ezeo-footer-bottom">
                          <div class="ezeo-footer-bottom-lft">
                            Copyright &copy; 2021 Enoch, Inc. All rights reserved.
											</div>
                          <div class="ezeo-footer-bottom-right">
                            <ul class="ezeo-social-media">
                              <li><a href="#"><img src="/images/social-icon1.png" alt="social media" class="img-fluid" /></a></li>
                              <li><a href="#"><img src="/images/social-icon2.png" alt="social media" class="img-fluid" /></a></li>
                              <li><a href="#"><img src="/images/social-icon3.png" alt="social media" class="img-fluid" /></a></li>
                              <li><a href="#"><img src="/images/social-icon4.png" alt="social media" class="img-fluid" /></a></li>
                              <li><a href="#"><img src="/images/social-icon5.png" alt="social media" class="img-fluid" /></a></li>
                              <li><a href="#"><img src="/images/social-icon6.png" alt="social media" class="img-fluid" /></a></li>
                              <li><a href="#"><img src="/images/social-icon7.png" alt="social media" class="img-fluid" /></a></li>
                            </ul>
                            <p>
                              <span class="mr-3"><a href="#">Legal Disclaimer </a></span><span class="mr-3"><a href="#">Cookies & Privacy Policy </a></span><span><a href="#">   Copyright Policy</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>{this.state.popup ? (
            <div class="cookies-cls">
              <div class="Ezeo-container">
                <div class="cookies-cls-bottm">
                  <div class="cookies-cls-bottm-lft">
                    <div><img src="/images/cookis.png" alt="cookis" class="img-fluid" /></div>
                    <p>We use cookies to improve user experience, and analyze website traffic. For these reasons, we may share your site usage data with our analytics partners. By clicking "Accept & Procced" you consent to store on your device all the technologies described in our <a href="#">Cookie Policy.</a></p>
                  </div>
                  <div class="cookies-cls-bottm-right" onClick={() => {
                    this.setState({
                      popup: !this.state.popup,
                    });
                  }}>
                    <a href="javascript:void(0);" class="btn cookies-btn">Accept & Proceed</a>
                  </div>
                </div>
              </div>
            </div>) : null}
        </div>

      </>
    );
  }
}

export default Footer;
