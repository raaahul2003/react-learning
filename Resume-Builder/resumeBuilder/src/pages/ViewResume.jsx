import React, { useEffect, useRef, useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IoIosDownload } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import Edit from '../components/Edit';
import Preview from '../components/Preview';
import { Link, useParams } from 'react-router-dom';
import { downloadResumeApi, getSingleResumeApi } from '../services/callApi'
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";


function ViewResume() {

  const [resumeData, setResumeData] = useState({})
  // console.log(resumeData);

  const previewRef = useRef() //it gives an object with a key current  -> {current}

  const { id } = useParams()
  // console.log(id);

  useEffect(() => {
    getResumeDetails()
  }, [])

  const getResumeDetails = async () => {
    if (id) {
      const response = await getSingleResumeApi(id)
      setResumeData(response.data)


    }
  }

  const downloadResume = async () => {

    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)

    // const canvasUrl = canvas.toDataURL('image/png')
    // console.log(canvasUrl);  //to long url >200kb

    // convert the image url shorten

    canvas.toBlob(async (blob) => { //BLOBs are used primarily to hold multimedia objects

      const formData = new FormData()
      formData.append("file", blob)
      formData.append("upload_preset", 'my_preset')


      const result = await fetch('https://api.cloudinary.com/v1_1/gdlwftga/image/upload', {
        method: "POST",
        body: formData
      })
      const data = await result.json()
      // console.log(data);

      const shortUrl = data.secure_url
      console.log(shortUrl);

      generatePdf(shortUrl)
    })
  }

  const generatePdf = async (imgUrl) => {
    const today = new Date()
    // console.log(today);
    const timeStamb = `${today.toLocaleDateString()},${today.toLocaleTimeString()}`
    console.log(timeStamb);

    const pdf = new jsPDF();
    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgUrl, "PNG", 0, 0, imgWidth, imgHeight)
    // pdf.save("Myresume.pdf")

    const downloadDetails = { timeStamb, resumeId: id, imgUrl, jobRole: resumeData.job }

    const response = await downloadResumeApi(downloadDetails)
    console.log(response);
    if (response.status == 201) {
      pdf.save(`${resumeData.fullName}-resume.pdf`)
    }

  }


  return (
    <div className='container'>
      <div className='row my-5'>
        <div className="col-lg-2"></div>
        <div className="col-lg-8 mt-4">
          <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            {/* download */}
            <button className='btn fs-1 text-danger' onClick={downloadResume}><IoIosDownload /> </button>
            {/* edit */}
            <Edit resumeData={resumeData} setresumeData={setResumeData}/>

            {/* history */}
            <Link to={'/history'} className='fs-2 text-sucess ms-2'><FaHistory /> </Link>

            {/* back */}
            <Link to={'/form'} className='fs-1 text-primary ms-3'><TbPlayerTrackPrevFilled /> </Link>

          </Stack>
          <div ref={previewRef}>
            <Preview resumeData={resumeData} />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default ViewResume
