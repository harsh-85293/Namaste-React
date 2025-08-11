/*
<div id="parent">
    <div id="child">
        <h1>hi i am h1 tag</h1>
        <h2>hi i am h2 tag</h2>
    </div>
    
    <div id="child2">
        <h1>hi i am h1 tag</h1>
        <h2>hi i am h2 tag</h2>
    </div>
</div>

React.createElement() creates a React element (JS object).
React converts this element into HTML for the browser to understand.
*/

// Creating a "parent" div element with two children divs inside it
const parent = React.createElement(
    "div",                // HTML tag name
    { id: "parent" },      // Attributes/props for the element
    [
        // First child div
        React.createElement(
            "div",
            { id: "child" },
            [
                React.createElement("h1", {}, "I am h1 tag"),
                React.createElement("h2", {}, "I am h2 tag")
            ]
        ),

        // Second child div
        React.createElement(
            "div",
            { id: "child2" },
            [
                React.createElement("h1", {}, "I am h1 tag"),
                React.createElement("h2", {}, "I am h2 tag")
            ]
        )
    ]
);

// Creating a single <h1> element with "hello world from react" text
const heading = React.createElement(
    "h1",                  // HTML tag name
    { id: "heading" },      // Attributes/props for the element
    "hello world from react" // Children (can be string or other elements)
);

// Creating a React root where all components/elements will be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the heading element into the root
// 'heading' here is a React element (JS object) that ReactDOM will convert into HTML and insert into the DOM
root.render(heading);