import { createSlice } from "@reduxjs/toolkit";
import { people } from "../../mockups/mockupsData";

const initialState = {
  usuarios: people,
  userToEdit: null,
  isEditing: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //AGREGAR
    addUsuario: (state, action) => {
      state.usuarios.push(action.payload);
    },
    //EDITAR
    updateUsuario: (state, action) => {
      const { index, user } = action.payload;
      if ( index !== -1 ) {
        state.usuarios[index] = {...user};
      }
    },
    //ELIMINAR
    deleteUsuario: (state, action) => {
      const index = action.payload; 
      state.usuarios = state.usuarios.filter((_, i) => i !== index); //filtra los usuarios y elimina el que coincide con el índice proporcionado.
      console.log(deleteUsuario)
    },
    setUserToEdit: (state, action) => {
      state.userToEdit = action.payload.user;
      state.isEditing = action.payload.isEditing;
    },
    clearEdit: (state) => {
      state.userToEdit = null;
      state.isEditing = false;
    },
  },
});

export const {
  addUsuario,
  deleteUsuario,
  updateUsuario,
  setUserToEdit,
  clearEdit,
} = userSlice.actions;


export default userSlice.reducer;