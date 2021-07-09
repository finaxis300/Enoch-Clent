import React, { useState } from 'react'
import { Formik, FormikErrors } from 'formik'
import * as Yup from 'yup'
import classnames from 'classnames'
import Link from 'next/link'

interface MyFormValues {
    email: string

}

const RecoverPassword: React.FC = () => {


    const initialValues: MyFormValues = {
        email: '',

    }

    return (
        <div className="container-fluid">

        </div>
    )
}

export default RecoverPassword
