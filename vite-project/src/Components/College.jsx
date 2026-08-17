import React, { useEffect, useState } from 'react'

function College() {
//    const collegname = "MGM"
    const [name,setName]=useState("XYZ PVT")
useEffect(()=>{
      console.log("name rendered")
    },[name])
    
  return (
    <div>
        <div className='m-2'>
            <input type="text" placeholder='Enter college name: ' className='form-control' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='p-5 bg-warning'>
            <h1>College Name: {name}</h1>
        </div>
    </div>
  )
}

export default College
