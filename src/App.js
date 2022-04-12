import React, { StrictMode } from 'react';
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from './SearchParams';
import Details from './Details';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



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
            <Router>
            <header>
            <Link to="/">
                <h1>Adopt me </h1>
            </Link>
            </header>
            <Switch>
                <Route path="/details/:id">                    
                    <Details />                   
                </Route>
                <Route path="/">
                    <SearchParams />
                </Route>
                </Switch>
            </Router>
            
            {/* <Pet name="John" animal="dog" breed="hav"/>
            <Pet name="mike" animal="cat" breed="adf"/>
            <Pet name="mark" animal="fish" breed="hdfd"/> */}
            </div>
        )
}

ReactDOM.render(
<StrictMode>
    <App/>
</StrictMode>
, document.getElementById("root"));