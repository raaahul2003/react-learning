import React from 'react'

function User({userName,userExp}) {
  return (
    <div>
      <h1>User Component</h1>
      <h3 className='text-danger'>User Name: {userName}</h3>
      <h3 className='text-danger'>User Experience: {userExp}years</h3>
    </div>
  )
}

export default User
