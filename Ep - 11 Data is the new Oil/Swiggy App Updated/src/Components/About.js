import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";
// Functional Component - Arrow Function which returns a JSX
class About extends Component {

    constructor(props) {
        super(props);
        // console.log("Parent constructor");
    }

    componentDidMount() {
        // console.log("Parent component did mount");
    }

    render() {
        // console.log("Parent render");
        return (
            <div>
                <h1>About Class Component</h1>
                <div>
                    Logged In User
                    <UserContext.Consumer>
                        {(loggedInUser) => <h1 className="text - xl font-bold">loggedInUser</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Harsh Ramchandani</h2>
                <UserClass />
            </div>
        );
    }
}

export default About;
