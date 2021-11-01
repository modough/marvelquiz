import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import {getFirestore, collection} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD5hcPcKWNS3y4XKeBJOMcW_YSpe0yizJ8",
    authDomain: "modough-quiz.firebaseapp.com",
    projectId: "modough-quiz",
    storageBucket: "modough-quiz.appspot.com",
    messagingSenderId: "869689564072",
    appId: "1:869689564072:web:daf3bb2ebfed06c3915b9d",
    measurementId: "G-JBDBK0172M"
  };



class firebase {
    constructor() {
        initializeApp(firebaseConfig);
        
        this.auth = getAuth();
        this.db = getFirestore();
    }

    // inscription

    signUpUser = (email, password) => createUserWithEmailAndPassword(this.auth, email, password);

    // connexion

    logInUser = (email, password) => signInWithEmailAndPassword(this.auth, email, password);

    // deconnexion

    signOutUser = () => this.auth.signOut();

    // Recuper le mot de passe

    passwordReset = email => sendPasswordResetEmail(this.auth, email); 
    
    
    user = uid => collection(this.db, uid)
  
    
};


export default firebase;

