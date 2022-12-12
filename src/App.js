import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'


import Home from './Pages/Home'; 
import { AuthContext, FirebaseContext } from './store/Context';
import { Firebase } from './firebase/config';
import Post from './store/postContext'
import Profile from './Pages/Profile';
function App() {
const {setUser} = useContext(AuthContext)
const {firebase} = useContext(FirebaseContext)

useEffect(()=>{
 Firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
  
  
 })
})
  return (
    <div>
      <Post>
      <Router>
        {/* HOME ROUTE */}
          <Route exact path='/'><Home/> </Route>

          {/* SINGUP ROUTE  */}

          <Route path='/signup'><Signup/></Route>

          {/* LOGIN ROUTE  */}

          <Route path='/login'><Login></Login></Route>

          {/* SELL PRODUCT */}

          <Route path='/sell'><Create></Create></Route>

          {/* View Post */}

          <Route path='/view'><ViewPost></ViewPost> </Route>

          {/* Profile Page  */}

          <Route path='/profile'><Profile/></Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;
