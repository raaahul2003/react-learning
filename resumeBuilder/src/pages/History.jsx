import React from 'react'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";



function History() {
  return (
    <div>
      <h1 className='text-center' style={{marginTop:'100px'}}>Downloaded Resumes</h1>
      <Link to={'/'} style={{marginTop:'-55px',marginRight:'20px'}} className='float-end btn btn-primary text-light'>Back</Link>
      <Box component="section" className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>
            <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
              <div className='d-flex align-items-center justify-content-between'>
                <h6>Review At: 31/08/2026</h6>
                <button className='btn text-danger fs-2'><MdDelete /></button>
              </div>
              <div>
                <img src="src/assets/resume.png" alt="" className='img-fluid'/>
              </div>
            </Paper>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default History
