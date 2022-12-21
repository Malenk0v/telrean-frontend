import { useState } from 'react';
import './App.css';
import Balance from './components/Balance';
import Operation from './components/Operation';
function App() {
  const [balance, setBalence] = useState(0);
  const deposit = (sum) => {
    setBalence((prevBalance) => prevBalance + sum);
  };
  const withdraw = (sum) => {
    setBalence((prevBalance) =>
      prevBalance - sum < 0 ? 0 : prevBalance - sum
    );
  };

  return (
    <div>
      <Balance balance={balance} />
      <Operation deposit={deposit} withdraw={withdraw} />
    </div>
  );
}

export default App;
