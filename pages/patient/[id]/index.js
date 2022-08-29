import React, {useState, useEffect} from "react";
import Layout from "../../../components/Layout";
import Head from "next/head";
import Image from "next/image"
import avatar from "../../../images/img_avatar.png"
import LineChart from "../../../components/chart/LineChart";

const  labels= ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const data1 = [
  {
    label: "Diastolica",
    data: [33, 53, 85, 41, 44, 65],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderColor: 'rgb(255, 99, 132)'
  },
  {
    label: "Sistolica",
    data: [33, 25, 35, 51, 54, 76],
    fill: false,
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
  },
  {
    label: "Hora",
    data: [0,1, 5, 45, 11, 14, 16],
    fill: false,
    borderColor: "#742774"
  }
]

const data2 = [
  {
    label: "Ritmo Cardiaco",
    data: [33, 53, 85, 41, 44, 65],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderColor: 'rgb(255, 99, 132)'
  },
  {
    label: "Hora",
    data: [33, 25, 35, 51, 54, 76],
    fill: false,
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
  },
]

export default function patient() {

  const [datos, setDatos] = useState({ });
  const [dataLine, setDataLine] = useState()

  useEffect(() => {
    setDatos({
      nombre: "SALAS MOSOS STEFFANY JULIETH",
      documento: 13224323232,
      direccion: "Calle Falsa # 45",
      edad: 22,
      fechaUltimaMedicion: "24/07/2022",
      telefono: 3234345566
    })
  }, [])
  
  return (
    <>
      <Head>
        <title>Paciente</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <section className="container">
        <h3 className="mb-4">
          <strong>{datos.nombre && datos.nombre.toUpperCase()}-{datos.edad} AÑOS</strong>
        </h3>
        <div className="row" >
          <div className="col" >
            <p className="pt-2 h5"><strong>Identificación</strong></p>
            <p className="h5">{datos.documento}</p>
            <p className="pt-2 h5"><strong>Dirección</strong></p>
            <p className="h5">{datos.direccion}</p>
            <p className="pt-2 h5"><strong>Fecha Ultima Medición</strong></p>
            <p className="h5">{datos.fechaUltimaMedicion}</p>
          </div>
          <div className="col" >
            <p className="pt-2 h5"><strong>Teléfono</strong></p>
            <p className="h5">{datos.telefono}</p>
          </div>
         <div className="col-3 px-4" >
            <Image
              src={avatar}
              alt="logo bettiOn"
              className="avatar"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="pt-2 h5"><strong>Obtención de datos:</strong></p>
            <select className="form-select">
              <option selected>Open this select menu</option>
              <option value="1">Ultimo dia</option>
              <option value="2">Ultimos 3 dias</option>
              <option value="3">Ultimos 7 dias</option>
            </select>
          </div>
          <div className="col">
            <p className="pt-2 h5"><strong>Fecha Inicial de Consulta:</strong></p>
            <input
              type="date"
              className="form-control"
            />
          </div>
          <div className="col">
            <p className="pt-2 h5"><strong>Fecha Final de Consulta:</strong></p>
            <input
              type="date"
              className="form-control"
            />
          </div>
          <div className="col">
            <button className="btn bg-primary text-white">
              Buscar
            </button>
          </div>
          <div className="row pt-4">
            <div className="col">
              <LineChart 
                title="Registro Tension Arterial" 
                dataLines={data1}  
                width={50} 
                height={25}
                label={labels}
              />
            </div>
            <div className="col">
              <LineChart 
                title="Ritmo Cardiaco" 
                dataLines={data2}  
                width={50} 
                height={25}
                label={labels}
              />
            </div>
          </div>
        </div>
        </section>
        
      </Layout>
    </>
  );
}
