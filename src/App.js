import React, { useRef, useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import SignIn from './components/signIn';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

import { db } from './firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();


const App = () => {
    const [loaded, setLoaded] = useState(false);
    const [user] = useAuthState(auth);

    setTimeout(() => {
        setLoaded(true);
    }, 1000);

    return (
        <div className="App">
            <section>
                {
                    loaded ?
                        (user ?
                            <Dashboard user={user} /> :
                            <SignIn auth={auth} />
                        ) :
                    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true} > <CircularProgress color="inherit" /> </Backdrop>
                }
            </section>
        </div>
    );
}

export default App;
