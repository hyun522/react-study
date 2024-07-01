//apikey=54264f923b7bd94a1292ca8dc70b35fd

import axios from "axios";
import {  useState,useEffect } from "react";
import { BsCloudFog } from "react-icons/bs";
import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherShower, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny } from "react-icons/ti";
import "./weather.moudle.scss";
interface WeatherState {
  id: number;
  temperature: number;
  main: string;
  loading: boolean;

}

export default function Weather(){
  const [cold,setCold]=useState(false)
  
  const api ={
    key:"54264f923b7bd94a1292ca8dc70b35fd",
     base: "https://api.openweathermap.org/data/2.5/",
  }
//날짜 불러오기 
  const formatDate =(d:Date):string =>{
     let months: string[]= [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
     ];
     let days:string[]=["Sun","Mon","Tue","wed","Tur","Fri","Sat"];
     let day:string= days[d.getDay()];
     let month:string = months[d.getMonth()];
     let date =d.getDate();
     return `${day} ${month} ${date}`
  }
  
  //날짜 가져오기 
  const city = "Seoul";
  const url = `${api.base}weather?q=${city}&appid=${api.key}`;
  const [weather, setWeather] = useState<WeatherState>({
    id: 0,
    temperature: 0,
    main: "",
    loading: true,
  });

  //날씨 데이터 가져오기 
  axios.get(url).then((responseData)=>{
    const data = responseData.data;
    setWeather({
     id: data.weather[0].id,
      temperature: data.main.temp,
      main: data.weather[0].main,//Sunny,Cloud등 한 단어로 표현된 날씨 정보
      loading:false,
    });
  });

  useEffect(() => {
    setCold(weather.temperature < 290); // 섭씨 10도 미만일 때 cold 상태 설정
  }, [weather.temperature]);

  const selectIcon= ()=>{
    let iconId =
    weather.id === 800 ? 0 : ((weather.id)/100).toFixed(0);
    switch (iconId){
      case "0":
        return <TiWeatherSunny size="6rem" color="red"/>;
      case "2":
        return <TiWeatherStormy size="6rem" color="black"/>;
      case "3":
        return <TiWeatherShower size="6rem" color="blue"/>;
      case "5":
        return <TiWeatherDownpour size="6rem" color="navy"/>;
      case "6":
        return <TiWeatherSnow size="6rem" color="white"/>;
      case "7":
        return <BsCloudFog size="6rem" color="white"/>;
      case "8":
       return <TiWeatherCloudy size="6rem" color="white"/>
    }
  }

  return (
    <>
 {weather.loading ? (
        <div>Loading...</div>
      ) : (
        <div className={cold ? "cold" : "notCold"}>
        <div className="location">Seoul City, KOREA</div>
          <div className="date">{formatDate(new Date())}</div>
          <div className="icon">{selectIcon()}</div>
          <div className="temp">{weather.temperature}°C</div>
          <div className="weather">{weather.main}</div>
        </div>
      )}

    </>
  )
}