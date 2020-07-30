import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap';
import  {Link} from 'react-router-dom'

export default class Photo extends Component {

 delete = async (_id) => {
const student = await fetch("http://localhost:3039/students/" + _id,{
method : "DELETE"
 })
if (student.ok){
alert("Deleted")

}

 }





   
  
    render() {
    const {_id,name,surname,email,dateOfBirth,phoneNumber,country} =  this.props.student
        return (
            
          <>          


  
    
    <tr>
        <td >{_id}</td>
      <td>{name}</td>
   <td>{surname}</td>
   <td>{email}</td>
   <td>{dateOfBirth}</td>
   <td>{country}</td>
   <td><Button variant="danger" onClick={()=>this.delete(_id)}>Delete</Button></td>
   <td><Button variant="danger" ><Link to={"/editStudent/" + _id } > Delete</Link></Button></td>
    </tr>
 
 

</>
       
        )
    }
}
