import React, { useState } from "react";
import styled from "styled-components";
import StarOn from "../assets/Icon_star_on.svg";
import StarOff from "../assets/Icon_star_off.svg";

interface StarProps {
  selected: boolean;
  onClick: () => void;
  onMouseOver: () => void;
  onMouseOut: () => void;
}

const RATINGS = [1, 2, 3, 4, 5];

function getText(star: number) {
  switch (star) {
    case 1:
      return "매우 불만족";
      break;
    case 2:
      return "불만족";
      break;
    case 3:
      return "보통";
      break;
    case 4:
      return "만족";
      break;
    case 5:
      return "매우 만족";
      break;

    default:
      "별점을 올바르게 선택해 주세요";
      break;
  }
}

const Article = styled.article`
  text-align: center;
  padding: 2rem;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: inherit;
`;

function Star({ selected = false, onClick, onMouseOut, onMouseOver }: StarProps) {
  const starIcon = selected ? StarOn : StarOff;

  return (
    <Button onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}>
      <img src={starIcon} alt="별점" />
    </Button>
  );
}

export default function RatingInput() {
  const [hoverRating, setHoverRating] = useState(0);
  const [inputValue, setinputValue] = useState(0);
  const [text, setText] = useState("");

  const handleStarClick = (value: number) => {
    setinputValue(value);
    setText(getText(value)!);
  };

  const handleStarMouseOver = (value: number) => {
    setHoverRating(value);
  };

  const handleStarMouseOut = () => {
    setHoverRating(0);
  };

  return (
    <Article>
      <h2>별을 클릭해 주세요.</h2>
      <List>
        {RATINGS.map((rating) => (
          <li key={rating}>
            <Star
              selected={rating <= (hoverRating || inputValue)}
              onClick={() => handleStarClick(rating)}
              onMouseOver={() => handleStarMouseOver(rating)}
              onMouseOut={handleStarMouseOut}
            />
          </li>
        ))}
      </List>
      {inputValue !== 0 && (
        <h2>
          {inputValue}점 {text}
        </h2>
      )}
    </Article>
  );
}
