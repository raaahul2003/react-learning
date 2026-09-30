import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Sidebar from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'




function Dashboard() {
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5'>
        <div className='col-span-1'>
          <Sidebar />

        </div>
        <div className='grid-cols-4'>
          <div className='p-5'>
            <div>
              <div className='bg-blue-600 p-4 flex items-center justify-center'>
                <FontAwesomeIcon className='text-3xl' icon={faFile} style={{color: "rgb(0, 0, 0)",}} />
                <div>
                  <h3>Books</h3>
                  <h3>100+</h3>
                </div>
              </div>

            </div>

          </div>



        </div>
      </div>

    </>
  )
}

export default Dashboard