import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Replace with your API key from OpenWeatherMap
const API_KEY = "b58d47962e03006c6b649bc46a6b7b76";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Async function to fetch weather data
export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (city) => {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok) throw new Error("Failed to fetch weather data");
  return response.json();
});

const weatherSlice = createSlice({
  name: "weather",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
