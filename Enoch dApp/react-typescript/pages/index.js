
import React, { Component } from 'react';
import * as _ from 'lodash';
import classnames from 'classnames';
import Enabled from '.././components/Common/Enabled';
import Default from '.././components/Common/Default';
import InProgress from '.././components/Common/InProgress';
import Complete from '.././components/Common/Complete';
import Projects from '.././components/Common/Projects';
import Header from '.././components/Common/Header';
const Icon1 = '/images/icon1.png';
const Icon2 = '/images/icon2.png';
const Icon3 = '/images/icon3.png';
const Icon4 = '/images/icon4.png';
const Icon1Active = '/images/icon1-active.png';
const Icon2Active = '/images/icon2-active.png';
const Icon3Active = '/images/icon3-active.png';
const Icon4Active = '/images/icon4-active.png';
const taglist = [
  {
    id: 'apply',
    name: 'APPLY',
    content: 'Apply for whitelisting in 2 minutes',
    img: Icon1,
    img1: Icon1Active,
    selected: false,
  },
  {
    id: 'getapproved',
    name: 'GET APPROVED',
    img: Icon2,
    img1: Icon2Active,
    content: 'Quick check on your eligibity to invest on the platform',
    selected: false,
  },
  {
    id: 'exchange',
    name: 'EXCHANGE/TRADE',
    content: 'Direct custody, Trustless end to end decentralized execution',
    img: Icon3,
    img1: Icon3Active,
    selected: false,
  },
  {
    id: 'stakereward',
    name: 'STAKE REWARD',
    content: 'STAKE is minted as a reward based on the amount of STAKE',
    img: Icon4,
    img1: Icon4Active,
    selected: false,
  },




];
const blocks = [
  {
    component: Enabled,
    tagsbox: ['Enabled'],

  },
  // {
  //   component: InProgress,

  // },
  // {
  //   component: Complete,

  // },
];

class Home extends Component {

  constructor(props) {
    super();
    this.state = {
      tags: taglist,
      blocks: blocks,
      filterBlock: null,
      selectedTag: [],
      show: false,
      showMain: true,
    };
  }


