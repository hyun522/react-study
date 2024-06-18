import React, { useState, useRef, useEffect } from "react";
import formatTime from "../../utills/formatTime";
import { Record } from "../../types";
import List from "../List";
import Timer from "../Timer";
import { Button } from "../Buttons/PrimaryButton/style";
import { ButtonLine, Container } from "./style";

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<Record[]>([]);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleStartStopwatch = () => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
    setRunning(true);
  };

  const handleRecordLap = () => {
    const newLap = {
      id: laps.length === 0 ? 1 : laps[laps.length - 1].id + 1,
      lap: formatTime(time),
    };
    setLaps((prevLaps) => [...prevLaps, newLap]);
  };

  const handleStopStopwatch = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    handleRecordLap();
    setRunning(false);
  };

  const handleResetStopwatch = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleDeleteLap = (id: number) => {
    const nextLaps = laps.filter((lap) => lap.id !== id);
    setLaps(nextLaps);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <Timer time={time} />
      <ButtonLine lapsLength={laps.length > 0}>
        <Button onClick={running ? handleStopStopwatch : handleStartStopwatch} state={running ? "stop" : "start"}>
          {running ? "Stop" : "Start"}
        </Button>

        {running && (
          <Button onClick={handleRecordLap} state="lap">
            Lap
          </Button>
        )}
      </ButtonLine>
      {laps.length !== 0 && <List onDelete={handleDeleteLap} laps={laps} />}
      <Button onClick={handleResetStopwatch} state="reset">
        Reset
      </Button>
    </Container>
  );
};

export default Stopwatch;
