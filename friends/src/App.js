import './App.css';
import React, { Route, Link, Switch } from "react-router-dom";
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


// README instructions:
// [x] Add a route for a login page and build out a simple login form with username 
//    and password inputs and a submit button (design this however you would like).

// $$$ Things I did:
// $$$ set up react router: npm install, index.js import and wrapper, and imports inside App.js
// $$$ created a 'component' folder, and a 'Login.js' file.
// $$$ imported and created router 'Links', 'Switch', and 'Route'.


export default function App() {

  return (
    <div>

      <ul>
        <li>
          <Link to="/"> HOME </Link>
        </li>
        <li>
          <Link to="login"> LOGIN </Link>
        </li>
        <li>
          <Link to="/protected"> PROTECTED PAGE </Link>
        </li>
      </ul>

      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} />
        
      </Switch>

    </div>
  );
}