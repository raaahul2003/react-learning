function Employee({dataParent,str,flag}){
    // console.log(props.dataParent);
    
    // js code

    return(
        <>
        <h1 className='title'>Employee component</h1>
        <h3 className="text-danger">Employee Name: {dataParent}</h3>
        </>
    )
}

export default Employee