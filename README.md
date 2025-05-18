# 🌦️ Weather App

A simple weather application built with Node.js, Express, and EJS that fetches weather data from the [OpenWeather API](https://openweathermap.org/api).

---

## 📂 Project Structure

- `server.js` – Main server file.
- `views/index.ejs` – Frontend template using EJS.
- `public/style.css` – Stylesheet for the UI.
- `.gitignore` – Git ignore file.
- `package.json` – Project dependencies and scripts.

---

## 🚀 How to Run

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```
2. Install dependencies:
```bash
npm install
```
3. Add your OpenWeather API key:
Create an account at OpenWeather.

Get your API key.

Create a .env file and add:
```env
API_KEY=your_api_key_here
```
Update your server.js code to use the API key from .env:
```js
require('dotenv').config();
const APIkey = process.env.API_KEY;
```
4. Start the server:
```bash
node server.js
```
Open your browser at:
```arduino
http://localhost:3000
```
🛠️ Requirements
Node.js installed

npm packages:

express

axios

ejs

dotenv (optional but recommended)

✨ Features
Search weather by city name.

Displays temperature, weather condition, and country.

Simple and clean user interface.


