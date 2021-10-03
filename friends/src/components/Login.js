import React, { useState } from 'react';
import axios from 'axios';

// README instructions:
// [x] * The login function should save the returned token to localStorage. You can setup `isLoading` state in your 
//       Login component, and show a spinner on your form or in your button while the login request is happening.
// [x]  * When the request returns, save the token to `localStorage`, then use the history object in your Login 
//       component to navigate your user to your FriendsList route

// README server information:
// * Once your server is up and running, the URL you'll be able to hit from within your app is `http://localhost:5000`. 
//   You will however need an authentication header on all the calls except the login call.
// * Take a look at the endpoints that our API has to offer in `server.js`.
// _____
// * [POST] to `/api/login`: returns a token to be added to the header of all other requests. 
//   Pass in the following credentials as the `body` of the request: `{ username: 'lambda', password: 'school' }`


// $$$ Things I did:
// $$$ Set up initial state and imported useState
// $$$ Connected the input fields to the handleChange function which updates state with user input
// $$$ Created a connection between the client and the mock server. 
// $$$ The connection cauthenticates the username and password if they match.
// $$$ If they match then you can set your local storage to the key value pair 'token: ui23h4jk32h4jk2h'.



export default function Login(props) {

    // Creates initial state.
    const [stateData, setStateData] = useState({
        username: '',
        password: ''
    })
    // console.log(stateData) // = {name: '', password: ''}


    // This updates the state to whatever is typed into the inputs.
    const handleChange = (e) => {
        setStateData({
            ...stateData, [e.target.name]: e.target.value
        })
    }


    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', stateData)
            .then(req => {
                localStorage.setItem('token', req.data.payload); // was token, was WRONG! hours of confusion die to this.....
                // console.log('$$$ res', req)
                props.history.push('/protected'); // When login matches, the /URL changes
            })
            .catch(err => {
                console.log('$$$ Login.js: ERR =', err)
            })
    };


    return (
        <div>
            <h1>Login.js</h1>

            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={stateData.username}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="password"
                    value={stateData.password}
                    onChange={handleChange}
                />

                <button>Log in</button>

            </form>

        </div>
    );
}












// // __________________Dionnes below. WORKING. ________________________________________________
// import React from 'react';
// import axios from 'axios';



// class Login extends React.Component {
//   state = {
//     credentials: { // setting initial credentials as empty
//       username: '',
//       password: ''
//     }
//   };

//   handleChange = e => {
//     this.setState({
//       credentials: { // after submitting login credentials, setting to state
//         ...this.state.credentials,
//         [e.target.name]: e.target.value // passed in from input on the form below
//       }
//     });
//   };

//   login = e => {
//     e.preventDefault();

//     axios.post('http://localhost:5000/api/login', this.state.credentials) //sends login and password submitted to server to verified then logs server response
//     .then(req => {
//       console.log(req)
//       localStorage.setItem("token", req.data.payload); // receives token from server and sets it to localStorage to be read by restricted pages before granting access to restricted data. "data.token" comes from the stucture of the server which may vary.
//       this.props.history.push("/protected"); // after setting token, routes user to specified page "protected" in this case
//     //   this.props.setIsLoggedIn(true);
//     })
//     .catch( err => {
//       console.log(err)
//     })
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.login}>
//           <input
//             type="text"
//             name="username"
//             value={this.state.credentials.username}
//             onChange={this.handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             value={this.state.credentials.password}
//             onChange={this.handleChange}
//           />
//           <button>Log in</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;

