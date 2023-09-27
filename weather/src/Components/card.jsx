import "./card.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function CardData({weatherInfo}) {

    return (
        <div>
            <Card sx={{ minWidth: 275, display: "flex" }}>
                <img src={weatherInfo.current.condition.icon} />
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Temperature
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Condition
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Wind Speed
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Humidity
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Cloud Coverage
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Last Updated
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom name = "temperature">
                        {weatherInfo.current.temp_c}°C / {weatherInfo.current.temp_f}°F
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom name = "info">
                        ${weatherInfo.current.condition.text}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom name = "speec">
                        {weatherInfo.current.gust_kph} km/h
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom name = "humidity">
                        {weatherInfo.current.humidity}%
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom name = "Cloud Coverage">
                        {weatherInfo.current.cloud}%
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom name = "Last updated">
                        {weatherInfo.current.last_updated}
                    </Typography>
                </CardContent>
                
            </Card>

        </div>
    )
}