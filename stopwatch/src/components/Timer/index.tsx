import formatTime from "../../utills/formatTime";
import { TimerBox } from "./style";

interface Props {
  time: number;
}

const Timer = ({ time }: Props) => {
  return (
    <TimerBox>
      <p>{formatTime(time)}</p>
    </TimerBox>
  );
};

export default Timer;
