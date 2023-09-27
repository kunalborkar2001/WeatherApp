import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import CardData from "./card";
import axios from "axios";
import "./weatherApp.css"
import debounce from "lodash/debounce"; // Import debounce




export default function WeatherApp() {
  const [searchValue, setSearchValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [dataFound, setDataFound] = useState(true)

  const apiCall = async (value) => {
    try {
        const response = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=0238bd9d10f042169b471019232709&q=${value}`
            );
            if(response.status === 200){
                
            setDataFound(true)
          setWeatherData(response.data);
      }
    } catch (error) {
      console.error("An error occurred during the API call:", error);
      setDataFound(false)
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    // Trigger the API call immediately after each input change
    debouncedApiCall(newValue);
  };

  const debouncedApiCall = debounce(apiCall, 300);


  return (
    <div className="items">
        <h1>Choose any location</h1>
      <TextField
        required
        id="outlined-required"
        label="Enter Location"
        value={searchValue}
        onChange={handleInputChange}
        sx={{width : "50vw"}}
      />

      {dataFound?(weatherData ? (
        <div>
          <h1>{weatherData.location.name}, {weatherData.location.country}</h1>
          <CardData weatherInfo={weatherData} />
        </div>
      ) : (
        <div className="homeImg" loop>
            <img src="https://gifdb.com/images/high/sunny-weather-icon-loop-czrd005x72jn3al4.gif" />
        </div>
      )
      ):(
        <div className="homeImg" loop>
            <h1>No matching location found</h1>
            <img src="https://gifdb.com/images/high/sunny-weather-icon-loop-czrd005x72jn3al4.gif" />
        </div>
      )
    }
    </div>
  );
}
