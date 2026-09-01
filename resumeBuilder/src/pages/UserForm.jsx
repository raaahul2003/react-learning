import React, { useState } from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'


function UserForm() {
  const[resumeData, setresumeData] = useState({
        fullName:"",
        job:"",
        location:"",
        email:"",
        phone:"",
        github:"",
        linkedin:"",
        degree:"",
        university:"",
        passout:"",
        skills:[],
        summary:"",

    });
  return (
    <div className='container-fluid mt-5'>
       <div className='row p-5'>
        <div className="col-lg-6">
          <Steps setresumeData={setresumeData} resumeData={resumeData}/>
        </div>
        <div className='col-1'></div>
        <div className="col-lg-5">
          <Preview resumeData={resumeData}/>
        </div>
       </div>
    </div>
  )
}

export default UserForm
