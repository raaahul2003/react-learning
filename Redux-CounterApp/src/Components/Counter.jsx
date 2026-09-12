import React from 'react'

function Counter() {
    return (
        <div className='bg-dark' style={{ height: '100vh' }}>
            <h1 className='text-light text-center p-5'>Counter App</h1>
            <div className='border border-white p-5'>
                <h1 style={{ fontSize: '50px' }} className='text-center text-white my-5'>0</h1>
                <div className='d-flex align-items-center justify-content-around'>
                    <button className='btn btn-success'>INCREMENT[+]</button>
                    <button className='btn btn-danger'>RESET</button>
                    <button className='btn btn-warning'>DECREMENT[-]</button>
                </div>
                <div className='d-flex align-items-center justify-content-between my-5 p-5'>
                    <input type="text" placeholder='Enter a value' className='form-control'/>
                    <button className='btn btn-primary ms-3'>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
