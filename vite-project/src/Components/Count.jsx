import React, { useEffect, useState } from 'react'

function Count() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
      console.log("count rendered")
    },[count])
  return (
    <div className='bg-dark p-5'>
        <p className='text-light'>Used By useEffect</p>
      <button className='btn btn-warning' onClick={()=>setCount(count+1)}>Count = {count} </button>
      
    </div>
  )
}

export default Count
