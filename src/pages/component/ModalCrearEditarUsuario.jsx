import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUsuario, updateUsuario, clearEdit } from "../../features/usuarios/usuariosSlice"
import { v4 as uuid } from "uuid"
import { useNavigate, Link, useParams } from "react-router-dom"
import { ButtonCancel, ButtonPrimary, ButtonSecondary } from "../../pages/component/Buttons"
import { SelectServicio } from "./Select"

export function ModalCrearyEditar(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const userToEdit = useSelector((state) => state.usuarios.userToEdit);
  const isEditing = useSelector((state) => state.usuarios.isEditing);
  const usuarios = useSelector((state) => state.usuarios.usuarios);


  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [edad, setEdad] = useState("");
  const [aseguradora, setAseguradora] = useState("");
  const [servicio, setServicio] = useState([]);
  const [creacion, setCreacion] = useState("");

  useEffect(() => {
    if (isEditing && userToEdit) {
      setNombre(userToEdit.nombre);
      setCedula(userToEdit.cedula);
      setEdad(userToEdit.edad);
      setAseguradora(userToEdit.aseguradora);
      setServicio(userToEdit.servicio.map((servicio) => servicio.value) || [] );
      /* setServicio(
        Array.isArray(userToEdit.servicio)
        ? userToEdit.servicio.map(s => typeof s === "string" ? s : s.value)
        : []
      ) */
      setCreacion(userToEdit.creacion);
    } else {
      setNombre("");
      setCedula("");
      setEdad("");
      setAseguradora("");
      setServicio([]);
      setCreacion("");
    }
  }, [isEditing, userToEdit]);

    const handleSubmit = (e) => {
      e.preventDefault();
      const user = {
        id,
        nombre,
        cedula,
        edad,
        servicio: servicio,
        aseguradora,
        creacion,
      }
      if (isEditing) {
        const index = usuarios.findIndex((u) => u.id === userToEdit.id);
      dispatch(updateUsuario({ index, user }))
      } else {
        dispatch(addUsuario({  id, nombre, cedula, edad, aseguradora, servicio, creacion }));
      }
      dispatch(clearEdit());
      navigate('/administrador/aurgentcare');
    };


    return (
      <>
        <div>
          <h1 className="text-3xl font-bold mb-10">{isEditing ? 'Editando' : 'Crear una nueva 😄'} atención</h1>

          <form onSubmit={handleSubmit}>
            {/* GRID FORM */}

            <div className="grid grid-cols-4 gap-4 mb-10">
              {/* NOMBRES Y APELLIDOS */}
              <div>
                <label htmlFor="nombre" className="font-semibold">
                  Nombres y Apellidos
                </label>
                <div>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Teresa Millán"
                    className="w-full p-2 outline-none rounded-lg bg-secondary-900"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                  />
                </div>
              </div>
              {/* CEDULA */}
              <div>
                <label htmlFor="cedula" className="font-semibold">
                  Cédula de identidad
                </label>
                <div>
                  <input
                    type="text"
                    name="cedula"
                    id="cedula"
                    placeholder="6123321"
                    className="w-full p-2 outline-none rounded-lg bg-secondary-900"
                    onChange={(e) => setCedula(e.target.value)}
                    value={cedula}
                  />
                </div>
              </div>
              {/* EDAD */}
              <div>
                <label htmlFor="edad" className="font-semibold">
                  Edad
                </label>
                <div>
                  <input
                    type="text"
                    name="edad"
                    id="edad"
                    placeholder="52"
                    className="w-full p-2 outline-none rounded-lg bg-secondary-900"
                    onChange={(e) => setEdad(e.target.value)}
                    value={edad}
                  />
                </div>
              </div>
              {/* ASEGURADORA */}
              <div>
                <label htmlFor="aseguradora" className="font-semibold">
                  Aseguradora
                </label>
                <div>
                  <select
                    name="aseguradora"
                    id="aseguradra"
                    className="w-full rounded-lg"
                    onChange={(e) => setAseguradora(e.target.value)}
                    value={aseguradora}
                  >
                    <option value="">Selecciona la aseguradora</option>
                    <option value="Seguros Caracas">Seguros Caracas</option>
                    <option value="Seguros Mercantil">Seguros Mercantil</option>
                    <option value="Seguros Horizonte">Seguros Horizonte</option>
                    <option value="Seguros Piramide">Seguros Pirámide</option>

                  </select>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-10">
                {/* SERVICIOS */}
              <div>
                <label htmlFor="servicio" className="font-semibold">
                 Servicios
                </label>
                <div>
                  <SelectServicio name="servicio" 
                  value={ servicio.length > 0 ? servicio.label : []  } 
                  onChange={setServicio}/>
                  {/* <select
                    name="servicio"
                    className="w-full rounded-lg"
                    id="servicio"
                    onChange={(e) => setServicio(e.target.value)}
                    value={servicio}
                  >
                    <option value="Laboratorio">Laboratorio</option>
                    <option value="Ecografia">Ecografía</option>
                    <option value="RayosX">Rayos X</option>
                    <option value="Procedimiento">Procedimiento</option>
                    <option value="Cirugia">Cirugía</option>
                  </select> */}
                </div>
              </div>
              {/* FECHA */}
              <div>
                <label htmlFor="creacion" className="font-semibold">
                 Fecha
                </label>
                <div>
                <div>
                <input
                    type="date"
                    name="creacion"
                    id="creacion"
                    placeholder="Teresa Millán"
                    className="w-full p-2 outline-none rounded-lg bg-secondary-900"
                    onChange={(e) => setCreacion(e.target.value)}
                    value={creacion}
                  />
                </div>
                </div>
              </div>
            </div>

            <div>
              <button type="submit" className="mr-6"> {isEditing ? "Editar" : "Agregar"} </button>

              <Link to={"aurgentcare"}>
                <ButtonCancel text="Cancelar" />
              </Link>
            </div>
          </form>
        </div>
      </>
    );
}