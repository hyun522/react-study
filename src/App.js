import { Link } from 'react-router-dom';
import Button from './components/Button';
//리액트쿼리 issuccess

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
      <Button color='red' type='button'>
        버튼입니다
      </Button>
      <Button color='orange' type='button'>
        버튼입니다
      </Button>
      <Button color='green' type='button'>
        버튼입니다
      </Button>
      <Button color='purple' type='button'>
        버튼입니다
      </Button>
      <Button color='gray' type='button'>
        버튼입니다
      </Button>
    </>
  );
}

export default App;
