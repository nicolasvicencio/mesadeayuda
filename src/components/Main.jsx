import React, { useState, useEffect } from "react";
import Button from "./Button";
import MainItem from "./MainItem";
import MainItemArea from "./MainItemArea";

export default function Main() {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/solicitud/61", {
        method: 'GET',
        mode: 'no-cors'
      });
      const json = await res.json();
      console.log(json);

    } catch (error) {
      console.log({ message: error.message });
      return { message: error.message };
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-40 py-20 m-auto">
      <div className="flex justify-end ">
        <h2 className="border ">Ticket N- 24202</h2>
      </div>
      <MainItem type={"Tipo de solicitud"} value={"Correo electronico"} />
      <MainItem type={"Categoria"} value={"Problema"} />
      <div className="flex">
        <MainItem type={"Detalle"} value={"Sin acceso al correo electronico"} />
        <MainItem type={"Fecha"} value={"24/35/34"} />
      </div>
      <MainItemArea type="Descripcion" btn={"Soluciones"} disabled='true'/>
      <MainItemArea type="Comentarios" btn={"Descargar"} />
      <div className="flex justify-between mt-8">
        <Button title={"Volver"} color="red" />
        <Button title={"Actualizar"} color="red" />
        <Button title={"Cerrar"} color="red" />
      </div>
    </div>
  );
}
