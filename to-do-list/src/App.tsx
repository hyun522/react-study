import { useCallback, useRef, useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/List";

function App() {
  const [todos, setTodos] = useState<{ id: number; text: string; checked: boolean }[]>([]);
  const [value, setValue] = useState("");
  const nextId = useRef(1);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    return setValue(inputValue);
  };

  const handleDeleteTask = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const handleEditTask = useCallback(
    (id: number, newText: string) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
    },
    [todos]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: nextId.current,
          text: value,
          checked: false,
        },
      ]);
      nextId.current++;
      setValue("");
    }
  };
  const handleCheckTask = useCallback(
    (id: number) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
    },
    [todos]
  );

  return (
    <>
      <Input value={value} onChange={handleInputValue} onSubmit={handleSubmit} />
      <TodoList todos={todos} onChecked={handleCheckTask} onEdit={handleEditTask} onDelete={handleDeleteTask} />
    </>
  );
}

export default App;
