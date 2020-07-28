import React, { Component } from 'react'
import {Navbar,Nav, Link,Form , Button,FormControl} from 'react-bootstrap'

export default class navbar extends Component {
    render() {
        return (
            <>
<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Student </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Projects</Nav.Link>
        </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

            </>
        )
    }
}
