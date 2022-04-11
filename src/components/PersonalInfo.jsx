import React from 'react'

function PersonalInfo({ formData, setFormData }) {

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    return (
        <div className='personalInfo-container' >
            <input type='text' placeholder='Name' name="name" value={formData.name} onChange={handleChange} />
            <input type='number' placeholder='Age' name="age" value={formData.age} onChange={handleChange} />
            <input type='date' placeholder='DOB' name="dob" value={formData.dob} onChange={handleChange} />
        </div>
    )
}

export default PersonalInfo