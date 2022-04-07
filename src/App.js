import React from 'react';
import ReactDOM from "react-dom";
import Pet from "./Pet";



const App = () => {
  return React.createElement("div", {}, [ 
    React.createElement("h1", { id: "name" }, "Test me"),
    React.createElement(Pet, { name: "john", animal: "dog", breed: "hav" }),
    React.createElement(Pet, { name: "mike", animal: "cat", breed: "cok" }),
    React.createElement(Pet, { name: "mark", animal: "fish", breed: "dfd" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
