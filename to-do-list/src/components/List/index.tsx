import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface ListProps {
  onDelete: (id: number) => void;
  onEdit: (id: number, nextText: string) => void;
  onChecked: (id: number) => void;
  todos: Todo[];
}

interface ItemProps {
  onDelete: (id: number) => void;
  onEdit: (id: number, nextText: string) => void;
  onChecked: (id: number) => void;
  todo: Todo;
}

function TodoItem({ todo, onDelete, onEdit, onChecked }: ItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  };

  const handleEditSubmit = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={handleEditChange} />
          <button onClick={handleEditSubmit}>저장</button>
          <button onClick={() => setIsEditing(false)}>취소</button>
        </>
      ) : (
        <>
          <span onClick={() => onChecked(todo.id)} style={{ textDecoration: todo.checked ? "line-through" : "none" }}>
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={() => onDelete(todo.id)}>삭제</button>
        </>
      )}
    </div>
  );
}

export default function TodoList({ todos, ...props }: ListProps) {
  return (
    <div>
      <h2>투두 리스트</h2>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} {...props} />
        ))}
      </div>
    </div>
  );
}
