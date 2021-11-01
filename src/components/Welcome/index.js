import React, { useState, Fragment, useContext, useEffect } from 'react'
import Logout from '../Logout'
import Quiz from '../Quiz'
import { firebaseContext } from '../firebase'

const Welcome = (props) => {
    const firebase = useContext(firebaseContext);
    const [userSession, setUserSession] = useState(null);

    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');
        })


        return () => {
            listener()
        }
    })

    return userSession === null ? (
        <Fragment>
          <div className = "loader"></div>
          <p> Loading ...</p>
        </Fragment>
       
    ) : (

        <div className="quiz-bg">
                <div className = "container">
                    <Logout />
                    <Quiz />
                </div>
                

            </div>
    )

  
}

export default Welcome