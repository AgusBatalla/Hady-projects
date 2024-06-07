import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "@components/Pagination";

type Miembro = {
  id: number;
  nombre: string;
  edad: number;
  ciudad: string;
  imagen: string;
};

const Miembros = () => {
  const [miembros, setMiembros] = useState<Miembro[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const navigate = useNavigate();
  const miembrosPorPagina = 4;

  useEffect(() => {
    // Simular carga de datos (puedes cargar los datos desde una API)
    const datosMiembros: Miembro[] = [
      { id: 1, nombre: "Franco Peralta", edad: 28, ciudad: "Córdoba, Argentina", imagen: "https://motos.noticiassobreruedas.com.ar/wp-content/uploads/2018/08/IMG_8430-809x540.png" },
      { id: 2, nombre: "Agustina Batalla", edad: 27, ciudad: "Córdoba, Argentina", imagen: "https://cdn.pixabay.com/photo/2021/07/09/04/19/girl-6398258_1280.jpg" },
      { id: 3, nombre: "Martín Gomez", edad: 30, ciudad: "Córdoba, Argentina", imagen: "https://www.shutterstock.com/image-photo/stylish-confident-man-biker-wearing-600nw-2341450505.jpg" },
      { id: 4, nombre: "Jimena Peralta", edad: 20, ciudad: "Entre Ríos, Argentina", imagen: "https://static.vecteezy.com/system/resources/previews/006/220/828/non_2x/an-attractive-sexy-girl-on-a-sports-motorbike-posing-outside-photo.jpg" },
      { id: 5, nombre: "Miembro 5", edad: 40, ciudad: "Ciudad E", imagen: "https://envato-shoebox-0.imgix.net/30c9/7fb5-42b8-4576-a931-a947fe154af0/_MG_2253-1.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=700&fit=max&markalign=center%2Cmiddle&markalpha=18&s=bde5122061f3f9426e16af8613b72926" },
      { id: 6, nombre: "Miembro 5", edad: 40, ciudad: "Ciudad E", imagen: "https://images.pexels.com/photos/14604060/pexels-photo-14604060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 7, nombre: "Miembro 5", edad: 40, ciudad: "Ciudad E", imagen: "https://st4.depositphotos.com/11178548/23687/i/450/depositphotos_236870208-stock-photo-nerja-spain-june-2018-people.jpg" },
      { id: 8, nombre: "Miembro 5", edad: 40, ciudad: "Ciudad E", imagen: "https://thumbs.dreamstime.com/b/mujer-joven-sola-sentada-y-posando-cerca-de-la-motocicleta-puesta-sol-dorada-moto-al-fondo-concepto-mundo-viajes-d%C3%ADa-motociclista-254983601.jpg" },
    ];
    setMiembros(datosMiembros);
  }, []);

  // Función para obtener los miembros que se mostrarán en la página actual
  const obtenerMiembrosPagina = () => {
    const indiceInicial = (currentPage - 1) * miembrosPorPagina;
    const indiceFinal = indiceInicial + miembrosPorPagina;
    return miembros.slice(indiceInicial, indiceFinal);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/miembros/p/${page}`);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Miembros Destacados</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4"> 
        {obtenerMiembrosPagina().map((miembro) => (
          <div className="col" key={miembro.id}>
            <div className="card h-100">
              <img src={miembro.imagen} className="card-img-top" alt={miembro.nombre} style={{ maxHeight: "200px" }} /> 
              <div className="card-body">
                <h5 className="card-title">{miembro.nombre}</h5>
                <p className="card-text">Edad: {miembro.edad}</p>
                <p className="card-text">Ciudad: {miembro.ciudad}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination pag={{ current: currentPage, total: Math.ceil(miembros.length / miembrosPorPagina) }} path="/miembros" onPageChange={handlePageChange} /> 
    </div>
  );
};

export default Miembros;