  toggleAll = (tag, i, checked) => {
    console.log(tag, i, checked);

    const newTag = this.state.tags;
    newTag[i].selected = !newTag[i].selected;
    this.setState({
      tags: newTag,
    });
    this.filteredBlock(tag.name);
  };
  filteredBlock = (tag) => {
    let newBlockList = [];
    let selection = [];
    this.state.tags.forEach((tag) => {
      if (tag.selected == true) {
        selection.push(tag.name);
      }
    });
    this.state.blocks.map((block) => {
      // if (tag) {
      // const match = _.intersection(block.tagsbox, selection);
      //   if (match.length) {
      //     newBlockList.push(block);
      //   }
      // } else {
      //   newBlockList.push(block);
      // }
    });

    this.setState({ filterBlock: newBlockList, selectedTag: selection });
  };
  render() {
    const { tags } = this.state;
    console.log('state******', this.state);
    // console.log(this.state.selectedTag);
    const { showMain } = this.state;

    return (
      <>
        <div class="container-fluid dashboard-body-bg">
          <Header />
          <div class="row">
            <div class="dashboard-header-bredcrumb">
              <div class="ezl-dashboard-container">
                <div class="col-12">
                  <ul>
                    <li class="mr-2"><img src="/images/bread-crumb-icon-home.png" alt="icon" class="img-fluid" /> </li>
                    <li class="mr-1"><a href="#" class="dsh-active-black"> Menu / </a></li>
                    <li><a href="#"> Overview</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="ezl-dashboard-container">
            <div class="row">
              <div class="col-lg-6">
                <div class="row">
                  {this.state.tags &&
                    this.state.tags.map((tag, i) => (
                      <div class="col-md-6" >

                        <div onClick={(event) => {
                          this.toggleAll(tag, i, event.target.checked);
                        }}
                          key={i}
                          className={classnames(
                            'ezl-dashboard-steps',
                            {
                              "ezl-dashboard-steps  step-active": tag.selected,

                            }
                          )}

                        >
                          <div class="ezl-dashboard-steps-img">
                            <img src={tag.img} alt="apply" class="img-fluid step-img" /><img src={tag.img1} alt="apply" class="img-fluid step-img-active" /></div>
                          <div class="ezl-dashboard-steps-txt">

                            <h3>{tag.name}</h3>
                            <p>{tag.content}</p>
                          </div>
                        </div>
                      </div>))}
                  {/* <div class="col-md-6">
                  <div class="ezl-dashboard-steps">
                    <div class="ezl-dashboard-steps-img"><img src="/images/icon2.png" alt="apply" class="img-fluid step-img" /><img src="/images/icon2-active.png" alt="apply" class="img-fluid step-img-active" /></div>
                    <div class="ezl-dashboard-steps-txt">
                      <h3>GET APPROVED</h3>
                      <p>Quick check on your eligibity to invest on the platform</p>
                    </div>
                  </div>
                </div> */}
                  {/* <div class="col-md-6">
                  <div class="ezl-dashboard-steps mb-md-0">
                    <div class="ezl-dashboard-steps-img"><img src="/images/icon3.png" alt="apply" class="img-fluid step-img" /><img src="/images/icon3-active.png" alt="apply" class="img-fluid step-img-active" /></div>
                    <div class="ezl-dashboard-steps-txt">
                      <h3>Exchange /trade</h3>
                      <p>Direct custody, Trustless end to end decentralized execution</p>
                    </div>
                  </div>
                </div> */}
                  {/* <div class="col-md-6">
                  <div class="ezl-dashboard-steps mb-md-0">
                    <div class="ezl-dashboard-steps-img"><img src="/images/icon4.png" alt="apply" class="img-fluid step-img" /><img src="/images/icon4-active.png" alt="apply" class="img-fluid step-img-active" /></div>
                    <div class="ezl-dashboard-steps-txt">
                      <h3>Stake Reward</h3>
                      <p>STAKE is minted as a reward based on the amount of STAKE</p>
                    </div>
                  </div>
                </div> */}

                </div>
              </div>
              {/* {this.state.selectedTag == [] && <Default />} */}
              {/* {this.state.selectedTag != [] && this.state.selectedTag[0] && <Enabled />}
            {this.state.selectedTag != [] && this.state.selectedTag[1] && <InProgress />}
            {this.state.selectedTag != [] && this.state.selectedTag[2] && <Complete />} */}
              {this.state.selectedTag != [] && this.state.selectedTag[3] ? <Projects /> : this.state.selectedTag[2] ? <Complete /> : this.state.selectedTag[1] ? <InProgress /> : this.state.selectedTag[0] ? <Enabled /> : <Default />}
              {/* {this.state.filterBlock == null && <InProgress />}
            {this.state.filterBlock == null && <Complete />}
            {this.state.filterBlock == null && <Projects />} */}


              {/* {this.state.filterBlock &&
                  this.state.filterBlock.map((block, i) => (
                    <li>
                      {block.component({
                        tags: block.tagsbox,
                        selectedTag: this.state.selectedTag,
                      })}
                    </li>
                  ))} */}

              {/* <div class="col-lg-6">
              <div class="ezl-dashboard-right-block">
                <div class="ezl-dashboard-right-block-txt">
                  <p class="ezl-dashboard-status ezl-disabled">Disabled</p>
                  <h2>Whitelisting <span>sERVICES</span></h2>
                </div>
                <div class="ezl-dashboard-right-block-img">
                  <img src="images/service-img.png" alt="service" class="img-fluid" />
                </div>
              </div>
            </div> */}
            </div>
            <div class="row ezl-marrgtop">
              <div class="col-lg-5">
                <div class="ezl-dashboard-stacking">
                  <h3>Staking STATS</h3>
                  <div class="ezl-dashboard-stacking-right">
                    <div class="ezl-dashboard-stacking-val">
                      <div class="stacking-img"><img src="/images/stacking.png" alt="stacking" class="img-fluid" /></div>
                      <div class="stacking-value">Value <span>$.00</span></div>
                    </div>
                    <div class="current-apr"><span class="current-apr-txt1"><img src="/images/Ellipse 4.png" alt="Ellipse 4" class="img-fluid mr-1" />Current APR</span><span class="current-apr-txt2">7.6%</span><span class="current-apr-txt3"><a href="#">More Info</a></span></div>
                    <div class="dashboard-next-btn"><a href="#"><img src="/images/next-btn.png" alt="next-btn" class="img-fluid" /></a></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="ezl-dashboard-portfolio">
                  <h3>poRTFOLIO</h3>
                  <div class="ezl-dashboard-stacking-right">
                    <div class="ezl-dashboard-stacking-val">
                      <div class="stacking-img"><img src="/images/stacking.png" alt="stacking" class="img-fluid" /></div>
                      <div class="stacking-value">Value <span>$.00</span></div>
                    </div>
                    <div class="ezl-dashboard-stacking-val">
                      <div class="stacking-img"><img src="/images/holding.png" alt="holding" class="img-fluid" /></div>
                      <div class="portfolio-value">holding <span>0</span><span class="line-height-0"><a href="#">No. of Assets </a></span></div>
                    </div>
                    <div class="dashboard-next-btn"><a href="#"><img src="/images/next-btn.png" alt="next-btn" class="img-fluid" /></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row ezl-custom-marg30">
              <div class="col-lg-6">
                <div class="ezl-dashboard-market-lft">
                  <h2>Recent Announcment</h2>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="ezl-dashboard-market-block">
                        <div class="maket-img"><img src="/images/market-1.png" alt="market" class="img-fluid" /></div>
                        <h3>Markets</h3>
                        <p>Stocks Are Poised for a Record Month; Oil Retreats: Markets Wrap</p>
                        <p class="ezl-dashboard-market-txtbttm">By <a href="#">Anchalee Worrachate</a> and <a href="#">Adam Haigh</a></p>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="ezl-dashboard-market-block">
                        <div class="maket-img"><img src="/images/market-2.png" alt="market" class="img-fluid" /></div>
                        <h3>Markets</h3>
                        <p>Stocks Are Poised for a Record Month; Oil Retreats: Markets Wrap</p>
                        <p class="ezl-dashboard-market-txtbttm">By <a href="#">Anchalee Worrachate</a> and <a href="#">Adam Haigh</a></p>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="ezl-dashboard-market-block">
                        <div class="maket-img"><img src="/images/market-3.png" alt="market" class="img-fluid" /></div>
                        <h3>Markets</h3>
                        <p>Stocks Are Poised for a Record Month; Oil Retreats: Markets Wrap</p>
                        <p class="ezl-dashboard-market-txtbttm">By <a href="#">Anchalee Worrachate</a> and <a href="#">Adam Haigh</a></p>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="ezl-dashboard-market-block">
                        <div class="maket-img"><img src="/images/market-4.png" alt="market" class="img-fluid" /></div>
                        <h3>Markets</h3>
                        <p>Stocks Are Poised for a Record Month; Oil Retreats: Markets Wrap</p>
                        <p class="ezl-dashboard-market-txtbttm">By <a href="#">Anchalee Worrachate</a> and <a href="#">Adam Haigh</a></p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="col-lg-6">
                <div class="ezl-dashboard-market-right">
                  <h2>Recent Transactions</h2>
                  <div class="ezl-announcement-tbl table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th><div class="mk-custm-hd">Timestamp</div></th>
                          <th><div class="mk-custm-hd">Nonce </div></th>
                          <th><div class="mk-custm-hd">TXN HASH </div></th>
                          <th><div class="mk-custm-hd">Value</div></th>

                        </tr>
                      </thead>


                      <tbody>
                        <tr>
                          <td colspan="4">
                            <div class="ezl-dashboard-market-right-block">
                              <div class="market-right"><img src="/images/Frame.png" alt="market" class="img-fluid" /></div>
                              <div class="ezl-no-data">No Data Available<br />Start <span>Exchange/trade</span></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>


                </div>
              </div>

            </div></div></div>

      </>
    );
  }
}

export default Home;
