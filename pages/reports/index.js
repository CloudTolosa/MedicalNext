import React, { useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import { Table } from "reactstrap";
import Layout from "../../components/Layout";
import Excel from "../../assets/icons/Excel.ico";
import Pdf from "../../assets/icons/Pdf.ico";
import { RiSearchLine, RiRefreshLine } from "react-icons/ri";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const pacientes = [
  {
    identificacion: 1031163150,
    Direccion: " cll 53 46 75",
    Nombres: "Maria Huertas",
    Telefono: 3213455678,
  },
  {
    identificacion: 2031163150,
    Direccion: " cll 53 46 75",
    Nombres: "Maria Huertas",
    ultimaMedicion: "30/07/2022",
    Telefono: 3213455678,
  },
  {
    identificacion: 3031163150,
    Direccion: " cll 53 46 75",
    Nombres: "Maria Huertas",
    ultimaMedicion: "30/07/2022",
    Telefono: 3213455678,
  },
  {
    identificacion: 4031163150,
    Direccion: " cll 53 46 75",
    Nombres: "Maria Huertas",
    ultimaMedicion: "30/07/2022",
    Telefono: 3213455678,
  },
  {
    identificacion: 5031163150,
    Direccion: " cll 53 46 75",
    Nombres: "Maria Huertas",
    ultimaMedicion: "30/07/2022",
    Telefono: 3213455678,
  },
  {
    identificacion: 6031163150,
    Direccion: " cll 53 46 75",
    Nombres: "Maria Huertas",
    ultimaMedicion: "30/07/2022",
    Telefono: 3213455678,
  },
  {
    identificacion: 7031163150,
    Direccion: " cll 53 46 75",
    Nombres: "Maria Huertas",
    ultimaMedicion: "30/07/2022",
    Telefono: 3213455678,
  },
  {
    identificacion: 8031163150,
    Direccion: " cll 53 46 75",
    Nombres: "Maria Huertas",
    ultimaMedicion: "30/07/2022",
    Telefono: 3213455678,
  },
  {
    identificacion: 9031163150,
    Direccion: " cll 53 46 75",
    Nombres: "Maria Huertas",
    ultimaMedicion: "30/07/2022",
    Telefono: 3213455678,
  },
];

export default function reports() {
  let today = new Date().toISOString().slice(0, 10);

  const tableRef = useRef(null);

  const exportF = () => {
    var tableExport = document.getElementById("tableReports");
    var html = tableExport.outerHTML;
    var url = "data:application/ms-excel," + escape(html); // Set your html table into url

    var link = window.document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Reportes${today}.xls`);
    // Choose the file namereturn false;
    document.body.appendChild(link);
    link.click();
  };

  const printDocument = () => {
    html2canvas(tableRef.current).then((canvas) => {
      var imgData = canvas.toDataURL("image/png", 0.5);
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF("p", "mm");
      var position = 0;

      doc.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save("reporte.pdf");
    });
  };

  return (
    <>
      <Head>
        <title>Reportes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <section className="container">
          <h3 className="mb-4">
            <strong>Informe de Resultados</strong>
          </h3>
          <div className="row">
            <div className="col">
              <div className="p-1 d-flex justify-content-start">
                <button
                  onClick={printDocument}
                  className="btn btn-outline-danger  m-2 "
                  disabled={pacientes.length < 0}
                >
                  <Image
                    src={Pdf}
                    className="App-icon"
                    alt="icon pdf"
                    width={30}
                    height={30}
                    objectFit="contain"
                  />
                  <strong>Exportar</strong>
                </button>
                <button
                  className="btn btn-outline-success m-2 "
                  onClick={exportF}
                  disabled={pacientes.length < 0}
                >
                  <Image
                    src={Excel}
                    className="App-icon"
                    alt="icon excel"
                    width={30}
                    height={30}
                    objectFit="contain"
                  />
                  <strong>Exportar</strong>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="p-1 d-flex justify-content-end">
                <button
                  onClick={() => window.location.reload(false)}
                  className="btn btn-outline-secondary m-2 "
                >
                  <RiRefreshLine/> Limpiar
                </button>
                <button
                  className="btn btn btn-primary text-white m-2"
                  //onClick={handleSubmit(GetSearch)}
                >
                 <RiSearchLine/> Buscar
                </button>
              </div>
            </div>
          </div>
          <div>
          <table
            id="tableReports"
            ref={tableRef}
            className="table table-sm table-bordered table-striped table-hover"
          >
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  <small>#</small>
                </th>
                <th scope="col" className="text-center">
                  <small>Identificacion</small>
                </th>
                <th scope="col" className="text-center">
                  <small>Nombres</small>
                </th>
                <th scope="col" className="text-center">
                  <small>Dirección</small>
                </th>
                <th scope="col" className="text-center">
                  <small>Teléfono</small>
                </th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((user, index) => (
                <tr key={index}>
                  <td className="text-center">
                    <small>
                      <strong>{index}</strong>
                    </small>
                  </td>
                  <td>
                    <small>{user.identificacion}</small>
                  </td>
                  <td>
                    <small>{user.Nombres && user.Nombres.toUpperCase()}</small>
                  </td>
                  <td>
                    <small>
                      {user.Direccion && user.Direccion.toUpperCase()}
                    </small>
                  </td>
                  <td>
                    <small>{user.Telefono}</small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </section>
      </Layout>
    </>
  );
}
