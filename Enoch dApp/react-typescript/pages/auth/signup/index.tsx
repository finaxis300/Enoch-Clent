import React, { useState } from 'react'



import GoogleLogin from 'react-google-login';
import 'react-day-picker/lib/style.css';


// import classnames from 'classnames';

const responseGoogle = () => {


}
const SignUpEmail: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [repeatPassword, setrepeatPassword] = useState(false)

    const initialValues: MyFormValues = {
        email: '',
        password: '',
        rpassword: '',
        fname: '',
        lname: ''

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">

                    <div className="sign-up-form">
                        <div className="signup-head2">
                            <div className="dapp-header-logo2">
                                <img src="/images/logo-big.png" alt="logo" class="img-fluid" />
                            </div>
                            <h2>DeFi social network</h2>
                        </div>

                        <Formik
                            initialValues={initialValues}
                            onSubmit={(values: MyFormValues, setSubmitting: any) => {
                                console.log('Enter in submit function', values)
                                // setTimeout(() => {
                                //   alert(JSON.stringify(values, null, 2))
                                //   setSubmitting(false)
                                // }, 500)
                            }}
                            // initialValues={{

                            //     lname: "",
                            //     email: "",
                            //     terms: "",
                            //     pass: "",
                            //     rpass: "",
                            //     country: "",
                            //     dob: "",
                            //     fname: "",



                            // }}
                            validate={(values: MyFormValues) => {
                                // type Error = {
                                //   email: string
                                // }
                                // var errors = {} as Error
                                let errors: FormikErrors<MyFormValues> = {}

                                if (!values.email) {
                                    errors.email = 'Please enter your mail id'
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                                        values.email
                                    )
                                ) {
                                    errors.email = 'Invalid email address'
                                }
                                // else if (
                                //   !/^[A-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!gmx.co.in)[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                //     errors.email
                                //   )
                                // ) {
                                //   errors.email = 'Invalid email address'
                                // }
                                return errors
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
                                rpassword: Yup.string()
                                    .min(2, "Too Short!")
                                    .max(100, "Too Long!")
                                    .required("Please create the password"),
                                phone: Yup.number().required(
                                    "Please enter your phone number"

                                ),
                                dob: Yup.number().required(
                                    "Please  enter your date of birth"
                                ),
                                password: Yup.string()
                                    .min(2, "Too Short!")
                                    .max(500, "Too Long!")
                                    .required("Please create the password"),
                                // enquiry: Yup.string().required("Please select option"),
                                terms: Yup.string().required("Please tick"),


                            })}

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
                            }:
                                any) => (

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className={classnames(
                                                'sign-form-input',
                                                {

                                                    "green-boeder": values.fname != "",
                                                    "error-block": errors.fname,

                                                }
                                            )}>
                                                <input type="text" placeholder="First name" name="fname" onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.fname} />
                                                {values.fname != '' && (
                                                    <span>
                                                        <img
                                                            src='/images/Check.png'
                                                            alt='Check'
                                                            className='img-fluid'
                                                        />
                                                    </span>
                                                )}

                                                <div className="error-msg">{errors.fname}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className={classnames(
                                                'sign-form-input',
                                                {

                                                    "green-boeder": values.lname != "",
                                                    "error-block": errors.lname,

                                                }
                                            )}>
                                                <input type="text" placeholder="Last name" name="lname" onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.lname} />
                                                {values.lname != '' && (
                                                    <span>
                                                        <img
                                                            src='/images/Check.png'
                                                            alt='Check'
                                                            className='img-fluid'
                                                        />
                                                    </span>
                                                )}
                                                <div className="error-msg">{errors.lname}</div>
                                            </div>
                                        </div>


                                        <div className="col-md-12">
                                            <div className={classnames(
                                                'sign-form-input',
                                                {

                                                    "green-boeder": values.email != "",
                                                    "error-block": errors.email,

                                                }
                                            )}>

                                                <input type="email" placeholder="Email" name="email" onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email} />
                                                {values.email != '' && (
                                                    <span>
                                                        <img
                                                            src='/images/Check.png'
                                                            alt='Check'
                                                            className='img-fluid'
                                                        />
                                                    </span>
                                                )}
                                                <div className="error-msg">{errors.email}</div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div
                                                className={classnames('sign-form-input', {
                                                    'green-boeder': values.password != '',
                                                    'error-block': errors.password
                                                })}
                                            >
                                                <input
                                                    id='inputpassword1'
                                                    placeholder='Password'
                                                    name='password'
                                                    type={showPassword ? 'text' : 'password'}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                />
                                                <span
                                                    // toggle='#inputpassword1'
                                                    className='field-icon toggle-password'
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    <img
                                                        src='/images/eye.png'
                                                        alt='eye'
                                                        className='img-fluid eye1'
                                                    />
                                                    <img
                                                        src='/images/eye2.png'
                                                        alt='eye'
                                                        className='img-fluid eye2'
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className={classnames(
                                                'sign-form-input mb-md-0',
                                                {

                                                    "green-boeder": values.rpassword != "",
                                                    "error-block": errors.rpassword,

                                                }
                                            )}>

                                                <input type={repeatPassword ? 'text' : 'password'} id="inputpassword2" placeholder="Repeat password" name="rpassword" onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.rpassword} />

                                                <span className="field-icon toggle-password" onClick={() => setrepeatPassword(!repeatPassword)}><img src="/images/eye.png" alt="eye" className="img-fluid eye1" /><img src="/images/eye2.png" alt="eye" className="img-fluid eye2" /></span>
                                                <div className="error-msg">{errors.rpassword}</div>  </div>
                                        </div>
                                        <div className="col-md-12">
                                            <p className="signup-form-bttm-xt">Use 8 or more characters with a mix of letters, atleast one uppercase, numbers & symbols</p>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="signup-check">
                                                <div>
                                                    <label className="signcheckbox-container">I want to receive the emails from Element Zero Dao
                                                        <input type="checkbox" />
                                                        <span className="signcontactcheckmark"></span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className="signcheckbox-container">I agree to the <a href="#" className="sign-blue-clr">Privacy & Terms of service</a>  and <a href="#" className="sign-blue-clr">fee</a>
                                                        <input type="checkbox" />
                                                        <span className="signcontactcheckmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='signup-btn-grp'>

                                                <button type='submit' className='sign-up-button'>
                                                    Sign Up
                                                </button>

                                                <span>or</span>
                                                <div className='signup-vis-google-btn'>
                                                    {/* <Link href='/auth/signIn-gmail'> */}
                                                    <a href='#'>
                                                        <img
                                                            src='/images/google-icon.png'
                                                            className='img-fluid mr-2'
                                                            alt='google'
                                                        />
                                                        SIGN UP WITH GOOGLE
                                                    </a>
                                                    {/* </Link> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12"><p className="signup-bttm-xt">Already have an account? <Link href="/auth/signIn-email"> Sign in</Link></p></div>
                                    </div>
                                </form>)}
                        </Formik>

                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="sign-up-bg-image">
                        <div className="twitwr-img"><a href="#"><img src="/images/twitter.png" alt="twitter" className="img-fluid" /></a></div>
                        <div><img src="/images/signup.png" alt="signup" className="img-fluid" /></div>
                        <div className="top-corner"><img src="/images/img1.png" alt="signup" className="img-fluid" /></div>
                        <div className="bottom-corner"><img src="/images/img2.png" alt="signup" className="img-fluid" /></div>

                        <div className="linkedin-img"><a href="#"><img src="/images/linkedin.png" alt="linkedin" className="img-fluid" /></a></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUpEmail;
