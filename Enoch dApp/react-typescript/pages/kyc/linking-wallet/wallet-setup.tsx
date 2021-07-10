import React, { useState } from 'react'
import { Formik, FormikErrors } from 'formik'
import * as Yup from 'yup'

import Link from 'next/link'
import Header from '../../../Component/header'




const WalletSetup: React.FC = () => {



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

                <div className="Linked-Wallets-Setup">
                    <div className="Linked-Wallets-Setup-headings">
                        <span><img src="/images/step-2-imgs/Question%20Mark.png" alt="Question-Mark" className="img-fluid" /></span>
                        <span className="lw-headings-text">KYC/AML</span>
                    </div>
                    <div className="Linked-Wallets-Setup-body">
                        <p>Learn how to set up and link your digital wallet on <span>Helium dApp.</span> <br />EZL users should set up their KYC contract with a single hot or cold wallet. </p>

                        <p>Setting up a KYC/AML Contract is a one-time action as long as the same wallet are used in KYC verification. This guide uses Trezor as the cold wallet or MetaMask as the hot wallet. It’s similar for other Wallets too.</p>
                    </div>
                    <div className="Linked-Wallets-Setup-footer">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="Linked-Wallets-Setup-footer-card">
                                    <h1>See our guides to using other wallet types:</h1>
                                    <a href="#">
                                        <ul>
                                            <li className="mr-3">Linked Wallets Setup</li>
                                            <li><img src="/images/step-2-imgs/Link.png" alt="Link-icon" className="img-fluid" /></li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="Linked-Wallets-Setup-footer-img">
                                    <img src="/images/step-2-imgs/Frame.png" alt="Frame" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Setup-with-Trezor-MetaMask-sect">
                    <div className="MetaMask-header">
                        <h1>Setup with Trezor or MetaMask</h1>
                    </div>

                    <div className="MetaMask-body">
                        <p>Please have the Trezor wallet ready or the MetaMask browser extension installed and running. Log in and make sure the appropriate MetaMask account is selected.</p>
                        <p>Click  to the Governance Portal. Before setting up the contract, connect Trezor and MetaMask.</p>

                        <div className="Connect-MetaMask">
                            <h1><span>1.</span>Connect MetaMask</h1>
                            <p>Find the ““Connect to Wallet” drop-down menu, select “Connect to MetaMask.” . If MetaMask is active, the current account will show as an available wallet. Make sure this is the correct account and select it to use as the hot wallet.</p>
                        </div>

                        <div className="Connect-Trezor">
                            <h1><span>2.</span>Connect Trezor</h1>
                            <p>In the “Connect to Wallet” drop-down menu, select “Connect to Trezor.” The Trezor wallet must be plugged in for it to show up. Follow the steps to enter the Trezor’s pin and passcode. When prompted, select an address with ETH to use as the cold wallet. Click “Unlock Wallet</p>
                        </div>

                    </div>

                </div>

                <div className="enoch-last-btn-sect">
                    <Link href="/kyc/linking-wallet/select-wallet" ><button className="button-primary btn-next">NEXT</button></Link>
                </div>

            </div>

        </div>

    )
}
export default WalletSetup;
