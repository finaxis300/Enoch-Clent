import React, { Component, useState } from 'react'
// import DatePicker from 'react-date-picker';
// import DatePicker from 'react-date-picker/dist/entry.nostyle';
// const [value, onChange] = useState();
import { Formik } from "formik";
import { Form, Field } from "formik";
import * as Yup from "yup";
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import DropdownSign from '../../components/Common/DropdownSign';
import classnames from 'classnames';
class Signup extends Component {
    state = {
        moment: '',
    };
    constructor(props) {
        super(props);

        this.state = {
            popup: true,
            show: false,
            show1: true,
            show2: false,
            show3: true,

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
    }
    render() {

        return (
            <>
                <section>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6">

                                <div class="sign-up-form">
                                    <div class="signup-head">
                                        <div class="dapp-header-logo"><img src="/images/logo.png" alt="logo" class="img-fluid" /></div>
                                        <h2>Sign Up Now</h2>
                                    </div>

                                    <div class="account-cat">
                                        I am a
								<div class="dAppp-account-group">
                                            <span class="mr-4">
                                                <input id="Personal-acount" name="b-plan" type="radio" class="signuptablinks" onclick="contactfunc(event, 'Personal')" checked />
                                                <label for="Personal-acount">Personal</label>
                                            </span>
                                            <span>
                                                <input id="business-acount" name="b-plan" type="radio" class="signuptablinks" onclick="contactfunc(event, 'Business')" />
                                                <label for="business-acount">Business</label>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="tab-content">
                                        <div id="Personal" class="tab-pane contacttabcontent active">
                                            <Formik
                                                initialValues={{
                                                    fname: "",
                                                    lname: "",
                                                    email: "",
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
                                                validate={(values) => {
                                                    const errors = {};
                                                    if (!values.email) {
                                                        errors.email = 'Please enter your mail id';
                                                    } else if (
                                                        !/^[A-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!gmx.co.in)[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                                            values.email
                                                        )
                                                    ) {
                                                        errors.email = 'Please enter your mail id';
                                                    }
                                                    return errors;
                                                }}
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
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div className={classnames(
                                                                    'sign-form-input',
                                                                    {

                                                                        "success-block": values.fname != "",
                                                                        "error-block": errors.fname,

                                                                    }
                                                                )}>
                                                                    <input type="text" placeholder="First name" name="fname" onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.fname} />

                                                                    <div class="error-msg">{errors.fname}</div>


                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div className={classnames(
                                                                    'sign-form-input',
                                                                    {

                                                                        "success-block": values.lname != "",
                                                                        "error-block": errors.lname,

                                                                    }
                                                                )}>
                                                                    <input type="text" placeholder="Last name" name="lname" onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.lname} />
                                                                    {errors.lname && touched.lname ? (
                                                                        <div class="error-msg">{errors.lname}</div>
                                                                    ) : null}

                                                                </div>
                                                            </div>

                                                            <div class="col-md-6">
                                                                <div className={classnames(
                                                                    'sign-form-input',
                                                                    {

                                                                        "success-block": values.dob != "",
                                                                        "error-block": errors.dob,

                                                                    }
                                                                )}>
                                                                    {/* <input type="text" placeholder="Date of Birth" /> */}
                                                                    <DayPickerInput
                                                                        placeholder="Date of Birth"
                                                                        dayPickerProps={{
                                                                            month: new Date(2018, 10),
                                                                            showWeekNumbers: false,
                                                                            todayButton: 'Today',

                                                                        }}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.dob}
                                                                        name="dob"
                                                                    />
                                                                    {errors.dob && touched.dob ? (
                                                                        <div class="error-msg">{errors.dob}</div>
                                                                    ) : null}
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div className={classnames(
                                                                    'sign-form-input',
                                                                    {

                                                                        "success-block": values.country != "",
                                                                        "error-block": errors.country,

                                                                    }
                                                                )}>
                                                                    <div class="position-relative">
                                                                        {/* <div class="sign-form-drop-box">
                                                                    <a href="javascript:void(0)" onclick="signupCountry()" id="signupCountry" class="sign-form-droplist">Country</a>
                                                                </div> */}<a href="javascript:void(0)" onclick="signupCountry()" name="country" id="signupCountry" class="sign-form-droplist"
                                                                        ><DropdownSign
                                                                                filters={this.state.filt}
                                                                                defaultLabel=" Country"
                                                                            /></a>
                                                                        <div >
                                                                            <ul>
                                                                                {/* <li>Russia</li>
                                                                        <li>Germany</li>
                                                                        <li>U.K.</li>
                                                                        <li>France</li>
                                                                        <li>Italy</li>
                                                                        <li>Spain</li>
                                                                        <li>Ukraine	</li>
                                                                        <li>Poland	</li>
                                                                        <li>Romania	</li>
                                                                        <li>Netherlands	</li>
                                                                        <li>Belgium	</li>
                                                                        <li>Greece	</li>
                                                                        <li>Czech Republic	</li>
                                                                        <li>Portugal</li>
                                                                        <li>Sweden	</li>
                                                                        <li>Hungary	</li>
                                                                        <li>Belarus	</li>
                                                                        <li>Austria	</li>
                                                                        <li>Serbia	</li>
                                                                        <li>Switzerland	</li>
                                                                        <li>Bulgaria</li>
                                                                        <li>Denmark	</li>
                                                                        <li>Finland	</li>
                                                                        <li>Slovakia</li>
                                                                        <li>Norway	</li>
                                                                        <li>Ireland	</li>
                                                                        <li>Croatia	</li>
                                                                        <li>Moldova	</li>
                                                                        <li>Bosnia & Herzegovina</li>
                                                                        <li>Albania	</li>
                                                                        <li>Lithuania</li>
                                                                        <li>TFYR Macedonia</li>
                                                                        <li>Slovenia</li>
                                                                        <li>Latvia	</li>
                                                                        <li>Estonia	</li>
                                                                        <li>Montenegro	</li>
                                                                        <li>Luxembourg	</li>
                                                                        <li>Malta</li>
                                                                        <li>Iceland	</li>
                                                                        <li>Andorra	</li>
                                                                        <li>Monaco	</li>
                                                                        <li>Liechtenstein</li>
                                                                        <li>San Marino</li>
                                                                        <li>Holy See</li> */}

                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div className={classnames(
                                                                    'sign-form-input',
                                                                    {

                                                                        "success-block": values.email != "",
                                                                        "error-block": errors.email,

                                                                    }
                                                                )}>

                                                                    <input type="email" placeholder="Email" name="email" onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.email} />{errors.email && touched.email ? (
                                                                            <div class="error-msg">{errors.email}</div>
                                                                        ) : null}
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div className={classnames(
                                                                    'sign-form-input d-flex',
                                                                    {

                                                                        "success-block": values.phone != "",
                                                                        "error-block": errors.phone,

                                                                    }
                                                                )}>
                                                                    <div class="position-relative signup-phn">
                                                                        <div class="sign-form-drop-box2">
                                                                            <a href="javascript:void(0)" onclick="selectphone()" id="selectphone" class="sign-form-droplist sign-form-droplist-phn">+00</a>
                                                                        </div>
                                                                        <div id="selectphone-form-DropdownList" class="sign-form-content signup-poohe-content">
                                                                            <ul class="sign-form-drop-scrollable">
                                                                                <li><div class="contact-inner">+11</div></li>
                                                                                <li><div class="contact-inner">+22</div> </li>
                                                                                <li><div class="contact-inner">+33</div></li>
                                                                                <li><div class="contact-inner"> +44</div></li>
                                                                                <li><div class="contact-inner"> +55</div></li>
                                                                                <li><div class="contact-inner"> +66</div></li>

                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="signup-number"><input type="text" name="phone" placeholder="Phone number" onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.phone} /></div>
                                                                </div>{errors.phone && touched.phone ? (
                                                                    <div class="error-msg">{errors.phone}</div>
                                                                ) : null}
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div className={classnames(
                                                                    'sign-form-input',
                                                                    {

                                                                        "success-block": values.pass != "",
                                                                        "error-block": errors.pass,

                                                                    }
                                                                )}>

