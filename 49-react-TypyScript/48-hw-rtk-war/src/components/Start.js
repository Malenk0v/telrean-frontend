import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeName, changePage } from '../reducers/userReducer';
import { game } from '../utils/contants'

const Start = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch()

  const handleChangeName = e => {
    setName(e.target.value.trim().toUpperCase());
  }

  const handleClickStart = () => {
    dispatch(changePage(game));
    dispatch(changeName(name));
  }

  return (
    <div>
      <h1>Ready For War</h1>
      <input onChange={handleChangeName} value={name} type='text' placeholder='Enter your name' />
      <button onClick={handleClickStart}>Start</button>
    </div>
  )
}

export default Start