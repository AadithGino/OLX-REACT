import React, { useContext, useState } from 'react';
import { Firebase } from '../../firebase/config';
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';

export default function Signup() {
  const history = useHistory()
  const [username,SetUsername] = useState('');
  const [userEmail,SetUserEmail] = useState('');
  const [userNumber,SetUserNumber] = useState('');
  const [userPass,SetUserPass] = useState('');
  const {firebase} = useContext(FirebaseContext)
  const handleSubmit = (e)=>{
    e.preventDefault();
    Firebase.auth().createUserWithEmailAndPassword(userEmail,userPass).then((data)=>{
      data.user.updateProfile({displayName:username}).then(()=>{
        Firebase.firestore().collection('users').add({
          id:data.user.uid,
          usename:username,
          phone:userNumber
        }).then(()=>{
          history.push("/login")
        })
      })
    })
    console.log(username,userEmail,userNumber,userPass);
   
}
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>{
              SetUsername(e.target.value)
            }}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={userEmail}
            onChange={(e)=>{
              SetUserEmail(e.target.value)
            }}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={userNumber}
            onChange={(e)=>{
              SetUserNumber(e.target.value)
            }}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={userPass}
            onChange={(e)=>{
              SetUserPass(e.target.value)
            }}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{
           history.push("/login")
        }}>Login</a>
      </div>
    </div>
  );
}
