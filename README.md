# ☁️ Weather App

<div align="center">
  <img src="https://raw.githubusercontent.com/amandewatnitrr/amandewatnitrr/main/imgs/header_.png" alt="animated banner">

  ![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![](https://img.shields.io/badge/OpenWeatherMap-API-orange?style=for-the-badge)
  
  <p>A modern, responsive weather application that provides real-time weather information and forecasts</p>
  
  <img src="https://user-images.githubusercontent.com/67560900/142569072-22efe11a-01fb-4a73-95fb-cfe858165c97.gif" alt="Weather Animation" width="500px">
</div>

## ✨ Features

- **🔍 Search by City**: Get weather details for any city worldwide
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🌡️ Real-time Weather Data**: Temperature, humidity, wind speed, and conditions
- **🔄 Auto Location Detection**: Get weather for your current location
- **📊 5-Day Weather Forecast**: Plan ahead with extended forecast
- **🏙️ Multiple Cities Tracking**: Save and track weather in multiple locations
- **🌓 Dark/Light Mode**: Toggle between themes for comfortable viewing
- **⚡ Dynamic Weather Backgrounds**: UI changes based on current weather conditions
- **💾 Persistent Settings**: Your preferences are saved between sessions

## 🚀 Demo

<div align="center">
  <img src="https://raw.githubusercontent.com/rohan-paul/material-gallery/master/weather-app.gif" alt="Weather App Demo" width="800px">
</div>

## 🔧 Technologies Used

- **HTML5** for structure
- **CSS3** for styling and animations
- **JavaScript** for dynamic functionality
- **OpenWeatherMap API** for weather data
- **Font Awesome** for icons
- **Local Storage** for saving user preferences

## 📱 Screenshots

<div align="center">
  <table>
    <tr>
      <td><img src="https://cdn.dribbble.com/users/2158940/screenshots/7118235/media/1ea59d43e8e99a529220bed091ec00b4.png" alt="Light Mode" width="400"></td>
      <td><img src="https://cdn.dribbble.com/users/2158940/screenshots/7118235/media/de58ac1214d03f8d969ada4059574511.png" alt="Dark Mode" width="400"></td>
    </tr>
    <tr>
      <td align="center">Light Mode</td>
      <td align="center">Dark Mode</td>
    </tr>
  </table>
</div>

## 💻 Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python's built-in server
   python -m http.server
   # Or with npm's live-server
   npx live-server
   ```

4. You're all set! 🎉

## 🔑 API Key

This application uses the OpenWeatherMap API. To use your own API key:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api) to get a free API key
2. Replace the API key in `script.js`:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

## 🔒 Security Setup

Before running the application, you need to configure your API key securely:

### 1. Get Your API Key
- Visit [OpenWeatherMap](https://openweathermap.org/api)
- Sign up for a free account
- Generate your API key

### 2. Configure the Application
```bash
# Copy the example configuration file
cp config.example.js config.js
```

### 3. Add Your API Key
- Open `config.js` in your editor
- Replace `YOUR_API_KEY_HERE` with your actual OpenWeatherMap API key
- Save the file

### 4. Important Security Notes
- ⚠️ **Never commit `config.js` to git** - it contains your private API key
- ✅ The `config.js` file is already included in `.gitignore`
- ✅ Only commit `config.example.js` which doesn't contain real keys
- 🔄 Share `config.example.js` with other developers as a template

### 5. File Structure
```
Weather App/
├── config.js          # 🔒 Your private config (gitignored)
├── config.example.js   # 📝 Template for other developers
├── .gitignore          # 🛡️ Protects sensitive files
└── ...
```

## 🎨 Customization

- **Change Default City**: Modify the default city in `script.js`
- **Custom Themes**: Edit CSS variables in `:root` selector in `style.css`
- **Add More Weather Data**: Extend the API calls to fetch additional data like pressure, sunrise/sunset times, etc.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for the weather data API
- [Font Awesome](https://fontawesome.com/) for the icons

---

<div align="center">
  <img src="https://i.imgur.com/qFGw4X2.png" alt="Pry Uchiha Watermark" width="200px"><br>
  <b>Created with ❤️ by Pry Uchiha</b>
</div>
