import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
function AdminHeader() {
  return (
    <>
      <div className='flex justify-between items-center p-3'>
        <div className='flex items-center'>
          <img src="https://bookstore-wine-nu.vercel.app/logo.png" alt="" />
          <h1 className='md:text-3xl font-bold ms-3 text-xl'>BOOKSTORE</h1>
        </div>

        <div>
          <Link to={'/login'} className='border border-black rounded py-2 px-3'> <FontAwesomeIcon icon={faRightFromBracket} /> Logout</Link>
        </div>
      </div>
      <nav className='bg-blue-950 p-3 text-white w-full'>
        <marquee behavior="" direction="">
          Welcome,  Admin! You're all set to manage and monitor the system. Let’s get to work!
        </marquee>
      </nav>
    </>
  )
}

export default AdminHeader