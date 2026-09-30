import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'


function Resource() {
  const [booklistStatus, setbooklistStatus] = useState(true)
  const [userlistStatus, setuserlistStatus] = useState(false)
  return (
    <>
      <AdminHeader />

      <div className='md:grid grid-cols-5'>
        <div className='col-span-1'>
          <Sidebar />

        </div>
        <div className='col-span-4'>

          <h1 className='mt-5 my-5 text-3xl text-center font-bold'>All Resources</h1>

          {/* tabs */}
          <div className='flex items-center justify-center gap-5'>
            <p onClick={() => {
              setbooklistStatus(true);
              setuserlistStatus(false);
            }} className={booklistStatus ? 'text-blue-800 border p-2 rounded' : 'text-black p-2'}>Book List</p>
            <p onClick={() => {
              setbooklistStatus(false);
              setuserlistStatus(true);
            }} className={userlistStatus ? 'text-blue-800 border p-2 rounded' : 'text-black p-2'}>User List</p>
          </div>
          {/* contents */}
          {
            booklistStatus &&
            <div className='md:grid grid-cols-4'>
              {/* card */}
              <div className='p-3'>
                <div className='shadow p-3 rounded text-center flex justify-center items-center flex-col'>
                  <Link to={'/view/1/book'}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcAQVbtbEdHrDg5Nid4fWToE0_4RG7a0vqw&s" alt="" />
                  </Link>
                  <h3>Dan Brown</h3>
                  <h3>The Da Vinci Code</h3>
                  <h3 className='text-blue-900'>Price</h3>
                  <button className='w-full bg-blue-900 text-white p-2'>Approve</button>
                </div>
              </div>

            </div>
          }
          {
            userlistStatus &&
            <div className='md:grid grid-cols-4 p-5'>
              <div className='rounded bg-gray-300 p-5'>
                <h4 className='text-red-800 font-bold'>ID:</h4>
                <div className='flex justify-around items-center'>
                  <img src="https://bookstore-serverfeb26.onrender.com/uploads/image-1779697250528-dp.png" alt="" height={'100px'} width={'100px'} style={{borderRadius:'50%'}}/>
                  <div>
                    <h2 className='font-bold'>User Name</h2>
                    <h3 className='font-bold'>Email</h3>
                  </div>
                </div>

              </div>

            </div>
          }

        </div>
      </div>
    </>
  )
}

export default Resource