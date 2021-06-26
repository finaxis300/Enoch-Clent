import React, { Component } from 'react'
const Projects = (props) => {


    return (
        <>
            <div class="col-lg-6">
                <div class="ezl-dashboard-right-Carousel-sect">
                    <div class="w3-content w3-display-container">
                        <div class="overview-slider">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="overview-slider-left">
                                        <div class="row">
                                            <div class="col">
                                                <div class="slider-left-img">
                                                    <img src="/images/slider-card-active.png" alt="" class="img-fluid" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="slider-left-img">
                                                    <img src="/images/slider-card.png" alt="" class="img-fluid" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="slider-left-img">
                                                    <img src="/images/slider-card.png" alt="" class="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="overview-slider-right">
                                        <h1>Projects</h1>
                                        <h2>Galaxy Parents and Shadow Farming </h2>
                                        <p>- No need to stake your LP Tokens </p>
                                        <p>- No Gas Fees</p>
                                        <div class="overview-right-slider-nxt-btn">
                                            <a href="/overview/user-overview-eth"><img src="/images/next-btn.png" alt="" class="img-fluid" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <div class="slider-indecators w-100" >

                            <span class="demo w3-transparent" onclick="currentDiv(1)"><img src="/images/dots-act.png" alt="" class="ig-fluid" /></span>
                            <span class="demo w3-transparent" onclick="currentDiv(2)"><img src="/images/dots.png" alt="" class="ig-fluid" /></span>
                            <span class="demo w3-transparent" onclick="currentDiv(3)"><img src="/images/dots.png" alt="" class="ig-fluid" /></span>
                            <span class="demo w3-transparent" onclick="currentDiv(3)"><img src="/images/dots.png" alt="" class="ig-fluid" /></span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Projects;