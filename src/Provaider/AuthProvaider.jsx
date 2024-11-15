import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebse.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvaider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const creatNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const LogOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        creatNewUser,
        singInuser,
        LogOut
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    });

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaider;