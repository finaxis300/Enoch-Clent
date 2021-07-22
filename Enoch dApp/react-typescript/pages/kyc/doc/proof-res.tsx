import React, { useState } from 'react'
import Header from '../../../Component/header'
import Link from 'next/link'
import SubHeaderDoc from '../../../Component/kyc/doc/sub-header'
import BredCrumbDoc from '../../../Component/kyc/doc/bredcrumb'

const ProofRes: React.FC = () => {
  return (
    <div className='container-fluid dashboard-body-bg'>
      <Header />
      <BredCrumbDoc />

      <div className='KYC-BODY ezl-dashboard-container'>
        <SubHeaderDoc />
        <div className='Proof-of-residence-headings'>
          <h1>Proof of residence</h1>
        </div>

        <div className='Proof-of-residence'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='We-Accept-sect'>
                <div className='we-accept-headings'>
                  <div className='we-accept-img mr-2'>
                    <img
                      src='/images/step-3-kyc-id/we-accept.png'
                      alt=''
                      className='img-fluid'
                    />
                  </div>
                  <h1>We Accept</h1>
                </div>

                <div className='We-Accept-list'>
                  <ul>
                    <li className='fast-list'>
                      <div className='list-bullet'>&nbsp;</div>
                      <h2>Dark Statements</h2>
                    </li>
                    <li>
                      <div className='list-bullet list-bullet-coustom'>
                        &nbsp;
                      </div>
                      <h2>
                        Utility Bills: The documents that you provide shouldn’t
                        be older than 3 months
                      </h2>
                    </li>
                    <li>
                      <div className='list-bullet list-bullet-coustom-3'>
                        &nbsp;
                      </div>
                      <h2>Intracable Twithouse phone line bills</h2>
                    </li>
                    <li>
                      <div className='list-bullet'>&nbsp;</div>
                      <h2>Tax Return</h2>
                    </li>
                    <li>
                      <div className='list-bullet'>&nbsp;</div>
                      <h2>Council Tax Bills</h2>
                    </li>
                    <li className='last-list'>
                      <div className='list-bullet list-bullet-coustom-2'>
                        &nbsp;
                      </div>
                      <h2>
                        Governement issued Certifications of Residence etc
                      </h2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='We-Accept-sect We-do-not-Accept-sect'>
                <div className='we-accept-headings'>
                  <div className='we-accept-img mr-2'>
                    <img
                      src='/images/step-3-kyc-id/we-dont-accept.png'
                      alt=''
                      className='img-fluid'
                    />
                  </div>
                  <h1>We Don’t Accept</h1>
                </div>

                <div className='We-Accept-list'>
                  <ul>
                    <li className='fast-list'>
                      <div className='list-bullet-2 '>&nbsp;</div>
                      <h2>Screenshots</h2>
                    </li>
                    <li>
                      <div className='list-bullet-2 '>&nbsp;</div>
                      <h2>Mobile Phone Bills</h2>
                    </li>
                    <li>
                      <div className='list-bullet-2 '>&nbsp;</div>
                      <h2>Medical Bills</h2>
                    </li>
                    <li>
                      <div className='list-bullet-2 '>&nbsp;</div>
                      <h2>Tax Return</h2>
                    </li>
                    <li>
                      <div className='list-bullet-2 '>&nbsp;</div>
                      <h2>Receipts for purchases</h2>
                    </li>
                    <li className='last-list'>
                      <div className='list-bullet-2 '>&nbsp;</div>
                      <h2>Insurance Statements</h2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='enoch-last-btn-sect'>
          <Link href='/kyc/doc'>
            <button className='btn-back pl-4 pr-4'>
              <a className='mr-3 ml-3'>BACK</a>
            </button>
          </Link>
          <Link href='/kyc/doc/proper-selfie'>
            <button className='btn-next button-primary pl-4 pr-4 btn-w-45'>
              <a>Continue</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ProofRes
