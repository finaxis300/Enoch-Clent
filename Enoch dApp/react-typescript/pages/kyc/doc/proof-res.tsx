import React, { useState } from 'react'
import Header from '../../component/header'
import Link from 'next/link'

const ProofRes: React.FC = () => {
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
