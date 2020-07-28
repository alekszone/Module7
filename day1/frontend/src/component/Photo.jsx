import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap';
export default class Photo extends Component {
   
  
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
   <td><Button type="danger">Delete</Button></td>
    </tr>
 
 

</>
       
        )
    }
}
