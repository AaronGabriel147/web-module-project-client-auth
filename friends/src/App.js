import './App.css';
import React, { Route, Link, Switch } from "react-router-dom";
import Login from './components/Login';



// [] Add a route for a login page and build out a simple login form with username 
//    and password inputs and a submit button (design this however you would like).

// $$$ Things I did:
// $$$ set up react router: npm install, index.js import and wrapper, and imports inside App.js
// $$$ created a 'component' folder, and a 'Login.js' file.
// $$$ created router 'Links', 'Switch', and 'Route'.


export default function App() {

  return (
    <div>
      <h1>App.js</h1>

      <ul>
        <li>
          <Link to="/"> HOME </Link>
        </li>
        <li>
          <Link to="login"> LOGIN </Link>
        </li>
      </ul>

      <Switch>

        <Route path="/login" component={Login} />

      </Switch>

    </div>
  );
}