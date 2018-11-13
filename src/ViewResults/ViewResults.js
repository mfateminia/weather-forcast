import React, { Component } from 'react';
import axios from 'axios';

class ViewResults extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount() {
        axios.get('https://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=9ebe0ff5d68bb863e490c863e8aad267').then((res)=>{
                console.log(res)
            }
        )
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default ViewResults;