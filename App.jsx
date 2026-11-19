import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);

  const plusOne = () => {
    if (num1 + 1 > 15) {
      setNum1(15);
    } else {
      setNum1(num1 + 1);
    }
  };

  const minusOne = () => {
    if (num1 - 1 < 0) {
      setNum1(0);
    } else {
      setNum1(num1 - 1);
    }
  };

  const plusFive = () => {
    if (num1 + 5 > 15) {
      setNum1(15);
    } else {
      setNum1(num1 + 5);
    }
  };

  const minusFive = () => {
    if (num1 - 5 < 0) {
      setNum1(0);
    } else {
      setNum1(num1 - 5);
    }
  };

  return (
    <div>
      <p>Count: {num1}</p>
      <button onClick={plusOne}>Plus 1</button>
      <button onClick={minusOne}>Minus 1</button>
      <button onClick={plusFive}>Plus 5</button>
      <button onClick={minusFive}>Minus 5</button>
    </div>
  );
}

export default App;
