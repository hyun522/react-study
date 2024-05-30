import { useRef, useState } from "react"

export default function StopWatch(){
  const[running, setRunning]=useState<boolean>(false);
  const[time, setTime] =useState<number>(0);
  //lap버튼을 눌렀을 때 기록된 시간들 
  const[laps, setLaps]=useState<Record[]>([]);
  //timer의 실시간을 관리하는 변수
  const intervalRef= useRef<NodeJs.Timeout |undefined>(undefined);

  const startWatch = ()=>{
    if(!running){
      intervalRef.current = setInterval(()=>{
        setTime((prevTime)=> prevTime+1000);
      },1000);
      setRunning(true);
    }else{
      clearInterval(intervalRef.current);
      setRunning(false);
    }
  };

  const resetStopwatch = ()=>{
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
    setRunning(false);
  };

  const recordLap=()=>{
    const newLap ={
      id:laps.length === 0 ? 1 :laps[laps.length-1].id +1,
      lap:time,
    };
    setLaps((prevLaps)=>[...prevLaps, newLap]);
  }
  const deleteLap=(id:number)=>{
    const filteredLaps =laps
    .filter((record)=> record.id !== id)
    .map((record,index)=>({...record, id:index+1}));
    setLaps(filteredLaps);
  };

  const formatTime =(timeInMillis:number):string=>{
    const hours = Math.floor(timeInMillis/360000);
    const minutes = Math.floor((timeInMillis%360000)/60000);
    const seconds = Math.floor((timeInMillis%6000)/1000);
    const formattedTime = `${hours}:${minutes<10?'0':''}${minutes}:${seconds <10 ? '0':''}${seconds}`;
    return formattedTime;
  }
  return(
    <>
  {/* <Timer/> 타이머    */}
<button onClick={startWatch}>{running? 'Stop' :'Start'}</button>
<button onClick={resetStopwatch}>Reset</button>
{/* <Records /> */}
{running &&<button onClick={recordLap}>Lap</button>}

    </>
  )
}