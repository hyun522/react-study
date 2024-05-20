import { useRef, useState } from 'react';

export default function Drag() {
  const dragItem = useRef(); // 드래그할 아이템의 인덱스
  const dragOverItem = useRef(); // 드랍할 위치의 아이템의 인덱스
  const [list, setList] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ]);

  // 드래그 시작될 때 실행
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML); // 드래그 요소가 발생한 HTML 내용을 나타냄
  };

  // 드래그 중인 대상이 위로 포개졌을 때
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  // 드랍 (커서를 뗐을 때)
  const drop = () => {
    const newList = [...list];
    const dragItemValue = newList[dragItem.current];
    newList.splice(dragItem.current, 1);
    newList.splice(dragOverItem.current, 0, dragItemValue);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(newList);
  };

  return (
    <>
      {list &&
        list.map((item, idx) => (
          <div
            key={idx}
            draggable // 드래그 가능하도록 설정
            onDragStart={(e) => dragStart(e, idx)}
            onDragEnter={(e) => dragEnter(e, idx)}
            onDragEnd={drop}
            onDragOver={(e) => e.preventDefault()} // 드롭을 허용하도록 설정
            style={{
              padding: '8px',
              border: '1px solid black',
              marginBottom: '4px',
            }}
          >
            {item}
          </div>
        ))}
    </>
  );
}
