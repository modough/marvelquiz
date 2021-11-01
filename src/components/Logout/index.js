

import React, { useState, useEffect, useContext } from 'react'
import { firebaseContext } from '../firebase'



const Logout = () => {

    const [checked, setChecked] = useState(false);
    const firebase = useContext(firebaseContext);

    useEffect(() => {
        if (checked) {
            
            firebase.signOutUser();
        }
    }, [checked, firebase]);

    const handleChange = e => {
        setChecked(e.target.checked)
    };

    return (
        <div className = "logoutContainer">
            <label className = "switch">
                <input onChange = {handleChange} type = "checkbox" />
                
                <span className = "slider round"></span>

            </label>
        </div>
    )
}

export default Logout
