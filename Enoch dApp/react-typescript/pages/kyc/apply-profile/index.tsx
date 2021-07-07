import React, { useState, Component } from 'react';
import { Formik, FormikErrors } from 'formik'
import * as Yup from 'yup'

import Link from 'next/link'
import Header from '../../component/header'
// import { Formik } from "formik";
// import { Form, Field } from "formik";
// import * as Yup from "yup";
// import Dropdown from '../../../components/Common/Dropdown'
// import DropdownFlag from '../../../components/Common/DropdownFlag';
// import DatePicker from 'react-date-picker';
import "react-datepicker/dist/react-datepicker.css";


import DatePicker from "react-datepicker";
// import DatePicker from 'react-date-picker';
import "react-datepicker/dist/react-datepicker.css";
import classnames from 'classnames';
// import DropdownDocs from '../../../components/Common/DropdownDocs';
// import DropdownKyc from '../../../components/Common/DropdownKyc';



interface KycProfile {
    popup: true;
    show: false;
    show1: true;
    show2: false;
    show3: true;
    show4: "";
    show5: "";
    file: "";
    classnames: '';
    imagePreviewUrl: string;
    filtr: [];
    filt: [];
    fname: string;
    lname: string;
    mname: string;
    email: string;
    dob: number;
    city: string;
    count: string;
    add1: string;
    add2: string;
    postal: number;


}

class ApplyKycProfile extends React.Component<{}, KycProfile> {
    constructor(props: any) {
        super(props);
        this.state = {
            popup: true,
            show: false,
            show1: true,
            show2: false,
            show3: true,
            show4: false,
            show5: true,
            imagePreviewUrl: '/images/profile-pic.png',
            filtr: [
                {
                    Image: "/images/flags/uk.png",
                    label: 'United Kingdom',
                    code: "+44",
                    selected: false,
                },
                {
                    Image: "/images/flags/usa.png",
                    label: 'United States of America',
                    code: "+1",
                    selected: false,
                },

                {
                    Image: "/images/flags/Uruguay.png",
                    label: 'Uruguay',
                    code: "+598",
                    selected: false,
                },
                {
                    Image: "/images/flags/Uzbekistan.png",
                    label: 'Uzbekistan',
                    code: "+998",
                    selected: false,
                }, {
                    Image: "/images/flags/Vanuatu.png",
                    label: 'Vanuatu',
                    code: "+678",
                    selected: false,
                }, {
                    Image: "/images/flags/Vatican%20City.png",
                    label: 'Vatican City',
                    code: "+39",
                    selected: false,
                },
                {
                    Image: "/images/flags/Venezuela.png",
                    label: 'Venezuela',
                    code: "+58",
                    selected: false,
                },
                {
                    Image: "/images/flags/Gembia.png",
                    label: 'Gambia',
                    code: "+220",
                    selected: false,
                }, {
                    Image: "/images/flags/Georgia.png",
                    label: 'Georgia',
                    code: "+995",
                    selected: false,
                }, {
                    Image: "/images/flags/Germany.png",
                    label: 'Germany',
                    code: "+49",
                    selected: false,
                },
                {
                    Image: "/images/flags/Ghana.png",
                    label: 'Ghana',
                    code: "+233",
                    selected: false,
                },
                {
                    Image: "/images/flags/Greece.png",
                    label: 'Greece',
                    code: "+30",
                    selected: false,
                }, {
                    Image: "/images/flags/Greenland.png",
                    label: 'Greenland',
                    code: "+299",
                    selected: false,
                }, {
                    Image: "/images/flags/Grenada.png",
                    label: 'Grenada',
                    code: "+1-473",
                    selected: false,
                },




            ],
            filt: [
                {
                    label: 'Afghanistan',
                    selected: false,
                },
                {
                    label: 'Albania',
                    selected: false,
                },

                {
                    label: 'Algeria',
                    selected: false,
                },
                {
                    label: 'Andorra',
                    selected: false,
                },
                {
                    label: 'Angola',
                    selected: false,
                }, {
                    label: 'Argentina',
                    selected: false,
                }, {
                    label: 'Australia',
                    selected: false,
                }, {
                    label: 'France',
                    selected: false,
                }, {
                    label: 'Gabon',
                    selected: false,
                }, {
                    label: 'Georgia',
                    selected: false,
                }, {
                    label: 'Germany',
                    selected: false,
                }, {
                    label: 'Ghana',
                    selected: false,
                }, {
                    label: 'Greece',
                    selected: false,
                }, {
                    label: 'Grenada',
                    selected: false,
                },










            ]

        };
        this.dateChanged = this.dateChanged.bind(this)
        this.clear = this.clear.bind(this)
    }
    dateChanged(d: any) {
        this.setState({ date: d });
    }

