import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'


function Counter() {
    const { count } = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const valueRef = useRef()
    

    const handleAddByAmount = () => {
        let amount = valueRef.current.value
        if (amount) {
            dispatch(incrementByAmount(Number(amount)))
            console.log(amount);
            
        }
        else {
            alert("Enter a Value!")
        }
    }



    return (
        <div className='bg-dark' style={{ height: '100vh' }}>
            <h1 className='text-light text-center p-5'>Counter App</h1>
            <div className='border border-white p-5'>
                <h1 style={{ fontSize: '50px' }} className='text-center text-white my-5'>{count}</h1>
                <div className='d-flex align-items-center justify-content-around'>
                    <button className='btn btn-success' onClick={() => dispatch(increment())}>INCREMENT[+]</button>
                    <button className='btn btn-danger' onClick={() => dispatch(reset())}>RESET</button>
                    <button className='btn btn-warning' onClick={() => dispatch(decrement())}>DECREMENT[-]</button>
                </div>
                <div className='d-flex align-items-center justify-content-between my-5 p-5'>
                    <input type="text" placeholder='Enter a value' className='form-control' ref={valueRef} />
                    <button className='btn btn-primary ms-3' onClick={handleAddByAmount}>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
