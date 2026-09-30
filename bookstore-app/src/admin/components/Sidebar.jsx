import { faHouse } from '@fortawesome/free-regular-svg-icons'
import { faBook, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <div className='bg-sky-200 flex items-center justify-center flex-col p-5 h-full'>

        <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />

        <h1 className='text-xl font-bold mt-4'>Bookstore Admin</h1>

        <div className='flex item center justify-center flex-col p-5 mt-7'>
          <Link to={'/admin-dashboard'} className='font-bold text-xl my-2'><FontAwesomeIcon icon={faHouse} style={{ color: "rgb(0, 0, 0)", }} />Home</Link>
          <Link to={'/admin-resource'} className='font-bold text-xl my-2'><FontAwesomeIcon icon={faBook} style={{ color: "rgb(0, 0, 0)", }} />All Books</Link>
          <Link to={'/admin-settings'} className='font-bold text-xl my-2'><FontAwesomeIcon icon={faGear} style={{ color: "rgb(0, 0, 0)", }} />Settings</Link>
        </div>

      </div>
    </>
  )
}

export default Sidebar