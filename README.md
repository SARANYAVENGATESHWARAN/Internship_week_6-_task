# 🌦️ Weather Forecast Web Application

A modern, responsive **Weather Forecast Web Application** built using **HTML, CSS, and JavaScript**, which provides real-time weather information for selected cities using the **OpenWeatherMap API**.
This project demonstrates **API integration, asynchronous JavaScript, modular code structure, and Local Storage usage**, following industry-standard front-end development practices.

## 📌 Features

- Real-time weather data retrieval
- City search functionality
- Displays temperature, humidity, wind speed, and weather conditions
- Asynchronous data fetching using `async/await`
- User preference persistence using Local Storage
- Responsive and user-friendly UI
- Error handling for invalid input and network issues

## 🛠️ Technologies Used

- **HTML5** – Structure and layout  
- **CSS3** – Styling and responsive design  
- **JavaScript (ES6+)** – Application logic and API handling  
- **OpenWeatherMap API** – Real-time weather data  

## 📂 Project Structure

    Weather-App/
    │
    ├── index.html
    ├── css/
    │ └── style.css
    ├── js/
    │ ├── api.js
    │ ├── app.js
    │ └── storage.js
    ├── assets/
    │ └── images/
    └── README.md


## ⚙️ Setup Instructions

### Prerequisites
- Web Browser (Chrome / Firefox / Edge)
- Internet connection
- Code editor (VS Code recommended)

### Steps to Run the Project
1. Clone or download this repository.
2. Extract the files if downloaded as a ZIP.
3. Open the project folder in a code editor.
4. Open `index.html` in a web browser.
5. Ensure you have an active internet connection.
6. Search for a city to view real-time weather details.

## 🔗 API Integration

- **API Name:** OpenWeatherMap API  
- **Type:** RESTful API  
- **Authentication:** API Key  

### Endpoint
https://api.openweathermap.org/data/2.5/weather


### Example Request
https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=f63f4c58803556d8fbdc56a7be4ded4&units=metric
---

## ⏱️ Asynchronous JavaScript

The application uses `fetch()` with `async/await` to retrieve weather data without blocking the UI. Error handling is implemented using `try-catch` to manage invalid city names, network issues, and API errors gracefully.

## 💾 Local Storage

Local Storage is used to save the user’s last selected city. This allows the application to automatically load weather data for the stored city when the page is refreshed, improving user experience without requiring a backend server.

## 🧪 Testing

The application has been tested for:
- Valid city inputs
- Invalid city names
- No internet connectivity
- Page reload persistence using Local Storage

## 📸 Screenshots

Screenshots included in the project demonstrate:
- Application homepage
- City search functionality
- Weather details display
- Error handling for invalid inputs

## 🎯 Project Purpose

This project was developed as part of an **internship / academic assignment** to demonstrate practical skills in:
- Front-end web development
- API integration
- Asynchronous programming
- Code organization and documentation

 ## Live Project Link:https://saranyavengateshwaran.github.io/Internship_week_6-_task/
 ## Documentation of the Project:https://docs.google.com/document/d/1a9BVrngAVO_bqBnUpiDZHS5MNlOPd0nWZyK3jHxRycE/edit?usp=sharing
