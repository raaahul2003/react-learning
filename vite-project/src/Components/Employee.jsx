function Employee({dataParent,str,flag}){
    // console.log(props.dataParent);
    
    // js code
    const display = (data)=>{
        // console.log(data);
        alert(data)
    } 

    return(
        <>
        <h1 className='title'>Employee component</h1>
     { 
         dataParent &&  <h3 className="text-danger">Employee Name: {dataParent}</h3>
      }
        <input id="input" type="text" className="form-control m-5" onChange={(e)=>display(e.target.value)}/>
        </>
    )
}

export default Employee