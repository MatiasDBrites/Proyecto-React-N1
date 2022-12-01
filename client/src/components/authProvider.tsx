import {  getAuth, onAuthStateChanged } from "firebase/auth";
import {  app, auth, getUserInfo, registerNewUser, userExist } from "../firebase/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";


/* Component to handle the authentication of the user */

export default function AuthProvider(props: any) {
  const { onUserLoggedIn, onUserNotLoggedIn, onUserNotRegistred, children } = props;
  const navigate = useNavigate();
  const auth1= getAuth(app);

/* Use effect to check if the user is logged in */  
  useEffect (()=>{
    onAuthStateChanged(auth, async (user)=>{
      if (user) {
/* using the user as a parameter to knows if is regitered using userExist */
        const isRegistred = await userExist(user.uid);
        if (isRegistred) {
/* if the user is registred, get the user info and pass it to the onUserLoggedIn function */
          const userInfo = await getUserInfo(user.uid);
          /* prevtn userIngfo undefined */
          if (userInfo) {
            onUserLoggedIn(userInfo);
            /* if the user is not registred, pass the user to the onUserNotRegistred function */
          } else {
            onUserNotRegistred(user);
          }
        } else {
          /* if the user is not registered allow to register the user */
          await registerNewUser(user);
          const userInfo = await getUserInfo(user.uid);
          onUserLoggedIn(userInfo);
        }
      } else {
        onUserNotLoggedIn();
      }
    });

  }, [navigate, onUserLoggedIn, onUserNotRegistred, onUserNotLoggedIn, auth1]);

  return <div>{children}</div>
}

