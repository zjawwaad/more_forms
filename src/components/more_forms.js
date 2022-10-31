import React, {useState} from 'react'

const Form = (props) => {

    const [firstname, setFirstName] = useState("")
    const [firstnameError, setFirstNameError] = useState("");

    const [lastname, setLastName] = useState("")
    const [lastnameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("");

    const [pw, setPw] = useState("")
    const [pwError, setPwError] = useState("");

    const [confirmpw, setConfirmPw] = useState("")
    const [confirmpwError, setConfirmPwError] = useState("");


    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("Last Name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }
    const handlePw = (e) => {
        setPw(e.target.value);
        if(e.target.value.length < 1) {
            setPwError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPwError("Password must be 8 characters or longer!");
        } else {
            setPwError("");
        }
    }
    const handleConfirmPw = (e) => {
        setConfirmPw(e.target.value);
        if(e.target.value.length  !== pw ) {
            setConfirmPwError("Passwords must match!");
        } else {
            setConfirmPwError("");
        }
    }
    

    // const [infoList, setInfoList] = useState ([])

    // // const submitHandler = (e) => {
    // //     // code goes here
    // //     e.preventDefault();
    // //     console.log("Form submitted: ", firstname, lastname, email, pw, confirmpw)
    // //     // taking in new data
    // //     let infoObj = {firstname, lastname, email, pw, confirmpw}
        
    // //     setInfoList([...infoList, infoObj])
    
    // // }

    return (
        <div>
        <form onSubmit= { (e) => e.preventDefault() }>
        <div>
            <label>First Name:</label>
            <input type="text" onChange={ handleFirstName } />{
                firstnameError ?
                <p style={{color:'red'}}>{ firstnameError }</p> :
                ''
            }
        </div>
        <div className="form-group">
            <label>Last Name: </label>
            <input type="text" onChange={ handleLastName } />{
                lastnameError ?
                <p style={{color:'red'}}>{ lastnameError }</p> :
                ''
            }
        </div>
        <div className="form-group">
            <label>Email: </label>
            <input type="text" onChange={ handleEmail } />{
                emailError ?
                <p style={{color:'red'}}>{ emailError }</p> :
                ''
            }
        </div>
            <div className="form-group">
            <label>Password: </label>
            <input type="text" onChange={ handlePw } />{
                pwError ?
                <p style={{color:'red'}}>{ pwError }</p> :
                ''
            }
        </div>
        <div className="form-group">
        <label>Confirm Password: </label>
            <input type="text" onChange={ handleConfirmPw } />{
                confirmpwError ?
                <p style={{color:'red'}}>{ confirmpwError }</p> :
                ''
            }
        </div>
        <div className="form-group">
            <button type="submit" value="Submit">submit</button>
        </div>
        </form>
        <hr/>
        <div className='info'>
            <p>First Name:  {firstname}</p>
            <p> Last Name: {lastname}</p>
            <p> Email: {email}</p>
            <p>Password: {pw}</p>
            <p>Confirm Password: {confirmpw}</p>
        </div>
        
        </div>
    )
}


export default Form