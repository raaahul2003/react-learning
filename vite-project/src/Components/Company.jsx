import User from './User';
import myStyle from '../style.module.css'

function Company(props) {
    console.log(props);
    
    const userData = "Rannan"
    const userExp = 5
  return (
    <div>
      <h1 className={myStyle.title}>Company Component</h1>
      <h3 className='text-danger'>Company Name: {props.comName}</h3>
      <User userName={userData} userExp={userExp}/>
    </div>
  )
}

export default Company
