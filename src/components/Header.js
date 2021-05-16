import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import { Button,Nav,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class header extends Component {
    render() {
        return (
            <div>
      <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link ><Link to="/">Home</Link></Nav.Link>
      <Nav.Link ><Link to="/restaurents">Restaurents</Link></Nav.Link>
      <Nav.Link ><Link to="/hotels">Hotels</Link></Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
            </div>
        );
    }
}

export default header;