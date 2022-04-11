import React from 'react'

function ExtraInfo({ formData, setFormData }) {

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    return (
        <div className='addressInfo-container'>
            <input type='text' placeholder='City' name="city" value={formData.city} onChange={handleChange} />
            <input type='text' placeholder='State' name="state" value={formData.state} onChange={handleChange} />
            <input type='number' placeholder='Pincode' name="pincode" value={formData.pincode} onChange={handleChange} />
        </div>
    )
}

export default ExtraInfo