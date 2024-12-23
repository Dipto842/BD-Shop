import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


import app from "../firebase";
import analytics from "../firebase";


export const Athcontes = createContext('')
const AthoProvadar = ({ children }) => {
    
    const Googleprovider = new GoogleAuthProvider();
    const [Loding, setloding] = useState(true)
    const [user, setuser] = useState([])
    const auth = getAuth(app);
    const singup = (email, password, name) => {
     return createUserWithEmailAndPassword(auth, email, password, name)
    }
    const singin = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }

    const logout = () => {
        return signOut()

    }
    const updateProfil = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    const Google = () => {
        return signInWithPopup(auth, Googleprovider)
    }

    useEffect(() => {
        const chens = onAuthStateChanged(auth, currentUser => {
          setuser(currentUser)

       

        })
        return () => {
            chens()
        }
    }, [auth])

    const athuinfo = {
        user,
        singup,
        singin,
        logout,
        updateProfil,
        Google
    }
    return (
        <Athcontes.Provider value={athuinfo}>
            {children}
        </Athcontes.Provider>
    );
};

export default AthoProvadar;