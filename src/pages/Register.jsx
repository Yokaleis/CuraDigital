import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../Firebase/credenciales'
import { ButtonPrimary } from './component/Buttons'
import { setDoc, doc } from 'firebase/firestore'
import { Link } from 'react-router-dom'


export function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rol, setRol] = useState("");

    /* const [user, setUser] = useState({
        name: "",
        email: "",
        rol: "",
        password: ""
    }) */

    /* const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        guardarUsuario(user.email, user.password, user.rol)
        console.log(user)
    }

    const guardarUsuario = async (emailAuth, passwordAuth, rolAuth) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, emailAuth, passwordAuth, rolAuth);
            console.log("Usuario guardado🔥🙌🏽", userCredential.user.uid)
        } catch (e) {
            console.log("Error al guardar 😅", e)
        }

    } */
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            await updateProfile(userCredential.user, {
                displayName: name
            });

            console.log(db);
            // Guardar datos en Firestore
            await setDoc(doc(db, "usuariosCuraDigital", user.uid), {
                name,
                email,
                rol: rol.toLowerCase(),
                createdAt: new Date(),
            });



            alert("Usuario registrado correctamente");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="grid grid-cols-[30%_60%] h-screen overflow-y-hidden">
                <div className="bg-primary opacity-50"></div>
                <div className="p-40">
                    <section className="w-90 mb-10">
                        <h1 className="text-3xl font-bold">Regístrate</h1>
                        <p>Bienvenido a nuestro sistema de atención y emergencias médicas, por favor introduzca su usuario y contraseña para ingresar.</p>
                    </section>

                    <form onSubmit={handleRegister}>
                        <section className="w-90 mb-5">
                            <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} placeholder="Nombre completo"
                                className="w-full p-2 outline-none rounded-lg bg-secondary-900" />
                        </section>
                        <section className="w-90 mb-5">
                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                                className="w-full p-2 outline-none rounded-lg bg-secondary-900" />
                        </section>
                        <section className="w-90 mb-5">
                            <select name="rol" id="rol" value={rol} onChange={(e) => setRol(e.target.value)}>
                                <option value="">Selecciona un rol</option>
                                <option value="administrador">Administrador</option>
                                <option value="despachador">Despachador</option>
                            </select>
                        </section>
                        <section className="w-90 mb-5">
                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña"
                                className="w-full p-2 outline-none rounded-lg bg-secondary-900" />
                        </section>
                        <section className="w-90 mb-5">
                            <input type="password" name="confirmPassword" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirma tu contraseña"
                                className="w-full p-2 outline-none rounded-lg bg-secondary-900" />
                        </section>
                        <button type='submit'>Registrarme</button>
                    </form>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </>
    )
}
