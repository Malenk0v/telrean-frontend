import React from 'react';

const Start = ({ setPage }) => {
  return (
    <div>
      <h1>Start</h1>
      <button onClick={setPage}>Выбор котиков</button>
    </div>
  );
};

export default Start;
