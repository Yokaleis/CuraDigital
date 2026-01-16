import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addUsuario, updateUsuario } from "../../features/usuarios/usuariosSlice"
import { v4 as uuid } from "uuid"
import { useNavigate, Link } from "react-router-dom"
import { ButtonCancel, ButtonPrimary, ButtonSecondary } from "../../pages/component/Buttons"

export function CrearUsuario(){
    const params = useParams();
    const usuarios = useSelector( state => state.usuarios)
    const [nuevoUsuario, setNuevoUsuario] = useState({
        id: '',
        atencion: '',
        nombre: '',
        cedula: '',
        edad: '',
        aseguradora: '',
        servicio: [],
        creacion: '',
        via: ''
    })
    const navigate = useNavigate();


    const handleMultiSelectChange = (event) => {
        let value = Array.from(event.target.selectedOptions, option => option.value);
        setNuevoUsuario({
          ...nuevoUsuario,
          servicio: value
        });
      };
/*     const handleSelectChange = ( event ) => {
        console.log('Seleccionado: ', event);
        setNuevoUsuario(event)
      };
    
 */
    const dispatch = useDispatch()
    const handleChange = ( event ) => {
        //console.log(e.target.name, e.target.value)
        setNuevoUsuario({
            ...nuevoUsuario,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (params.id) {
            dispatch(
                updateUsuario(nuevoUsuario)
            )
        } else {
            dispatch(
            addUsuario({
                ...nuevoUsuario,
                id: uuid(),  
            }))
        e.target.reset() 
        }
        
        navigate('/administrador/aurgentcare')
        // console.log(nuevoUsuario)
    }
    useEffect(() => {
        console.log('Ha cambiado el contador!')
        if(params.id){
            console.log('Esto es el params ', params)
            setNuevoUsuario(usuarios.find((usuario) => usuario.id === params.id))
        }
      }, [params, usuarios])
        
    return (
      <>
        <div>
          <h1 className="text-3xl font-bold mb-10">Crear nueva atención</h1>
          <p>Modal Orginal</p>
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
                    onChange={handleChange}
                    value={nuevoUsuario.nombre}
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
                    onChange={handleChange}
                    value={nuevoUsuario.cedula}
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
                    onChange={handleChange}
                    value={nuevoUsuario.edad}
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
                    onChange={handleChange}
                    value={nuevoUsuario.aseguradora}
                  >
                    <option value="Seguros Caracas">Seguros Caracas</option>
                    <option value="Seguros Mercantil">Seguros Mercantil</option>
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
                  <select
                    name="servicio"
                    className="w-full rounded-lg"
                    id="servicio"
                    onChange={handleMultiSelectChange}
                    value={nuevoUsuario.servicio}
                  >
                    <option value="Laboratorio">Laboratorio</option>
                    <option value="Ecografia">Ecografía</option>
                    <option value="RayosX">Rayos X</option>
                    <option value="Procedimiento">Procedimiento</option>
                    <option value="Cirugia">Cirugía</option>
                  </select>
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
                    onChange={handleChange}
                    value={nuevoUsuario.creacion}
                  />
                </div>
                </div>
              </div>
            </div>

            <div>
              <button className="mr-6" type="submit">
                <ButtonPrimary text="Guardar" />
              </button>
              <Link to={"/administrador/aurgentcare"}>
                <ButtonCancel text="Cancelar" />
              </Link>
            </div>
          </form>
        </div>
      </>
    );
}