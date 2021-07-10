import React, { useState } from 'react'
import Header from '../../component/header'
import Link from 'next/link'

const KycPending: React.FC = () => {
  return (
    <div className='container-fluid dashboard-body-bg'>
      <Header />
      <div className='row'>
        <div className='dashboard-header-bredcrumb'>
          <div className='ezl-dashboard-container'>
            <div className='col-12'>
              <ul>
                <li className='home-icon'>
                  <img
                    src='/images/home-icon.png'
                    alt=''
                    className='img-fluid'
                  />
                </li>
                <li className='mr-1'>Individual KYC /</li>
                <li>
                  <a href='#' className='active'>
                    {' '}
                    Status Update
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='KYC-BODY ezl-dashboard-container'>
        <div className='Linking-wallet-four-icons-sect'>
          <div className='four-icons-list'>
            <div className='row'>
              <div className='col-md-3'>
                <div className='Linking-wallet-icon Linking-wallet-icon-1'>
                  <div className='Linking-wallet-icon-img Linking-wallet-icon-1-img'>
                    <img
                      src='/images/step-2-imgs/icon-1.png'
                      alt='step-1'
                      className='img-fluid'
                    />
                  </div>
                  <div className='Linking-wallet-icon-text Linking-wallet-icon-1-text'>
                    <h1>Step 1</h1>
                    <h2>Individual Profile</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='Linking-wallet-icon Linking-wallet-icon-2'>
                  <div className='Linking-wallet-icon-img Linking-wallet-icon-2-img Linking-wallet-icon-img-act'>
                    <img
                      src='/images/step-2-imgs/icon-2-act.png'
                      alt='step-2'
                      className='img-fluid'
                    />
                  </div>
                  <div className='Linking-wallet-icon-text Linking-wallet-icon-2-text'>
                    <h1>Step 2</h1>
                    <h2>Linking Wallet</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='Linking-wallet-icon Linking-wallet-icon-3'>
                  <div className='Linking-wallet-icon-img Linking-wallet-icon-3-img Linking-wallet-icon-img-act'>
                    <img
                      src='/images/step-4-imgs/icon-3-act.png'
                      alt='step-3'
                      className='img-fluid'
                    />
                  </div>
                  <div className='Linking-wallet-icon-text Linking-wallet-icon-3-text'>
                    <h1>Step 3</h1>
                    <h2>User ID Documentation</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='Linking-wallet-icon Linking-wallet-icon-4'>
                  <div className='Linking-wallet-icon-img Linking-wallet-icon-4-img'>
                    <img
                      src='/images/step-4-imgs/icon-4.png'
                      alt='step-4'
                      className='img-fluid'
                    />
                  </div>
                  <div className='Linking-wallet-icon-text Linking-wallet-icon-4-text Linking-wallet-active'>
                    <h1>Step 4</h1>
                    <h2>KYC Validation</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                      aria-valuenow='75'
                      aria-valuemin='0'
                      aria-valuemax='100'
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
