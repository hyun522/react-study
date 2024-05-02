import React from 'react';
import emptyStar from './assets/emptyStar.png';
import styled from 'styled-components';

const Bg = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainDiv = styled.div`
  text-align: center;
`;

const EmptyStarCollect = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`;

const EmptyStar = styled.img`
  width: 30px;
`;

const CommentButton = styled.button`
  background-color: #118ee5;
  color: #fff;
  font-weight: 500;
  margin-bottom: 10px;
  padding: 5px;
  width: 100px;
  border-radius: 6px;
  border: none;
`;

function star() {
  return (
    <Bg>
      <MainDiv>
        <CommentButton>멘트가 나온다.</CommentButton>
        <EmptyStarCollect>
          <EmptyStar alt='' src={emptyStar}></EmptyStar>
          <EmptyStar alt='' src={emptyStar}></EmptyStar>
          <EmptyStar alt='' src={emptyStar}></EmptyStar>
          <EmptyStar alt='' src={emptyStar}></EmptyStar>
          <EmptyStar alt='' src={emptyStar}></EmptyStar>
        </EmptyStarCollect>
      </MainDiv>
    </Bg>
  );
}

export default star;
