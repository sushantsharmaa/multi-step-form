import React, { useState } from 'react'
import ExtraInfo from './ExtraInfo';
import PersonalInfo from './PersonalInfo';

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        dob: "",
        city: "",
        state: "",
        pincode: ""
    });

    const formTitles = ["Personal Info", "Address Info"];

    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />
        } else {
            return <ExtraInfo formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <div className='form'>
            <div className='progressbar'>
                <div style={{ width: page === 0 ? "50%" : "100%" }}></div>
            </div>
            <div className='form-container'>
                <div className='header'>
                    <h1>{formTitles[page]}</h1>
                </div>
                <div className='body'>{PageDisplay()}</div>
                <div className='footer'>
                    <button
                        disabled={page === 0}
                        onClick={() => { setPage((currentPage) => currentPage - 1) }}
                    >Prev</button>
                    <button
                        onClick={() => {
                            if (page === formTitles.length - 1) {
                                alert("Submit");
                            } else {
                                setPage((currentPage) => currentPage + 1)
                            }
                        }}
                    >
                        {page === formTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form