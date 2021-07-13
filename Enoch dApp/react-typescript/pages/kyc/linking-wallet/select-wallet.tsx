import React, { useState } from 'react'
import { Formik, FormikErrors } from 'formik'
import * as Yup from 'yup'

import Link from 'next/link'
import Header from '../../../Component/header'




const SelectWallet: React.FC = () => {



    return (
        <div className="container-fluid dashboard-body-bg">
            <Header />
            <div className="row">
                <div className="dashboard-header-bredcrumb">
                    <div className="ezl-dashboard-container">
                        <div className="col-12">
                            <ul>
                                <li className="mr-2"><img src="/images/bread-crumb-icon-home.png" alt="icon" className="img-fluid" /> </li>
                                <li className="mr-1"><a href="#" className="dsh-active-black"> Individual KYC / </a></li>
                                <li><a href="#"> Linking wallet</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="KYC-BODY ezl-dashboard-container">
                <div className="Linking-wallet-four-icons-sect">
                    <div className="four-icons-list">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="Linking-wallet-icon Linking-wallet-icon-1">
                                    <div className="Linking-wallet-icon-img Linking-wallet-icon-1-img">
                                        <img src="/images/step-2-imgs/icon-1.png" alt="step-1" className="img-fluid" />
                                    </div>
                                    <div className="Linking-wallet-icon-text Linking-wallet-icon-1-text">
                                        <h1>Step 1</h1>
                                        <h2>Individual Profile</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="Linking-wallet-icon Linking-wallet-icon-2">
                                    <div className="Linking-wallet-icon-img Linking-wallet-icon-2-img">
                                        <img src="/images/step-2-imgs/icon-2.png" alt="step-2" className="img-fluid" />
                                    </div>
                                    <div className="Linking-wallet-icon-text Linking-wallet-icon-2-text Linking-wallet-active">
                                        <h1>Step 2</h1>
                                        <h2>Linking Wallet</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="Linking-wallet-icon Linking-wallet-icon-3">
                                    <div className="Linking-wallet-icon-img Linking-wallet-icon-3-img">
                                        <img src="/images/step-2-imgs/icon-3.png" alt="step-3" className="img-fluid" />
                                    </div>
                                    <div className="Linking-wallet-icon-text Linking-wallet-icon-3-text">
                                        <h1>Step 3</h1>
                                        <h2>User ID Documentation</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="Linking-wallet-icon Linking-wallet-icon-4">
                                    <div className="Linking-wallet-icon-img Linking-wallet-icon-4-img">
                                        <img src="/images/step-2-imgs/icon-4.png" alt="step-4" className="img-fluid" />
                                    </div>
                                    <div className="Linking-wallet-icon-text Linking-wallet-icon-4-text">
                                        <h1>Step 4</h1>
                                        <h2>KYC Validation</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="Thanks-for-Joining-section">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="Thanks-for-Joining-headings">
                                <h1>Thanks for joining. Here’s how you can get started with linking your wallet.</h1>
                            </div>
                            <div className="Thanks-for-Joining-list">
                                <ul>
                                    <li>1. <span>Select a wallet</span></li>
                                    <li>2. <span>Connect a selected wallet and sign a message </span></li>
                                    <li>3. <span>Confirm terms & condition to connect the wallet  </span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="Thanks-for-Joining-img">
                                <img src="/images/step-2-imgs/Joining-img.png" alt="Joining-img" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="enoch-last-btn-sect mb-5">
                    <button className="btn-back"><a href="#">BACK</a></button>
                    <Link href="/kyc/linking-wallet/connect-wallet" ><button className="button-primary btn-next btn-next-two">Connect wallet</button></Link>
                </div>

            </div></div>


    )
}
export default SelectWallet;
