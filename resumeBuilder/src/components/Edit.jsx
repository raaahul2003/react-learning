import React from 'react'
import { FaEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <button onClick={handleOpen} className='btn fs-2 text-warning'><FaEdit /> </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='mt-3'>
                            <h3>Personal Details</h3>
                            <div className='mt-3'>
                                <div>
                                    <TextField id="standard-name" label="Full Name" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField id="standard-job" label="Job Title" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField id="standard-loc" label="Location" variant="standard" className='w-100' />
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mt-3'>
                            <h3>Contact Details</h3>
                            <div className='mt-3'>
                                <div>
                                    <TextField id="standard-email" label="Email" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField id="standard-phone" label="Phone" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField id="standard-github" label="Github Link" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField id="standard-linkedin" label="Linkedin Link" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField id="standard-portfolio" label="Portfolio Link" variant="standard" className='w-100' />
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mt-3'>
                            <h3>Education Details</h3>
                            <div className='mt-3'>
                                <div>
                                    <TextField id="standard-course" label="Course" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField id="standard-clg" label="College" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField id="standard-uni" label="University" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField id="standard-year" label="Passout Year" variant="standard" className='w-100' />
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mt-3'>
                            <h3>Professional Details</h3>
                            <div className='mt-3'>
                                <div>
                                    <TextField id="standard-role" label="Job or Internship" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField id="standard-company" label="Comapny Name" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField id="standard-com-loc" label="Company Location" variant="standard" className='w-100' />
                                </div>
                                <div>
                                    <TextField id="standard-duration" label="Duration" variant="standard" className='w-100' />
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mt-3'>
                            <h3>Skills</h3>
                            <div className='mt-3 d-flex align-items-center'>
                                <TextField sx={{ width: '500px' }} id="outlined-skils" label="Add Skills" variant="outlined" />
                                <Button variant="contained" className='ms-3'>Add</Button>
                            </div>
                            <h5>Added Skills:</h5>
                            <div className='d-flex my-3 flex-wrap'>
                                <span className='btn btn-dark m-1  d-flex align-items-center'>Skill <button className='btn text-light'>x</button></span>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mt-3'>
                            <h3>Professional Summary</h3>
                            <div className='mt-3'>
                                <div>
                                    <TextField id="standard-summary" label="Write a short summary of yourself" variant="standard" className='w-100' multiline rows={4} />
                                </div>
                            </div>
                        </div>
                    </Typography>
                    <Button>Update</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default Edit
