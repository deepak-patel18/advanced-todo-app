import React, { useState } from "react";
import axios from "axios";

const suggestedCities = ["Mumbai", "New York", "London", "Tokyo", "Sydney", "Paris", "Berlin", "Dubai"];

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const API_KEY = "b58d47962e03006c6b649bc46a6b7b76"; // Replace with your OpenWeather API key

  const fetchWeather = (cityName) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        setWeather(response.data);
        setError("");
      })
      .catch(() => {
        setError("City not found. Please try again.");
        setWeather(null);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  const handleCitySelect = (e) => {
    setCity(e.target.value);
    fetchWeather(e.target.value);
  };

  return (
    <div className="weather-container text-center mt-3">
      <h5>🌤 Check Weather</h5>
      <form onSubmit={handleSubmit} className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-2">
          Get Weather
        </button>
      </form>

      {/* Suggested Cities Dropdown */}
      <select className="form-select mt-2" onChange={handleCitySelect} defaultValue="">
        <option value="" disabled>Or select a city</option>
        {suggestedCities.map((cityName, index) => (
          <option key={index} value={cityName}>
            {cityName}
          </option>
        ))}
      </select>

      {error && <p className="text-danger mt-2">{error}</p>}

      {weather && (
        <div className="alert alert-info mt-3">
          <h6>🌍 {weather.name}, {weather.sys.country}</h6>
          <p>🌡 {weather.main.temp}°C | {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
