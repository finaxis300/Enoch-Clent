import React, { useState } from 'react'

const LeftSideBar: React.FC = () => {
  return (
    <>
      <div className='col-lg-3 p-lg-0 custom-col-lg-3'>
        <div className='dApp-Win-a-Day-Banner-sect'>
          <img
            src='/images/win-a-day-banner.png'
            alt='Banner'
            className='img-fluid'
          />
        </div>
        <div className='dApp-daily-bonous-Banner-sect'>
          <img
            src='/images/daily-bonous-banner.png'
            alt='Banner'
            className='img-fluid'
          />
        </div>

        <div className='dApp-home-Create-Post-sect'>
          <h1>Home</h1>
          <p>
            Your personal Enoch frontpage. Comehere to check in with your
            favorite communication.
          </p>
          <div className='dApp-home-Create-Post-btn-sect'>
            <button className='Create-Post-btn'>
              <a href='#'>Create Post</a>
            </button>
            <button className='Create-Community-btn'>
              <a href='#'>Create Community</a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftSideBar

