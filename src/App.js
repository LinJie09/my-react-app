import logo from './logo.svg';
import './App.css';
import Slider from './Slider/Slider';
import { useState } from 'react'
function App() {
  return(
    <>
      <Slider></Slider>
    </>
  );
  // const [number, setNumber] = useState(0)
  // return (
  //   <div className='container'>
  //     <body>
  //       <h1>Counter</h1>
  //       <span className={`value ${number > 0 ? 'text-green' : 'text-red'} ${number === 0 && 'text-black'}`} id='value'>{number}</span>
  //       <div className='btn-container'>

  //         <button className='btn increase'
  //           onClick={() => {
  //             setNumber(number - 1)
  //           }}>Dncrease
  //         </button>

  //         <button className='btn reset'
  //           onClick={() => {
  //             setNumber(0)
  //           }}>Reset
  //         </button>

  //         <button className='btn increase'
  //           onClick={() => {
  //             setNumber(number + 1)
  //           }}>Increase
  //         </button>
  //       </div>
  //     </body>
  //   </div>
  // );
}
export default App;
