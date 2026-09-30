import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Sidebar from '../components/Sidebar'

function Settings() {
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5'>
        <div className='col-span-1'>
          <Sidebar />

        </div>
        <div className='grid-cols-4'>

          Settings

        </div>
      </div>
    </>
  )
}

export default Settings