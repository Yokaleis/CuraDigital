import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
// LAYOUTS
import { AdminLayout } from "./layouts/AdminLayout"
import { DespachadorLayout } from './layouts/DespachadorLayout'

// ADMIN
import { Home } from "./pages/admin/Home";
import { ListadoAtenciones } from "./pages/admin/ListadoAtenciones";
import { AProgramadas } from './pages/admin/AtenProgramadas'

import { GestionServiciosDashboard } from './pages/admin/ServiciosGestion'
import { ModalCrearyEditar } from './pages/component/ModalCrearEditarUsuario'
import { AntencionesUCcopy } from './pages/admin/AtencionesUCcopy'
import { SalaObservacionUC } from './pages/admin/SalaObservaciónUC'
import { Login } from './pages/Login'
import { Error404 } from './pages/Error404'


// DESPACHADOR
import {ListadoTripulaciones} from './pages/despachador/ListadoTripulaciones'
import {ListadoProveedores} from './pages/despachador/ListadoProveedores'
import {AuthProvider} from './context/authContext'


import { LayoutAuth } from './layouts/LayoutAuth'
import { Register } from './pages/Register'
import PrivateRoute from './components/PrivateRoute'
import Dashboards from './pages/Dashboards'



function App() {
  
  return (

   <><BrowserRouter>
      <AuthProvider>
        
          <Routes>
            <Route path='/' element={<Login/>} />
              <Route path='/login' index element={<Login />} />
              <Route path='/registro' element={<Register />} />
            

            {/* RUTAS PRIVADAS */}
            <Route element={<PrivateRoute allowedReoles={["administrador"]} />}>
              <Route path='/administrador' element={<AdminLayout />}>
                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='dashboards' element={<Dashboards/>}/>
                <Route path='atenciones' element={<ListadoAtenciones />} />
                <Route path='salaobservacionesuc' element={<SalaObservacionUC />} />
                <Route path='aurgentcare' element={<AntencionesUCcopy />} />
                <Route path='nueva-atencion' element={<ModalCrearyEditar />} />
                <Route path='editar-atencion/:id' element={<ModalCrearyEditar />} />
              </Route>
            </Route>

             {/* RUTAS PRIVADAS DESPACHADOR */}
            <Route element={<PrivateRoute allowedReoles={["despachador"]} />}>
              <Route path='/despachador' element={<DespachadorLayout />}>
                <Route index  element={<Home />} />
                <Route  path='home' element={<Home />} />
                <Route path='dashboards' element={<Dashboards/>}/>
                <Route path='ateprogramadas' element={<AProgramadas />} />
                <Route path='gservicios' element={<GestionServiciosDashboard />} />
              </Route>
            </Route>

            <Route path='*'  element={<Error404/>}></Route>

          </Routes>
        
      </AuthProvider></BrowserRouter>
   </>



    
  )
}



export default App
