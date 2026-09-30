import React, { useState } from 'react'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faEye } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { faBackward, faXmark } from '@fortawesome/free-solid-svg-icons'



function ViewBook() {
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <UserHeader />
      <section className='m-5 border border-gray-900 rounded md:flex'>
        <div className='p-5'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcAQVbtbEdHrDg5Nid4fWToE0_4RG7a0vqw&s" alt="" />
        </div>
        <div className='p-5'>
          <div className='flex justify-between'>
            <h2 className='font-bold text-xl'>Me Before You</h2>

            <FontAwesomeIcon onClick={() => setModalStatus(true)} icon={faEye} style={{ color: "rgb(0, 0, 0)", }} />

          </div>
          <h3 className='text-blue-500 mt-4'> - Jojo Moyes</h3>

          <div className='md:flex justify-between  mt-5'>
            <h3 className='font-bold text-xl '>Publisher: Michael Joseph</h3>
            <h3 className='font-bold text-xl '>Language: English</h3>
            <h3 className='font-bold text-xl '>No:of Pages: 480</h3>
          </div>

          <div className='md:flex justify-between  mt-5'>
            <h3 className='font-bold text-xl'>Category: Romance, Fiction</h3>
            <h3 className='font-bold text-xl'>Real Price: 159</h3>
            <h3 className='font-bold text-xl'>ISBN:ISBN-0-71-815783-4</h3>
          </div>

          <p className='mt-5 text-justify'>
            Me Before You is a romance novel written by Jojo Moyes. The book was first published on 5 January 2012 in the United Kingdom. A sequel titled After You was released on 24 September 2015 through Pamela Dorman Books.[1][2] A second sequel, Still Me, was published in January 2018.[3]
          </p>

          <div className='flex justify-end mt-5'>
            <Link className='bg-blue-900 text-white p-2 rounded'><FontAwesomeIcon icon={faBackward} />Back</Link>
            <button className='bg-green-900 text-white p-2 rounded ms-2'>Buy Now</button>
          </div>
        </div>

      </section>

      {/* modal */}
      {
        modalStatus &&
        <div className='relative z-10'>
          <div className='bg-gray-500/75 inset-0 fixed'>
            <div className='flex items-center justify-center min-h-screen p-10'>
              <div className='bg-white ' style={{ height: '500px' }}>

                {/* modal header */}

                <div className='flex  text-white p-3 bg-black items-center justify-between'>
                  <h3>Book Images</h3>
                  <FontAwesomeIcon icon={faXmark} onClick={() => setModalStatus(false)} />

                </div>
                {/* modal ody */}
                <div className='bg-white p-5'>
                  <p className='text-blue-700'><FontAwesomeIcon icon={faCamera} />Camera click of the book in the hand of seller</p>
                  <div className='md:flex m-5' >
                    <img src="" alt="" height={'300px'} width={'250px'} className='m-5'/>

                  </div>

                </div>
              </div>
            </div>


          </div>
        </div>
      }
    </>
  )
}

export default ViewBook
