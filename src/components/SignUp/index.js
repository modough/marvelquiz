


import React, { useState, useContext } from "react"
import { Link } from 'react-router-dom';
import { firebaseContext } from "../firebase"




const SignUp = props => {
    
    const firebase = useContext(firebaseContext);
    const data = {
        pseudo:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    const [logInData, setlogInData] = useState(data);
    const [error, setError] = useState('')

    const handleChange = e => {
        setlogInData ({...logInData, [e.target.id]: e.target.value })

    }

    const handleSubmit = e => {
        e.preventDefault();
        
        const {pseudo ,email, password} = logInData;
        firebase.signUpUser(email, password)

        

        .then(authUser => {
            

            firebase.user(pseudo, email)
            

           

        })

        .then(() => {
            setlogInData({...data});
            props.history.push("/welcome");

        })
        .catch(error => {
            setError(error);
            setlogInData({...data});

        })
    }

    const { pseudo, email, password, confirmPassword } = logInData;

    const btn = pseudo ==='' || email ==='' || password ==='' || password !== confirmPassword ?
    <button disabled>Inscription</button> : <button>Inscription</button>

    // gestion erreurs

    const errorMsg = error !== '' && <span>{ error.message }</span>;

    return (
  
            
            <div className="signUpLoginBox">
                <div className = "slContainer">
                    <div className ="formBoxLeftSignUp"></div>
                    <div className ="formBoxRight">
                        <div className="formContent">

                            {errorMsg}
 
                            <h2>Inscription</h2>
                            <form onSubmit = { handleSubmit }> 
                                
                                <div className="inputBox">
                                    <input onChange= {handleChange} type="text" value={pseudo} id="pseudo" autoComplete="off" required/>
                                    <label htmlFor="pseudo">Pseudo</label>
                                </div>

                                <div className="inputBox">
                                    <input onChange= {handleChange} type="email" value={email} id="email" autoComplete="off" required/>
                                    <label htmlFor="email">Email</label>
                                </div>

                                <div className="inputBox">
                                    <input onChange= {handleChange} type="password" value={password} id="password" autoComplete="off" required/>
                                    <label htmlFor="password">Mot de passe</label>
                                </div>

                                <div className="inputBox">
                                    <input onChange= {handleChange} type="password" value={confirmPassword} id="confirmPassword" autoComplete="off" required/>
                                    <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                                </div>

                                {btn}

                            </form>
                            <div className = "linkContainer">
                                <Link className = "simpleLink" to = "/logIn">Déjà inscrit ? Connectez-vous.</Link>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    

                </div>

                

            </div>
    )
}

export default SignUp;