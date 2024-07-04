//현재위치 option 클릭시 해당 데이터에 맞게 수정
//option 현재 위치 모두 오늘 내일 모레 데이터가 화면에 보이도록 수정

import React, { useState, useEffect } from 'react';
import { getWeather, getForecast, getWeatherByCity } from '../apis/weatherApi';
import classNames from 'classnames/bind';
import styles from '../scss/OpenWeather.module.scss';

const cx = classNames.bind(styles);

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

interface ForecastData {
  list: {
    dt_txt: string;
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
  }[];
}

const OpenWeather: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [selectedCityWeather, setSelectedCityWeather] =
    useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectDay, setSelectDay] = useState<string>('today');
  const [selectedCity, setSelectedCity] = useState<string>('Seoul');

  useEffect(() => {
    getWeatherByCity(selectedCity).then((data) => setSelectedCityWeather(data));
  }, [selectedCity]);
  //electedCity의 초기값을 'Seoul'로 설정하셨다면, selectedCityWeather를 selectedCity에 따라 업데이트하도록 설정해야 한다.
  //즉,useState의 초기값을 설정했다고하더라고 마운트될떄 해당 데이터 값을 가져오려면 useEffect처리 해줘야한다.
  //데이터를 비동기적으로 불러오기 때문에 null이란 초기값이 있을수 박ㅆ에 없다.

  //useEffect를 어디서 불러오는지도 영향을 미친다

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    const showPosition = async (position: GeolocationPosition) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      try {
        const weatherData = await getWeather(lat, lon);
        setCurrentWeather(weatherData);
        const forecastData = await getForecast(lat, lon);
        setForecast(forecastData);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    const showError = (error: GeolocationPositionError) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          setError('사용자가 위치 정보 요청을 거부했습니다.');
          break;
        case error.TIMEOUT:
          setError('사용자 위치 요청이 시간 초과되었습니다.');
          break;
        default:
          setError('알 수 없는 오류가 발생했습니다.');
          break;
      }
    };

    getLocation();
  }, []);

  const handleCityChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const city = event.target.value;
    setSelectedCity(city);
    try {
      const cityWeatherData = await getWeatherByCity(city);
      setSelectedCityWeather(cityWeatherData);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!currentWeather || !forecast) {
    return <div>Loading...</div>;
  }

  const today = currentWeather;
  const tomorrow = forecast.list.find((item) => {
    const date = new Date(item.dt_txt);
    return date.getDate() === new Date().getDate() + 1;
  });

  const dayAfterTomorrow = forecast.list.find((item) => {
    const date = new Date(item.dt_txt);
    return date.getDate() === new Date().getDate() + 2;
  });

  const handleChangeDay = (day: string) => {
    setSelectDay(day);
  };

  return (
    <>
      <div className={cx('weatherInfo')}>
        <h1 className={cx('selectDay')}>현재 위치의 날씨 정보</h1>
        <div className={cx('list')}>
          <button onClick={() => handleChangeDay('today')}>오늘</button>
          <button onClick={() => handleChangeDay('tomorrow')}>내일</button>
          <button onClick={() => handleChangeDay('dayAfterTomorrow')}>
            모레
          </button>
        </div>
        <div>
          {selectDay === 'today' && (
            <div>
              <p>온도: {today.main.temp} °C</p>
              <p>날씨: {today.weather[0].description}</p>
              <p>습도: {today.main.humidity} %</p>
              <p>풍속: {today.wind.speed} m/s</p>
              <img
                src={`https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}
              />
            </div>
          )}
          {selectDay === 'tomorrow' && tomorrow && (
            <div>
              <p>온도: {tomorrow.main.temp} °C</p>
              <p>날씨: {tomorrow.weather[0].description}</p>
              <p>습도: {tomorrow.main.humidity} %</p>
              <p>풍속: {tomorrow.wind.speed} </p>
              <img
                src={`https://openweathermap.org/img/wn/${tomorrow.weather[0].icon}@2x.png`}
              />
            </div>
          )}
          {selectDay === 'dayAfterTomorrow' && dayAfterTomorrow && (
            <div>
              <p>온도: {dayAfterTomorrow.main.temp} °C</p>
              <p>날씨: {dayAfterTomorrow.weather[0].description}</p>
              <p>습도: {dayAfterTomorrow.main.humidity} %</p>
              <p>풍속: {dayAfterTomorrow.wind.speed} m/s</p>
              <img
                src={`https://openweathermap.org/img/wn/${dayAfterTomorrow.weather[0].icon}@2x.png`}
              />
            </div>
          )}
        </div>
      </div>
      <div className={cx('weatherInfo')}>
        <h1 className={cx('selectDay')}>{selectedCity}의 날씨 정보</h1>
        <select onChange={handleCityChange} className={cx('list')}>
          <option disabled selected>
            광역시 별 날씨
          </option>
          <option value='Seoul'>서울</option>
          <option value='Incheon'>인천</option>
          <option value='Gwangju'>광주</option>
          <option value='Daejeon'>대전</option>
          <option value='Ulsan'>울산</option>
          <option value='Daegu'>대구</option>
          <option value='Busan'>부산</option>
        </select>
        {selectedCityWeather && (
          <div>
            <p>온도: {selectedCityWeather.main.temp} °C</p>
            <p>날씨: {selectedCityWeather.weather[0].description}</p>
            <p>습도: {selectedCityWeather.main.humidity} %</p>
            <p>풍속: {selectedCityWeather.wind.speed} m/s</p>
            <img
              src={`https://openweathermap.org/img/wn/${selectedCityWeather.weather[0].icon}@2x.png`}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default OpenWeather;
