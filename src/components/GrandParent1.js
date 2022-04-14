import React, { useContext } from 'react'
import { CountContext } from '../App';

const GrandParent1 = () => {
  const countContext = useContext(CountContext);
  return (
    <>
      <h1>GrandParent1 - {countContext.countState}</h1>
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </>
  )
}

export default GrandParent1