import React from 'react';

const Cat = ({ cat }) => {
  return (
    <>
      <div className="container-photo">
        <h3>{cat.firstName}</h3>
        <img src={cat.img} alt={cat.firstName} />
      </div>
    </>
  );
};

export default Cat;
