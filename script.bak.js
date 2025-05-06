// API key for OpenWeatherMap
const apiKey = "e121df7be77078cb0582b316c1bc48e7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
const geoUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

// Debug Mode
const DEBUG = true;
function logDebug(message) {
    if (DEBUG) console.log(`[DEBUG] ${message}`);
}

// DOM elements - We'll wait for DOM to load before assigning these
let searchInput;
let searchBtn;
let locationBtn;
let weatherIcon;
let weatherInfo;
let errorMessage;
let forecastContainer;
let savedCitiesContainer;
let addCityBtn;
let themeToggleBtn;

// Arrays to store multiple cities
let savedCities = [];

// Function to initialize event listeners
function initializeEventListeners() {
    // Get DOM elements
    searchInput = document.getElementById("city-input");
    searchBtn = document.getElementById("search-btn");
    locationBtn = document.getElementById("location-btn");
    weatherIcon = document.getElementById("weather-icon");
    weatherInfo = document.getElementById("weather-info");
    errorMessage = document.getElementById("error-message");
    forecastContainer = document.getElementById("forecast-container");
    savedCitiesContainer = document.getElementById("saved-cities-container");
    addCityBtn = document.getElementById("add-city-btn");
    themeToggleBtn = document.getElementById("theme-toggle-btn");
    
    // Add event listeners
    if (searchBtn) {
        searchBtn.addEventListener("click", searchWeather);
        console.log("Search button listener added");
    }
    
    if (searchInput) {
        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                searchWeather();
            }
        });
        console.log("Search input listener added");
        
        // Add input event for better user experience
        searchInput.addEventListener("input", function() {
            // Hide error message when user starts typing
            errorMessage.style.display = "none";
        });
    }
    
    if (locationBtn) {
        locationBtn.addEventListener("click", getLocationWeather);
        console.log("Location button listener added");
    }
    
    if (addCityBtn) {
        addCityBtn.addEventListener("click", addCurrentCityToSaved);
        console.log("Add city button listener added");
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", toggleTheme);
        console.log("Theme toggle button listener added");
    }
}

// Function to fetch and display weather data
async function searchWeather(city) {
    try {
        // If no city is provided, use the search input
        if (!city) {
            city = searchInput.value.trim();
        }
        
        if (!city) return;
        
        // Show loading state
        weatherInfo.style.display = "none";
        errorMessage.style.display = "none";
        
        // Encode the city name to handle spaces and special characters
        const encodedCity = encodeURIComponent(city);
        
        console.log("Fetching weather for:", encodedCity);
        
        // Fetch current weather
        const weatherResponse = await fetch(apiUrl + encodedCity + `&appid=${apiKey}`);
        
        if (!weatherResponse.ok) {
            throw new Error(`City not found (Status: ${weatherResponse.status})`);
        }
        
        const weatherData = await weatherResponse.json();
        
        // Check if we have valid weather data
        if (!weatherData || !weatherData.weather || weatherData.weather.length === 0) {
            throw new Error("Invalid weather data received");
        }
        
        // Fetch forecast data
        const forecastResponse = await fetch(forecastUrl + encodedCity + `&appid=${apiKey}`);
        
        if (!forecastResponse.ok) {
            throw new Error(`Forecast data not available`);
        }
        
        const forecastData = await forecastResponse.json();
        
        // Update UI with weather data
        updateWeatherUI(weatherData);
        
        // Update forecast UI
        updateForecastUI(forecastData);
        
        // Change background based on weather condition
        changeBackground(weatherData.weather[0].main);
        
        // Show weather info
        weatherInfo.style.display = "block";
        
        // Set search input value to the city name
        searchInput.value = weatherData.name;
        
    } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherInfo.style.display = "none";
        errorMessage.style.display = "block";
    }
}
}

// Function to update weather UI elements
function updateWeatherUI(data) {
    const cityElement = document.getElementById("city");
    const dateElement = document.getElementById("date");
    const tempElement = document.getElementById("temperature");
    const conditionElement = document.getElementById("weather-condition");
    const humidityElement = document.getElementById("humidity");
    const windElement = document.getElementById("wind-speed");
    
    // Update city name
    cityElement.textContent = data.name + ", " + data.sys.country;
    
    // Save this successful city search to localStorage
    localStorage.setItem("weatherAppLastCity", data.name);
    
    // Update date
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('en-US', options);
    
    // Update temperature (rounded to 1 decimal place)
    tempElement.textContent = Math.round(data.main.temp * 10) / 10 + "°C";
    
    // Update weather condition
    conditionElement.textContent = data.weather[0].description;
    
    // Update humidity
    humidityElement.textContent = data.main.humidity + "%";
    
    // Update wind speed (convert from m/s to km/h)
    windElement.textContent = Math.round(data.wind.speed * 3.6) + " km/h";
    
    // Update weather icon
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.src = iconUrl;
}

// Function to change background based on weather condition
function changeBackground(weatherCondition) {
    const body = document.body;
    
    // Remove all weather classes
    body.classList.remove(
        "clear-sky", 
        "clouds", 
        "rain", 
        "snow", 
        "thunderstorm", 
        "mist"
    );
    
    // Add the corresponding weather class
    switch(weatherCondition.toLowerCase()) {
        case "clear":
            body.classList.add("clear-sky");
            break;
        case "clouds":
            body.classList.add("clouds");
            break;
        case "rain":
        case "drizzle":
            body.classList.add("rain");
            break;
        case "snow":
            body.classList.add("snow");
            break;
        case "thunderstorm":
            body.classList.add("thunderstorm");
            break;
        case "mist":
        case "fog":
        case "haze":
            body.classList.add("mist");
            break;
        default:
            // Default background already set in CSS
            break;
    }
}

