import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Count from "./functions/counter.tsx";
import Calculator from "./functions/calculator.tsx";
import TodoList from "./functions/todoList.tsx";
import Star from "./functions/star.tsx";
import DragAndDrop from "./functions/dargDrop.tsx";
import StopWatch from "./functions/stopWatch.tsx";
const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/functions/counter" element={<Count />} />
        <Route path="/functions/calculator" element={<Calculator />} />
        <Route path="/functions/todoList" element={<TodoList />} />
        <Route path="/functions/star" element={<Star/>} />
        <Route path="/functions/dragDrop" element={<DragAndDrop/>} />
        <Route path="/functions/stopWatch" element={<StopWatch/>} />
      </Routes>
    </Router>
  );
};
export default MyRouter;
