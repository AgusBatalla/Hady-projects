import React, { useState } from "react";
import Pagination from "@components/Pagination";

const Experiencias = () => {
  const [experiencias, setExperiencias] = useState([
    { id: 1, nombre: "Franco Peralta", experiencia: "Aunque nos encante improvisar, es muy importante tener bien definida la ruta por la que vamos a ir y, sobre todo, descargarla en nuestro dispositivo móvil para poder acceder a ella sin necesidad de conectarnos a internet. Esto puede evitar que pasemos algún que otro mal rato puesto que todavía hay lugares en los que la cobertura escasea y como Murphy hace muy bien su trabajo, es en esos mismos lugares, cuando tenemos que levantar el brazo para pillar una rayita de 2G, cuando más necesitamos acceder al mapa." },
    { id: 2, nombre: "Martín Gomez", experiencia: "A la hora de viajar en moto es muy importante no tener prisa. Aunque tengamos marcada la ruta de cada día es importante realizarla con tiempo para poder cubrir posibles imprevistos. Por eso, cada vez que salgas, hazlo por la mañana y ve a tu ritmo." },
    { id: 3, nombre: "Agustina Batalla", experiencia: "En los viajes largos, sobre todo aquellos en los que tenemos que hacer un tramo de autovía sí o sí, la monotonía puede ser desesperante. Por eso debemos parar siempre que lo necesitemos: Cuando tengamos que echar gasolina, cuando necesitemos ir al baño, cuando tengamos hambre, o incluso cuando nos cansemos de la monotonía de una carretera sin curvas, una parada de 5 minutos para estirar las piernas te da la vida." },
    { id: 4, nombre: "Jimena Peralta", experiencia: "Cuando viajamos en moto, ya sea verano o invierno, es obligatorio ir siempre protegido, ya sea con un equipamiento completo de cordura o cuero, para ir seguro durante el trayecto. Pero debajo de todas esas protecciones, qué mejor que llevar ropa técnica. No solo porque transpira muy bien sino porque, en caso de tener que lavarla en un viaje largo, se secan muy rápido, lo que te permite poder llevar menos equipaje y reutilizar tu ropa tras darle un agua." },
    { id: 5, nombre: "", experiencia: "Texto de experiencia 3" },
    { id: 6, nombre: "", experiencia: "Texto de experiencia 3" },
  ]);

  const [mostrarNuevo, setMostrarNuevo] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaExperiencia, setNuevaExperiencia] = useState("");
  const [experienciaModificada, setExperienciaModificada] = useState<{ id: number, texto: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleNombreChange = (id: number, nuevoNombre: string) => {
    setExperiencias((prevExperiencias) =>
      prevExperiencias.map((experiencia) =>
        experiencia.id === id ? { ...experiencia, nombre: nuevoNombre } : experiencia
      )
    );
  };

  const handleExperienciaChange = (id: number, nuevoTexto: string) => {
    setExperienciaModificada((prev) => ({ ...prev!, id, texto: nuevoTexto }));
  };

  const handleModificarExperiencia = (id: number) => {
    const experiencia = experiencias.find((exp) => exp.id === id);
    setExperienciaModificada({ id, texto: experiencia!.experiencia });
  };

  const handleGuardarExperiencia = (id: number) => {
    setExperiencias((prevExperiencias) =>
      prevExperiencias.map((experiencia) =>
        experiencia.id === id
          ? { ...experiencia, experiencia: experienciaModificada!.texto }
          : experiencia
      )
    );
    setExperienciaModificada(null);
  };

  const handleEliminarExperiencia = (id: number) => {
    setExperiencias((prevExperiencias) =>
      prevExperiencias.filter((experiencia) => experiencia.id !== id)
    );
  };

  const handleAgregarExperiencia = () => {
    setMostrarNuevo(true);
  };

  const handleGuardarNuevaExperiencia = () => {
    if (nuevoNombre.trim() === "" || nuevaExperiencia.trim() === "") {
      alert("Por favor, completa todos los campos antes de guardar.");
      return;
    }

    const id = experiencias.length + 1;
    setExperiencias((prevExperiencias) => [
      ...prevExperiencias,
      { id, nombre: nuevoNombre, experiencia: nuevaExperiencia },
    ]);
    setMostrarNuevo(false);
    setNuevoNombre("");
    setNuevaExperiencia("");
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentExperiencias = experiencias.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Experiencias</h1>
      <h3>Si deseas compartír tus consejos de viajes, haz click en el siguiente botón:&nbsp;
        <button className="btn btn-primary" onClick={handleAgregarExperiencia}>
          Compartir
        </button>
      </h3>
      {mostrarNuevo ? (
        <div className="card mt-3">
          <div className="card-header">
            <input
              type="text"
              className="form-control"
              value={nuevoNombre}
              onChange={(e) => setNuevoNombre(e.target.value)}
              placeholder="Nombre del miembro"
            />
          </div>
          <div className="card-body">
            <textarea
              className="form-control"
              rows={5}
              value={nuevaExperiencia}
              onChange={(e) => setNuevaExperiencia(e.target.value)}
              placeholder="Escribe tu experiencia aquí"
            />
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button className="btn btn-primary" onClick={handleGuardarNuevaExperiencia}>
              Guardar
            </button>
            <button className="btn btn-secondary" onClick={() => setMostrarNuevo(false)}>
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div className="d-flex align-items-center mt-3"></div>
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {currentExperiencias.map((experiencia) => (
          <div className="col" key={experiencia.id}>
            <div className="card h-100">
              <div className="card-header">
                <input
                  type="text"
                  className="form-control"
                  value={experiencia.nombre}
                  onChange={(e) => handleNombreChange(experiencia.id, e.target.value)}
                />
              </div>
              <div className="card-body">
                {experienciaModificada && experienciaModificada.id === experiencia.id ? (
                  <textarea
                    className="form-control"
                    rows={5}
                    value={experienciaModificada.texto}
                    onChange={(e) => handleExperienciaChange(experiencia.id, e.target.value)}
                  />
                ) : (
                  <textarea
                    className="form-control"
                    rows={5}
                    value={experiencia.experiencia}
                    readOnly
                  />
                )}
              </div>
              <div className="card-footer">
                {experienciaModificada && experienciaModificada.id === experiencia.id ? (
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleGuardarExperiencia(experiencia.id)}
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleModificarExperiencia(experiencia.id)}
                  >
                    Modificar
                  </button>
                )}
                <button
                  className="btn btn-danger"
                  onClick={() => handleEliminarExperiencia(experiencia.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination pag={{ current: currentPage, total: Math.ceil(experiencias.length / itemsPerPage) }} path="experiencias" onPageChange={handlePageChange} />
    </div>
  );
};

export default Experiencias;
