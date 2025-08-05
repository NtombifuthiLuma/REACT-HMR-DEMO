import React, { useState  } from 'react';
import './styles.css';
// import Greeting from './components/greeting';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Hello HMR!</h1>
      <button onClick={() => setCount(c => c + 5)}>
        Clicked {count} times
        <br></br> 
        hot update
      </button>
      <div className='card'>
          {/* <Greeting name="HMR support" age={12}/> */}
        </div>
        </div>
  );
};

export default App;
