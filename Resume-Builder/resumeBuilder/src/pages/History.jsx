import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { getHistoryApi } from '../services/callApi'
import {deleteResumeApi} from '../services/callApi'

function History() {
  const [downloads, setDownloads] = useState({})

  useEffect(() => {
    getDownloads()
  }, [])

  const getDownloads = async () => {
    const response = await getHistoryApi()
    console.log(response);

    setDownloads(response.data)

  }

  const deleteHistory = (id)=>{
      deleteResumeApi(id)
      getDownloads()
  }

  return (
    <div>
      <h1 className='text-center' style={{ marginTop: '100px' }}>Downloaded Resumes</h1>
      <Link to={'/'} style={{ marginTop: '-55px', marginRight: '20px' }} className='float-end btn btn-primary text-light'>Back</Link>
      <Box component="section" className='container-fluid'>
        <div className='row'>
          {
            downloads?.length>0?
            downloads?.map(dwnld => (
              <div className='col-md-4' >
              <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: 'center',}}>
                <div className='d-flex align-items-center justify-content-between'>
                  <h6>Review At: {dwnld.timeStamb}</h6>
                  <button className='btn text-danger fs-2' onClick={()=>deleteHistory(dwnld.id)}><MdDelete /></button>
                </div>
                <div>
                  {/* Preview */}
                  <Link to={`/resume/${dwnld.resumeId}/view`}>
                  <img src={dwnld.imgUrl} alt="" className='img-fluid' style={{height: "40vh" }}/>
                  </Link>
                </div>
              </Paper>
            </div>
            ))
            :
            <p className='text-center text-danger fw-bold my-5'>No Resume Downloaded yet!</p>
          }
        </div>
      </Box>
    </div>
  )
}

export default History
