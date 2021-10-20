import React, { useRef, useState } from 'react';
import Header from './header';
import Workflow from './workflow';

class Dashboard extends React.Component {

    render() {
        return (
            <>
                <Header />
                <Workflow />
            </>
        )
    }
}

export default Dashboard;
