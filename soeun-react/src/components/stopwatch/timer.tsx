import styled from "styled-components";
interface TimerProp{
  lapTime:string;
}

const TimerWrapper = styled.div`
font-size: large;
margin-top:3rem;
`
export default function Timer({lapTime}:TimerProp){
 const lapTimeString = lapTime;

    return (
        <TimerWrapper>
            {lapTimeString}
        </TimerWrapper>
    )
}