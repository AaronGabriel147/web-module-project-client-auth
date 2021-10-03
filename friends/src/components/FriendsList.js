import React, { useState, useEffect } from 'react';
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
    console.log(friends) // = [] // THEN // all friends. 



    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then((res) => {
                // console.log('@@ friendslist res', res)
                setFriends(res.data);
            })
            .catch((err) => {
                console.log('____ERR____', err);
            });
    }, [])


    return (
        <div>

            <h1>FriendsList.js (protected page)</h1>
            <div>
                {friends.map(item => 
                <div key={item.id}>
                    <p>Name: {item.name} Age: {item.age} Email: {item.email}</p>
                </div>
                )}
        </div>

        </div >
    )
}