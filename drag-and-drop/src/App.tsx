import React, { useRef, useState } from "react";
import List from "./components/List";
import styled from "styled-components";
import { Item, ListField } from "./components/List/Liststyle";

const DropField = styled.section`
  background-color: skyblue;
  width: 500px;
  height: 50vh;
`;

function DropZone() {
  return <DropField></DropField>;
}

const App = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState([
    "🍇포도",
    "🍍파인애플",
    "🍓딸기",
    "🍊오렌지",
    "🍋레몬",
    "🍎사과",
    "🍉수박",
    "🍒체리",
  ]);
  const [dropZoneItems, setDropZoneItems] = useState([]);

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const newList = [...list];
    const dragItemValue = newList[dragItem.current];
    newList.splice(dragItem.current, 1);
    newList.splice(dragOverItem.current, 0, dragItemValue);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(newList);
  };

  const dropInDropZone = (e) => {
    const newList = [...list];
    const dragItemValue = newList[dragItem.current];
    newList.splice(dragItem.current, 1);
    setList(newList);
    setDropZoneItems([...dropZoneItems, dragItemValue]);
    dragItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <>
      <ListField>
        {list &&
          list.map((item, idx) => (
            <Item
              key={idx}
              draggable
              onDragStart={(e) => dragStart(e, idx)}
              onDragEnter={(e) => dragEnter(e, idx)}
              onDragEnd={drop}
              onDragOver={(e) => e.preventDefault()}
            >
              {item}
            </Item>
          ))}
      </ListField>
      <DropField onDrop={dropInDropZone} onDragOver={(e) => e.preventDefault()}>
        {dropZoneItems.map((item, idx) => (
          <Item key={idx}>{item}</Item>
        ))}
      </DropField>
    </>
  );
};

export default App;
