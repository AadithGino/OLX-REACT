import React, { useContext, useEffect} from 'react' 
import { Firebase } from '../../firebase/config';
import {AuthContext} from '../../store/Context'
function Profile() {
    const {user}  = useContext(AuthContext)
    
    const useremail =user?user.email:'';
    console.log(useremail);
    useEffect(()=>{
        Firebase.firestore().collection('users').where('email','==',useremail).get().then((data)=>{
           console.log(data);
        })
    })
  return (
    <div>
      <h2>{user?user.displayName:''}</h2>
      <h2>{user?user.email:''}</h2>
    </div>
  )
}

export default Profile
