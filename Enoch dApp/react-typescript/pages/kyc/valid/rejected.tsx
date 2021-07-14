import React, { useState } from 'react'
import Header from '../../../Component/header'
import Link from 'next/link'
import BredCrumbValid from '../../../Component/kyc/valid/bredcrumb'
import SubHeaderValid from '../../../Component/kyc/valid/sub-header'

const KycRejected: React.FC = () => {
  return (
    <div className='container-fluid dashboard-body-bg'>
      <Header />
      <BredCrumbValid />

      <div className='KYC-BODY ezl-dashboard-container'>
       <SubHeaderValid/>

        <div className='Personal-KYC-Pending-sect Personal-KYC-rejected-sect'>
          <div className='need-help'>
            <h1>
              Need help ? <a href='#'>contact support</a>
            </h1>
          </div>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='Personal-KYC-Pending-left-sect Personal-KYC-reject-left-sect'>
                <img
                  src='/images/step-4-imgs/rejectected-error.png'
                  alt='error'
                  className='img-fluid'
                />
              </div>
            </div>
            <div className='col-lg-9'>
              <div className='Personal-KYC-Pending-right-sect Personal-KYC-rejected-right-sect'>
                <div className='Personal-KYC-Pending-title'>
                  <h1>KYC SUBMISSION</h1>
                  <h2>
                    is <span className='rejected'>REJECTED</span>
                  </h2>
                </div>
                <div className='Personal-KYC-reject-text'>
                  <p>
                    As part of compliance requirements, we have identified that
                    your KYC is incomplete due to absence of Clear selfie and
                    passport ID. Your KYC is now marked rejected in your Enoch
                    Account .Kindly submit all relevant KYC Documents to ensure
                    your account is fully compliant and all features enabled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='KYC-step-4-btn mb-5'>
          <button className='button-primary'>
            <a href='#'>Re-Submit KYC</a>
          </button>
        </div>

        <div className='col-lg-6'>
          <div className='KYC-submission-sect'>
            <div className='row'>
              <div className='col-2'>
                <div className='Path-success'>
                  <img
                    src='/images/step-4-imgs/danger.png'
                    alt='danger'
                    className='img-fluid'
                  />
                </div>
              </div>
              <div className='col-8 p-0'>
                <div className='KYC-submission-text KYC-submission-rejected-text'>
                  <h1>
                    Your KYC is now marked rejected in your Account and are{' '}
                    <br /> auto-suspneded
                  </h1>
                  <h2>Contact support</h2>
                </div>
              </div>
              <div className='col-2'>
                <div className='KYC-submission-close'>
                  <img
                    src='/images/step-4-imgs/danger-close.png'
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
export default KycRejected
