import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [number,setNumber] = useState(0)
  return (
    <div className='App'>
      <header className='App-header'>
        <div>Counter : {number}</div>
        <button onClick={()=>{setNumber(number+1)}}>加加</button>
        <button onClick={()=>{setNumber(number-1)}}>減減</button>
      </header>
    </div>
  );
}
export default App;
