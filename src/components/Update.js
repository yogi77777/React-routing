import React, { Component } from 'react';
import {Container,Form,Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
class Update extends Component {
    constructor(props)
    {
    super(props);
    this.state={
        id:'',
        name:'',
        rating:'',
        location:'',
        submit:false
    }
    }

    componentDidMount()
    {
        console.log(this.props.match)
        fetch("http://localhost:3000/restaurents/"+this.props.match.params.id)
        .then((res)=>{return res.json()})
        .then((response)=>
        {
            this.setState({id:response.id,
            name:response.name,
            rating:response.rating,
            location:response.location})
        })
        .catch((e)=>
        {
            console.log(e)
        })
    }

    updateRestaurent=(e)=>
    {
     e.preventDefault();
     fetch("http://localhost:3000/restaurents/"+this.props.match.params.id,
     {
     method:"Put",
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify(this.state)
     })
      .then((res)=>{return res.json()})
      .then((response)=>
      {
         console.log(response)
         window.alert("Restaurent updated")
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
        return <Redirect to="/restaurents/list" />
        }
        return (
            <Container>
            <h1>Update Restaurent Details</h1>
          

            <Form>
                <Form.Group controlId="Restaurent Id">
                <Form.Control  onChange={(event)=>{this.setState({id:event.target.value})}} value={this.state.id} type="text" placeholder="Enter Restaurent Id" />
                </Form.Group>
                <br/>
                <Form.Group controlId="Restaurent">
                <Form.Control value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value})}} type="text" placeholder="Enter Restaurent name" />
                </Form.Group>
                <br/>

                <Form.Group controlId="Rating">
                <Form.Control value={this.state.rating} onChange={(event)=>{this.setState({rating:event.target.value})}} type="text" placeholder="Enter Rating" />
                </Form.Group>
                <br/>

                <Form.Group controlId="Location">
                <Form.Control value={this.state.location} type="text" onChange={(event)=>{this.setState({location:event.target.value})}} placeholder="Enter location" />
                </Form.Group>
                <br/>
            <Button variant="primary" type="submit" onClick={(e)=>this.updateRestaurent(e)}>
            Update
            </Button>
            </Form>
          </Container>
         
        );
    }
}

export default Update;