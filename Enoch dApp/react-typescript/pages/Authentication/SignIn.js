import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Link from 'next/link';
import Header from '../../components/Common/Header';
import { Formik } from 'formik';
import { Form, Field } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moment: '',
      popup: false,
      showPassword: false,
      otpModelToggle: false,
      smsModelToggle: false,
      toggleSmsCall: false,
    };
  }

  handleShow = (event) => {
    console.log(event.target);
    this.setState({
      [event.target.id]: !this.state[event.target.id],
    });
  };

  otpModel = () => {
    return (
      <div class="enoch-dapp-modal-block">
        <div
          id="enoch-verify-modal"
          className={classnames('modal fade', {
            open: this.state.otpModelToggle,
            close: !this.state.otpModelToggle,
          })}
        >
          {/* <!-- Modal content --> */}
          <div class="modal-content">
            <div class="dapp-modal-head">
              <img src="/images/white-logo.png" alt="logo" class="img-fluid" />
            </div>
            <div class="modal-content-inner-body">
              <h3>2-STEP Verfication</h3>
              <p>
                You’ve activated 2-Step Verification with Authenticator app.
              </p>
              <p>Please enter the verification code in the feild below.</p>
              <div class="verfication-key">
                <ul class="fullwith">
                  <li>
                    <input type="text" class="form-control" maxlength="1" />
                  </li>
                  <li>
                    <input type="text" class="form-control" maxlength="1" />
                  </li>
                  <li>
                    <input type="text" class="form-control" maxlength="1" />
                  </li>
                  <li>
                    <input type="text" class="form-control" maxlength="1" />
                  </li>
                  <li>
                    <input type="text" class="form-control" maxlength="1" />
                  </li>
                  <li>
                    <input type="text" class="form-control" maxlength="1" />
                  </li>
                </ul>
              </div>
              <div class="signin-check">
                <label class="signcheckbox-container">
                  Remember this device
                  <input type="checkbox" />
                  <span class="signcontactcheckmark"></span>
                </label>
                <span
                  onClick={() =>
                    this.setState({
                      smsModelToggle: true,
                      otpModelToggle: false,
                    })
                  }
                >
                  <a href="#">Or click here to receive a code by SMS</a>
                </span>
              </div>
              <div>
                <button
                  type="button"
                  class="sign-up-button"
                  data-toggle="modal"
                  data-target="enoch-verify-modal"
                  onClick={() =>
                    this.setState({
                      otpModelToggle: !this.state.otpModelToggle,
                    })
                  }
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  smsModel = () => {
    return (
      <div class="enoch-dapp-modal-block">
        <div
          id="enoch-verify-modal"
          className={classnames('modal fade', {
            open: this.state.smsModelToggle,
            close: !this.state.smsModelToggle,
          })}
        >
          {/* <!-- Modal content --> */}
          <div class="modal-content">
            <div class="dapp-modal-head">
              <img src="/images/white-logo.png" alt="logo" class="img-fluid" />
            </div>
            <div class="modal-content-inner-body">
              <h3>OTP Verification</h3>
              <p>A verification code has sent your phone</p>
              <p class="dapp-modal-txt2">Phone-0044 - (+XX)-XXXXXXXX73 </p>
              <div class="verfication-key">
                <h4>Enter OTP</h4>
                <ul class="fullwith">
                  <li>
                    <input type="text" class="form-control" maxlength="1" />
                  </li>
                  <li>
                    <input type="text" class="form-control" maxlength="1" />
                  </li>
                  <li>
                    <input type="text" class="form-control" maxlength="1" />
                  </li>
                  <li>
                    <input type="text" class="form-control" maxlength="1" />
                  </li>
                  <li>
                    <input type="text" class="form-control" maxlength="1" />
                  </li>
                  <li>
                    <input type="text" class="form-control" maxlength="1" />
                  </li>
                </ul>
              </div>
              {this.state.toggleSmsCall ? (
                <p class="modal-bttm-xt">
                  Send voice OTP,
                  <a href="#" class="signin-btn">
                    {' '}
                    Call me now{' '}
                  </a>
                </p>
              ) : (
                <p class="modal-bttm-xt">
                  Didn’t reecive the OTP,{' '}
                  <a
                    href="#"
                    class="signin-btn"
                    onClick={() => {
                      this.setState({
                        toggleSmsCall: !this.state.toggleSmsCall,
                      });
                    }}
                  >
                    {' '}
                    Resend{' '}
                  </a>
                </p>
              )}

              <div class="signin-check">
                <label class="signcheckbox-container">
                  Remember this device
                  <input type="checkbox" />
                  <span class="signcontactcheckmark"></span>
                </label>
              </div>
              <div
                onClick={() =>
                  this.setState({
                    smsModelToggle: !this.state.smsModelToggle,
                  })
                }
              >
                <button
                  type="button"
                  class="sign-up-button"
                  data-toggle="modal"
                  data-target="enoch-verify-modal"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    const recaptchaRef = React.createRef();
    const { showPassword } = this.state;
    return (
      <>
        <section>
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6">
                <div class="sign-in-form">
                  <div class="signin-head">
                    <div class="dapp-header-logo">
                      <img
                        src="/images/logo-big.png"
                        alt="logo"
                        class="img-fluid"
                      />
                    </div>
                    <h2>Sign In</h2>
                    <p>See your growth with us</p>
                  </div>
                  <Formik
                    initialValues={{
                      fname: '',
                      lname: '',
                      email: '',
                      terms: '',
                      pass: '',
                      rpass: '',
                      country: '',
                      dob: '',
                      website: '',
                      city: '',
                      dial: '',
                      phone: '',
                      companyname: '',
                      captcha: '',
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = 'Please enter your mail id';
                      } else if (
                        !/^[A-Z0-9._%+-]+@(?!gmx.co.in)[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = 'Please enter your mail id';
                      } else if (
                        /^[A-Z0-9._%+-]+@(?!gmx.co.in)[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = '';
                      }
                      return errors;
                    }}
                    validationSchema={Yup.object().shape({
                      pass: Yup.string()
                        .min(2, 'Too Short!')
                        .max(500, 'Too Long!')
                        .required('Please create the password'),
                      // enquiry: Yup.string().required("Please select option"),
                      terms: Yup.string().required('Please tick'),
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
                          <div class="col-md-12">
                            <div class="input-label">Email*</div>
                            <div
                              className={classnames('sign-form-input', {
                                'green-boeder': errors.email == '',
                                'error-block': errors.email,
                              })}
                            >
                              <input
                                type="email"
                                placeholder="Email id"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                              />{' '}
                              {errors.email == '' && (
                                <span>
                                  <img
                                    src="/images/Check.png"
                                    alt="Check"
                                    class="img-fluid"
                                  />
                                </span>
                              )}
                              <div class="error-msg">{errors.email}</div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="input-label">Password*</div>
                            <div
                              className={classnames('sign-form-input', {
                                'green-boeder': values.pass != '',
                                'error-block': errors.pass,
                              })}
                            >
                              <input
                                type={showPassword ? 'text' : 'password'}
                                id="inputpassword1"
                                placeholder="Password"
                                name="pass"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.pass}
                              />
                              <span
                                toggle="#inputpassword1"
                                class="field-icon toggle-password"
                                onClick={this.handleShow}
                              >
                                <img
                                  src="/images/eye.png"
                                  alt="eye"
                                  class="img-fluid eye1"
                                  id="showPassword"
                                />
                                <img
                                  src="/images/eye2.png"
                                  alt="eye"
                                  class="img-fluid eye2"
                                  id="showPassword"
                                />
                              </span>
                              <div class="error-msg">{errors.pass}</div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="signin-check">
                              <label class="signcheckbox-container">
                                Remember me
                                <input type="checkbox" />
                                <span class="signcontactcheckmark"></span>
                              </label>
                              <span>
                                <Link href="/Authentication/reset-email-verification">
                                  <a>Forget Password?</a>
                                </Link>
                              </span>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <Link href="/Authentication/Authf">
                              <button type="submit" class="sign-up-button">
                                Sign In
                              </button>
                            </Link>
                          </div>
                          <div class="col-md-12">
                            <p class="signin-bttm-xt">
                              Not Registered yet?{' '}
                              <a
                                href="/Authentication/Signup"
                                class="signin-btn"
                              >
                                Create an account
                              </a>
                            </p>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>

                  {this.otpModel()}
                  {this.smsModel()}
                </div>
              </div>
              <div class="col-lg-6 p-0">
                <div class="sign-up-bg-image">
                  <div class="twitwr-img">
                    <a href="#">
                      <img
                        src="/images/twitter.png"
                        alt="twitter"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div>
                    <img
                      src="/images/signup.png"
                      alt="signup"
                      class="img-fluid"
                    />
                  </div>
                  <div class="top-corner">
                    <img
                      src="/images/img1.png"
                      alt="signup"
                      class="img-fluid"
                    />
                  </div>
                  <div class="bottom-corner">
                    <img
                      src="/images/img2.png"
                      alt="signup"
                      class="img-fluid"
                    />
                  </div>

                  <div class="linkedin-img">
                    <a href="#">
                      <img
                        src="/images/linkedin.png"
                        alt="linkedin"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SignIn;
