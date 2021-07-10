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


            </div>

        )
    }
}
export default ApplyKycProfile;