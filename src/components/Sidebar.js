import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css'

class Sidebar extends Component {
    constructor(props)
    {
    super(props);
   
    }
    render() {
        return (
            <div>
                <div className="sidebar">
                <Link to={this.props.url+"/list"} className="active">List</Link>
                <Link to={this.props.url+"/create"}>Create</Link>
               
                </div>
            </div>
        );
    }
}

export default Sidebar;

