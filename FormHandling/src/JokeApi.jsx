
import { useState,useEffect } from "react";


export default function JokeApi(){

    let[joke, setJoke] = useState({});

    let URL = "https://official-joke-api.appspot.com/random_joke";
    


    const getNewJoke = async () => {
       let response = await fetch(URL);
       let jsonResponse = await response.json();
       console.log(jsonResponse)
       setJoke({setup: jsonResponse.setup, punchline:jsonResponse.punchline})
    }

    //for seeing first joke without clicking the button 
    useEffect(() => {async function getFirstJoke(){
        let response = await fetch(URL);
       let jsonResponse = await response.json();
       console.log(jsonResponse)
       setJoke({setup: jsonResponse.setup, punchline:jsonResponse.punchline})
    }
    getFirstJoke();
    },[])
    return(
        <div>
            <h3>Jokes !!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>For More Jokes</button>
        </div>
    )
}