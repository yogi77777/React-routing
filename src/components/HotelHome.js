import React, { Component } from 'react';
import Sidebar from './Sidebar'
class HotelHome extends Component {
    render() {
        return (
            <div class="row">
            <div class="col-2">
                <Sidebar url={this.props.match.url}/>
            </div>
           
            <div class="col-10">
                <h1>Hotel Home</h1>
            </div>
            </div>
        );
    }
}

export default HotelHome;