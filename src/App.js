import React from 'react';
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from './SearchParams';



// const App = () => {
//   return React.createElement("div", {}, [ 
//     React.createElement("h1", { id: "name" }, "Test me"),
//     React.createElement(Pet, { name: "john", animal: "dog", breed: "hav" }),
//     React.createElement(Pet, { name: "mike", animal: "cat", breed: "cok" }),
//     React.createElement(Pet, { name: "mark", animal: "fish", breed: "dfd" }),
//   ]);
// };





const App = () => {    
        return (
            <div>
            <h1>Adopt me </h1>
            <SearchParams />
            {/* <Pet name="John" animal="dog" breed="hav"/>
            <Pet name="mike" animal="cat" breed="adf"/>
            <Pet name="mark" animal="fish" breed="hdfd"/> */}
            </div>
        )
}

ReactDOM.render(<App/>, document.getElementById("root"));