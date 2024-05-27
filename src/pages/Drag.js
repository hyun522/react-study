// 드래그 하나만 짤떄
// import { useRef, useState } from 'react';

// export default function Drag() {
//   const dragItem = useRef(); // 드래그할 아이템의 인덱스
//   const dragOverItem = useRef(); // 드랍할 위치의 아이템의 인덱스
//   const [list, setList] = useState([
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     'Item 5',
//   ]);

//   // 드래그 시작될 때 실행
//   const dragStart = (e, position) => {
//     dragItem.current = position;
//     console.log(e.target.innerHTML); // 드래그 요소가 발생한 HTML 내용을 나타냄
//   };

//   // 드래그 중인 대상이 위로 포개졌을 때
//   const dragEnterpink;, position) => {
//     dragOverItem.current = position;
//     console.log(e.target.innerHTML);
//   };

//   // 드랍 (커서를 뗐을 때)
//   const drop = () => {
//     const newList = [...list];
//     const dragItemValue = newList[dragItem.current];
//     newList.splice(dragItem.current, 1);
//     newList.splice(dragOverItem.current, 0, dragItemValue);
//     dragItem.current = null;
//     dragOverItem.current = null;
//     setList(newList);
//   };

//   return (
//     <>
//       {list &&
//         list.map((item, idx) => (
//           <div
//             key={idx}
//             draggable // 드래그 가능하도록 설정
//             onDragStart={(e) => dragStart(e, idx)}
//             onDragEnter={(e) => dragEnter(e, idx)}
//             onDragEnd={drop}
//             onDragOver={(e) => e.preventDefault()} // 드롭을 허용하도록 설정
//             style={{
//               padding: '8px',
//               border: '1px solid black',
//               marginBottom: '4px',
//             }}
//           >
//             {item}
//           </div>
//         ))}
//     </>
//   );
// }

// 최상위 컴포넌트로서, 두 개의 리스트와 드래그 앤 드롭 로직을 관리합니다.
// Drag => dualdragList
import React, { useRef, useState } from 'react';
import DualSelector from '../components/DualDragList';
import style from '../scss/Drag.module.scss';

export default function DragAndDrop() {
  const [list1, setList1] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [list2, setList2] = useState(['Item 4', 'Item 5', 'Item 6']);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, index, listIdentifier) => {
    dragItem.current = { index, listIdentifier };
    console.log(dragItem.current);
  };

  const handleDragEnter = (e, index, listIdentifier) => {
    dragOverItem.current = { index, listIdentifier };
    console.log(dragOverItem.current);
  };

  const handleDrop = () => {
    const sourceList =
      dragItem.current.listIdentifier === 'list1' ? [...list1] : [...list2];

    const targetList =
      dragOverItem.current.listIdentifier === 'list1' ? [...list1] : [...list2];

    if (
      dragItem.current.listIdentifier === 'list1' &&
      dragOverItem.current.listIdentifier === 'list2'
    ) {
      const [movedItem] = sourceList.splice(dragItem.current.index, 1);
      targetList.splice(dragOverItem.current.index + 1, 0, movedItem);
      setList1(sourceList);
      setList2(targetList);
      if (dragOverItem.current.index === '') {
        setList1([...list2, movedItem]);
      }
    } else if (
      dragItem.current.listIdentifier === 'list2' &&
      dragOverItem.current.listIdentifier === 'list1'
    ) {
      const [movedItem] = sourceList.splice(dragItem.current.index, 1);
      targetList.splice(dragOverItem.current.index + 1, 0, movedItem);
      setList1(targetList);
      setList2(sourceList);
    } else {
      if (
        dragItem.current.listIdentifier === 'list1' &&
        dragOverItem.current.listIdentifier === 'list1'
      ) {
        const [movedItem] = sourceList.splice(dragItem.current.index, 1);
        sourceList.splice(dragOverItem.current.index + 1, 0, movedItem);
        setList1(sourceList);
      } else {
        const [movedItem] = sourceList.splice(dragItem.current.index, 1);
        sourceList.splice(dragOverItem.current.index + 1, 0, movedItem);
        setList2(sourceList);
      }
      console.log(sourceList);
    }
    if (list1.length === 0 && dragItem.current.listIdentifier === 'list2') {
      console.log(sourceList);
      console.log(dragItem.current.index);
      const [movedItem] = sourceList.splice(dragItem.current.index, 1);
      console.log(movedItem);
      setList1([movedItem]);
    }

    dragItem.current = null;
    dragOverItem.current = null;
  };

  const handleReset = () => {
    setList1(['Item 1', 'Item 2', 'Item 3']);
    setList2(['Item 4', 'Item 5', 'Item 6']);
  };

  return (
    <div className={style.bg}>
      <div
        className={style.main}
        ondragOver={(e) => {
          e.preventDefault();
        }}
      >
        <div className={style['left-container']}>
          <h2>List 1</h2>
          {list1.map((item, index) => (
            <DualSelector
              key={index}
              item={item}
              index={index}
              listIdentifier='list1'
              handleDragStart={handleDragStart}
              handleDragEnter={handleDragEnter}
              handleDragEnd={handleDrop}
              ondragOver={(e) => {
                e.preventDefault();
              }}
            />
          ))}
        </div>
        <button className={style.reset} onClick={handleReset}>
          초기화
        </button>
        <div className={style['right-container']}>
          <h2>List 2</h2>
          {list2.map((item, index) => (
            <DualSelector
              key={index}
              item={item}
              index={index}
              listIdentifier='list2'
              handleDragStart={handleDragStart}
              handleDragEnter={handleDragEnter}
              handleDragEnd={handleDrop}
              ondragOver={(e) => {
                e.preventDefault();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
