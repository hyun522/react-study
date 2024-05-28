import React, { useState } from 'react';
import styled from 'styled-components';

const Bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Main = styled.div`
  text-align: center;
`;

const Buttons = styled.div`
  margin-top: 20px;
`;

const Stop = styled.button`
  width: 200px;
  border: none;
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  background-color: #489bfc;
  box-shadow: 0 5px 0 0 #2789f9;
`;

const Reset = styled(Stop)`
  background-color: #ed544f;
  box-shadow: 0 5px 0 0 #dc403f;
`;

export default function StopWatch() {
  return (
    <Bg>
      <Main>
        <div></div>
        <Buttons>
          <Stop>STOP</Stop>
          <Reset>RESET</Reset>
        </Buttons>
      </Main>
    </Bg>
  );
}
