import Link from 'next/link'

const ConfirmNoAuth1: React.FC = () => {
  return (
    <>
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='confirm-email-form'>
                <div className='signin-head'>
                  <div className='dapp-header-logo'>
                    <img
                      src='/images/logo-big.png'
                      alt='logo'
                      className='img-fluid'
                    />
                  </div>
                  <h2>Confirm your phone number</h2>
                  <p>We have sent a security code to</p>
                  <h3>Phone-0044 - (+XX)-XXXXXXXX73 </h3>
                </div>
                <div className='dapp-recovery-block'>
                  <div className='form-input-label'>
                    Please enter the security code
                  </div>
                  <div className='verfication-key confirm-num-key'>
                    <ul className='fullwith'>
                      <li>
                        <input
                          type='text'
                          className='form-control'
                          value='0'
                          maxlength='1'
                        />
                      </li>
                      <li>
                        <input
                          type='text'
                          className='form-control'
                          value='5'
                          maxlength='1'
                        />
                      </li>
                      <li>
                        <input
                          type='text'
                          className='form-control'
                          value='6'
                          maxlength='1'
                        />
                      </li>
                      <li>
                        <input
                          type='text'
                          className='form-control'
                          value='6'
                          maxlength='1'
                        />
                      </li>
                      <li>
                        <input
                          type='text'
                          className='form-control'
                          value='2'
                          maxlength='1'
                        />
                      </li>
                      <li>
                        <input
                          type='text'
                          className='form-control'
                          value='0'
                          maxlength='1'
                        />
                      </li>
                    </ul>
                  </div>
                  <p className='dapp-recovery-block-txt'>
                    Didn’t reecive the OTP (One time Password){' '}
                    <a href='#' className='signin-btn'>
                      Send Again{' '}
                    </a>
                  </p>
                </div>
                <div className='d-flex dApp-request-btn'>
                  <span className='mr-3'>
                    <a href='#' className='btn bttn-secondary'>
                      Back
                    </a>
                  </span>
                  <span>
                    <Link href='/auth/confirm-no-auth2'>
                      <a className='btn bttn-primary'>Confirm</a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ConfirmNoAuth1
