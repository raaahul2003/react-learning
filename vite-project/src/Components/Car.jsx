import React, { Component } from 'react'

export default class Car extends Component {
    // carname = "Polo GT"
    // update=(data)=>{
    //     this.carname=data
    //     console.log(this.carname);
        
    // }
    constructor(){
        super()
        this.state={
            carname:"Polo GT"
        }

    }
    update=(data)=>{
        this.setState({carname:data})
        console.log(this.carname);
    }
        
  render() {
    return (
      <div>
        <div className='m-2'>
            <input type="text" placeholder='Enter car name: ' className='form-control' onChange={(e)=>this.update(e.target.value)}/>
        </div>
        <div className='p-5 bg-warning'>
            <h1>Car Name: {this.state.carname}</h1>
        </div>
      </div>
    )
  }
}
