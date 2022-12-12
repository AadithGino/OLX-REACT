import React, { useContext, useEffect, useState } from 'react';
import { Firebase } from '../../firebase/config';
import { postContext } from '../../store/postContext';

import './View.css';
function View() {
  const [userDetails,setUserDetails] = useState('')
  const {postDetails} = useContext(postContext)
  const {userid} = postDetails
  console.log(userid);
  useEffect(()=>{
    Firebase.firestore().collection("users").where('id','==',userid).get().then((data)=>{
      data.forEach(doc=>{
        console.log(doc.data());
        setUserDetails(doc.data())
      })
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.usename}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
