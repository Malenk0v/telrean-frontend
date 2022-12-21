import React from 'react';
import { useState } from 'react';
import Cat from './Cat';
import { defaultCat, cats } from '../utils/constants';

const Cats = () => {
  const [cat, setCat] = useState(defaultCat);
  return (
    <>
      <Cat cat={cat} />

      <div className="container-photos">
        <p>Libary</p>
        <div className="cards">
          {cats
            .filter((f) => f !== cat)
            .map((item) => {
              return (
                <div className="card" key={item.id}>
                  <h3>{item.firstName}</h3>
                  <img
                    onClick={() => setCat(item)}
                    src={item.img}
                    alt={item.firstName}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Cats;
