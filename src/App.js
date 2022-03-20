//import './App.css';
//import Slider from './Slider/Slider';
import { useState } from 'react'
import LoginForm from './LoginForm';


function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123'
  }

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);

    if(details.email ===adminUser.email && details.password ===adminUser.password){
      console.log('Logged in');
      setUser({
        name: details.name,
        email: details.email
      });
    }else{
      console.log('Details do not match!');
      setError('Details do not match!');
    }
  }

  const Logout = () => {
    setUser({name: '', email: '' });
  }

  return (
    <div className='App'>
      {(user.email != '' )? (
        <div className='welcome'>
          <h2>Welcome,<span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : ( 
        <LoginForm Login ={Login} error={error} />
        )}
    </div>
  );
  // return(
  //   <>
  //     <Slider></Slider>
  //   </>
  // );

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
