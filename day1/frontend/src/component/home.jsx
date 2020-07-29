import React, { Component } from 'react'
import {Row, Col, Table, Container,Button} from 'react-bootstrap'
import Photo from './Photo'
import {Link} from 'react-router-dom'
export default class home extends Component {
state={
students:[]
}


componentDidMount=async () =>{
const students = await fetch("http://localhost:3039/students/")
const resp = await students.json()

this.setState({
students : resp.student
})
}






render() {
    console.log(this.state.students._id)
        return ( 
            <Container>
            
      <div>
          <Table>
          <thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th> Surname</th>
      <th>Email</th>
      <th>DateofBirth</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
            {this.state.students.map(stud=> <Photo student={stud} />)}
            
            
 </tbody>
            </Table>


<Button variant ="success" className ="mt-5"><Link className="navLink" to={"/addStudents/"}>Add student</Link></Button>

     </div>
     </Container>
        )  
    }
}
