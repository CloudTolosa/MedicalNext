import React from "react";
import { RiSearch2Line, RiCloseFill } from "react-icons/ri";

const estado = [
  {name: 'Normal' ,color: "#00bb2d", value:1},
  {name: 'Elevada' ,color: "#ffff00", value:2},
  {name: 'ALTA NIVEL 1' ,color: "#ffb100", value:3},
  {name: 'ALTA NIVEL 2' ,color: "#ff7c06", value:4},
  {name: 'ALTA NIVEL 3' ,color: "#d53032", value:5},
  {name: 'Sin datos Recientes' ,color: "#00b5d1", value:6},
]


const SearchBar = () => {
  return (
    <div className="w-70 alert p-2 pr-8 row">
      <div className="col-3">
        <input className="form-control" placeholder="...Nombre" />
      </div>
      <div className="col-3">
        <input className="form-control" placeholder="...Numero de documento" />
      </div>
      <div className="col-3">
        <select className="form-select">
          <option disabled>... Estado</option>
          {estado.map((item, index) => (
          <option value={item.value}>
            {item.name}
          </option>))}
        </select>
      </div>
      <div className="col">
        <button className="btn btn-primary">
          <RiSearch2Line />
          Buscar
        </button>
      </div>
      <div className="col">
        <button className="btn btn-outline-primary">
          <RiCloseFill />
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
