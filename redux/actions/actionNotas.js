import axios from 'axios';
import { setNotas } from '../notasSlice';

export const manejarEventosWebSocket = (socket) => (dispatch) => {
  socket.on('notas', (notas) => {
    dispatch(setNotas(notas));
  });

};

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