import React from "react"
import ReactDOM from "react-dom/client"; 

//React Element
//old way before jsx
//this is  basically core react
// const heading = React.createElement(
//     "h1", //tag
//     {id : "heading"}, //attributes 
//     "Namaste React" //content
// )

//jsx element :  not html statement or xml like statement 
//here jsx cpde is transpiled befroe reaching to js engine 
// JSX => Babel transpiles to React.createElement => ReactElement - JS object => HtmlElement(render)
//     babel

const elem = <span>React Element</span>

const Title = () =>(
    <h1 className="head" tabIndex="5">
        Namaste React using jsx
    </h1>
);

const number = 10000;

// const data = api.getData();

//React functional component
//below 2 are same
const Headingcomponent = () => (
    <div id="container">
        {/* {data} */}
        {/* {jsxheading} */}
        <h2>{number}</h2>
        <h2>{100 + 200}</h2>
        <h2>{console.log("hello there")}</h2>
        <Title/> 
        <h1>Namaste React functional component</h1>
    </div>
); //we will use this one 

 //shorthand syntax
const Headingcomponent2 = () => {
    <h1>Namaste React functional component</h1>
} 
const jsxheading = (
    <h1 className="heading">
        {elem} 
        Namaste React using jsx
        {Headingcomponent()}
        {/* <Headingcomponent/> */}
    </h1>
);//for single line wrap  it in () for single line it is fine



//route for react app, if we do anything in react app thsi is our route
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxheading) 

root.render(<Headingcomponent/>);