
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';



export default function SearchBox({updateInfo})
{
    let[city,setCity] = useState("");
    let[error,setError] = useState(false);
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "04378c37e147664ac7701e44881b720a";


    let getWetherInfo = async() =>{   
    try{

          //we use async() beacause we call API and API is asynchoronous
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weatherDiscription : jsonResponse.weather[0].discription,
        }
        console.log(result)
        return result;
    }catch(err){
        setError("No Such place in our API ");
        throw err;
    }
};

    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async(event) =>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo =await getWetherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError("No such place in our city");
            setError(true);
        }
       
    }

    



    return(
        <div className='SearchBox'>
            <p><b>Search for the Weather</b> </p>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Search City Name" variant="outlined" required value={city} onChange={handleChange} /><br /><br />
                <Button variant="contained"type="submit" onClick={getWetherInfo}>Search</Button>

                {error && <p style={{color:"red"}}>No such city exists !! </p>}
            </form>


        </div>
    )
}