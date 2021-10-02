import React, { useState, useEffect }from 'react';
// import axios from "axios"
import { axiosWithAuth } from './axiosWithAuth';

//  * In your FriendsList component, rendered with `<ProtectedRoute />`, 
//    you will create a list of your friends that you get from the API.

// axios.get the data.
// * [GET] to `/api/friends`: returns the list of friends.

// app.get('/api/friends', authenticator, (req, res) => {
//   setTimeout(() => {
//     res.send(friends);
//   }, 1000);
// });


export default function FriendsList() {

    const [friends, setFriends] = useState([])
    // console.log(friendState) // = []

    
    useEffect(() => {
        axiosWithAuth()
          .get("/friends")
          .then((res) => {
              console.log(res)
              // setFriends(res.data);
            })
            .catch((err) => {
                console.log('____ERR____', err);
            });
        }, []);
        
        
        return(
            <div>

            <h1>FriendsList.js (protected page)</h1>
        
        </div>
    )
}


// IGNORE THIS!
// useEffect(() => {
//     axios.get('http://localhost:5000/api/friends')
//     .then(res => {
//         console.log('$$$ RES = ', res)
//     })
//     .catch(err => console.log('~~~~ error!!', err)) 
// }, []);