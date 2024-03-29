
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import './WeatherApp.css'
import { useState } from "react"

export default function WeatherApp()
{
    const [weatherInfo, setWeatherInfo] = useState({
        city :"Mumbai",
        feelsLike : 24.84,
        temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
        weather :"haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className="WeatherApp">
            <h2>Weather App By Mehar </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox weatherInfo={weatherInfo} />
        </div>
    )
}