import React, { Component } from 'react';
import { Container,Form,Button, Alert } from 'react-bootstrap';
import {Redirect} from 'react-router-dom'
class HotelCreate extends Component {
    constructor()
    {
    super();
    this.state={
        id:"",
        name:"",
        rating:"",
        location:"",
        submit:false
    }
    }

    addRestaurent=(e)=>
    {
        e.preventDefault();
        console.log(this.state)
    fetch("http://localhost:3000/hotels",
    {
    method:"Post",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(this.state)
    })
     .then((res)=>{return res.json()})
     .then((response)=>
     {
        console.log(response)
        window.alert("Restaurent added")
        this.setState({submit:true})
     })
     .catch((e)=>
     {
         console.log(e)
     })
        
    }

    render() {
        if(this.state.submit)
        {
        return <Redirect to="/hotels/list" />
        }
        return (
          <Container>
            <h1>Add a Hotel</h1>
          
            <Form>
                <Form.Group controlId="Hotel Id">
                <Form.Control onChange={(event)=>{this.setState({id:event.target.value})}} type="text" placeholder="Enter Hotel Id" />
                </Form.Group>
                <br/>
                <Form.Group controlId="Hotel">
                <Form.Control onChange={(event)=>{this.setState({name:event.target.value})}} type="text" placeholder="Enter Hotel name" />
                </Form.Group>
                <br/>

                <Form.Group controlId="Rating">
                <Form.Control onChange={(event)=>{this.setState({rating:event.target.value})}} type="text" placeholder="Enter Rating" />
                </Form.Group>
                <br/>

                <Form.Group controlId="Location">
                <Form.Control type="text" onChange={(event)=>{this.setState({location:event.target.value})}} placeholder="Enter location" />
                </Form.Group>
                <br/>
            <Button variant="primary" type="submit" onClick={(e)=>this.addRestaurent(e)}>
            Submit
            </Button>
            </Form>
          </Container>
         
        );
    }
}

export default HotelCreate;