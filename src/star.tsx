import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

//클릭버튼을 눌러야지 멘트가 바뀌도록 반영

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
  align-items: center;
  width: 185px;
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

const ScoreBox = styled.div``;

export default function Star() {
  const Array = [0, 1, 2, 3, 4];
  const [star, setStar] = useState([false, false, false, false, false]);
  const [selectedMent, setSelectedMent] = useState<string>('');
  const [selectedScore, setSelectedScore] = useState<string>('');

  const ment = ['매우 불만족', '불만족', '보통', '만족', '매우 만족'];
  const score = ['1점', '2점', '3점', '4점', '5점'];

  // useState hook은 상태를 직접적으로 수정하는 것이 아니라
  // 상태를 업데이트할 때마다 새로운 상태를 반환합니다.
  // 그래서 배열의 값을 직접 변경하는 대신 새로운 배열을 생성하여 이를 적용해야 합니다.

  // const starScore = (index: any) => {
  //   let star = [...score];
  //   for (let i = 0; i < 5; i++) {
  //     star[i] = i <= index ? true : false;
  //   }
  //   setScore(star);
  // };

  // onclick 기능을 없애도 되는거 아닌가
  const starScore = (index: number) => {
    //조건이 맞으면 true를 반환 한다.
    const newScore = Array.map((el, i) => i <= index);
    setStar(newScore);
    setSelectedMent(ment[index]);
    setSelectedScore(score[index]);
  };

  const handleMouseAction = (index: number, isMouseOver: boolean) => {
    const newScore = Array.map((el, i) => i <= index);
    setStar(newScore);
    if (isMouseOver) {
      setSelectedMent(ment[index]);
      setSelectedScore(score[index]);
    }
    //isMouseOver가 false일때 false를 반환 해서 string , false의 값이 토글돼 type에러 발생
    // setSelectedMent(isMouseOver && ment[index]);
    // setSelectedScore(isMouseOver && score[index]);
  };

  return (
    <Bg>
      <MainDiv>
        {/* ?? undefined일 경우 오른쪽 반환, ||(or연산자) 값존재하면 왼쪽 아니면 오른쪽, &&(and 연산자) */}
        {/* 널연산자는 html태그를 인식할순 없나 */}
        {selectedMent && <CommentButton>{selectedMent}</CommentButton>}
        <EmptyStarCollect>
          <div>
            {Array.map((el, index) => (
              <FaStar
                key={index}
                size='30'
                // score[index]가 true이면 노란색(#ffc107)
                onClick={() => starScore(index)}
                color={star[index] ? '#ffc107' : '#e4e5e9'}
                // onMouseOver={() => handleOnMouseOver(index)}
                // onMouseOut={() => handleOnMouseOut(index)}
                onMouseOver={() => handleMouseAction(index, true)}
                onMouseOut={() => handleMouseAction(index, false)}
              ></FaStar>
            ))}
          </div>
          <ScoreBox>{selectedScore}</ScoreBox>
        </EmptyStarCollect>
      </MainDiv>
    </Bg>
  );
}
