import React from "react";
import ReactDOM from "react-dom/client";


// React element - smallest building block of React app, it is not HTML element.
// React element is an object when we render it using ReactDOM it becomes HTML element

// const heading = React.createElement("h1", { id: "heading" }, "Nameste React--");


// JSX - JavaScript XML (HTML like syntax inside JavaScript)

// React element using JSX
const jsxHeading = (
    <h1 id="jsx-heading" className="header" tabIndex="2" >
        Nameste JSX--
    </h1>);

 


console.log(jsxHeading); // This will log a React element object

// React Component - A function that returns a React element
// 2 Types of Components - Functional Components - NEW way and Class Based Components - OLD way

/*
const Title = () => {
    return (
        <h1>
            Nameste from TitleComponent!!
        </h1>
    );
};
*/

// React Functional Component - using implicit return
const Title = function() { 
        return (
                <h1>
                    Nameste from TitleComponent!! with function..
                </h1>
                );
}


// component composition - using one component inside another component

// React Functional Component - using return statement
const HeadingComponent = () => {
    return (
        <div>
            <Title />
            Nameste from HeadingComponent!!
        </div>
    );
};

// React Functional Component - Equivalent to above code - multiline JSX must be wrapped in parentheses
const HeadingComponent2 = () => (
    <h1 id="jsx-heading" className="header" tabIndex="2" >
        Nameste JSX--
    </h1>);

// React Functional Component - Equivalent to above code - single line JSX does not need parentheses
const HeadingComponent3 = () => <h1 id="jsx-heading" className="header" tabIndex="2" >Nameste JSX--</h1>;


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />); // render funcational component to the page.
// React element object converted to HTML and displayed inside root div


