import React,{useEffect, useState} from 'react'
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Table } from "reactstrap";
import { RiPulseFill, RiKeyFill } from "react-icons/ri";
import AxiosApi from "../../services/Axios";
import { pacientes } from './dataPacientes';
import SearchBar from '../../components/SearchBar';

export default function Home() {
  const COLOR_CHIP = {
    Normal: "#00bb2d",
    Elevada: "#ffff00",
    "ALTA NIVEL 1": "#ffb100",
    "ALTA NIVEL 2": "#ff7c06",
    "ALTA NIVEL 3": "#d53032",
    "Sin datos Recientes": "#00b5d1",
  };
  const COLOR_CHIP_DEFAULT = "#d0d9d3";

  useEffect(() => {
    const getDataPatients = () => {
      AxiosApi.get(`api/users/professionals/patients?page=1&limit=9`).then((response) => {
        let datosApi = response.data;
        console.log("esto es data",datosApi)
        setDatosPacientes(datosApi);
      });
    };
    getDataPatients();
  }, []);

  const [datosPacientes, setDatosPacientes] = useState([])

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <h3 className="mb-4">
          <strong>Lista de Pacientes</strong>
        </h3>
        <SearchBar/>
        <Table className="table table-sm table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                <small>Identificacion</small>
              </th>
              <th scope="col" className="text-center">
                <small>Direccion</small>
              </th>
              <th scope="col" className="text-center">
                <small>Nombres</small>
              </th>
              <th scope="col" className="text-center">
                <small>Edad</small>
              </th>
              <th scope="col" className="text-center">
                <small>
                  Fecha Ultima <br />
                  Medicion
                </small>
              </th>
              <th scope="col" className="text-center">
                <small>Estado</small>
              </th>
              <th scope="col" className="text-center">
                <small>
                  <RiPulseFill className="bigIcons colorBettiOn" />
                </small>
              </th>
              <th scope="col" className="text-center">
                <small>Opciones</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((user, index) => (
              <tr key={index}>
                <td className="justify-content-center align-items-center text-center">
                  <small>{user.identificacion}</small>
                </td>
                <td className="justify-content-center align-items-center text-center">
                  <small>{user.Nombres && user.Nombres.toUpperCase()}</small>
                </td>
                <td className="justify-content-center align-items-center text-center">
                  <small>
                    {user.Direccion && user.Direccion.toUpperCase()}
                  </small>
                </td>
                <td className="justify-content-center align-items-center text-center">
                  <small>{user.Edad}</small>
                </td>
                <td className="justify-content-center align-items-center text-center">
                  <small>{user.ultimaMedicion}</small>
                </td>
                <td className="justify-content-center align-items-center text-center">
                  {/* <div  className="rounded m-2 p-1" style={{ backgroundColor: COLOR_CHIP[user.Estado] || COLOR_CHIP_DEFAULT }}>
                  {user.Estado ?
                  
                  <label>
                    <strong>{' '+user.Estado+' '}<span class="badge bg-secondary">New</span><RiPulseFill/></strong>
                  </label>
                  : <label className="fw-bold border">Sin actualizacion</label>
                  }
                </div> */}
                  {user.Estado ? (
                    <label>
                      <strong>{" " + user.Estado + " "}</strong>
                    </label>
                  ) : (
                    <label className="fw-bold ">Sin actualizacion</label>
                  )}
                </td>
                <td className="justify-content-center align-items-center text-center">
                  <small>
                    <span
                      className="badge rounded-pill"
                      style={{
                        backgroundColor:
                          COLOR_CHIP[user.Estado] || COLOR_CHIP_DEFAULT,
                      }}
                    >
                      <RiPulseFill />
                    </span>
                  </small>
                </td>
                <td className="justify-content-center align-items-center text-center">
                  <small >
                    {user.opciones === "editar" ? (
                      <Link href={`/patient/[id]`} as={`/patient/${user.identificacion}`}>
                        Ver paciente
                      </Link>
                    ) : (
                      <RiKeyFill className="bigIcons colorBettiOn" />
                    )}
                  </small>
                </td>

                {/* <td className="d-flex justify-content-between p-3">
                <BtnEditar name={user.IdProveedor}/>
                <BtnVer name={user.IdProveedor} />
                {user.IdCategoriaProveedor > 3 && <BtnAnadirArchivos name={user.IdProveedor}/>}
              </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Layout>
    </>
  );
}
