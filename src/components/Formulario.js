import React, { useState } from "react";
import {Error} from "./Error";

export const Formulario = ({setBusquedaLetra}) => {
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });
  const [error, setError] = useState(false);

  const { artista, cancion } = busqueda;

  // Funcion a cada input para leer su contenido

  const handleInput = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (artista.trim() === "" || cancion.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // Pasar al componente principal
    setBusquedaLetra(busqueda)
  };

  return (
    <div>
      <div className="bg-info">
        {error ? <Error msj="Todos los campos son obligatorio" />: null}
        <div className="container">
          <div className="row">
            <form
              onSubmit={handleSubmit}
              className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            >
              <fieldset>
                <legend className="text-center">
                  Buscador Letras Canciones
                </legend>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="artista">Artista</label>
                      <input
                        type="text"
                        id="artista"
                        className="form-control"
                        name="artista"
                        placeholder="Nombre Artista"
                        onChange={handleInput}
                        value={artista}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="cancion">Canción</label>
                      <input
                        type="text"
                        id="cancion"
                        className="form-control"
                        name="cancion"
                        placeholder="Nombre Canción"
                        onChange={handleInput}
                        value={cancion}
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary float-right">
                  Buscar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
