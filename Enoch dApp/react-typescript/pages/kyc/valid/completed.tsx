import React, { useState } from 'react'
import Header from '../../component/header'

const KYCCompleted: React.FC = () => {
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
                  <a href='#' className='dsh-active'>
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
        <div className='Verificaion-Successfully-completed-sect'>
          <div className='Verificaion-Successfully-completed-headings'>
          
          </div>
          <div className='Verificaion-Successfully-completed-img'>
            <img
              src='/images/step-4-imgs/success.png'
              alt='success'
              className='img-fluid'
            />
          </div>
          <div className='Verificaion-Successfully-completed-text'>
           
          </div>

          <div className='need-help'>
            <h4>
              Need help ? <a href='#'>contact support</a>
            </h4>
          </div>
        </div>

        <div className='KYC-step-4-btn'>
          <button className='button-primary'>
            <a href='#'>Go to Your Personal Profile</a>
          </button>
        </div>
      </div>
    </div>
  )
}
export default KYCCompleted
