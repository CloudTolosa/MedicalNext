import React from 'react'
import Layout from '../../components/Layout'

export default function listPatient () {
  /* const exportF = () => {
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
      var imgData = canvas.toDataURL("image/png",0.5);
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
      doc.save("Formulario.pdf");
    });
  }; */
  return (
    <Layout>
      <h1><strong>PERFIL DEL DOCTOR</strong>PERFIL DEL DOCTOR</h1>
    </Layout>
  )
}