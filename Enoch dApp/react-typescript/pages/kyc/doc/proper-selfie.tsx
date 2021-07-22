import React, { useState } from 'react'
import Header from '../../../Component/header'
import Link from 'next/link'
import SubHeaderDoc from '../../../Component/kyc/doc/sub-header'
import BredCrumbDoc from '../../../Component/kyc/doc/bredcrumb'

const ProperSelfie: React.FC = () => {
  return (
    <div className='container-fluid dashboard-body-bg'>
      <Header />
      <BredCrumbDoc />

      <div className='KYC-BODY ezl-dashboard-container'>
        <SubHeaderDoc />
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
