import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import Head from "next/head";
import avatar from "../../assets/images/img_avatar.png";
import AxiosApi from "../../services/Axios";

export default function profile() {
  const [datos, setDatos] = useState({
    nombres: "JULIANA PATRICIA ROJAS",
    documento: 13224323232,
    profesion: "DOCTORA ESPECIALIZADA",
    edad: 40,
    telefonos: 3234345566,
  });

  useEffect(() => {
    const getDataProfile = () => {
      AxiosApi.get(`api/users/me`).then((response) => {
        let datosApi = response.data;
        console.log("esto es data",datosApi)
        //setDatos(datosApi);
      });
    };
    getDataProfile();
  }, []);
  
  return (
    <>
      <Head>
        <title>Perfil Usuario</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <section className="container">
          <h3 className="mb-4">
            <strong>Perfil Profesional de la Salud</strong>
          </h3>
          <div className="row">
            <div className="col-md-6 col-12">
              <p className="pt-2 h5">
                <strong>Nombres</strong>
              </p>
              <p className="h5">{datos.nombres}</p>
              <p className="pt-2 h5">
                <strong>Documento</strong>
              </p>
              <p className="h5">{datos.documento}</p>
              <p className="pt-2 h5">
                <strong>Profesion</strong>
              </p>
              <p className="h5">{datos.profesion}</p>
              <p className="pt-2 h5">
                <strong>Edad</strong>
              </p>
              <p className="h5">{datos.edad}</p>
              <p className="pt-2 h5">
                <strong>Telefonos</strong>
              </p>
              <p className="h5">{datos.telefonos}</p>
            </div>
            <div className="col-md-6 col-12 p-2">
              <Image
                src={avatar}
                className="avatar"
                alt="avatar"
                width={200}
                height={200}
                objectFit="contain"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
