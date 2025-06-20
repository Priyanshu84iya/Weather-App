// API key for OpenWeatherMap
const apiKey = "e121df7be77078cb0582b316c1bc48e7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
const geoUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

// Arrays to store multiple cities
let savedCities = [];

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded - initializing app");
    
    // Get all DOM elements
    const searchInput = document.getElementById("city-input");
    const searchBtn = document.getElementById("search-btn");
    const locationBtn = document.getElementById("location-btn");
    const weatherIcon = document.getElementById("weather-icon");
    const weatherInfo = document.getElementById("weather-info");
    const errorMessage = document.getElementById("error-message");
    const forecastContainer = document.getElementById("forecast-container");
    const savedCitiesContainer = document.getElementById("saved-cities-container");
    const addCityBtn = document.getElementById("add-city-btn");
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    
    console.log("Elements found:", {
        searchInput: !!searchInput,
        searchBtn: !!searchBtn,
        locationBtn: !!locationBtn,
        weatherInfo: !!weatherInfo,
        errorMessage: !!errorMessage,
        forecastContainer: !!forecastContainer,
        savedCitiesContainer: !!savedCitiesContainer,
        addCityBtn: !!addCityBtn,
        themeToggleBtn: !!themeToggleBtn
    });

    // Function to fetch and display weather data
    async function searchWeather(city) {
        try {
            console.log("searchWeather called with city:", city);
            
            // If no city is provided, use the search input
            if (!city) {
                city = searchInput.value.trim();
            }
            
            if (!city) {
                console.log("No city specified, returning");
                return;
            }
            
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
            
            // Update UI with weather data
            updateWeatherUI(weatherData);
            
            // Show weather info
            weatherInfo.style.display = "block";
            
            // Try to fetch forecast data
            try {
                const forecastResponse = await fetch(forecastUrl + encodedCity + `&appid=${apiKey}`);
                if (forecastResponse.ok) {
                    const forecastData = await forecastResponse.json();
                    updateForecastUI(forecastData);
                }
            } catch (forecastError) {
                console.error("Error fetching forecast:", forecastError);
            }
            
        } catch (error) {
            console.error("Error fetching weather data:", error);
            weatherInfo.style.display = "none";
            errorMessage.style.display = "block";
        }
    }
    
    // Function to update weather UI elements
    function updateWeatherUI(data) {
        console.log("Updating weather UI");
        
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
        
        // Change background based on weather condition
        changeBackground(data.weather[0].main);
    }
    
    // Function to update forecast UI
    function updateForecastUI(data) {
        forecastContainer.innerHTML = "";
        
        // Process the forecast data (every 8th item for daily forecast)
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
    
    // Function to change background based on weather condition
    function changeBackground(weatherCondition) {
        const body = document.body;
        
        // Remove all weather classes
        body.classList.remove("clear-sky", "clouds", "rain", "snow", "thunderstorm", "mist");
        
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
        }
    }
      // Function to get weather based on user's geolocation
    function getLocationWeather() {
        console.log("Getting location weather");
        
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
                        
                        // Search using city name from data
                        searchWeather(data.name);
                        
                    } catch (error) {
                        console.error("Error fetching location weather:", error);
                        weatherInfo.style.display = "none";
                        errorMessage.innerHTML = `<p><i class="fas fa-exclamation-circle"></i> ${error.message}</p>`;
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
    
    // Function to toggle theme
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
    
    // Function to load saved cities
    function loadSavedCities() {
        const saved = localStorage.getItem("weatherAppSavedCities");
        if (saved) {
            savedCities = JSON.parse(saved);
            updateSavedCitiesUI();
        } else {
            savedCitiesContainer.innerHTML = "<p>No saved cities yet. Add some!</p>";
        }
    }

    // Add event listeners for all buttons
    if (searchBtn) {
        searchBtn.addEventListener("click", function() {
            searchWeather();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                searchWeather();
            }
        });
        
        searchInput.addEventListener("input", function() {
            errorMessage.style.display = "none";
        });
    }
    
    if (locationBtn) {
        locationBtn.addEventListener("click", function() {
            getLocationWeather();
        });
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function() {
            toggleTheme();
        });
    }
    
    if (addCityBtn) {
        addCityBtn.addEventListener("click", function() {
            addCurrentCityToSaved();
        });
    }
    
    // Initialize app state
    
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
    
    // Load default city on startup
    const savedCity = localStorage.getItem("weatherAppLastCity") || "Delhi";
    searchInput.value = savedCity;
    setTimeout(() => {
        searchWeather(savedCity);
    }, 500);
});
