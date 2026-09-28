import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Auth({ register }) {
  return (
    <section id='signup' className='w-full min-h-screen bg-[url(/auth.jpg)] bg-cover bg-center flex justify-center items-center flex-col'>
      <div className='w-full flex items-center justify-center flex-col p-10'>
        <div className='flex justify-center items-center flex-col bg-gray-950/50 rounded-3xl text-white p-5 w-2/4' >
        <h1 className='text-4xl font-bold text-white p-4'>BOOK STORE</h1>

          <FontAwesomeIcon icon={faUser} style={{ borderRadius: '50%' }} className='border rounded p-5 text-white text-6xl' />
          {register ?
            <h3 className='text-white mt-3 text-xl'>Register</h3> :
            <h3 className='text-white mt-3 text-xl'>Login</h3>
          }
          {register &&
            <div className='mt-5 w-full'>
              <input type="text" className='bg-white placeholder-gray-700 px-2 py-2 rounded-xl w-full' placeholder='User Name' />
            </div>
          }
          <div className='mt-5 w-full'>
            <input type="text" className='bg-white placeholder-gray-700 px-2 py-2 rounded-xl w-full' placeholder='Email Id' />
          </div>
          <div className='mt-5 w-full'>
            <input type="text" className='bg-white placeholder-gray-700 px-2 py-2 rounded-xl w-full' placeholder='Password' />
          </div>
          <p className='text-yellow-500 mt-3'>*Never share password with others</p>
          {register ?
            <button className='bg-green-900 text-white p-2 w-full mt-2 rounded'>Signup</button>

            :
            <button className='bg-green-900 text-white p-2 w-full mt-2 rounded'>Login</button>

          }
          {
            !register&&
            <p>--------sign with google--------</p>
          }

          {register ?
            <p className='text-white mt-2 text-center'>Are you already user? <Link className='text-blue-700 underline' to={'/login'}>Login</Link></p>
            :
            <p className='text-white mt-2 text-center'>Are you already user? <Link className='text-blue-700 underline' to={'/signup'}>Signup</Link></p>
          }

        </div>
      </div>
    </section>
  )
}

export default Auth
