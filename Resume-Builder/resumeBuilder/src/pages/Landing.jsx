import React from 'react'
import ResumeGenerator from './ResumeGenerator'
import { backgroundColor } from '@mui/system'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <div >
      <section style={{height: '80vh',backgroundImage: "url('/bgimage2.jpg')",backgroundSize: 'cover',backgroundPosition: 'center',backgroundAttachment:'fixed'}} className='d-flex align-items-center justify-content-center flex-column'>
      <div className='text-center box-shadow rounded p-5' style={{backgroundColor: 'rgb(255,255,255,0.3)'}}>
            <h2 style={{fontFamily: 'Pacifico'}}>Designed to get hired</h2>
            <h4>Your skills, your story, your next job - all in one</h4>
            {/* <a href="/resume" className='btn btn-primary'>MAKE YOUR RESUME</a> */}
            <Link to={'/resume'} className='btn btn-primary'>MAKE YOUR RESUME</Link>

      </div>
      </section>

      <section className='m-5'>
          <h1 className='text-center mt-4'>Tools</h1>
          <div className='row mt-5 align-items-center '>
            <div className='col-md-6'>
              <h2>Resume</h2>
              <p>Create unlimited new resumes and easily edit them afterwards.</p>
              <h2>Cover Letters</h2>
              <p>Easily write professional cover letters.</p>
              <h2>Cover Letters</h2>
              <p>Easily write professional cover letters.</p>
              <h2>Jobs</h2>
              <p>Automatically receive new and relevant job postings.</p>
              <h2>Applications</h2>
              <p>Effortlessly manage and track your job applications in an organized manner.</p>
            </div>
            <div className='col-md-6'> 
              <img src="src/assets/toolimage.png" alt="" className='img-fluid w-75'/>
            </div>
          </div>
      </section> 
     
      <section style={{height: '80vh',backgroundImage: "url('/bgimage.jpg')",backgroundSize: 'cover',backgroundPosition: 'center',backgroundAttachment:'fixed'}}>
      </section>

      <section className='m-5'>
          <h1 className='text-center mt-4'>Testimony</h1>
          <div className='row mt-5 align-items-center '>
            <div className='col-md-6'>
              <h2>Trusted by professionals worldwide</h2>
              <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results</p>
              <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
              <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
            </div>
            <div className='col-md-6'> 
              <div className='row g-3'>
              <img src="1.PNG" alt="" className='img-fluid w-25'/>
              <img src="2.PNG" alt="" className='img-fluid w-25'/>
              <img src="3.PNG" alt="" className='img-fluid w-25'/>
              <img src="4.PNG" alt="" className='img-fluid w-25'/>
              </div>
              <div className='row g-3'>
              <img src="5.PNG" alt="" className='img-fluid w-25'/>
              <img src="6.PNG" alt="" className='img-fluid w-25'/>
              <img src="7.PNG" alt="" className='img-fluid w-25'/>
              <img src="8.PNG" alt="" className='img-fluid w-25'/>
              </div>
            </div>
          </div>
      </section> 
    </div>
  )
}

export default Landing
