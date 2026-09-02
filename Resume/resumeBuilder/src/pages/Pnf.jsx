import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{ height: '80vh', marginTop: '50px' }} className='d-flex justify-content-center align-items-center flex-column'>
     <img src="https://images.squarespace-cdn.com/content/v1/5bcedfaa65a707df96be0be9/1590102804805-7TNK3DEEF48PFQZSEO84/INCON-ExpertArticle-44-KeyToCreativity-Icon-00.jpg" alt="" width={600}/>
      <h5 h5 > Sorry, we couldn't find the page</h5>
      <Link to={'/'} className='btn btn-primary' > Back to home</Link >

    </div >
  )
}

export default Pnf
