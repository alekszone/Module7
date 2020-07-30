import React, { Component } from 'react'
import {withRouter,Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
 
 class editStudent extends Component {
state={
 _id:'',
name:'',
surname:'',
email:'',
dateOfBirth:'',
country:'',
phoneNumber:''
}
componentDidMount= async ()=>{
const id = this.props.match.params._id; 
const student = await fetch("http://localhost:3039/students/"+ id)
const stud = await student.json()

this.setState({...stud})

console.log(this.state.name)

}


editStudent = async()=>{
    const editData = {...this.state}
   
const edit = await fetch("http://localhost:3039/students/"+ this.state._id,{
method: "PUT",
headers:{
    "Content-Type": "application/json",
},
 body : JSON.stringify(editData)
})
const edited =await edit.json()

   alert("The student is editetd") 



console.log("puuut " , edited)
}







    render() {
        console.log("puutiiiii",this.state._id)
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
            {/* <Form.Group controlId="formBasicPassword">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
               type="date" 
               placeholder="Date of Birth"
               onChange={(date)=>this.setState({dateOfBirth:date.currentTarget.value})}
               value={this.state.dateOfBirth.toString}
               
               />
                </Form.Group> */}
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
               type="text" 
               placeholder="Number"
               onChange={(number)=>this.setState({phoneNumber:number.currentTarget.value})}
               value={this.state.phoneNumber}
               
               />
            </Form.Group>
          
            <Button variant="primary"  onClick={this.editStudent}><Link className="navLink" to="/home">Submit</Link>
 </Button>
          </Form>
          </>
        )
    }
}


 export default withRouter(editStudent)