    clear() {
        this.setState({ date: null });
    }
    handleChange(date: any) {
        this.setState({
            startDate: date,
        });
    }
    _handleSubmit(e: any) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e: any) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
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
                                    <li><a href="#"> Apply EKYC</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="KYC-BODY ezl-dashboard-container">
                    <Formik
                        initialValues={{
                            fname: "",
                            lname: "",
                            mname: "",
                            email: "",
                            dob: "",
                            city: "",
                            count: "",
                            add1: "",
                            add2: "",
                            postal: "",

                            captcha: "",

                        }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!gmx.co.in)[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.email
                                )
                            ) {
                                errors.email = 'please type business email';
                            }
                            return errors;
                        }}
                        validationSchema={Yup.object().shape({
                            fname: Yup.string()
                                .min(2, "Too Short!")
                                .max(50, "Too Long!")
                                .required("Please enter your  name"),
                            lname: Yup.string()
                                .min(2, "Too Short!")
                                .max(50, "Too Long!")
                                .required("Please enter your last name"),
                            mname: Yup.string()
                                .min(2, "Too Short!")
                                .max(50, "Too Long!")
                                .required("Please enter your last name"),
                            dob: Yup.string()
                                .min(2, "Too Short!")
                                .max(50, "Too Long!")
                                .required("Please enter your city"),
                            add1: Yup.string()
                                .min(2, "Too Short!")
                                .max(100, "Too Long!")
                                .required("Please enter your company"),
                            add2: Yup.string()
                                .min(2, "Too Short!")
                                .max(100, "Too Long!")
                                .required("Please enter your website"),
                            postal: Yup.number().required(
                                "Please enter your phone number"

                            ),
                            count: Yup.number().required(
                                "Please enter your dial code"
                            ),
                            city: Yup.string()
                                .min(2, "Too Short!")
                                .max(500, "Too Long!")
                                .required("Please type your message"),
                            // enquiry: Yup.string().required("Please select option"),
                            terms: Yup.string().required("Please tick"),
                            flagdrop: Yup.string().required("Please select option"),

                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(true);
                            }, 400);
                        }}
                    >
                        {({
                            values,

                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            setFieldValue,
                            resetForm,

                            /* and other goodies */
                        }) => (
                            <form action="" method="post" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="Individual-profile-sect">
                                            <h1>Individual profile</h1>
                                            <div className="KYC-profile-picture-sect">
                                                <h2>Profile Picture</h2>
                                                <div className="KYC-profile-picture-content">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <div className="KYC-profile-picture">
                                                                <div className="KYC-profile-picture-img">
                                                                    <img src={imagePreviewUrl} alt="profile-picture" className="img-fluid" />
                                                                </div>
                                                                <input type="file" className="my_file" onChange={(e) => this._handleImageChange(e)} />

                                                            </div>
                                                        </div>

                                                        <div className="col-md-10">
                                                            <div className="KYC-profile-picture-text">
                                                                <h3>Upload your photo here</h3>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className={classnames('Personal-Information-sect', {
                                            "d-none": this.state.show5,
                                            "d-block": this.state.show5,
                                        })}>
                                            <ul className="kyc-card-headings">
                                                <li>Personal Information</li>
                                                <li className="pencil pencil-1 pencil-dactive pr-2"><img src="/images/KYC-AML/pencil.png" alt="pencil" className="img-fluid" onClick={() => {
                                                    this.setState({

                                                        show4: true,
                                                        show5: false

                                                    });
                                                }} /></li>
                                            </ul>

                                            <div className="KYC-Personal-Information">
                                                <ul>
                                                    <li className="">First name <span className="list-1">Robert</span></li>
                                                    <li className="">Middle name <span className="list-2">&nbsp;</span></li>
                                                    <li className="last-list">Last name <span className="list-3">Rose</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={classnames('Address-information Address-information-active Personal-Information-active', {
                                            "d-none": this.state.show4,
                                            "d-block": this.state.show4,
                                        })}>
                                            <ul className="kyc-card-headings">
                                                <li>Personal Information</li>
                                                <li className="edit-save-btn">
                                                    <button onClick={() => {
                                                        this.setState({

                                                            show4: false,
                                                            show5: true

                                                        });
                                                    }}><a href="#">Save</a></button>
                                                </li>
                                            </ul>

                                            <div className="KYC-Address-information KYC-Address-information-active KYC-Personal-Information-active">
                                                <ul>
                                                    <li >
                                                        <lable>First name</lable>
                                                        <input type="text" value="Robert" name="fname" onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.fname} />
                                                        {/* {errors.fname && touched.fname ? (
                                                                // <span>{errors.fname}</span>
                                                            ) : null} */}
                                                    </li>

                                                    <li>
                                                        <lable>Middle name</lable>
                                                        <input type="text" value="-" name="mname" onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.mname} />
                                                    </li>

                                                    <li className="last-list">
                                                        <lable>Last name</lable>
                                                        <input type="text" value="Rose" name="lname" onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.lname} />
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-6 rupacc">
                                        <div className={classnames('Account-Information AccInfoDefault', {
                                            "d-none": this.state.show1,
                                            "d-block": this.state.show1,
                                        })}>
                                            <ul className="kyc-card-headings">
                                                <li>Account Information</li>
                                                <li className="pencil pencil-2 pencil-dactive pr-2"><img src="/images/KYC-AML/pencil.png" alt="pencil" className="img-fluid" onClick={() => {
                                                    this.setState({

                                                        show: true,
                                                        show1: false

                                                    });
                                                }} /></li>
                                            </ul>

                                            <div className="KYC-Account-Information">
                                                <h1>I am an <span>&nbsp;Individual</span></h1>
                                                <ul>
                                                    <li>Date of Birth <span className="list-1">11/09/1976</span></li>
                                                    <li>Country <span className="list-2">United Kingdom</span></li>
                                                    <li>Email <span className="list-3 text-small">a.rose@ace.co.uk</span></li>
                                                    <li className="last-list">Phone No. <span className="list-4">+44 0755******678</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={classnames('Account-Information Account-Information-active', {
                                            "d-none": this.state.show,
                                            "d-block": this.state.show,
                                        })}>
                                            <ul className="kyc-card-headings">
                                                <li>Account Information</li>
                                                <li className="edit-save-btn">
                                                    <button onClick={() => {
                                                        this.setState({

                                                            show: false,
                                                            show1: true

                                                        });
                                                    }}><a href="#">Save</a></button>
                                                </li>
                                            </ul>

                                            <div className="KYC-Account-Information">
                                                <h1>I am an <span>&nbsp;Individual</span></h1>
                                                <ul>

                                                    <li className="date date__container"
                                                    >

                                                        <lable>Date of Birth</lable>
                                                        <div className="kycdatepic" >
                                                            {/* <input className="pl-5" type="text" id="custom__date" /> */}
                                                            <DatePicker selected={this.state.date}
                                                                onChange={this.dateChanged}
                                                                placeholderText="11/09/1976"
                                                                name="dob"
                                                                className={classnames(
                                                                    '',
                                                                    {

                                                                        "success-block": values.dob != "",
                                                                        "border-error": errors.dob,

                                                                    }
                                                                )}


                                                            />
                                                            <label className="date__trigger" for="custom__date"> <img src="/images/Date.png" alt="" className="img-fluid" /></label>
                                                            <label className="dropdown_trigger" for="custom__date"> <img src="/images/step-3-kyc-id/dropdown.png" alt="" className="img-fluid" /></label>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <lable className="country-dropdown-lable">Country</lable>
                                                        <div className={classnames(
                                                            'country-dropdown acc-country-dropdown',
                                                            {

                                                                "success-block": values.count = "",
                                                                "error-block": errors.count,

                                                            }
                                                        )}>
                                                            <div className="position-relative" >
                                                                <div className="timeSetting-drop-box">
                                                                    {/* <a id="AddressCountry-list" className="timeSetting-droplist select-active"><DropdownKyc
                                                                        filters={this.state.filtr}
                                                                        defaultLabel="Select country"
                                                                        name="count"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.count}
                                                                    /></a> */}
                                                                </div>
                                                                <div >
                                                                    <ul >
                                                                        {/* <li>Afghanistan</li>
                                                                        <li>Albania</li>
                                                                        <li>Algeria</li>
                                                                        <li>Andorra</li>
                                                                        <li>Angola</li>
                                                                        <li>Argentina</li>
                                                                        <li>Australia</li>
                                                                        <li>France</li>
                                                                        <li>Gabon</li>
                                                                        <li>Georgia</li>
                                                                        <li>Germany</li>
                                                                        <li>Ghana</li>
                                                                        <li>Greece</li>
                                                                        <li>Grenada</li> */}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <lable>Email</lable>
                                                        <input type="mail" placeholder="a.rose@ace.co.uk" name="email" onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email}
                                                            className={classnames(
                                                                '',
                                                                {

                                                                    "success-block": values.email != "",
                                                                    "border-error": errors.email,

                                                                }
                                                            )} />
                                                    </li>

                                                    <li className="last-list acc-info-last-list">
                                                        <lable className="phn-lable">Phone No.</lable>

                                                        <div className={classnames(
                                                            'sign-form-input d-flex',
                                                            {

                                                                "success-block": values.flagdrop != "",
                                                                "border-error": errors.flagdrop,

                                                            }
                                                        )}>
                                                            <div className="">
                                                                <div id="selectPhn-form-DropdownList">
                                                                    {/* <a id="selectPhn" className="sign-form-droplist sign-form-droplist-phn"><DropdownFlag
                                                                        filters={this.state.filtr}
                                                                        defaultLabel="+44"



                                                                    /></a> */}
                                                                </div>
                                                                <div >
                                                                    <ul className="">

                                                                        {/* <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/uk.png" alt="UK-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>United Kingdom</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+44</div>
                                                                </li>

                                                                <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/usa.png" alt="USA-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>United States of America</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+1</div>
                                                                </li>

                                                                <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/Uruguay.png" alt="Uruguay-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>Uruguay</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+598</div>
                                                                </li>

                                                                <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/Uzbekistan.png" alt="Uzbekistan-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>Uzbekistan</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+998</div>
                                                                </li>

                                                                <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/Vanuatu.png" alt="Vanuatu-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>Vanuatu</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+678</div>
                                                                </li>

                                                                <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/Vatican%20City.png" alt="Vatican City-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>Vatican City</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+39</div>
                                                                </li>

                                                                <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/Venezuela.png" alt="Venezuela-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>Venezuela</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+58</div>
                                                                </li>

                                                                <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/Gembia.png" alt="Gambia-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>Gambia</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+220</div>
                                                                </li>

                                                                <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/Georgia.png" alt="Georgia-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>Georgia</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+995</div>
                                                                </li>

                                                                <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/Germany.png" alt="Germany-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>Germany</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+49</div>
                                                                </li>

                                                                <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/Ghana.png" alt="Ghana-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>Ghana</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+233</div>
                                                                </li>

                                                                <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/Greece.png" alt="Greece-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>Greece</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+30</div>
                                                                </li>

                                                                <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/Greenland.png" alt="Greenland-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>Greenland</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+299</div>
                                                                </li>

                                                                <li>
                                                                    <div className="country-name-and-flag">
                                                                        <div className="country-flag">
                                                                            <img src="/images/flags/Grenada.png" alt="Grenada-flag" className="img-fluid" />
                                                                        </div>
                                                                        <div className="country-name">
                                                                            <p>Grenada</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="contact-inner">+1-473</div>
                                                                </li> */}

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="signup-number"><input type="text" placeholder="0755******678" /></div>
                                                        </div>


                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className={classnames('Address-information Add-info ', {
                                            "d-none": this.state.show3,
                                            "d-block": this.state.show3,
                                        })}>
                                            <ul className="kyc-card-headings">
                                                <li>Address information</li>
                                                <li className="pencil pencil-3 pencil-dactive pr-2"><img src="/images/KYC-AML/pencil.png" alt="pencil" className="img-fluid" onClick={() => {
                                                    this.setState({

                                                        show2: true,
                                                        show3: false

                                                    });
                                                }} /></li>
                                            </ul>

                                            <div className="KYC-Address-information">
                                                <ul>
                                                    <li>Address 1</li>
                                                    <li>Address 2</li>
                                                    <li>City/Town</li>
                                                    <li>Country</li>
                                                    <li className="last-list">Postal code</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={classnames('Address-information Address-information-active Add-info-act', {
                                            "d-none": this.state.show2,
                                            "d-block": this.state.show2,
                                        })}>
                                            <ul className="kyc-card-headings">
                                                <li>Address information</li>
                                                <li className="edit-save-btn">
                                                    <button onClick={() => {
                                                        this.setState({

                                                            show2: false,
                                                            show3: true

                                                        });
                                                    }}><a href="#">Save</a></button>
                                                </li>
                                            </ul>

                                            <div className="KYC-Address-information KYC-Address-information-active">
                                                <ul>
                                                    <li>
                                                        <lable>Address 1</lable>
                                                        <input type="text" placeholder="Address  1" name="add1" onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.add1}
                                                            className={classnames(
                                                                '',
                                                                {

                                                                    "success-block": values.add1 != "",
                                                                    "border-error": errors.add1,

                                                                }
                                                            )} />
                                                    </li>

                                                    <li>
                                                        <lable>Address 2</lable>
                                                        <input type="text" placeholder="Address  2" name="add2" onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.add2}
                                                            className={classnames(
                                                                '',
                                                                {

                                                                    "success-block": values.add2 != "",
                                                                    "border-error": errors.add2,

                                                                }
                                                            )} />
                                                    </li>

                                                    <li>
                                                        <lable>City/Town</lable>
                                                        <input type="text" placeholder="Select city" name="city" onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.city}
                                                            className={classnames(
                                                                '',
                                                                {

                                                                    "success-block": values.city != "",
                                                                    "border-error": errors.city,

                                                                }
                                                            )} />
                                                    </li>

                                                    <li>
                                                        <lable className="country-dropdown-lable">Country</lable>
                                                        <div className={classnames(
                                                            'country-dropdown acc-country-dropdown',
                                                            {

                                                                "success-block": values.count != "",
                                                                "border-error": errors.count,

                                                            }
                                                        )}>
                                                            <div className="position-relative" >
                                                                <div className="timeSetting-drop-box">
                                                                    {/* <a id="AddressCountry-list" className="timeSetting-droplist select-active"><DropdownKyc
                                                                        filters={this.state.filtr}
                                                                        defaultLabel="Select country"
                                                                        name="count"
                                                                    /></a> */}
                                                                </div>
                                                                <div >
                                                                    <ul >
                                                                        {/* <li>Afghanistan</li>
                                                                        <li>Albania</li>
                                                                        <li>Algeria</li>
                                                                        <li>Andorra</li>
                                                                        <li>Angola</li>
                                                                        <li>Argentina</li>
                                                                        <li>Australia</li>
                                                                        <li>France</li>
                                                                        <li>Gabon</li>
                                                                        <li>Georgia</li>
                                                                        <li>Germany</li>
                                                                        <li>Ghana</li>
                                                                        <li>Greece</li>
                                                                        <li>Grenada</li> */}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="last-list">
                                                        <lable>Postal code</lable>
                                                        <input type="text" placeholder="Postal code" name="postal" onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.postal} className={classnames(
                                                                '',
                                                                {

                                                                    "success-block": values.postal != "",
                                                                    "border-error": errors.postal,

                                                                }
                                                            )} />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6"></div>

                                    <div className="col-lg-6">
                                        <div className="enoch-last-btn-sect">
                                            <button className="button-primary pl-4 pr-4 mb-5 w-sm-100" disabled={isSubmitting}><a href="#">Continue</a></button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="KYC-submission-sect">
                                            <div className="row">
                                                <div className="col-2">
                                                    <div className="Path-success">
                                                        <img src="/images/step-4-imgs/Path-success.png" alt="success" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-8 p-0">
                                                    <div className="KYC-submission-text">
                                                        <h1>Your account is Enabled. Proceed to apply for KYC/AML.</h1>
                                                        <h2 className="pt-2">Learn More</h2>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="KYC-submission-close">
                                                        <img src="/images/step-4-imgs/x.png" alt="X" className="img-fluid KYC-submission-sect-close" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>)}
                    </Formik>   </div>

            </div>

        )
    }
}
export default ApplyKycProfile;