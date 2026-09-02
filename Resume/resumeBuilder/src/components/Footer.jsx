import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

function Footer() {
  return (
    <div style={{height:'30vh', backgroundColor: '#1976d2'}} className='d-flex align-items-center justify-content-center text-light flex-column'>
      <h1>Contact Us</h1>
      <h4><IoMailOutline /> resumebuilder@gmail.com</h4>
      <h4><IoCallOutline /> 7994699455</h4>
      <h3>Connect With Us</h3>
      <p>Designed $ built with ❤️ using React</p>

    </div>
  )
}

export default Footer
