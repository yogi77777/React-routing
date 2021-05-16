import React, { Component } from 'react';
import {Table,Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


class List extends Component {
    constructor()
    {
    super();
    this.state={
        data:[]
    }
    }


    fetchRest=()=>
    {
        fetch("http://localhost:3000/restaurents")
        .then((res)=>{return res.json()})
        .then((response)=>
        {
            this.setState({data:response})
        })
        .catch((e)=>
        {
            console.log(e)
        })
    }

    componentDidMount()
    {
        this.fetchRest()
    }
    
    deleteRest=(id)=>
    {
    fetch("http://localhost:3000/restaurents/"+id,
        {
        method:"Delete",
        headers:{'Content-Type':'application/json'},
        })
         .then((res)=>{return res.json()})
         .then((response)=>
         {
            window.alert("Restaurent Deleted")
            this.fetchRest()
         })
         .catch((e)=>
         {
             console.log(e)
         })
    }
    render() {
        let {data} = this.state; 
        
        return (

            
                <Container>  
                <h1>Restaurents</h1>
               <div>
                <Table striped bordered hover>
                <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Location</th>
                <th>Action</th>
                </tr>
                </thead>
                {
                data.map((item)=>
                    <tbody>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.rating}</td>
                        <td>{item.location}</td>
                        <td>
                        <Link to={"/restaurents/update/"+item.id}> 
                        <FontAwesomeIcon icon={faEdit} color="blue"/>
                        </Link> 
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link onClick={()=>{this.deleteRest(item.id)}}>
                        <FontAwesomeIcon icon={faTrash} color="orange"/>
                        </Link>
                        </td>

                    </tr>
                    </tbody>
                )}
              </Table>
              </div>
              </Container>
            
            
            
        );
    }
}

export default List;