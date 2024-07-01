import axios from 'axios';

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getWeather = async (lat: number, lon: number) => {
  if (!apiKey) {
    throw new Error('API Key is not defined');
  }

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    {
      params: {
        lat,
        lon,
        appid: apiKey,
        units: 'metric',
      },
    }
  );

  console.log(response.data);
  return response.data;
};

export const getForecast = async (lat: number, lon: number) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast`,
    {
      params: {
        lat: lat,
        lon: lon,
        appid: apiKey,
        units: 'metric',
      },
    }
  );
  console.log(response.data);
  return response.data;
};

export const getWeatherByCity = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  return response.data;
};
