import formatAPIDate from "@/utill/formatAPIDate";
import formatCategory from "@/utill/formateCategory";
import toGrid from "@/utill/togrid";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const formatDate = (date: string) => {
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);
  return `${year}년 ${month}월 ${day}일`;
};

const formatTime = (time: string) => {
  const hour = time.slice(0, 2);
  const minute = time.slice(2, 4);
  return `${hour}시 ${minute}분`;
};

export default function Home() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      const todayDate = new Date();
      const gridCoordinates = toGrid(location.longitude, location.latitude);

      async function getWeather() {
        try {
          const res = await fetch(
            `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${
              process.env.NEXT_PUBLIC_WEATHERKEY
            }&numOfRows=10&pageNo=1&dataType=JSON&base_date=${formatAPIDate(todayDate)}&base_time=0630&nx=${
              gridCoordinates.x
            }&ny=${gridCoordinates.y}`
          );
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await res.json();
          setResponse(data.response.body.items.item);
        } catch (error) {
          console.error("Fetch error: ", error);
          setError(error);
        }
      }

      getWeather();
    }
  }, [location]);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1>Weather Data</h1>
      {error && <p>Error: {error}</p>}
      <ul className="flex items-center justify-center gap-5 flex-wrap">
        {response ? (
          response.map((item, index) => (
            <li key={index} className="border p-4 rounded-md shadow-md">
              <p>{`발표 날짜: ${formatDate(item.baseDate)}`}</p>
              <p>{`발표 시각: ${formatTime(item.baseTime)}`}</p>
              <p>{`기상 예보: ${formatCategory(item.category, item.fcstValue)}`}</p>
              <p>{`예측 날짜: ${formatDate(item.fcstDate)}`}</p>
              <p>{`예측 시각: ${formatTime(item.fcstTime)}`}</p>
              <p>{`위도: ${item.ny}`}</p>
              <p>{`경도: ${item.nx}`}</p>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </main>
  );
}
