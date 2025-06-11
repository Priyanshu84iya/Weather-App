<div align="center">

# 🌤️ Weather App

### ✨ A Beautiful, Modern & Fully Responsive Weather Application ✨

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-FF8C00?style=for-the-badge&logo=openweathermap&logoColor=white)](https://openweathermap.org/api)

[![Live Demo](https://img.shields.io/badge/🚀-Live%20Demo-success?style=for-the-badge)](https://your-demo-link.com)
[![License](https://img.shields.io/badge/📄-MIT%20License-blue?style=for-the-badge)](LICENSE)
[![Stars](https://img.shields.io/github/stars/Priyanshu84iya/weather-app?style=for-the-badge&color=yellow)](https://github.com/username/weather-app/stargazers)

---

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Cloud%20with%20Rain.png" alt="Weather" width="100" height="100" />

**Get real-time weather information for any location worldwide with our beautiful, intuitive weather app!**

<img src="https://user-images.githubusercontent.com/67560900/142569072-22efe11a-01fb-4a73-95fb-cfe858165c97.gif" alt="Weather Animation" width="400px">

</div>

---

## 🎯 **Key Features**

<table>
<tr>
<td width="50%">

### 🌍 **Core Features**
- 🔍 **Global Weather Search** - Get weather for any city worldwide
- 📍 **Auto Location Detection** - One-click weather for your location  
- 🌡️ **Real-time Data** - Live temperature, humidity & wind speed
- � **5-Day Forecast** - Plan ahead with detailed forecasts
- 🏙️ **Multi-City Tracking** - Save and monitor multiple locations

</td>
<td width="50%">

### ✨ **User Experience**
- 📱 **Fully Responsive** - Perfect on any device size
- 🌓 **Dark/Light Themes** - Toggle for comfortable viewing
- ⚡ **Dynamic Backgrounds** - Changes based on weather conditions
- 💾 **Persistent Settings** - Your preferences are remembered
- 🎨 **Modern UI/UX** - Clean, intuitive design

</td>
</tr>
</table>

---

## �️ **Screenshots & Demo**

<div align="center">

### 🌅 **Light Mode**
<img src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center" alt="Light Mode" width="45%" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>

### 🌙 **Dark Mode**  
<img src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop&crop=center" alt="Dark Mode" width="45%" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>

### 📱 **Mobile Responsive**
<img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=600&fit=crop&crop=center" alt="Mobile View" width="30%" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);"/>

</div>

---

## �️ **Technology Stack**

<div align="center">

| Frontend | API | Tools |
|:--------:|:---:|:-----:|
| ![HTML5](https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg) | ![OpenWeatherMap](https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openweathermap.svg) | ![VS Code](https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg) |
| **HTML5** | **OpenWeatherMap** | **VS Code** |
| ![CSS3](https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg) | ![Font Awesome](https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fontawesome/fontawesome-original.svg) | ![Git](https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg) |
| **CSS3** | **Font Awesome** | **Git** |
| ![JavaScript](https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg) | ![Local Storage](https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg) | ![GitHub](https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg) |
| **JavaScript** | **Local Storage** | **GitHub** |

</div>

---

## � **Quick Start Guide**

<div align="center">

### 📦 **Installation**

</div>

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Priyanshu84iya/weather-app.git

# 2️⃣ Navigate to project directory  
cd weather-app

# 3️⃣ Open in browser (choose one method)
# Method A: Direct file opening
open index.html

# Method B: Using Python server
python -m http.server 8000

# Method C: Using Node.js live-server
npx live-server

# 4️⃣ Visit the app
# http://localhost:8000 (if using server)
```

<div align="center">

### 🔑 **API Configuration**

</div>

> **📝 Note:** This app uses OpenWeatherMap API for weather data

<table>
<tr>
<td width="50%">

**Step 1: Get API Key**
1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Create a free account
3. Generate your API key
4. Copy the key

</td>
<td width="50%">

**Step 2: Configure App**
1. Open `script.js`
2. Find line with `const apiKey`
3. Replace with your key:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

</td>
</tr>
</table>

<div align="center">

### ✅ **You're All Set!**

🎉 Open the app and start exploring weather data worldwide! 🌍

</div>

---

## 🎨 **Customization Options**

<details>
<summary><b>🎛️ Click to expand customization guide</b></summary>

### 🌈 **Theme Customization**
```css
/* Edit CSS variables in style.css */
:root {
    --primary-color: #5b6cf9;    /* Change primary color */
    --secondary-color: #8c5cdd;  /* Change secondary color */
    --text-color: #333;          /* Change text color */
    --background-color: #fff;    /* Change background */
}
```

### 🏙️ **Default City**
```javascript
// Edit in script.js
const defaultCity = "New York";  // Change default city
```

### 🌡️ **Temperature Units**
```javascript
// Edit API URLs in script.js
const apiUrl = "...?units=metric&q=";  // metric or imperial
```

### 📊 **Additional Weather Data**
You can extend the app to show:
- 🌅 Sunrise/Sunset times
- 🔄 Atmospheric pressure  
- 👁️ Visibility distance
- ☔ Precipitation probability
- 🌬️ Wind direction

</details>

---

## 🤝 **Contributing**

<div align="center">

**We welcome contributions from the community! 🎉**

[![Contributors](https://img.shields.io/github/contributors/Priyanshu84iya/weather-app?style=for-the-badge)](https://github.com/Priyanshu84iya/weather-app/graphs/contributors)
[![Fork](https://img.shields.io/github/forks/Priyanshu84iya/weather-app?style=for-the-badge)](https://github.com/Priyanshu84iya/weather-app/network/members)
[![Issues](https://img.shields.io/github/issues/Priyanshu84iya/weather-app?style=for-the-badge)](https://github.com/Priyanshu84iya/weather-app/issues)

</div>

### 🛠️ **How to Contribute**

1. **🍴 Fork** the project
2. **🌿 Create** your feature branch  
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **💾 Commit** your changes
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **📤 Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **🔀 Open** a Pull Request

### 💡 **Contribution Ideas**
- 🐛 Bug fixes and improvements
- ✨ New features and enhancements  
- � Documentation improvements
- 🎨 UI/UX enhancements
- 🌐 Internationalization (i18n)
- ♿ Accessibility improvements

---

## �📄 **License**

<div align="center">

This project is licensed under the **MIT License** 📜

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

*See the [LICENSE](LICENSE) file for details*

</div>

---

## 🙏 **Acknowledgements & Credits**

<div align="center">

### 🌟 **Special Thanks**

</div>

| Service | Purpose | Link |
|:-------:|:-------:|:----:|
| 🌤️ **OpenWeatherMap** | Weather API | [Visit Site](https://openweathermap.org/) |
| 🎨 **Font Awesome** | Beautiful Icons | [Visit Site](https://fontawesome.com/) |
| 🖼️ **Unsplash** | Stunning Images | [Visit Site](https://unsplash.com/) |
| 💻 **VS Code** | Development Environment | [Visit Site](https://code.visualstudio.com/) |

---

## 📞 **Support & Contact**

<div align="center">

### 💬 **Get Help**

[![GitHub Issues](https://img.shields.io/badge/🐛-Report%20Bug-red?style=for-the-badge)](https://github.com/Priyanshu84iya/weather-app/issues)
[![Feature Request](https://img.shields.io/badge/💡-Request%20Feature-green?style=for-the-badge)](https://github.com/Priyanshu84iya/weather-app/issues)
[![Discussions](https://img.shields.io/badge/💬-Discussions-blue?style=for-the-badge)](https://github.com/Priyanshu84iya/weather-app/discussions)


---

### ⭐ **If you found this project helpful, please give it a star!** ⭐

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="50" height="50" />

**Made with ❤️ by [Pry Uchiha](https://github.com/Priyanshu84iya)**

<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png" alt="Wave" width="50" height="50" />

</div>
