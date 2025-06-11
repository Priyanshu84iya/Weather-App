// Example configuration file - Copy this to config.js and add your real API keys
// This file shows the structure needed for the weather app to work
const config = {
    // OpenWeatherMap API key
    // Get your free API key from: https://openweathermap.org/api
    // Replace 'YOUR_API_KEY_HERE' with your actual API key
    weatherApiKey: "YOUR_API_KEY_HERE",
    
    // API URLs - Don't change these unless you know what you're doing
    apiUrls: {
        current: "https://api.openweathermap.org/data/2.5/weather?units=metric&q=",
        forecast: "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=",
        geo: "https://api.openweathermap.org/data/2.5/weather?units=metric&"
    },
    
    // App settings - You can modify these as needed
    settings: {
        defaultUnits: "metric", // "metric" or "imperial"
        forecastDays: 5,        // Number of days for forecast
        maxSavedCities: 10      // Maximum number of saved cities
    }
};

// Make config available globally
window.WeatherAppConfig = config;
