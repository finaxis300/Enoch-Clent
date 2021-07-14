import React, { useState } from 'react'
import Header from '../../../Component/header'
import Link from 'next/link'
import BredCrumbValid from '../../../Component/kyc/valid/bredcrumb'
import SubHeaderValid from '../../../Component/kyc/valid/sub-header'

const KycPending: React.FC = () => {
  return (
    <div className='container-fluid dashboard-body-bg'>
      <Header />
      <BredCrumbValid />
      <div className='KYC-BODY ezl-dashboard-container'>
        <SubHeaderValid />
        <div className='Personal-KYC-Pending-sect'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='Personal-KYC-Pending-left-sect'>
                <img
                  src='/images/step-4-imgs/timer.png'
                  alt=''
                  className='img-fluid'
                />
              </div>
            </div>
            <div className='col-lg-9'>
              <div className='Personal-KYC-Pending-right-sect'>
                <div className='Personal-KYC-Pending-title'>
                  <h1>Your Personal</h1>
                  <h2>
                    KYC is <span className='Pending'>Pending</span>
                  </h2>
                </div>
                <div className='Personal-KYC-Pending-progress-bar'>
                  <div className='progress'>
                    <div
                      className='progress-bar w-75'
                      role='progressbar'
                    ></div>
                  </div>
                </div>
                <div className='Personal-KYC-Pending-footer'>
                  <h2>Start</h2>
                  <h2>Complete</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-6'>
          <div className='KYC-submission-sect'>
            <div className='row'>
              <div className='col-2'>
                <div className='Path-success'>
                  <img
                    src='/images/step-4-imgs/Path-success.png'
                    alt='success'
                    className='img-fluid'
                  />
                </div>
              </div>
              <div className='col-8 p-0'>
                <div className='KYC-submission-text'>
                  <h1>
                    Thank you! We have received your KYC submission and will
                    update you via the email .
                  </h1>
                  <h2>Learn More</h2>
                </div>
              </div>
              <div className='col-2'>
                <div className='KYC-submission-close'>
                  <img
                    src='/images/step-4-imgs/x.png'
                    alt='X'
                    className='img-fluid KYC-submission-sect-close'
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
export default KycPending
