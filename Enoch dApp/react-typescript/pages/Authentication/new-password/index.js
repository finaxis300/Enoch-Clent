import React, { Component, useState } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      newPassword: '',
      showPassword: false,
      showNewPassword: false,
      errors: null,
    };
  }

  handleShow = (event) => {
    console.log(event.target);
    this.setState({
      [event.target.id]: !this.state[event.target.id],
    });
  };

  onChangeHandler = (e) => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      const { password, newPassword, errors } = this.state;
      if (password != newPassword) {
        this.setState({ errors: 'Password didn’t match' });
      } else if (password == newPassword) {
        this.setState({ errors: 'Password match' });
      }
    });
  };

  render() {
    console.log(this.state);
    const { showPassword, showNewPassword, password, newPassword, errors } =
      this.state;
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
                    <h2 class="mb-1">New Password</h2>
                    <p class="new-passwrd-change">
                      Use 8 or more characters with a mix of letters, atleast
                      one uppercase, numbers & symbols
                    </p>
                  </div>

                  <form action="" method="post">
                    <div class="row">
                      <div class="col-md-12">
                        <div
                          className={classnames('sign-form-input', {
                            'green-boeder': errors == 'Password match',
                            // 'error-block': errors == 'Password didn’t match',
                          })}
                        >
                          <input
                            type="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            onChange={this.onChangeHandler}
                            name="password"
                            value={password}
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
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div
                          className={classnames('sign-form-input', {
                            'green-boeder': errors == 'Password match',
                            'error-block': errors == 'Password didn’t match',
                          })}
                        >
                          <input
                            type="password"
                            id="inputpassword2"
                            placeholder="Password"
                            type={showNewPassword ? 'text' : 'password'}
                            onChange={this.onChangeHandler}
                            name="newPassword"
                            value={newPassword}
                          />
                          <span
                            toggle="#inputpassword2"
                            class="field-icon toggle-password"
                            onClick={this.handleShow}
                          >
                            <img
                              src="/images/eye.png"
                              alt="eye"
                              class="img-fluid eye1"
                              id="showNewPassword"
                            />
                            <img
                              src="/images/eye2.png"
                              alt="eye"
                              class="img-fluid eye2"
                              id="showNewPassword"
                            />
                          </span>
                          {errors == 'Password didn’t match' && (
                            <div class="error-msg">{errors}</div>
                          )}
                        </div>
                      </div>

                      <div class="col-md-12">
                        <Link href="/Authentication/password-reset-confirm">
                          <button type="submit" class="bttn-primary">
                            Reset Password
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
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
export default ResetPassword;
