import React, { useState, Component } from 'react'
import Header from '../../component/header'
import Dropdownreqdocs from '../../component/Common/Dropdown-req-docs'
import { Upload } from '@progress/kendo-react-upload'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const RequiredDoc: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [date, setDate] = useState<Date>(new Date())
  const [filter, setFilter] = useState([
    {
      label: 'ID Card',
      selected: false
    },
    {
      label: 'Passport',
      selected: false
    },

    {
      label: 'Driving license',
      selected: false
    },
    {
      label: 'Selfie',
      selected: false
    },
    {
      label: 'Proof of ADDress',
      selected: false
    }
  ])

  return (
    <div className='container-fluid dashboard-body-bg'>
      <Header />

      <div className='row'>
        <div className='dashboard-header-bredcrumb'>
          <div className='ezl-dashboard-container'>
            <div className='col-12'>
              <ul>
                <li className='mr-2'>
                  <img
                    src='/images/bread-crumb-icon-home.png'
                    alt='icon'
                    className='img-fluid'
                  />{' '}
                </li>
                <li className='mr-1'>
                  <a href='#' className='dsh-active-black'>
                    {' '}
                    Individual KYC /{' '}
                  </a>
                </li>
                <li>
                  <a href='#'> User ID Documentation</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='KYC-BODY ezl-dashboard-container'>
        <div className='Linking-wallet-four-icons-sect'>
          <div className='four-icons-list'>
            <div className='row'>
              <div className='col-md-3'>
                <div className='Linking-wallet-icon Linking-wallet-icon-1'>
                  <div className='Linking-wallet-icon-img Linking-wallet-icon-1-img'>
                    <img
                      src='/images/step-2-imgs/icon-1.png'
                      alt='step-1'
                      className='img-fluid'
                    />
                  </div>
                  <div className='Linking-wallet-icon-text Linking-wallet-icon-1-text'>
                    <h1>Step 1</h1>
                    <h2>Individual Profile</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='Linking-wallet-icon Linking-wallet-icon-2'>
                  <div className='Linking-wallet-icon-img Linking-wallet-icon-2-img Linking-wallet-icon-img-act'>
                    <img
                      src='/images/step-2-imgs/icon-2-act.png'
                      alt='step-2'
                      className='img-fluid'
                    />
                  </div>
                  <div className='Linking-wallet-icon-text Linking-wallet-icon-2-text'>
                    <h1>Step 2</h1>
                    <h2>Linking Wallet</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='Linking-wallet-icon Linking-wallet-icon-3'>
                  <div className='Linking-wallet-icon-img Linking-wallet-icon-3-img'>
                    <img
                      src='/images/step-2-imgs/icon-3-act.png'
                      alt='step-3'
                      className='img-fluid'
                    />
                  </div>
                  <div className='Linking-wallet-icon-text Linking-wallet-icon-3-text Linking-wallet-active'>
                    <h1>Step 3</h1>
                    <h2>User ID Documentation</h2>
                  </div>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='Linking-wallet-icon Linking-wallet-icon-4'>
                  <div className='Linking-wallet-icon-img Linking-wallet-icon-4-img'>
                    <img
                      src='/images/step-2-imgs/icon-4.png'
                      alt='step-4'
                      className='img-fluid'
                    />
                  </div>
                  <div className='Linking-wallet-icon-text Linking-wallet-icon-4-text'>
                    <h1>Step 4</h1>
                    <h2>KYC Validation</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='Required-Documents-headings'>
          <h1>Required Documents</h1>
        </div>

        <div className='Required-Documents-sect'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='Required-Documents-left-col'>
                <div className='Required-Documents-left-col-headings'>
                  <h1>Provide Minimum Two Photo ID Documents </h1>
                </div>

                <div className='Required-Documents-left-id-select'>
                  <div className='select-box'>
                    <div>
                      {/* <div className="option">
                                                    <input type="radio" className="radio" id="automobiles" name="category" />
                                                    <label for="automobiles">ID Card</label>
                                                </div>

                                                <div className="option">
                                                    <input type="radio" className="radio" id="film" name="category" />
                                                    <label for="film">Passport</label>
                                                </div>

                                                <div className="option">
                                                    <input type="radio" className="radio" id="science" name="category" />
                                                    <label for="science">Driving license</label>
                                                </div>

                                                <div className="option">
                                                    <input type="radio" className="radio" id="art" name="category" />
                                                    <label for="art">Selfie</label>
                                                </div>

                                                <div className="option">
                                                    <input type="radio" className="radio" id="music" name="category" />
                                                    <label for="music">Proof of Address</label>
                                                </div> */}
                    </div>

                    <Dropdownreqdocs filters={filter} defaultLabel='Select' />
                  </div>
                </div>

                <div className='Required-Documents-left-form'>
                  <div className='row'>
                    <div className='col-md-6 input-left'>
                      <input type='text' placeholder='ID Number' />
                    </div>
                    <div className='col-md-6 input-right'>
                      <DatePicker
                        wrapperClassName='datePicker'
                        selected={date}
                        onChange={date => setDate(date)}
                        placeholderText='Expiration Date'
                      />
                      <label className='date__trigger' for='custom__date'>
                        {' '}
                        <img
                          src='/images/Date.png'
                          alt=''
                          className='img-fluid'
                        />
                      </label>
                      <label className='dropdown_trigger' for='custom__date'>
                        {' '}
                        <img
                          src='/images/step-3-kyc-id/dropdown.png'
                          alt=''
                          className='img-fluid'
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className='Upload-Documents-sect'>
                  <div className='Upload-Documents-heading'>
                    <h1>Upload Documents</h1>
                  </div>
                  <div className='both-sides-documents'>
                    <h2>Please provide the complete Address Proof</h2>
                  </div>

                        <Upload
                        batch={true}
                        restrictions={{
                          allowedExtensions: ['.jpg', '.png'],
                          maxFileSize: 1000000
                        }}
                        multiple={true}
                        defaultFiles={[]}
                        withCredentials={false}
                        saveUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/save'
                        }
                        removeUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
                        }
                      />
                  <div className='file-upload-sect'>
                    <div className='file-upload-btn cus-file-upload'>
                      <span id='custom-text'>
                        Drag your file to Upload or Browse
                      </span>
                      <Upload
                        batch={false}
                        restrictions={{
                          allowedExtensions: ['.jpg', '.png'],
                          maxFileSize: 1000000
                        }}
                        multiple={true}
                        defaultFiles={[]}
                        withCredentials={false}
                        saveUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/save'
                        }
                        removeUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
                        }
                      />
                    </div>
                  </div>

                  <div className='Upload-Documents-footer'>
                    <h3>Maximum size of Image (JPG, PNG) 1MB</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='Required-Documents-right-col'>
                <div className='Required-Documents-heading'>
                  <h1>Required Documents</h1>
                </div>
                <div className='Required-Documents-proof'>
                  <div className='proof-list proof-list-1'>
                    <h2>
                      <img
                        src='/images/step-3-kyc-id/link-icon.png'
                        alt=''
                        className='img-fluid mr-2'
                      />
                      ID Proof 1 (ID Card)
                    </h2>
                    <div className='proof-list-upload-box'>
                      <Upload
                        batch={true}
                        restrictions={{
                          allowedExtensions: ['.jpg', '.png'],
                          maxFileSize: 1000000
                        }}
                        multiple={true}
                        defaultFiles={[]}
                        withCredentials={false}
                        saveUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/save'
                        }
                        removeUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
                        }
                      />
                    </div>
                  </div>

                  <div className='proof-list proof-list-2'>
                    <h2>
                      <img
                        src='/images/step-3-kyc-id/link-icon.png'
                        alt=''
                        className='img-fluid mr-2'
                      />
                      ID Proof 1 (Passport)
                    </h2>
                    <div className='proof-list-upload-box'>
                      <Upload
                        batch={true}
                        restrictions={{
                          allowedExtensions: ['.jpg', '.png'],
                          maxFileSize: 1000000
                        }}
                        multiple={true}
                        defaultFiles={[]}
                        withCredentials={false}
                        saveUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/save'
                        }
                        removeUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
                        }
                      />
                    </div>
                  </div>

                  <div className='proof-list proof-list-3'>
                    <h2>
                      <img
                        src='/images/step-3-kyc-id/link-icon.png'
                        alt=''
                        className='img-fluid mr-2'
                      />
                      Selfie
                    </h2>
                    <div className='proof-list-upload-box proof-list-3-upload-box'>
                      <Upload
                        batch={true}
                        restrictions={{
                          allowedExtensions: ['.jpg', '.png'],
                          maxFileSize: 1000000
                        }}
                        multiple={true}
                        defaultFiles={[]}
                        withCredentials={false}
                        saveUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/save'
                        }
                        removeUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
                        }
                      />
                    </div>
                  </div>

                  <div className='proof-list proof-list-4'>
                    <h2>
                      <img
                        src='/images/step-3-kyc-id/link-icon.png'
                        alt=''
                        className='img-fluid mr-2'
                      />
                      Proof of Address
                    </h2>
                    <div className='proof-list-upload-box proof-list-4-upload-box'>
                      <Upload
                        batch={true}
                        restrictions={{
                          allowedExtensions: ['.jpg', '.png'],
                          maxFileSize: 1000000
                        }}
                        multiple={true}
                        defaultFiles={[]}
                        withCredentials={false}
                        saveUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/save'
                        }
                        removeUrl={
                          'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='enoch-last-btn-sect'>
          <button className='btn-back pl-4 pr-4'>
            <a href='#' className='mr-3 ml-3'>
              BACK
            </a>
          </button>
          <button className='btn-next button-primary pl-4 pr-4 btn-w-45'>
            <a href='#'>Continue</a>
          </button>
        </div>
      </div>
    </div>
  )
}
export default RequiredDoc
