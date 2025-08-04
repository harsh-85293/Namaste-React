/*
<div id = "parent">
    <div id = "child">
        <h1>hi i am h1 tag</h1>
        <h2>hi i am h2 tag</h2>
    </div>
    
    <div id = "child2">
        <h1>hi i am h1 tag</h1>
        <h2>hi i am h2 tag</h2>
    </div>

    ReactElement(Object) => Html (Browser Understands)
*/
import React from "react"
import ReactDOM from "react-dom/client"; 
const parent = React.createElement("div", {id : "parent"}, [
    React.createElement("div", {id : "child"}, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
    ]),
    React.createElement("div", {id : "child2"}, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ]),
]);


const heading = React.createElement(
    "h1", 
    {id : "heading"}, 
    "hello world from react"
);//here heading is a react element
        
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);//here heading is a react element