// Load app on page load
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, initializing weather app...");
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("weatherAppTheme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggleBtn) {
            const themeIcon = themeToggleBtn.querySelector("i");
            if (themeIcon) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
            }
        }
    }
    
    // Load saved cities
    loadSavedCities();
    
    // Try to get saved city from localStorage if available
    const savedCity = localStorage.getItem("weatherAppLastCity") || "London";
    
    // Add a small delay to ensure DOM is fully loaded
    setTimeout(() => {
        searchWeather(savedCity);
    }, 500);
});

// Function to update the 5-day forecast UI
function updateForecastUI(data) {
    // Clear previous forecast
    forecastContainer.innerHTML = "";
    
    // Process the forecast data (every 8th item for daily forecast)
    // OpenWeatherMap provides forecast in 3-hour intervals, so we need to filter
    const dailyForecast = data.list.filter((item, index) => index % 8 === 0);
    
    // Create forecast items (limit to 5 days)
    dailyForecast.slice(0, 5).forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const iconCode = day.weather[0].icon;
        const temperature = Math.round(day.main.temp);
        const condition = day.weather[0].description;
        
        const forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item");
        forecastItem.innerHTML = `
            <h4>${dayName}</h4>
            <img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon">
            <p class="temp">${temperature}°C</p>
            <p class="condition">${condition}</p>
        `;
        
        forecastContainer.appendChild(forecastItem);
    });
}

// Function to get weather based on user's geolocation
function getLocationWeather() {
    if (navigator.geolocation) {
        // Show loading state
        weatherInfo.style.display = "none";
        errorMessage.style.display = "none";
        
        navigator.geolocation.getCurrentPosition(
            async position => {
                try {
                    const { latitude, longitude } = position.coords;
                    console.log(`Geolocation: Lat ${latitude}, Long ${longitude}`);
                    
                    // Fetch weather data using coordinates
                    const response = await fetch(`${geoUrl}lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
                    
                    if (!response.ok) {
                        throw new Error(`Could not get weather for your location`);
                    }
                    
                    const data = await response.json();
                    
                    // Fetch forecast data using city name from weather data
                    searchWeather(data.name);
                    
                } catch (error) {
                    console.error("Error fetching location weather:", error);
                    weatherInfo.style.display = "none";
                    errorMessage.style.display = "block";
                }
            },
            error => {
                console.error("Geolocation error:", error);
                errorMessage.innerHTML = `<p><i class="fas fa-exclamation-circle"></i> Could not access your location. Please allow location access.</p>`;
                errorMessage.style.display = "block";
            }
        );
    } else {
        errorMessage.innerHTML = `<p><i class="fas fa-exclamation-circle"></i> Geolocation is not supported by your browser.</p>`;
        errorMessage.style.display = "block";
    }
}

// Function to handle theme toggle
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    // Update icon
    const themeIcon = themeToggleBtn.querySelector("i");
    if (body.classList.contains("dark-mode")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem("weatherAppTheme", "dark");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem("weatherAppTheme", "light");
    }
}

// Function to add current city to saved cities
function addCurrentCityToSaved() {
    const currentCity = document.getElementById("city").textContent;
    if (!currentCity || currentCity === "--") return;
    
    // Extract city name (remove country code)
    const cityName = currentCity.split(",")[0].trim();
    
    // Check if city already exists in saved cities
    if (!savedCities.includes(cityName)) {
        savedCities.push(cityName);
        localStorage.setItem("weatherAppSavedCities", JSON.stringify(savedCities));
        updateSavedCitiesUI();
    }
}

// Function to update saved cities UI
function updateSavedCitiesUI() {
    savedCitiesContainer.innerHTML = "";
    
    if (savedCities.length === 0) {
        savedCitiesContainer.innerHTML = "<p>No saved cities yet. Add some!</p>";
        return;
    }
    
    savedCities.forEach(city => {
        const cityCard = document.createElement("div");
        cityCard.classList.add("city-card");
        cityCard.innerHTML = `
            <h4>${city}</h4>
            <p>Click to view</p>
            <button class="remove-city" data-city="${city}"><i class="fas fa-times"></i></button>
        `;
        
        // Add event listener to view the city
        cityCard.addEventListener("click", function(e) {
            // Ignore if clicked on remove button
            if (e.target.closest(".remove-city")) return;
            searchWeather(city);
        });
        
        savedCitiesContainer.appendChild(cityCard);
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll(".remove-city").forEach(button => {
        button.addEventListener("click", function(e) {
            e.stopPropagation();
            const cityToRemove = this.getAttribute("data-city");
            savedCities = savedCities.filter(city => city !== cityToRemove);
            localStorage.setItem("weatherAppSavedCities", JSON.stringify(savedCities));
            updateSavedCitiesUI();
        });
    });
}

// Function to load saved cities from localStorage
function loadSavedCities() {
    const saved = localStorage.getItem("weatherAppSavedCities");
    if (saved) {
        savedCities = JSON.parse(saved);
        updateSavedCitiesUI();
    } else {
        savedCitiesContainer.innerHTML = "<p>No saved cities yet. Add some!</p>";
    }
}
