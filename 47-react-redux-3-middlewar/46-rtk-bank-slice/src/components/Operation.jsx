import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuoteAction } from '../actionFunctions/quoteAction';
import { deposit, withdraw } from '../reducers/accountReducer';

const Operation = () => {
  const [sum, setSum] = useState(1);
  const dispatch = useDispatch();

  const handelClickGetQuote = () => {
    dispatch(fetchQuoteAction());
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-outline-warning btn-lg"
          onClick={() => dispatch(withdraw(sum))}
        >
          Withdraw
        </button>
        <input
          className="form-control-lg text-center"
          type="number"
          onChange={(e) => setSum(+e.target.value)}
          value={sum}
        />
        <button
          className="btn btn-outline-warning btn-lg"
          onClick={() => dispatch(deposit(sum))}
        >
          Deposit
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={handelClickGetQuote}
          className="m-5 btn btn-outline-info btn-lg"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default Operation;
