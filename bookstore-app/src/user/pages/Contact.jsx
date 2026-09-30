import React from 'react'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons'


function Contact() {
  return (
    <>
      <UserHeader />
      <div className='p-2 md:ps-30 md:pe-30'>
        <h1 className='text-3xl text-center font-bold'>
          Contacts
        </h1>
        <div className='p-10'>
          <p className='md:text-center '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit sed natus ut iure unde! Cum in rerum labore aperiam quibusdam hic, quas corporis culpa iste? Doloribus, eveniet porro. Exercitationem, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere itaque reiciendis tempore molestiae similique natus quisquam fuga. Culpa fugit cum illum explicabo odit eius itaque harum, quod placeat veritatis?
          </p>
        </div>
        <div className='md:flex justify-between items-center mx-15 p-5'>

          <div className='flex items-center mt-3'>
            <FontAwesomeIcon icon={faLocationDot} style={{ color: "rgb(0, 0, 0)", borderRadius: '50%' }} className='text-2xl bg-gray-100 p-3' />
            <div className='text-justify ms-2'>
              <p>BookStore-123</p>
              <p>Calicut, Near Ksrtc Stand</p>
            </div>
          </div>

          <div className='flex items-center mt-3'>
            <FontAwesomeIcon icon={faPhone} style={{ color: "rgb(0, 0, 0)", borderRadius: '50%' }} className='text-2xl bg-gray-100 p-3' />
            <h3 className='ms-2'>+91 7994699455  </h3>


          </div>

          <div className='flex items-center mt-3'>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "rgb(0, 0, 0)", borderRadius: '50%' }} className='text-2xl bg-gray-100 p-3' />
            <p className='ms-2'>bookstore@gmail.com</p>
          </div>

        </div>

        <div className='md:grid grid-cols-2 p-5'>
          <div className='m-5 rounded bg-gray-300'>
            <div className='p-5 flex justify-center items-center flex-col'>
              <h1 className='text-2xl font-bold'>Send Me Message</h1>

              <div className='flex flex-col gap-2 mt-10 w-full'>
                <input type="text" placeholder='Name' className='bg-white w-full p-2 rounded' />
                <input type="text" placeholder='Email' className='bg-white w-full p-2 rounded' />
                <textarea name="" id="" placeholder='Message' className='bg-white w-full p-2 rounded' rows={8}></textarea>

                <button className='w-full bg-gray-950 text-white p-2 rounded font-bold'>Send <FontAwesomeIcon icon={faPaperPlane} /></button>

              </div>

            </div>



          </div>
          <div className='p-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.54684727985!2d75.72841394018309!3d11.255555506919812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Keralam!5e0!3m2!1sen!2sin!4v1790765730071!5m2!1sen!2sin" width="600" height="450" allowfllscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" className='rounded w-full'></iframe>
          </div>

        </div>


      </div>
    </>
  )
}

export default Contact
