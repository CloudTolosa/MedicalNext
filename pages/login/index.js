import React from "react";
import Image from "next/image";
import logo from "../images/5063406.jpg";

export default function login() {

  return (
    <div className="welcomer">
      <div className="containerPrincipal">
        <div className="mx-auto py-3" style={{ width: 300 }}>
          <Image className="logo" src={logo} alt="Logo Header" />
        </div>
        <h5 className="textblueMega text-center">
          Administración <br /> de Pacientes
        </h5>
        <div className="containerSecundario ">
        <form >
            <div className="form-group">
              <label>Usuario:</label>
              <br />
              <input
                placeholder="MIUSUARIO1"
                className="form-control"
                //onChange={handleInputChange}
                name="userName"
                /* ref={register({
                  required: {
                    value: true,
                    message: "Documento de usuario requerido ",
                  },
                  minLength: {
                    value: 7,
                    message: "Documento de usuario requiere mas caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Documento de usuario requiere menos caracteres",
                  },
                })} */
              />
              {/* <small className="text-danger text-small d-block mb-2">
                {errors?.username?.message}
              </small> */}
              <br />
              <label>Contraseña:</label>
              <br />
              <input
                placeholder="***********"
                type="password"
                className="form-control"
                /* onChange={handleInputChange}
                name="password"
                ref={register({
                  required: {
                    value: true,
                    message: "Contraseña de usuario requerida ",
                  },
                  minLength: {
                    value: 7,
                    message: "Contraseña de usuario requiere mas caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Contraseña de usuario requiere menos caracteres",
                  },
                })} */
              />{/* 
              <small className="text-danger text-small d-block mb-2">
                {errors?.password?.message}
              </small> */}
              <br />
              <button className="btn bg-primary text-white">
                Iniciar Sesión
              </button>
              <br />
              {/* {!loggedInState
              ?
              <button className="btn blueMega text-white">
                Iniciar Sesión
              </button>
              :
              <Loading/>
              } */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}