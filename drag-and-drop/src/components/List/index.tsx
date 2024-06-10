import { useState } from "react";
import { Item, ListField } from "./Liststyle";

const arrry = ["🍇포도", "🍍파인애플", "🍓딸기", "🍊오렌지", "🍋레몬", "🍎사과", "🍉수박", "🍒체리"];

export default function List() {
  const [list, setList] = useState(arrry);
  return (
    <ListField>
      {list.map((item) => (
        <li
          draggable
          onDragStart={(e) => dragStart(e, idx)}
          onDragEnter={(e) => dragEnter(e, idx)}
          onDragEnd={drop}
          onDragOver={(e) => e.preventDefault()}
          key={item}
          id={item}
        >
          <Item>{item}</Item>
        </li>
      ))}
    </ListField>
  );
}
