import styled, { css } from "styled-components";
import { FaStar, FaStarHalf } from "react-icons/fa";

interface StarInputProps{
  onClickRating:(value:number)=>void;
  value:number;
  isHalf:boolean;
  active:boolean;
 
}

const Input = styled.input`
display:none;
`

const Label = styled.label<{ isHalf: boolean; active:boolean; }>`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ active }) => (active ? "#orange" : "")};
  &:hover,&:active {
    color: #orange; 
  }
  
  ${({ isHalf }) =>
    isHalf &&
    css`
      position: absolute;
      width: 12px;
      overflow: hidden;

      &:nth-of-type(10) {
        transform: translate(-3.16rem);
      }
      &:nth-of-type(8) {
        transform: translate(-1.66rem);
      }
      &:nth-of-type(6) {
        transform: translate(-0.16rem);
      }
      &:nth-of-type(4) {
        transform: translate(1.36rem);
      }
      &:nth-of-type(2) {
        transform: translate(2.86rem);
      }
    `}
`;

const StarInput = ({onClickRating, value, isHalf,active}:StarInputProps)=>{
  const handleClickRatingInput =()=>{
    onClickRating(value);
  };
  return(
    <>
    <Input type="radio" name="rating" id={`star${value}`} value={value}/>
    <Label
    onClick={handleClickRatingInput}
    htmlFor={`star${value}`}
    isHalf={isHalf}
    active={active}
    >
{isHalf?<FaStarHalf/>:<FaStar/>}
    </Label>
    </>
  )
}
export default StarInput;