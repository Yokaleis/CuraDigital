import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
//FIREBASE
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase/credenciales";
import { doc, getDoc } from "firebase/firestore";
//COMPONENTES
import { ButtonPrimary } from "./component/Buttons";


import headerImg from "../assets/bg-login.svg";


export function Login() {

  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const functionAuthUC = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const docRef = doc(db, "usuariosCuraDigital", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        console.error("No existe documento del usuario");
        return;
      }

      const { rol } = docSnap.data();
      const rolNormalizado = rol.toLowerCase();

      if (rolNormalizado === "administrador") {
        navigate("/administrador");
      } else if (rolNormalizado === "despachador") {
        navigate("/despachador");
      } else {
        console.error("Rol no reconocido:", rol
        );
      }

    } catch (error) {
      console.error("Error en login:", error.code, error.message);
    }
  };


  return (
    <>
      <div className="overflow-y-hidden min-h-screen grid grid-cols-[40%_60%]">
        <div  className="h-full bg-cover bg-center" style={{ backgroundImage: `url(${headerImg})` }}></div>
        <div className="p-40 h-full overflow-y-auto">
          <section className="w-[90%] mb-10">
            <h1 className="text-3xl font-bold">Hola, Bienvenido</h1>
            <p>Bienvenido a nuestro sistema de atención y emergencias médicas, por favor introduzca su usuario y contraseña para ingresar.</p>
          </section>

          <form onSubmit={functionAuthUC}>
            <section className="w-[90%] mb-5">
              <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                className="w-full p-2 outline-none rounded-lg bg-secondary-900" />
            </section>
            <section className="w-[90%] mb-5">
              <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"
                className="w-full p-2 outline-none rounded-lg bg-secondary-900" />
            </section>

            <button type="submit">Entrar</button>
          </form>

          <div>
            <span>Regístrate <Link to="/registro">aquí</Link> si no tienes cuenta</span>
          </div>
        </div>

      </div>
    </>
  )
}