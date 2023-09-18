import React, {createContext, useEffect, useState} from "react";
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "../firebaseApp.js";

export const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
            return () => unsubscribe();
    }, []);

    const logoutUser = async () => {
        await signOut(auth);
    }

    const loginUser = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Successful Login!');
        } catch (e) {
            console.log(e.message);
        }
    }

    return (

        <UserContext.Provider value={{user, logoutUser, loginUser}}>
            {children}
        </UserContext.Provider>

    )

}