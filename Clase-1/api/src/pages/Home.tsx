import { BiHomeAlt2 } from "react-icons/bi";
import { SiGithub, SiReact, SiVite } from "react-icons/si";

import styles from "@styles/modules/Home.module.scss";

import Button from "@components/Button";


const Home = () => {
  return (
    <main className={`${styles.home} d-flex flex-row align-items-center`}>
      <section className="col">
        <div className="d-flex flex-column">
          <section className="col py-5 text-center">
            <div className="row py-lg-5 justify-content-center">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light display-2">
                  <BiHomeAlt2 /> Bienvenidos Biker!
                </h1>
                <h3>
                  Aquí podrás compartir tu experiencia de rutas.
                </h3>
                <div className="d-flex gap-3 flex-row justify-content-center">
                  <Button
                    className="mr-3 px-4 py-2"
                    type="primary"
                    text="Miembros"
                    to="/miembros"
                  />
                  <Button
                    className="ml-3 px-4 py-2"
                    type="secondary"
                    text="Experiencias"
                    to="/experiencias"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="d-flex flex-col">
                <div className="col-12 col-md-6 pt-5 mx-auto">
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Home;
