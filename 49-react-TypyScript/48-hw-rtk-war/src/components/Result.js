import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../reducers/userReducer';
import { game } from '../utils/contants'

const Result = () => {
  const { score, result } = useSelector(state => state.game);
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{result}</h2>
      <h3>{score[0]}-{score[1]}</h3>
      <button onClick={() => dispatch(changePage(game))}>Again ?</button>
    </div>
  )
}

export default Result