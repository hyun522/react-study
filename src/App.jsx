import { Link } from 'react-router-dom';
function App() {
  return (
    <>
      <h2>리액트 스터디로 구현한 목록</h2>
      <div>
        <Link to='/counter'>counter</Link>
      </div>
      <div>
        <Link to='/calculator'>calculator</Link>
      </div>
      <div>
        <Link to='/todolist'>todolist</Link>
      </div>
      <div>
        <Link to='/star'>star</Link>
      </div>
      <div>
        <Link to='/drag'>drag</Link>
      </div>
      <div>
        <Link to='/stopwatch'>stopwatch</Link>
      </div>
      <div>
        <Link to='/practice'>practice</Link>
      </div>
      <div>
        <Link to='/openweather'>openWeatherMap</Link>
      </div>
    </>
  );
}

export default App;
