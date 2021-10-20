import React, { useRef, useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard';

import { db } from './firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


const App = () => {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>
        {user ? <Dashboard /> : <SignIn />}
      </section>

    </div>
  );
}

const SignIn = () => {
    const signInWithEmailAndPassword = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
        // const provider = new firebase.auth.GoogleAuthProvider();
        // auth.signInWithPopup(provider);
    }

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <>
            <form action="">
                <input type="email" ref={emailRef} />
                <input type="password" ref={passwordRef} />
            </form>
            <button className="sign-in" onClick={signInWithEmailAndPassword}>Sign In</button>
        </>
    )

}

export default App;
