import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'



export default class addStudents extends Component {
    state={
name:'',
surname:'',
email : '',
country: '',
dateOfBirth:'',
phoneNumber: ''
    }
addStudent = async()=>{
const students = {...this.state}

const student = await fetch ("http://localhost:3039/students/",{
method:"POST",
headers:{
    "Content-Type" : "application/json"
},
body: JSON.stringify(students)

})
if (student.ok){
alert("Student Add")
}
}
render() {
        console.log(this.state)
        return (
     <>
                <Form>
                    
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control 
    type="text"
     placeholder="Enter name"
     onChange={(name)=>this.setState({name:name.currentTarget.value}) }
     value={this.state.name}
     />
</Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Surname</Form.Label>
    <Form.Control 
    type="text"
     placeholder="Enter surname"
     onChange={(sur)=>this.setState({surname:sur.currentTarget.value}) }
     value={this.state.surname}
     />
  </Form.Group><Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control 
    type="email" 
    placeholder="Enter email" 
    onChange= {(email)=> this.setState({email:email.currentTarget.value})}
    value= {this.state.email}
    />
  </Form.Group><Form.Group controlId="formBasicEmail">
    <Form.Label>Country</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Enter Country" 
    onChange={(country)=>this.setState({country:country.currentTarget.value})}
    value = {this.state.country}
    
    />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Date Of Birth</Form.Label>
    <Form.Control
     type="date" 
     placeholder="Date of Birth"
     onChange={(date)=>this.setState({dateOfBirth:date.currentTarget.value})}
     value={this.state.dateOfBirth}
     
     />
      </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control
     type="text" 
     placeholder="Number"
     onChange={(number)=>this.setState({phoneNumber:number.currentTarget.value})}
     value={this.state.phoneNumber}
     
     />
  </Form.Group>

  <Button variant="primary"  onClick={this.addStudent}><Link className="navLink" to="/home">Submit</Link>

  </Button>
</Form>
                
      </>    
        )
    }
}
