import React from "react";
import { Route, Redirect } from "react-router";


// this is going to a few things
// 1. wrap the plain Route component and pass the props through
// 2. check to see if the user is logged in, if yes, render component
// 3. if user is not logged in, we redirect to login


// Look at my sprint comments for further detail because I forgot all this!!!

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
    <Route {...rest} render={
        (props) => {
            if (localStorage.getItem('token')) {
                return <Component {...props} />
            } else {
                return <Redirect to='/login' />
            }
        }
    } />
    )
}

export default PrivateRoute






// __________________ MY SPRINTS PRIVATE ROUTE _____________________________________

// import { Redirect, Route } from 'react-router-dom';

// Wrap the plain Route component and pass in the same props.
// Check to see if we are logged in, and if so, render component.
// If the user is not logged in, we redirect to login.

// The rest operator is called rest as an industry standard. It grabs the rest of the props.
// component: Component is how you destructure a prop into a component, because a component needs to be capitalized.
// <Route {...props} Gives all props.

// If the localStorage has the token variable name (see Application in Chrome), return this JSX.



// THIS WAS A CURLY NIGHTMARE! Hard to see where all the curlies begin and end.
// Try ternary instead!


// export const PrivateRoute = ({component: Component, ...rest}) => {

//     return (

//        <Route {...rest} render={(props) => {
//           return localStorage.getItem("token variable name") 
//           ? 
//           <Component {...props}/>
//           :
//           <Redirect to="/login"/>
//       }}
//     />

//   )
// }






// ________________________DIONNE's_____________________________________________________________

//  Dionnes example
// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// export const PrivateRoute = ({ component: Component, ...rest}) => { // speading out the component to access everything in it
//     return(<Route 
//         {...rest}
//         render={(props) => {
//             if(localStorage.getItem("token")) {
//                 return <Component {...props}/>; // if token is in localStorage the render the protected page
//             } else {
//                 return <Redirect to="/login"/>; // else redirect back to login page
//             }
//         }

//         }
//     />)
// } 