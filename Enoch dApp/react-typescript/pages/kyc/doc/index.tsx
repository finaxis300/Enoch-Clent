import React, { useState } from 'react'
import Header from '../../component/header'
import Link from 'next/link'

const RequiredKyc: React.FC = () => {
  return (
    <div className='container-fluid dashboard-body-bg'>
      <Header />
      <div className='row'>
        <div className='dashboard-header-bredcrumb'>
          <div className='ezl-dashboard-container'>
            <div className='col-12'>
              <ul>
                <li className='mr-2'>
                  <img
                    src='/images/bread-crumb-icon-home.png'
                    alt='icon'
                    className='img-fluid'
                  />{' '}
                </li>
                <li className='mr-1'>
                  <a href='#' className='dsh-active-black'>
                    {' '}
                    Individual KYC /{' '}
                  </a>
                </li>
                <li>
                  <a href='#'> User ID Documentation</a>
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
                  <div className='Linking-wallet-icon-img Linking-wallet-icon-3-img'>
                    <img
                      src='/images/step-2-imgs/icon-3-act.png'
                      alt='step-3'
                      className='img-fluid'
                    />
                  </div>
                  <div className='Linking-wallet-icon-text Linking-wallet-icon-3-text Linking-wallet-active'>
                    <h1>Step 3</h1>
                    <h2>User ID Documentation</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='Linking-wallet-icon Linking-wallet-icon-4'>
                  <div className='Linking-wallet-icon-img Linking-wallet-icon-4-img'>
                    <img
                      src='/images/step-2-imgs/icon-4.png'
                      alt='step-4'
                      className='img-fluid'
                    />
                  </div>
                  <div className='Linking-wallet-icon-text Linking-wallet-icon-4-text'>
                    <h1>Step 4</h1>
                    <h2>KYC Validation</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='Linked-Wallets-Setup'>
          <div className='Linked-Wallets-Setup-headings'>
            <span>
              <img
                src='/images/step-2-imgs/Question%20Mark.png'
                alt='Question-Mark'
                className='img-fluid'
              />
            </span>
            <span className='lw-headings-text'>Required KYC Documents</span>
          </div>
          <div className='Linked-Wallets-Setup-body Required-KYC-Documents'>
            <p>
              Prepare the following before completing ID & Address documentation
              step.
            </p>

            <ul>
              <li>
                1.
                <span className='ml-2'>
                  Provide Minimum Two Photo ID Documents{' '}
                </span>
              </li>
              <li>
                2.
                <span className='ml-2'>
                  Provide Front & Back Screenshot of the two ID Documents{' '}
                </span>
              </li>
              <li>
                3.
                <span className='ml-2'>
                  Provide Selfie of Yourself Holding one of your photo ID
                  Document{' '}
                </span>
              </li>
            </ul>
          </div>
          <div className='KYC-STEP-2-ID-footer'>
            <div className='KYC-ID-Instructions-sect'>
              <h1>Instructions</h1>
              <p>
                Take a selfie in a room with enough light. Hold up the document
                next to your face. Make sure face and ID both are clear in the
                photo. Choose the highest photo quality option on the camera.{' '}
                <span>
                  Be carefull not to cover any part of your ID with your
                  fingers.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className='enoch-last-btn-sect'>
          <Link href='#'>
            <button className='btn-back pl-4 pr-4'>
              <a className='mr-3 ml-3'>BACK</a>
            </button>
          </Link>
          <Link href='/kyc/doc/proof-res'>
            <button className='btn-next button-primary pl-4 pr-4 btn-w-45'>
              <a>Continue</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default RequiredKyc
