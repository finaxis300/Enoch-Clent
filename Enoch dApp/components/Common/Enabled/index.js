import React, { Component } from 'react'
const Enabled = (props) => {


    return (
        <>
            <div class="col-lg-6">
                <div class="ezl-dashboard-right-block">
                    <div class="ezl-dashboard-right-block-txt">
                        <p class="ezl-dashboard-status ezl-enabled">Enabled</p>
                        <h2>Whitelisting <span>sERVICES</span></h2>

                    </div>
                    <div class="ezl-dashboard-right-block-img">
                        <img src="/images/service-img.png" alt="service" class="img-fluid" />
                    </div>
                    <div class="ezl-dashboard-progressbar-block">
                        <h3>Application progress</h3>
                        <div class="ezl-dashboard-progressbar">
                            <div class="ezl-dashboard-inner-progressbar">

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
export default Enabled;