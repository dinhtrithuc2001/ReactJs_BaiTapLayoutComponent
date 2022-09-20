import React, { Component } from 'react';
import Banner from "./Banner";
import Item from "./Item";
import "./Body.css";

class Body extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Item />
            </div>
        );
    }
}

export default Body;