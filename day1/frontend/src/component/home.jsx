import React, { Component } from 'react'
import {Row, Col, Table, Container} from 'react-bootstrap'
import Photo from './Photo'
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

//  delete = async (id) =>{
// const 
// }




render() {
    console.log(this.state.students)
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
     </div>
     </Container>
        )  
    }
}
