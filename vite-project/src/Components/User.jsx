import React from 'react'
import useFetch from '../hooks/usefetch'


function User({userName,userExp}) {
  const users = useFetch('https://jsonplaceholder.typicode.com/users')
  console.log(users);
  
  const show=(msg)=>{
    alert(msg)
  }
  return (
    <div>
      <h1>User Component</h1>
      <h3 className='text-danger'>User Name: {userName}</h3>
      <h3 className='text-danger'>User Experience: {userExp}years</h3>
      {/* <button onClick={show} className='btn btn-primary'>click here</button> */}
      <button onClick={()=>show("Button is Clicked")} className='btn btn-primary'>click here</button>
      <h1 className='my-3 text-primary'>Users List</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Sl.NO</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((user, index)=>(
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default User
