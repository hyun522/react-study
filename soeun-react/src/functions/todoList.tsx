import { useState ,useEffect} from "react";
import CheckOn from "../assets/checkon.svg";
import CheckOff from "../assets/checkoff.svg";
import './todoList.scss';

export default function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean[]>([]);

useEffect(() => {
  const savedTodos = localStorage.getItem('todos');
  const savedChecked = localStorage.getItem('checked');
  if (savedTodos && savedChecked) {
    setTodos(JSON.parse(savedTodos));
    setChecked(JSON.parse(savedChecked));
  }
}, []); 



useEffect(()=>{
  localStorage.setItem('todos',JSON.stringify(todos));
  localStorage.setItem('checked', JSON.stringify(checked));
   
},[todos, checked]);

 const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const addTodo = () => {
    setTodos([...todos, inputValue]);
    setChecked([...checked, false]);
    setInputValue('');
  }

  const toggleCheckbox = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
    localStorage.setItem('checked',JSON.stringify(newChecked));
  
  }
  const today = new Date();
  const formattedDate = today.toLocaleDateString();
const onDelete=(index:number)=>{
  setTodos(todos.filter((_,todoIndex)=>
    todoIndex!== index
  ))
}
  return (
    <div className="Container">
      <div className="navBar">Todo List</div>
      <main>
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <h1>Today</h1>
          <h2>{formattedDate}</h2>
          <div>
            <input placeholder="할일을 입력하세요" value={inputValue} onChange={inputChange} />
            <button onClick={addTodo}>+</button>
          </div>
        </form>

        <ul>
          {todos.map((todo, index) => (
            <li key={index} className={`todo-item ${checked[index] ? 'completed' : ''}`}>
              <label htmlFor={`checkbox-${index}`} onClick={() => toggleCheckbox(index)}>
                {checked[index] ? (
                  <img src={CheckOn} alt="checked" />
                ) : (
                  <img src={CheckOff} alt="unchecked" />
                )}
              </label>
              {todo}
              <button type="button" className="deleteBtn" onClick={()=>onDelete(index)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}