import React, { useState } from 'react'
import { Formik, FormikErrors } from 'formik'
import * as Yup from 'yup'

import Link from 'next/link'
import Header from '../../component/header'



const SelectAccount: React.FC = () => {



    return (
        <div className="container-fluid dashboard-body-bg">
            <Header />
            <div className="row">
                <div className="dashboard-header-bredcrumb">
                    <div className="ezl-dashboard-container">
                        <div className="col-12 p-md-0">
                            <ul>
                                <li className="mr-2"><img src="/images/home-icon.png" alt="icon" className="img-fluid" /> </li>
                                <li><a href="javascript:void(0)" className="helpCenter-active-black pl-1"> Individual KYC / </a></li>
                                <li><a href="javascript:void(0)" className="pl-1"> Apply EKYC</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ezl-dashboard-container">
                <div className="Select-account-type-sect">
                    <div className="Select-account-tittle">
                        <h1>Select your account type </h1>
                    </div>
                </div>
                <div className="Select-account-body">
                    <div className="row">
                        <div className="col-md-6 p-0 m-bottom-for-sm-100">
                            <div className="Acc-type Acc-Individual">
                                <div className="Acc-type-img">
                                    <img src="/images/indivdual-acc-icon.png" alt="indivdual" className="img-fluid" />
                                </div>
                                <div className="Acc-type-headings Acc-Individual-headings">
                                    <h1>I AM AN Individual</h1>
                                </div>
                                <div className="Acc-type-list Acc-Individual-list">
                                    <ul>
                                        <li className="fa fa-circle"> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
                                        <li className="fa fa-circle"> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                                        <li className="fa fa-circle last-list"> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
                                    </ul>
                                </div>
                                <div className="Acc-type-btn Acc-Individual-btn">
                                    <button><a href="#">CONFIRM</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-0">
                            <div className="Acc-type Acc-Business">
                                <div className="Acc-type-img">
                                    <img src="/images/business-Acc-Icon.png" alt="business" className="img-fluid" />
                                </div>
                                <div className="Acc-type-headings Acc-Business-headings">
                                    <h1>I AM A BUSINESS</h1>
                                </div>
                                <div className="Acc-type-list Acc-Business-list">
                                    <ul>
                                        <li className="fa fa-circle"> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                                        <li className="fa fa-circle"> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></li>
                                        <li className="fa fa-circle last-list"> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span></li>
                                    </ul>
                                </div>
                                <div className="Acc-type-btn Acc-Business-btn">
                                    <button><a href="#">CONFIRM</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default SelectAccount;