                                                                    <input type="password" id="inputpassword1" name="pass" placeholder="Password" onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.pass} />{errors.pass && touched.pass ? (
                                                                            <div class="error-msg">{errors.pass}</div>
                                                                        ) : null}
                                                                    <span toggle="#inputpassword1" class="field-icon toggle-password"><img src="/images/eye.png" alt="eye" class="img-fluid eye1" /><img src="/images/eye2.png" alt="eye" class="img-fluid eye2" /></span>

                                                                </div>

                                                            </div>
                                                            <div class="col-md-6">
                                                                <div className={classnames(
                                                                    'sign-form-input',
                                                                    {

                                                                        "success-block": values.rpass != "",
                                                                        "error-block": errors.rpass,

                                                                    }
                                                                )}>

                                                                    <input type="password" id="inputpassword2" name="rpass" placeholder="Repeat password" onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.rpass} />{errors.rpass && touched.rpass ? (
                                                                            <div class="error-msg">{errors.rpass}</div>
                                                                        ) : null}
                                                                    <span toggle="#inputpassword2" class="field-icon toggle-password"><img src="/images/eye.png" alt="eye" class="img-fluid eye1" /><img src="/images/eye2.png" alt="eye" class="img-fluid eye2" /></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12">
                                                                <p class="signup-form-bttm-xt">Use 8 or more characters with a mix of letters, atleast one uppercase, numbers & symbols</p>
                                                            </div>
                                                            <div class="col-md-12">
                                                                <div class="signup-check">
                                                                    <div>
                                                                        <label class="signcheckbox-container">I want to receive the emails from Element Zero Dao
													<input type="checkbox" onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                value={values.terms} />
                                                                            <span class="signcontactcheckmark"></span>
                                                                        </label>
                                                                    </div>
                                                                    <div>
                                                                        <label class="signcheckbox-container">I agree to the <a href="/Authentication/Term">Privacy & Terms of service</a>  and <a href="#">fee</a>
                                                                            <input type="checkbox" onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                value={values.terms} />
                                                                            <span class="signcontactcheckmark"></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12"><button type="submit" class="sign-up-button" disabled={isSubmitting}>Sign up</button></div>
                                                            <div class="col-md-12"><p class="signup-bttm-xt">Already have an account?  <a href="/Authentication/SignIn">Sign in</a></p></div>
                                                        </div>
                                                    </form>)}
                                            </Formik>
                                        </div>
                                        <div id="Business" class="tab-pane contacttabcontent">
                                            <form action="" method="post">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="sign-form-input">
                                                            <input type="text" placeholder="First name" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="sign-form-input">
                                                            <input type="text" placeholder="Last name" />
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class="sign-form-input">
                                                            <input type="text" placeholder="Date of Birth" />
                                                            <span><img src="/images/Calendar.png" alt="Calendar" class="img-fluid" /></span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="sign-form-input">
                                                            <div class="position-relative">
                                                                <div class="sign-form-drop-box">
                                                                    <a href="javascript:void(0)" onclick="signupCountry()" id="signupCountry" class="sign-form-droplist">Country</a>
                                                                </div>
                                                                <div id="sign-form-DropdownList" class="sign-form-content">
                                                                    <ul class="sign-form-drop-scrollable">
                                                                        <li>Russia</li>
                                                                        <li>Germany</li>
                                                                        <li>U.K.</li>
                                                                        <li>France</li>
                                                                        <li>Italy</li>
                                                                        <li>Spain</li>
                                                                        <li>Ukraine	</li>
                                                                        <li>Poland	</li>
                                                                        <li>Romania	</li>
                                                                        <li>Netherlands	</li>
                                                                        <li>Belgium	</li>
                                                                        <li>Greece	</li>
                                                                        <li>Czech Republic	</li>
                                                                        <li>Portugal</li>
                                                                        <li>Sweden	</li>
                                                                        <li>Hungary	</li>
                                                                        <li>Belarus	</li>
                                                                        <li>Austria	</li>
                                                                        <li>Serbia	</li>
                                                                        <li>Switzerland	</li>
                                                                        <li>Bulgaria</li>
                                                                        <li>Denmark	</li>
                                                                        <li>Finland	</li>
                                                                        <li>Slovakia</li>
                                                                        <li>Norway	</li>
                                                                        <li>Ireland	</li>
                                                                        <li>Croatia	</li>
                                                                        <li>Moldova	</li>
                                                                        <li>Bosnia & Herzegovina</li>
                                                                        <li>Albania	</li>
                                                                        <li>Lithuania</li>
                                                                        <li>TFYR Macedonia</li>
                                                                        <li>Slovenia</li>
                                                                        <li>Latvia	</li>
                                                                        <li>Estonia	</li>
                                                                        <li>Montenegro	</li>
                                                                        <li>Luxembourg	</li>
                                                                        <li>Malta</li>
                                                                        <li>Iceland	</li>
                                                                        <li>Andorra	</li>
                                                                        <li>Monaco	</li>
                                                                        <li>Liechtenstein</li>
                                                                        <li>San Marino</li>
                                                                        <li>Holy See</li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="sign-form-input">

                                                            <input type="email" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="sign-form-input d-flex">
                                                            <div class="position-relative signup-phn">
                                                                <div class="sign-form-drop-box2">
                                                                    <a href="javascript:void(0)" onclick="selectphone()" id="selectphone" class="sign-form-droplist sign-form-droplist-phn">+00</a>
                                                                </div>
                                                                <div id="selectphone-form-DropdownList" class="sign-form-content signup-poohe-content">
                                                                    <ul class="sign-form-drop-scrollable">
                                                                        <li><div class="contact-inner">+11</div></li>
                                                                        <li><div class="contact-inner">+22</div> </li>
                                                                        <li><div class="contact-inner">+33</div></li>
                                                                        <li><div class="contact-inner"> +44</div></li>
                                                                        <li><div class="contact-inner"> +55</div></li>
                                                                        <li><div class="contact-inner"> +66</div></li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="signup-number"><input type="text" placeholder="Phone number" /></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="sign-form-input">

                                                            <input type="password" id="inputpassword1" placeholder="Password" />
                                                            <span toggle="#inputpassword1" class="field-icon toggle-password"><img src="/images/eye.png" alt="eye" class="img-fluid eye1" /><img src="/images/eye2.png" alt="eye" class="img-fluid eye2" /></span>

                                                        </div>

                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="sign-form-input">

                                                            <input type="password" id="inputpassword2" placeholder="Repeat password" />
                                                            <span toggle="#inputpassword2" class="field-icon toggle-password"><img src="/images/eye.png" alt="eye" class="img-fluid eye1" /><img src="/images/eye2.png" alt="eye" class="img-fluid eye2" /></span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <p class="signup-form-bttm-xt">Use 8 or more characters with a mix of letters, atleast one uppercase, numbers & symbols</p>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="signup-check">
                                                            <div>
                                                                <label class="signcheckbox-container">I want to receive the emails from Element Zero Dao
													<input type="checkbox" />
                                                                    <span class="signcontactcheckmark"></span>
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <label class="signcheckbox-container">I agree to the <a href="#">Privacy & Terms of service</a>  and <a href="#">fee</a>
                                                                    <input type="checkbox" />
                                                                    <span class="signcontactcheckmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12"><button type="submit" class="sign-up-button">Sign up</button></div>
                                                    <div class="col-md-12"><p class="signup-bttm-xt">Already have an account?  <a href="#">Sign in</a></p></div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 p-0">
                                <div class="sign-up-bg-image">
                                    <div class="twitwr-img"><a href="#"><img src="/images/twitter.png" alt="twitter" class="img-fluid" /></a></div>
                                    <div><img src="/images/signup.png" alt="signup" class="img-fluid" /></div>
                                    <div class="top-corner"><img src="/images/img1.png" alt="signup" class="img-fluid" /></div>
                                    <div class="bottom-corner"><img src="/images/img2.png" alt="signup" class="img-fluid" /></div>

                                    <div class="linkedin-img"><a href="#"><img src="/images/linkedin.png" alt="linkedin" class="img-fluid" /></a></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </>
        )
    }
}
export default Signup;