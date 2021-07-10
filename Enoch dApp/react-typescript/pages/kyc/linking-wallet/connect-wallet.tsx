import React, { useState } from 'react'
import { Formik, FormikErrors } from 'formik'
import * as Yup from 'yup'

import Link from 'next/link'
import Header from '../../../Component/header'




const ConnectWallet: React.FC = () => {



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

                <div className="KYC-step-2-2nd-sect">

                    <div className="Connect-wallet-sect">
                        <div className="Connect-wallet-headings">
                            <h1>Connect wallet</h1>
                        </div>

                        <div className="Connect-wallet-menu-sect">
                            <div className="menu-row-1">
                                <ul>
                                    <li className="MetaMaskIcon"><div className="CW-icon"><img src="/images/step-2-imgs/Ellipse-1.png" alt="MetaMask" className="img-fluid" /></div><h2>Metamask</h2></li>
                                    <li><div className="CW-icon"><img src="/images/step-2-imgs/Ellipse-2.png" alt="Ledger" className="img-fluid" /></div><h2>Ledger</h2></li>
                                    <li><div className="CW-icon"><img src="/images/step-2-imgs/Ellipse-3.png" alt="Trezor" className="img-fluid" /></div><h2>Trezor</h2></li>
                                    <li><div className="CW-icon"><img src="/images/step-2-imgs/Ellipse-4.png" alt="Torus" className="img-fluid" /></div><h2>Torus</h2></li>
                                    <li><div className="CW-icon"><img src="/images/step-2-imgs/Ellipse-5.png" alt="Argent" className="img-fluid" /></div><h2>Argent</h2></li>
                                </ul>
                            </div>

                            <div className="menu-row-2">
                                <ul>
                                    <li><div className="CW-icon row-2-cw-icon"><img src="/images/step-2-imgs/Ellipse-6.png" alt="CoinbaseWallet" className="img-fluid" /></div><h2 className="row-2-cw-icon-text">Coinbase Wallet</h2></li>
                                    <li><div className="CW-icon"><img src="/images/step-2-imgs/Ellipse-7.png" alt="GnosisSafe" className="img-fluid" /></div><h2>Gnosis Safe</h2></li>
                                    <li><div className="CW-icon"><img src="/images/step-2-imgs/Ellipse-8.png" alt="Formatic" className="img-fluid" /></div><h2>Formatic</h2></li>
                                    <li><div className="CW-icon"><img src="/images/step-2-imgs/Ellipse-9.png" alt="Portis" className="img-fluid" /></div><h2>Portis </h2></li>
                                    <li className="last-CW-icon-li" >&nbsp;</li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="enoch-last-btn-sect">
                    <button className="btn-back"><a href="#">BACK</a></button>
                    <button className="btn-next button-Disabled"><a href="#">Continue</a></button>
                </div>



            </div>
        </div>

    )
}
export default ConnectWallet;
