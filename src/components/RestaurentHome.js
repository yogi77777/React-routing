import React, { Component } from 'react';
import Sidebar from './Sidebar'
class RestaurentHome extends Component {
    render() {
        console.log(this.props.match.url)
        return (
            <div class="Container">
            <div class="row">
            <div class="col-2">
                <Sidebar url={this.props.match.url}/>
            </div>
           
            <div class="col-8">
                <h1>Rest Home</h1>
            </div>
            </div>
            </div>
        );
    }
}

export default RestaurentHome;