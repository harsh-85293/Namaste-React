import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // Make the state varible to store the data from api call
        this.state = {
            userInfo: {
                login: "Dummy",
                created_at: "Dummy",
                type: "Dummy",
                avatar_url: "Dummy"
            },
        }
        console.log(" UserClass constructor");
    }

    async componentDidMount() {
        try {
            const resp = await fetch("https://api.github.com/users/harsh-85293");
            if (!resp.ok) throw new Error(`GitHub ${resp.status}`);
            const json = await resp.json();
            this.setState({ userInfo: json });
            console.log(" User Class component did mount");
        } catch (e) {
            console.error(e);
        }
    }

    componentDidUpdate() {
        console.log("User Class component did update");
    }

    componentWillUnmount() {
        console.log("User Class component will unmount");
    }

    render() {
        const { login, created_at, type, avatar_url } = this.state.userInfo;
        console.log("UserClass render");

        return (
            <div className="user-class">
                <img src={avatar_url || ""} width={'150px'} height={'150px'} alt="avatar" />
                <h1>Login Id: {login}</h1>
                <h2>Created At: {created_at}</h2>
                <h4>Type: {type}</h4>
            </div>
        );
    }
}

export default UserClass;
