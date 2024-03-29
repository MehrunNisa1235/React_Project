import { useState } from "react"


export default function CommentsForm()
{
    let[formData, setFormData] = useState({
        userName :"",
        remarks:"",
        rating:"",
    })

    let inputHandleChange = (event) =>{
        setFormData((currData) =>{
            return {...currData, [event.target.name]:event.target.value};
        })
    }

    let submitHandle = (event) =>{
        console.log(formData)
        event.preventDefault();
        setFormData({
            userName:"",
            remarks:"",
            rating:5,       //we can also fix the rating to understand maximum rating  or empty the rating
        })
    }
    return(
        <div>
            <form onSubmit={submitHandle}>

                <label htmlFor="userName">UserName</label>
                <input type="text" id="userName" placeholder="Enter Username" value={formData.userName} onChange={inputHandleChange} name="userName" />
                <br /><br />

                <label htmlFor="remarks">Add Remarks</label>
                <textarea id="remarks" placeholder="Give me Remarks" value={formData.remarks} onChange={inputHandleChange} name="remarks">  Remarks</textarea>
                <br /><br />

                <label htmlFor="rating">Rating</label>
                <input  type="number" id="rating" placeholder="rating" min={1} max={5} value={formData.rating} onChange={inputHandleChange} name="rating"/>
                <br /><br />

                <button>Add Comment</button>
            </form>
        </div>
    )
}