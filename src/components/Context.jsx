import React, { useContext } from 'react'
import { Counter } from '../context/counter';

export default function Context() {
  const { counter, setCounter } = useContext(Counter);



  const decremint = () => {
    if (counter !== 0) {
      setCounter(counter - 1)
    }
  }


  return (
    <div className='text-center'>
      <h1>
        Counter
      </h1>
      <section className='mt-5'>
        <button className='btn btn-danger' onClick={decremint}>-</button>
        <button className='btn btn-dark mx-5'>{counter}</button>
        <button className='btn btn-success' onClick={() => setCounter(counter + 1)}>+</button>
      </section>
    </div>
  )
}
