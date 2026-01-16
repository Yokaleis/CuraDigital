import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react'
import appFirebaseCD, { db } from '../Firebase/credenciales';
import { doc, getDoc } from 'firebase/firestore';

const auth = getAuth(appFirebaseCD);
const AuthContext = createContext(null);


export function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, async (usuarioCuraDigital) => {
            if (usuarioCuraDigital) {

                const userDocRef = doc(db, "usuariosCuraDigital", usuarioCuraDigital.uid);
                const userDoc = await getDoc(userDocRef)

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setUsuario({
                        uid: usuarioCuraDigital.uid,
                        email: usuarioCuraDigital.email,
                        displayName: usuarioCuraDigital.displayName,
                        rol: userData.rol
                    });
                } else {
                    setUsuario({
                        uid: usuarioCuraDigital.uid,
                        email: usuarioCuraDigital.email,
                        displayName: usuarioCuraDigital.displayName,
                    })
                }
            } else {
                setUsuario(null);

            } setLoading(false);
        });

        return () => unsuscribe();
    },

        []);

    return <AuthContext.Provider value={{ usuario, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext);
}