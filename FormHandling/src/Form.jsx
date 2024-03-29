import { useState } from "react"

export default function Form()
{
    // let [firstName, setFirstName] = useState("mehrun");
    // let [lastName, setLastName] = useState("Nisa");

    // let firstNameChange = (event) =>{
    //     // console.log(event.target.value);
    //     setFirstName(event.target.value);
    // }

    // let lastNameChange = (event) =>{
    //     setLastName(event.target.value);
    // }      
    //Note:- if we have multiple inputs so we make many states and our time consume too much so here we can easily handle multiple inputs by using state in objects and give common function to all inputs:-

    let[formData, setFormData] = useState({
        firstName :"",
        lastName :"",
        password : "",

    });

    let handleInputChange = (event) =>{
        let feildName = event.target.name;
        let newValue = event.target.value;
        // console.log(newValue);

        setFormData( (currData) =>{
            currData[feildName] = newValue;
            return {...currData};
        });
    };

    let handleSubmit = (event) =>{
        event.preventDefault();
        setFormData({
            firstName :"",
            lastName :"",
            password:"",
        });
    }

    return(
        <>
            {/* <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Enter your First Name" value={firstName} onChange={firstNameChange} />
            <br /><br />


            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Enter your Last Name" value={lastName} onChange={lastNameChange} />
            <button>Submit</button> */}


            {/* multiple inputs handle */}
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Enter your Last Name" value={formData.firstName}  name="firstName" onChange={handleInputChange} />
            <br /><br />


            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Enter your Last Name" value={formData.lastName}  name="lastName" onChange={handleInputChange} />
            <br /><br />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your Password" value={formData.password}  name="password" onChange={handleInputChange} />
            <br /><br />

            <button>Submit</button>
        </form>

        </>
    )
}