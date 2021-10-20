import React, { useRef, useState } from 'react';
import './main.css';

import { auth } from '../firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

// const SignOut = () => {
//   return auth.currentUser && (
//     <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }

class Header extends React.Component {

    render() {
        return (
            <header>

            </header>
        )
    }
}

export default Header;
