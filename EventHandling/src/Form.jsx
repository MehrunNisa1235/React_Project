
function formHandler(event)
{
    //console.log(event);
    event.preventDefault();
    console.log("form submitted successfully");
}

export default function Form()
{
    return(
        <form onSubmit={formHandler}>
            <input placeholder="write Something here"/>
            <button>Submit</button>
        </form>
    )
}