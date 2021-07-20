import React, { useState, Component } from 'react'
import Header from '../../../Component/header'
import { useRouter } from 'next/router'
import { Upload } from '@progress/kendo-react-upload'
import Link from 'next/link'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import SubHeaderDoc from '../../../Component/kyc/doc/sub-header'
import BredCrumbDoc from '../../../Component/kyc/doc/bredcrumb'

const RequiredDoc: React.FC = () => {
  const [date, setDate] = useState(new Date())
  const [selectedTag, setSelectedTag] = useState<string>('')
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [show, setshow] = useState(false)

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

  const setDateHandler = (date:any) => {
     setDate(date)
  }

  return (
    <div className='container-fluid dashboard-body-bg'>
      <Header />
      <BredCrumbDoc />

      <div className='KYC-BODY ezl-dashboard-container'>
        <SubHeaderDoc />
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
                    {/* <Dropdownreqdocs filters={filter} defaultLabel='Select' /> */}
                    ;
                    <div
                      className='selected'
                      onClick={() => {
                        setShowDropdown(true)
                        setshow(!show)
                      }}
                    >
                      <div className=''>
                        <div
                        // className={classnames('', {
                        //   '': showDropdown
                        // })}
                        >
                          {selectedTag ? selectedTag : 'Select'}
                        </div>

                        <div
                          className={
                            show == true
                              ? 'options-container  active'
                              : 'options-container  '
                          }
                        >
                         
                        </div>
                      </div>
                    </div>
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
                        onChange={date => setDateHandler(date)}
                        placeholderText='Expiration Date'
                      />
                      <label className='date__trigger'>
                        {' '}
                        <img
                          src='/images/Date.png'
                          alt=''
                          className='img-fluid'
                        />
                      </label>
                      <label className='dropdown_trigger'>
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
          <Link href='/kyc/doc/proper-selfie'>
            <button className='btn-back pl-4 pr-4'>
              <a className='mr-3 ml-3'>BACK</a>
            </button>
          </Link>
          <button className='btn-next button-primary pl-4 pr-4 btn-w-45'>
            <a href='#'>Continue</a>
          </button>
        </div>
      </div>
    </div>
  )
}
export default RequiredDoc
