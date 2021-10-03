import React, { useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth';


//   *[POST]* to `/api/friends`: Adds in a new friend.

// **Adding New Friends**
// [] * Create a form to collect data for a new friend.
// [] * Make a POST request to add a friend to the database
// [] * Each `friend` item that is in the `friends` array should have the following format:


// {
//   id: 1
//   name: 'Joe',
//   age: 24,
//   email: 'joe@lambdaschool.com',
// }

// _______________ My steps I made: ______________


// Create a new addFriend component and add it to App.js
// In addFriend.js create initial state as as:
// [
//   {
//   id: ,
//   name: '',
//   age: ,
//   email: ''
// }
// ]

// Once state is create with a form buttom submit, POST the state to the server

//  ALL DONE, but now new steps need to be dealt with. 



export default function AddFriends() {

    const [form, setForm] = useState(
        {
            id: 0,  //  Null or 0???
            name: '',
            age: 0,
            email: ''
        }
    )

    console.log('@@@@@@@@ form =', form)

    //  PROBLEMS...................
    // This updates the state to whatever is typed into the inputs.
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    //  PROBLEMS...................
    // This updates server data, but I do not know how to clear the server data without creating a delete function and all that.
    // gets an error = index.js:1 Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by 
    //                                    the value changing from a defined to undefined, which should not happen.
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/friends", form)
            .then((res) => {
                console.log('ADDFRIENDS res =', res)
                setForm(res);
            })
            .catch((err) => {
                console.log('_ERR in addfriends_', err);
            });
    };


    return (
        <div>
            <h1>AddFriends.js</h1>

            <form onSubmit={handleSubmit}>
                name: <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />

                email: <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />

                age: <input
                    type="text"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                />

                <button>ADD FRIENDS!</button>
            </form>

        </div >
    )
}