import React, { useState,useContext } from 'react';
import { Firebase } from '../../firebase/config';
import { useHistory } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const history = useHistory()
  const [email,setEmail] = useState('');
  const [pass,SetPass] = useState('')
  const handleLogin = (e)=>{
    e.preventDefault()
    Firebase.auth().signInWithEmailAndPassword(email,pass).then((data)=>{
      alert('Logged In')
      history.push("/")
    }).catch((err)=>{
      alert(err.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={pass}
            onChange={(e)=>{
              SetPass(e.target.value)
            }}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{
          history.push("/signup")
        }}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
