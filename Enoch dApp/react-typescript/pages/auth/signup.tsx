import React from 'react'
import Image from 'next/image'
import { Formik } from "formik";
import { Form, Field } from "formik";
import * as Yup from "yup";
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
// import classnames from 'classnames';
interface signup {
    email:string;
}
 function signup() {
    return (
        <div className="container-fluid">
			<div className="row">
				<div className="col-lg-6">
					
					<div className="sign-up-form">
						<div className="signup-head2">
							<div className="dapp-header-logo2">
                               </div>
							<h2>DeFi social network</h2>	
						</div>
											
						<Formik
                                                initialValues={{
                                                    fname: "",
                                                    lname: "",
                                                    // email: "",
                                                    terms: "",
                                                    pass: "",
                                                    rpass: "",
                                                    country: "",
                                                    dob: "",
                                                    website: "",
                                                    city: "",
                                                    dial: "",
                                                    phone: "",
                                                    companyname: "",

                                                    captcha: "",

                                                }}
                                                // validate={(values) => {
                                                //     const errors = {};
                                                //     if (!values.email) {
                                                //         errors.email = 'Please enter your mail id';
                                                //     } else if (
                                                //         !/^[A-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!gmx.co.in)[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                                //             values.email
                                                //         )
                                                //     ) {
                                                //         errors.email = 'Please enter your mail id';
                                                //     }
                                                //     return errors;
                                                // }}
                                                validationSchema={Yup.object().shape({
                                                    fname: Yup.string()
                                                        .min(2, "Too Short!")
                                                        .max(50, "Too Long!")
                                                        .required("Invalid first time"),
                                                    lname: Yup.string()
                                                        .min(2, "Too Short!")
                                                        .max(50, "Too Long!")
                                                        .required("Please enter your last name"),
                                                    country: Yup.string()

                                                        .required("Please  select the country, where you live in"),
                                                    companyname: Yup.string()
                                                        .min(2, "Too Short!")
                                                        .max(100, "Too Long!")
                                                        .required("Please enter your company"),
                                                    rpass: Yup.string()
                                                        .min(2, "Too Short!")
                                                        .max(100, "Too Long!")
                                                        .required("Please create the password"),
                                                    phone: Yup.number().required(
                                                        "Please enter your phone number"

                                                    ),
                                                    dob: Yup.number().required(
                                                        "Please  enter your date of birth"
                                                    ),
                                                    pass: Yup.string()
                                                        .min(2, "Too Short!")
                                                        .max(500, "Too Long!")
                                                        .required("Please create the password"),
                                                    // enquiry: Yup.string().required("Please select option"),
                                                    terms: Yup.string().required("Please tick"),


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
									<div className="col-md-6">
										<div id="sign-form-input" >											
											<input type="text" placeholder="First name"/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="sign-form-input">											
											<input type="text" placeholder="Last name"/>
										</div>
									</div>
									
									
									<div className="col-md-12">
										<div className="sign-form-input">
											
											<input type="email" placeholder="Email"/>
										</div>
									</div>
									
									<div className="col-md-6">
										<div className="sign-form-input mb-md-0">
											
											<input type="password" id="inputpassword1" placeholder="Password"/> 
											<span  className="field-icon toggle-password"></span>
									
										</div>
										
									</div>
									<div className="col-md-6">
										<div className="sign-form-input  mb-md-0">
											
											<input type="password" id="inputpassword2" placeholder="Repeat password"/> 
											<span  className="field-icon toggle-password"></span>
										</div>
									</div>
									<div className="col-md-12">
										<p className="signup-form-bttm-xt">Use 8 or more characters with a mix of letters, atleast one uppercase, numbers & symbols</p>
									</div>
									<div className="col-md-12">
										<div className="signup-check">
											<div>
												<label className="signcheckbox-container">I want to receive the emails from Element Zero Dao
													<input type="checkbox"/>
													<span className="signcontactcheckmark"></span>
												</label>
											</div>
											<div>
												<label className="signcheckbox-container">I agree to the <a href="#" className="sign-blue-clr">Privacy & Terms of service</a>  and <a href="#" className="sign-blue-clr">fee</a>
													<input type="checkbox"/>
													<span className="signcontactcheckmark"></span>
												</label>
											</div>
										</div>
									</div>
									<div className="col-md-12">
										<div className="signup-btn-grp">
											<button type="submit" className="sign-up-button">Sign up</button>
											<span>or</span>
											<div className="signup-vis-google-btn">
												<a href="#">SIGN IN WITH GOOGLE</a>
											</div>
										</div>
									</div>
									<div className="col-md-12"><p className="signup-bttm-xt">Already have an account?  <a href="#">Sign in</a></p></div>
								</div>
							</form>)}
                                            </Formik>
					
					</div>
				</div>
				{/* <div className="col-lg-6 p-0">
					<div className="sign-up-bg-image">
						<div className="twitwr-img"><a href="#"><img src="images/twitter.png" alt="twitter" className="img-fluid"/></a></div>
						<div><img src="images/signup.png" alt="signup" className="img-fluid"/></div>
						<div className="top-corner"><img src="images/img1.png" alt="signup" className="img-fluid"/></div>
						<div className="bottom-corner"><img src="images/img2.png" alt="signup" className="img-fluid"/></div>
						
						<div className="linkedin-img"><a href="#"><img src="images/linkedin.png" alt="linkedin" className="img-fluid"/></a></div>
					</div>
				</div> */}
				
			</div>
		</div>
    )
}

export default signup;
