import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Banner } from "../../components/banner/Banner";
import { CarrouselBoton } from "../../components/carrouselBoton/CarrouselBoton";
import { fetchNotasAsync, agregarNota } from "../../../redux/notasSlice";
import Swal from "sweetalert2";
import axios from "axios";

const Notas = () => {
  const notas = useSelector((state) => state.notas);
  const token = useSelector((store) => store.loginInReducer.token);
  const dispatch = useDispatch();
  const userId = token.id;

  const [nuevaNota, setNuevaNota] = useState("");
  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const fetchNotasPeriodicamente = async () => {
    try {
      await dispatch(fetchNotasAsync(token));
    } catch (error) {
      console.error("Error al obtener las notas:", error);
    }
  };

  const handleAgregarNota = async () => {
    try {
      if (!nuevaNota.trim() || !nuevoTitulo.trim()) {
        return Swal.fire("Error", "La nota y el título no pueden estar vacíos", "error");
      }

      const response = await axios.post(
        "http://localhost:4000/api/notas",
        {
          nota: nuevaNota,
          fecha: new Date().toISOString(),
          titulo: nuevoTitulo,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        dispatch(agregarNota(response.data.response));
        setNuevaNota("");
        setNuevoTitulo("");

        Swal.fire({
          icon: "success",
          title: "Nota creada exitosamente",
          text: `Título: ${nuevoTitulo}`,
        });
      } else {
        Swal.fire(`Error: ${response.data.message.join(", ")}`);
      }
    } catch (error) {
      console.error("Error al agregar la nota:", error);
    }
    fetchNotasPeriodicamente();
  };

  const handleEliminarNota = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:4000/api/notas/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        dispatch(fetchNotasAsync(token));
        return Swal.fire(`Nota Eliminada!`, ``, `success`);
      } else {
        Swal.fire(`Errors: ${res.data.message.join(", ")}`);
      }
    } catch (err) {
      Swal.fire(`Error. You must be logged in.`);
    }
  };

  useEffect(() => {
    fetchNotasPeriodicamente();
  }, [token, dispatch]);

  return (
    <div className="mx-auto w-[95%] my-2">
      <Banner />
      <CarrouselBoton />

      <div className="m-3">
        <button
          className="btn btn-primary"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          Agregar Nota
        </button>

        {mostrarFormulario && (
          <div>
            <input
              type="text"
              value={nuevoTitulo}
              onChange={(e) => setNuevoTitulo(e.target.value)}
              placeholder="Ingrese el título de la nota..."
              style={{
                backgroundColor: "lightyellow",
                padding: "5px",
                borderRadius: "5px",
                width: "100%",
                margin: "10px 0",
              }}
            />

            <textarea
              value={nuevaNota}
              onChange={(e) => setNuevaNota(e.target.value)}
              placeholder="Ingrese su nota aquí..."
              style={{
                backgroundColor: "lightyellow",
                padding: "5px",
                borderRadius: "5px",
                width: "100%",
                margin: "10px 0",
              }}
            />
            <button
              className="btn btn-success mr-3"
              onClick={handleAgregarNota}
            >
              Agregar
            </button>

            <button
              className="btn btn-danger"
              onClick={() => {
                setNuevaNota("");
                setNuevoTitulo("");
              }}
            >
              Limpiar
            </button>


          </div>
        )}
      </div>

      <div>
        {notas
          .filter((nota) => nota.usuarioId === userId)
          .slice()
          .reverse()
          .map((nota) => (
            <div key={nota._id}>
              <div className="card m-5">
                <h5 className="card-header">{nota.nombreUsuario}</h5>
                <div className="card-body">
                  <h5 className="card-title">{nota.titulo}</h5>
                  <p className="card-text">{nota.nota}</p>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                    onClick={() => handleEliminarNota(nota._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notas;