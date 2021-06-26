import React, { Component } from 'react'
const Complete = (props) => {


    return (
        <>
            <div class="col-lg-6">
                <div class="ezl-dashboard-right-block">
                    <div class="ezl-dashboard-right-block-txt">
                        <p class="ezl-dashboard-status ezl-complete">Complete</p>
                        <h2>Whitelisting <span>sERVICES</span></h2>

                    </div>
                    <div class="ezl-dashboard-right-block-img">
                        <img src="/images/service-img.png" alt="service" class="img-fluid" />
                    </div>
                    <div class="ezl-dashboard-progressbar-block">
                        <h3>Application progress</h3>
                        <div class="ezl-dashboard-progressbar">
                            <div class="ezl-dashboard-inner-progressbar inner-progressbar3">

                            </div>
                        </div>
                        <div class="ezl-dashboard-progressbar-bottm">
                            <span>Start</span>
                            <span>Complete</span>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )

}
export default Complete;