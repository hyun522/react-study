import { useState } from "react";
import styled from "styled-components";
import StarInput from "../components/Star/StarInput";

const Base = styled.section`
display: flex;
align-items:center;
flex-direction: column;
gap: 0.8rem;
justify-content:center;
text-align: center;
margin-top:1rem;
`
const Name = styled.span`
font-size:1.4rem;
line-height:100%;

`
const RatingValue = styled.span`
font-size:1.2rem;
line-height:100%
`
const RatingField = styled.fieldset`
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: row-reverse;
  border: none;
  transform: translateY(0.2rem);

  input:checked ~ label,
  labeL:hover,
  labeL:hover ~ label {
  transition: 0.2s;
  color: orange;
  }
`;
const ComentButton = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:1rem;
`

const ResetButton= styled.button`
width: 10rem;
text-align: center;
outline:none;
border:0.1rem solid;
border-radius: 3rem;
&:hover, &:active {
  background-color: blueviolet; 
  outline:none;

  }

`
export default function StarRating(){
  const[rating, setRating]= useState(0);
  const[comment,setComment]=useState("");
  
  const handleClickRating=(value:number)=>{
    setRating(value);

     if(value === 5 ){
      setComment("완전 최고에요");
    }
    else if(value === 4.5){
      setComment("최고에요");
    }
    else if(value === 4){
      setComment(" 좋아요");
    }
    else if(value === 3.5){
setComment('괜찮아요');
    }
    else if(value === 3){
      setComment('괜찮지만 뭔가 아쉬워요');
    }
    else if(value===2.5){
      setComment('아쉬워요');
    }
    else if(value ===2){
      setComment('별로에요');
    }
    else if(value === 1.5){
      setComment('정말 별로에요');
    }
    else if(value===1){
      setComment('최악이에요');
    }
    else if(value===0.5){
      setComment('점수가 아깝네요');
    }
    else{
      setComment('');
    }
  };
const handleRatingReset=()=>{
  setRating(0);
  setComment("");
document.querySelectorAll('input[name="rating"]').forEach((input) => {
    (input as HTMLInputElement).checked = false;
  });
}
 
  return(
    <Base>
      <Name>별점</Name>
      <RatingField>
        
         <StarInput
          onClickRating={handleClickRating}
          value={5}
          isHalf={false}
          active={rating >= 5} 

        />
        <StarInput
          onClickRating={handleClickRating}
          value={4.5}
          isHalf={true}
          active={rating >= 4.5} 
        />
        <StarInput
          onClickRating={handleClickRating}
          value={4}
          isHalf={false}
           active={rating >= 4} 
        />
        <StarInput
          onClickRating={handleClickRating}
          value={3.5}
          isHalf={true}
           active={rating >= 3.5} 
        />
        <StarInput
          onClickRating={handleClickRating}
          value={3}
          isHalf={false}
           active={rating >= 3} 
        />
        <StarInput
          onClickRating={handleClickRating}
          value={2.5}
          isHalf={true}
           active={rating >= 2.5} 
        />
        <StarInput
          onClickRating={handleClickRating}
          value={2}
          isHalf={false}
          active={rating >= 2} 
        />
        <StarInput
          onClickRating={handleClickRating}
          value={1.5}
          isHalf={true}
          active={rating >= 1.5} 
        />
        <StarInput
          onClickRating={handleClickRating}
          value={1}
          isHalf={false}
          active={rating >= 1} 
        />
        <StarInput
          onClickRating={handleClickRating}
          value={0.5}
          isHalf={true}
          active={rating >0.5} 
        />
      </RatingField>
      < ComentButton>
      <RatingValue>{rating} {comment}</RatingValue>
      <ResetButton onClick={handleRatingReset}>점수 다시주기</ResetButton>
      </ ComentButton>
    </Base>
  )

}