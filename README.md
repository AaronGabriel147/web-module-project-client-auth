# Auth Friends

Topics:

* React Router
* Protected Routes
* `axios` package
* AJAX
* Promises
* Authentication tokens

## Instructions

### Task 1: Set Up

#### Initialize Project

x * Run `npm install` inside the root directory of this project to install dependencies for the API server.
x * Run `npm start` to start the API server.
x * Run `npx create-react-app friends --use-npm` in a separate terminal window in the root directory of the project to create your starter application.
x * ""If""" you experience issues with `npx`, you may create your starter application by running `create-react-app friends --use-npm`.
x * `cd` into the _friends_ folder and type `npm install axios react-router-dom` which will install the needed dependencies.

### Task 2: MVP

#### Project Description

* There is an API built that has authentication built into it. The API holds a list of friends and lets you add, edit, or remove friends from that list. 
* All of the API endpoints (except the login endpoint) are considered "protected", meaning you have to make the request with an authentication token in the header or the API will send back a `401` error. 
* Take your examples from the guided project and use them to build a more sophisticated application. Have fun!
* Once your server is up and running, the URL you'll be able to hit from within your app is `http://localhost:5000`. You will however need an authentication header on all the calls except the login call.
* Take a look at the endpoints that our API has to offer in `server.js`.




  * **[POST]** * to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'lambda', password: 'school' }`

  * **[POST]** * to `/api/logout`: removes a token from active use. Returns the inactive token. 

  * **[GET]** to `/api/friends`: returns the list of friends.

  // huh? * **[GET]** to `/api/friends/123`: returns the friend with the id passed as part of the URL (123 in example).

  * **[POST]** * to `/api/friends`: Adds in a new friend.



#### Build the App!

[x] * Add a route for a login page and build out a simple login form with username and password inputs and a submit button (design this however you would like).

[x] * The login function should save the returned token to localStorage. You can setup `isLoading` state in your Login component, and show a spinner on your form or in your button while the login request is happening.

[x] * When the request returns, save the token to `localStorage`, then use the history object in your Login component to navigate your user to your FriendsList route

// DID THIS WITH PRIVATEROUTE!
[x] * Create a `<PrivateRoute />` component to protect your other routes. It should check localStorage for a token, and redirect the user to your login route if there is not a token.
[x] * Create a protected route for your friends list. Remember, if the user isn't logged in, navigating to this protected route will redirect them to the login page.

// Sorta vague but ok. 
[x] * In your FriendsList component, rendered with `<ProtectedRoute />`, you will create a list of your friends that you get from the API.





**Adding New Friends**
[x] * Create a form to collect data for a new friend.
[x] * Make a POST request to add a friend to the database
[x] * Each `friend` item that is in the `friends` array should have the following format:


{
  id: 1
  name: 'Joe',
  age: 24,
  email: 'joe@lambdaschool.com',
}






// _______________ My steps I made: ______________


// Create a new addFriend component and add it to App.js
// In addFriend.js create initial state as as:
[
  {
  id: ,
  name: '',
  age: ,
  email: ''
}
]

// Once state is create with a form buttom subit, POST the state to the server