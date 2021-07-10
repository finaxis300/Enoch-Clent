import React, { useState } from 'react'
import Header from '../../component/header'
import Link from 'next/link'

const KycRejected: React.FC = () => {
  return (
    <div className='container-fluid dashboard-body-bg'>
      <Header />
       <div className="row">
            <div className="dashboard-header-bredcrumb">
              <div className="ezl-dashboard-container">
                <div className="col-12">
                  <ul>
                    <li className="mr-2">
                      <img
                        src="/images/bread-crumb-icon-home.png"
                        alt="icon"
                        className="img-fluid"
                      />{' '}
                    </li>
                    <li className="mr-1">
                      <a href="#" className="dsh-active-black">
                        {' '}
                        Individual KYC /{' '}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dsh-active">
                        {' '}
                      </a>
                    </li>
                    <li>
                      <a href="#"> Status Update</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="KYC-BODY ezl-dashboard-container">
            <div className="Linking-wallet-four-icons-sect">
              <div className="four-icons-list">
                <div className="row">
                  <div className="col-md-3">
                    <div className="Linking-wallet-icon Linking-wallet-icon-1">
                      <div className="Linking-wallet-icon-img Linking-wallet-icon-1-img">
                        <img
                          src="/images/step-2-imgs/icon-1.png"
                          alt="step-1"
                          className="img-fluid"
                        />
                      </div>
                      <div className="Linking-wallet-icon-text Linking-wallet-icon-1-text">
                        <h1>Step 1</h1>
                        <h2>Individual Profile</h2>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="Linking-wallet-icon Linking-wallet-icon-2">
                      <div className="Linking-wallet-icon-img Linking-wallet-icon-2-img Linking-wallet-icon-img-act">
                        <img
                          src="/images/step-2-imgs/icon-2-act.png"
                          alt="step-2"
                          className="img-fluid"
                        />
                      </div>
                      <div className="Linking-wallet-icon-text Linking-wallet-icon-2-text">
                        <h1>Step 2</h1>
                        <h2>Linking Wallet</h2>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="Linking-wallet-icon Linking-wallet-icon-3">
                      <div className="Linking-wallet-icon-img Linking-wallet-icon-3-img Linking-wallet-icon-img-act">
                        <img
                          src="/images/step-4-imgs/icon-3-act.png"
                          alt="step-3"
                          className="img-fluid"
                        />
                      </div>
                      <div className="Linking-wallet-icon-text Linking-wallet-icon-3-text">
                        <h1>Step 3</h1>
                        <h2>User ID Documentation</h2>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="Linking-wallet-icon Linking-wallet-icon-4">
                      <div className="Linking-wallet-icon-img Linking-wallet-icon-4-img">
                        <img
                          src="/images/step-4-imgs/icon-4.png"
                          alt="step-4"
                          className="img-fluid"
                        />
                      </div>
                      <div className="Linking-wallet-icon-text Linking-wallet-icon-4-text Linking-wallet-active">
                        <h1>Step 4</h1>
                        <h2>KYC Validation</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Personal-KYC-Pending-sect Personal-KYC-rejected-sect">
              <div className="need-help">
                <h1>
                  Need help ? <a href="#">contact support</a>
                </h1>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="Personal-KYC-Pending-left-sect Personal-KYC-reject-left-sect">
                    <img
                      src="/images/step-4-imgs/rejectected-error.png"
                      alt="error"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="Personal-KYC-Pending-right-sect Personal-KYC-rejected-right-sect">
                    <div className="Personal-KYC-Pending-title">
                      <h1>KYC SUBMISSION</h1>
                      <h2>
                        is <span className="rejected">REJECTED</span>
                      </h2>
                    </div>
                    <div className="Personal-KYC-reject-text">
                      <p>
                        As part of compliance requirements, we have identified
                        that your KYC is incomplete due to absence of Clear
                        selfie and passport ID. Your KYC is now marked rejected
                        in your Enoch Account .Kindly submit all relevant KYC
                        Documents to ensure your account is fully compliant and
                        all features enabled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="KYC-step-4-btn mb-5">
              <button className="button-primary">
                <a href="#">Re-Submit KYC</a>
              </button>
            </div>

            <div className="col-lg-6">
              <div className="KYC-submission-sect">
                <div className="row">
                  <div className="col-2">
                    <div className="Path-success">
                      <img
                        src="/images/step-4-imgs/danger.png"
                        alt="danger"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-8 p-0">
                    <div className="KYC-submission-text KYC-submission-rejected-text">
                      <h1>
                        Your KYC is now marked rejected in your Account and are{' '}
                        <br /> auto-suspneded
                      </h1>
                      <h2>Contact support</h2>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="KYC-submission-close">
                      <img
                        src="/images/step-4-imgs/danger-close.png"
                        alt="X"
                        className="img-fluid KYC-submission-sect-close"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>
  )
}
export default KycRejected
