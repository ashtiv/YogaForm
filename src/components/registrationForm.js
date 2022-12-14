import React, { useState, setState } from 'react';
import './style.css'
function RegistrationForm() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [age, setAge] = useState(null);
    const [batch, setBatch] = useState('6-7AM');
    const isNumeric = (str) => {
        if (typeof str != "string") return false // we only process strings!  
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }
    const isNullOrEmpty = (value) => {
        if (value == null || value == undefined || value.length == 0) {
            return false;
        }
        return true;
    }
    const validateEmail = (value) => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (value.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "age") {
            setAge(value)
        }
        if (id === "batch") {
            setBatch(value)
        }
    }

    const handleSubmit = () => {
        if (!(isNullOrEmpty(firstName) || isNullOrEmpty(lastName) || isNullOrEmpty(email) || isNullOrEmpty(age) || isNullOrEmpty(batch))) {
            alert("Enter Valid Details")
        }
        else {
            if (isNumeric(age)) {
                var ageInt = parseInt(age);
                if (ageInt < 18 || ageInt > 65) {
                    alert("Your age is not in range 18 to 65");
                }
                else {
                    if (validateEmail(email)) {
                        console.log(firstName, lastName, email, age, batch);
                    }
                    else {
                        alert("Enter valid email address")
                    }
                }
            }
            else {
                alert("Insert a valid age");
            }
        }
    }

    return (
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input type="text" name="" id="lastName" value={lastName} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="LastName" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                </div>
                <div className="age">
                    <label className="form__label" for="age">Age </label>
                    <input className="form__input" type="age" id="age" value={age} onChange={(e) => handleInputChange(e)} placeholder="Age" />
                </div>
                <div className='Batch'>
                    <label className="form__label" for="batch">Batch </label>
                    <select id='batch' value={batch} onChange={(e) => handleInputChange(e)}>
                        <option value="6-7AM">6-7AM</option>
                        <option value="7-8AM">7-8AM</option>
                        <option value="8-9AM">8-9AM</option>
                        <option value="5-6PM">5-6PM</option>
                    </select>
                </div>
            </div>
            <div class="footer">
                <button onClick={() => handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>

    )
}

export default RegistrationForm