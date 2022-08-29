import React from "react";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function reports() {

  return (
    <>
    <Head>
        <title>Reportes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <h3 className="mb-4">
          <strong>Informe de Resultados</strong>
        </h3>
    </Layout>
    </>
  );
}