import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Realisation/Header'
import { decrement, increment, incrementAmount } from '../store/slices/counterSlice';

function Realisation() {
  const currValue = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState();


  return (
    <div>
      <Header/>
      <div>
        Current Value: { currValue }
      </div>

      <div>
        <button onClick={()=> dispatch(increment())}>Increase by 1</button>
        <button onClick={()=> dispatch(decrement())}>Decrease by 1</button>
      </div>

     
        <input type="number" placeholder='Increase by number' name="" id="" onChange={(e)=>setAmount(e.target.value)}/>
        <button onClick={()=> dispatch(incrementAmount(parseInt(amount)))}>Increase by Amount</button>
      
    </div>
  )
}

export default Realisation