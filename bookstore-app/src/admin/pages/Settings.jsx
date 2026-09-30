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
        <div className='col-span-4'>
          <h1 className='mt-5 my-5 text-3xl text-center font-bold'>Settings</h1>
          <div className='md:grid grid-cols-2 p-5'>
            <div className='p-3'>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non labore quam aspernatur veniam quasi, laudantium dolor rem ab recusandae, amet doloribus expedita temporibus distinctio qui fugiat! Consectetur, temporibus veritatis.
                Modi eius veritatis architecto ea iure repellat ab eos enim suscipit placeat fugiat dolor aut, voluptas exercitationem vitae necessitatibus? Cum nesciunt magni voluptas optio eaque esse adipisci eligendi quibusdam delectus?
              </p>
              <p className='text-justify'>
                Molestias accusantium adipisci fuga voluptatem aspernatur! Totam accusantium similique illo ipsa architecto, debitis qui ab natus distinctio nobis quod veniam at, neque, vitae impedit illum repellendus odit explicabo id ducimus!
                Atque corporis nulla perferendis modi possimus laboriosam nobis autem eos. Natus possimus quibusdam nisi eaque doloremque. Eius magnam exercitationem consequuntur ipsam obcaecati, dolores, non adipisci molestias tenetur minus aut veniam!</p>
            </div>
            <div className='p-5'>
              <div className='bg-sky-100 w-full p-4 flex justify-center items-center flex-col'>
                <img src="https://bookstore-serverfeb26.onrender.com/uploads/image-1779697250528-dp.png" alt="" height={'100px'} width={'100px'} style={{ borderRadius: '50%' }} />

                <div className='flex justify-center items-center flex-col mt-5 w-full gap-5'>
                  <input type="text" placeholder='User Name' className='bg-white p-2 w-full rounded' />
                  <input type="password" placeholder='Password' name="" id="" className='bg-white p-2 w-full rounded' />
                  <input type="password" placeholder='Password' name="" id="" className='bg-white p-2 w-full rounded' />
                </div>

                <div className='flex justify-center items-center  mt-4 w-full gap-3'>
                  <button className='bg-yellow-400 text-white font-bold p-1 w-full rounded'>Reset</button>
                  <button className='bg-green-600 text-white font-bold p-1 w-full rounded'>Update</button>

                </div>

              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default Settings