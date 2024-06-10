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
interface DragItemType {
  list: 'list' | 'li';
  index: number;
}
export default function DragAndDrop() {
 const dragItem = useRef<DragItemType | null>(null);
  const dragOverItem = useRef<DragItemType | null>(null);
 const initialList = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];
 const initialLi = ["li1", "li2", "li3", "li4", "li5", "li6"];
 const[list,setList]= useState<string[]>(initialList);
 const [li, setLi]=useState<string[]>(initialLi);
const [history, setHistory]=useState<{list:string[], li:string[]}[]>([]);

 const saveHistory = ()=>{
  setHistory((prev)=>[...prev, {list:[...list], li:[...li]}]);
 };

 const undo=()=>{
  if(history.length === 0)return;
    const prevList = history[history.length-1];
    setHistory((prev)=> prev.slice(0, prev.length-1));
    setList(prevList.list);
    setLi(prevList.li);
  
 }
  const dragStart = (_: React.DragEvent<HTMLDivElement>, listName: 'list' | 'li', index: number) => {
    dragItem.current = { list: listName, index };
    saveHistory();
  };


  const dragEnter = (_: React.DragEvent<HTMLDivElement>, listName: 'list' | 'li', index: number) => {
    dragOverItem.current = { list: listName, index };
  };

  const drop = () => {
    if (dragItem.current && dragOverItem.current) {
      const sourceList = dragItem.current.list === 'list' ? list : li;
      const targetList = dragOverItem.current.list === 'list' ? list : li;
      const setSourceList = dragItem.current.list === 'list' ? setList : setLi;
      const setTargetList = dragOverItem.current.list === 'list' ? setList : setLi;

      const sourceItem = sourceList[dragItem.current?.index];
      sourceList.splice(dragItem.current.index, 1);

      targetList.splice(dragOverItem.current.index, 0, sourceItem);

      setSourceList([...sourceList]);
      setTargetList([...targetList]);

      dragItem.current = null;
      dragOverItem.current = null;
    }
  };

  const reset = () => {
    setList(initialList);
    setLi(initialLi);
  };

  return (
    <Wrapper>
      <Title>아래 아이템을 드래그 해보세요!</Title>
      <ListWrapper>
        <Lists>
          {list.map((item, idx) => (
            <List
              key={idx}
              draggable
              onDragStart={(e) => dragStart(e, 'list', idx)}
              onDragEnter={(e) => dragEnter(e, 'list', idx)}
              onDragEnd={drop}
              onDragOver={(e) => e.preventDefault()}
            >
              {item}
            </List>
          ))}
        </Lists>
        <Lists>
          {li.map((item, idx) => (
            <List
              key={idx}
              draggable
              onDragStart={(e) => dragStart(e, 'li', idx)}
              onDragEnter={(e) => dragEnter(e, 'li', idx)}
              onDragEnd={drop}
              onDragOver={(e) => e.preventDefault()}
            >
              {item}
            </List>
          ))}
        </Lists>
      </ListWrapper>
      <ResetButton onClick={reset}>초기화 하기</ResetButton>
      <BackButton onClick={undo}>이전 상태로</BackButton>
    </Wrapper>
  );
}