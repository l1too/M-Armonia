import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const notasSlice = createSlice({
  name: 'notas',
  initialState: [],
  reducers: {
    setNotas: (state, action) => {
      return action.payload;
    },
    agregarNota: (state, action) => {
      return [action.payload, ...state];
    },
    eliminarNota: (state, action) => {
      const notaId = action.payload;
      return state.filter((nota) => nota._id !== notaId);
    },
    actualizarNota: (state, action) => {
      const { _id, notaActualizada } = action.payload;
      return state.map((nota) =>
        nota._id === _id ? { ...nota, nota: notaActualizada } : nota
      );
    },
  },
});

export const { setNotas, agregarNota, eliminarNota, actualizarNota } = notasSlice.actions;

export const fetchNotasAsync = (token) => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:4000/api/notas', {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });

    if (Array.isArray(response.data.response)) {
      dispatch(setNotas(response.data.response));
    } else {
      console.error('La estructura de la respuesta del servidor no es la esperada:', response.data);
    }
  } catch (error) {
    console.error('Error al realizar la solicitud al servidor:', error);
  }
};

export default notasSlice.reducer;