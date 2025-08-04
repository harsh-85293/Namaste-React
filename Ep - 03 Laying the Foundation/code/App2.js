import React from "react"
import ReactDOM from "react-dom/client"; 

const Title = () =>(
    <h1 className="head" tabIndex="5">
        Namaste React using jsx
    </h1>
);

const Headingcomponent = () => (
    <div id="container">
        <Title/> 
        <h1>Namaste React functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponent/>);