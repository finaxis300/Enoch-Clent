import React, { useState } from 'react'
import Header from '../../component/header'
import Link from 'next/link'

const ProperSelfie: React.FC = () => {
  return (
    <div className='container-fluid dashboard-body-bg'>
      <Header />
      <div className='row'>
        <div className='dashboard-header-bredcrumb'>
          <div className='ezl-dashboard-container'>
            <div className='col-12'>
              <ul>
                <li className='mr-2'>
                 '}
                </li>
                <li className='mr-1'>
                  <a href='#' className='dsh-active-black'>
                    {' '}
                  </a>
                </li>
                <li>
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

        <div className='Steps-to-a-Proper-Selfie-headings'>
          <h1>Steps to a Proper Selfie</h1>
        </div>

        <div className='Steps-to-a-Proper-Selfie'>
          <div className='row'>
            <div className='col-lg-9'>
              <p>
                Please take a photo of your face holding onto your Identity
                Document. Following are the steps to take a proper selfie:
              </p>
              <div className='row'>
                <div className='col-lg-5'>
                  <div className='Proper-Selfie-list Proper-Selfie-list-1'>
                    <ul>
                      <li>
                        1.
                        <span>
                          Please take a clear selfie with your documents
                        </span>
                      </li>
                      <li>
                        2.
                        <span>
                          Make sure your entire face is properly visible
                        </span>
                      </li>
                      <li>
                        3.
                        <span>
                          Image should be in Focus and in good contrast
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='col-lg-7'>
                  <div className='Proper-Selfie-list Proper-Selfie-list-2'>
                    <ul>
                      <li>
                        4.<span>The Image should not be pixelating.</span>
                      </li>
                      <li>
                        5.
                        <span>
                          The Image should not exceed 1mb and in JPEG format.
                        </span>
                      </li>
                      <li>
                        5.
                        <span>
                          Your Identity document should also be clearly visible{' '}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className='Proper-Selfie-img'>
                <img
                  src='/images/step-3-kyc-id/proper-selfi-img.png'
                  alt=''
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='enoch-last-btn-sect'>
          <Link href='/kyc/doc/proof-res'>
            <button className='btn-back pl-4 pr-4'>
              <a className='mr-3 ml-3'>BACK</a>
            </button>
          </Link>
          <Link href='/kyc/doc/required-doc'>
            <button className='btn-next button-primary pl-4 pr-4 btn-w-45'>
              <a>Continue</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ProperSelfie
