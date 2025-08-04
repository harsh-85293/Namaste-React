// Functional Component - Arrow Function which returns a JSX
import UserClass from './UserClass';
import User from './User';
import {Component} from "react";

class About extends Component{
    
    constructor(props) {   
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("Parent component did mount");
    }
    
    render(){
        return(
            <div>
                <h1>About</h1>
                <h2>This is Harsh Ramchandani's website welcome</h2>
                <UserClass name = {"harsh ramchandani"} location = {"Kota"}/>
            </div>
        );
    }
}

export default About;