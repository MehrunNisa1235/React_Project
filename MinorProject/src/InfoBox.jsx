
import './InfoBox.css'

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//for weather icon
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



export default function InfoBox({ weatherInfo })
{
    const IMG_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // let weatherInfo = ({
    //     city :"Delhi",
    //     feelsLike : 24.84,
    //     temp : 25.05,
    //     tempMin : 25.05,
    //     tempMax : 25.05,
    //     humidity : 47,
    //     weather :"haze",
    // });
    return(
        <div className="InfoBox">
            {/* <h3>Search for Weather Information</h3> */}
            
            {/* <h1>WeatherInfo - {weatherInfo.weather}</h1> */}

            {/* for card  */}
        <div className="card">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}

            // image={IMG_URL}
            image = {
                weatherInfo.humidity > 80 
                ? RAIN_URL : weatherInfo.temp > 25      //if pic not working then increase the temp value in this condition like 300
                ? HOT_URL : COLD_URL
            }
            title="green iguana" />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {weatherInfo.city}&nbsp;{
                    weatherInfo.humidity > 80 
                    ? <ThunderstormIcon />     : weatherInfo.temp > 25     //if pic not working then increase the temp value in this condition like 300
                    ? <WbSunnyIcon  />  : <AcUnitIcon />
                }
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temperature = {weatherInfo.temp}&deg;C</p>
                <p>Humidity = {weatherInfo.humidity}</p>
                <p>Min Temp = {weatherInfo.tempMin}&deg;C</p>
                <p>Max Temp = {weatherInfo.tempMax}&deg;C</p>
                <p>The Weather can be described as {weatherInfo.weather} and feels like {weatherInfo.feelsLike}&deg;C</p>
            </Typography>
            </CardContent>
            </Card>
        </div>

            
        </div>
    )
}