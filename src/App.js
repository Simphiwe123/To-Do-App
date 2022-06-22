import React from "react";
import Home from "./Home";
import login from "./login"
import Registration from "./Registration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
function App() {
  return (

<Router>
    <Switch>
        <Route exact path ="/" component={login}>
        </Route>
        <Route path="/Registration" component={ Registration}></Route>
        <Route path="/" component={Home}></Route>
    </Switch>
</Router>

   
  );
}
export default App;