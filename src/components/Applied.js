import React from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'
import NavBar from './NavBar';

function Applied() {

    const { currentUser } = useAuth();
    const history = useHistory();

    const redirect = () => {
        history.push("/sign-in")
    }
    
    return (
        <div className="applied main">
            <NavBar />
            <div className="content">
            {
                currentUser ?
                <h1>Applied Jobs</h1>
                :
                <h1 onClick={redirect}>  Please Log in</h1>

            }
            </div>
           
        </div>
    )
}

export default Applied
