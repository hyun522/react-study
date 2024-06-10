import styled from "styled-components";
import formatTime from "./formatTime";

const RecordWrapper =styled.div`
border-bottom: 0.1rem solid black;
display: flex;
width:100%;
justify-content:center;
font-size: large;
 &:hover .deleteButton {
    display: inline;
  }
  
`
const DeleteButton = styled.button`

margin-left:1rem;
display:none;
`

export interface LapRecord {
  id: number;
  lap: number; // 랩 시간을 숫자 타입으로 변경
  deleteLap: (id: number) => void;
}

export default function Record({ id, lap, deleteLap,  }: LapRecord) {

  return (
    <RecordWrapper>
      <span >Lap {id}: {formatTime(lap)}</span>
      <DeleteButton className='deleteButton' onClick={() => deleteLap(id)}>Delete Lap</DeleteButton>
    </RecordWrapper>
  );
}
