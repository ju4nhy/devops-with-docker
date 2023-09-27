Simple weather app for learning purposes.

Before you begin, make sure you have a free API key from OpenWeatherMap.
https://openweathermap.org/price

Usage

1. Pull the Docker Image:
docker pull ju4nhy/weatherapp

2. Run the Container:
docker run -p 3000:3000 -e REACT_APP_API_KEY=your_api_key_here ju4nhy/weatherapp

Replace your_api_key_here with your actual OpenWeatherMap API key.

3. Access the WeatherApp:
After running the container, the WeatherApp will be accessible at http://localhost:3000 in your web browser.
