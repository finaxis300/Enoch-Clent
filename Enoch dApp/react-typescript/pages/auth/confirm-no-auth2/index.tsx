import Link from 'next/link'

const ConfirmNoAuth2: React.FC = () => {
  return (
<>
  <section>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='confirm-email-form'>
          
              <p>
                We’ve sent you an e-mail so you can start activating 2-Step
                verification for your account. Please read and follow the
                provided instructions to complete this process!
              </p>
            </div>

            <div className='d-flex dApp-request-btn'>
              <Link href='#'>
                <a className='btn bttn-primary'>GOT IT</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default ConfirmNoAuth2

