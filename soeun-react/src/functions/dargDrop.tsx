import  { useState, useRef } from 'react';
import styled from "styled-components";

const Wrapper =styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const Title =styled.h1`
margin-top: 7rem;
`
const ListWrapper=styled.div`
display:flex;
gap: 5rem;
`
const Lists=styled.div`
width: 10rem;
background-color: aliceblue;
display: flex;
gap: 1rem;
flex-direction: column;
align-items: center;
padding: 1rem;
border-radius: 1rem


`
const List= styled.div`
width: 5rem;
background-color: orchid;
text-align: center;
padding: 0.1rem;
font-size: small;
border-radius: 0.8rem;
&:hover {
    background-color: lightcoral; 
  }
`
const ResetButton=styled.button`
margin-top: 4rem;
width: 10rem;
height: 3rem;
font-size: unset;
background-color: aquamarine;
border: none;
color: black;
border-radius: 1rem;
&:hover {
    background-color: cyan;
  }
`
const BackButton=styled.button`
margin-top: 4rem;
width: 10rem;
height: 3rem;
font-size: unset;
background-color: beige;
border: none;
color: black;
border-radius: 1rem;
&:hover {
    background-color:coral;
  }
`

export default function DragAndDrop() {
 const dragItem = useRef<number|null>(null);
 const dragOverItem= useRef<number|null>(null);
 const initialList = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];
 const initialLi = ["li1", "li2", "li3", "li4", "li5", "li6"];
 const[list,setList]= useState<string[]>([
  "Item1",
  "Item2",
  "Item3",
  "Item4",
  "Item5",
  "Item6"
 ]);
 const [li, setLi]=useState<string[]>([
  "li1","li2","li3","li4","li5","li6"
 ])
const [history, setHistory]=useState<string[][]>([]);

 const saveHistory = (currentList:string[])=>{
  setHistory((prev)=>[...prev, currentList]);
 };

 const undo=()=>{
  if(history.length === 0)return;
    const prevList = history[history.length-1];
    setHistory((prev)=> prev.slice(0, prev.length-1));
    setList(prevList);
    setLi(prevList);
  
 }
 const dragStart=(e:React.DragEvent<HTMLDivElement>, position:number)=>{
  dragItem.current=position;
  saveHistory(list);
  console.log(e.currentTarget.innerHTML);
 };

 const dragEnter=(_:React.DragEvent<HTMLDivElement>, position:number)=>{
  dragOverItem.current = position;

 }

 const drop=()=>{
  if(dragItem.current !== null && dragOverItem.current !==null){
    const newList=[...list];
    const newli=[...li];
    const dragItemValue = newList[dragItem.current];
    const dragliValue = newList[dragItem.current];
    newList.splice(dragItem.current,1);
    newList.splice(dragOverItem.current,0, dragItemValue);
    newli.splice(dragItem.current,1);
    newli.splice(dragOverItem.current,0, dragliValue);
    dragItem.current = null;
    dragOverItem.current=null;
    setList(newList);
    setLi(newli);
  }
 };
 const reset=()=>{
  setList(initialList);
  setLi(initialLi);
 }
  return (
    <Wrapper>
    <Title>아래 아이템을 드래그 해보세요!</Title>
    <ListWrapper>
   <Lists>
    {list &&
    list.map((item,idx)=>(
      <List
      key={idx}
   draggable
   onDragStart={(e)=>dragStart(e,idx)}
   onDragEnter={(e)=>dragEnter(e,idx)}
   onDragEnd={drop}
   onDragOver={(e)=>e.preventDefault()}
   >
    {item}
   </List>

    ))
    
    }  </Lists>
 <Lists>
   {list &&
    list.map((item,idx)=>(
      <List
   key={idx}
   draggable
   onDragStart={(e)=>dragStart(e,idx)}
   onDragEnter={(e)=>dragEnter(e,idx)}
   onDragEnd={drop}
   onDragOver={(e)=>e.preventDefault()}
   >
    {item}
   </List>
   
    ))
    }
</Lists>
    </ListWrapper>
    
    <ResetButton onClick={reset}>초기화 하기</ResetButton>
    <BackButton onClick={undo}>이전 상태로 </BackButton>
    </Wrapper>
  );
}