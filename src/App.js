import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {

  // Crear listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50, cantidad: 1 ,stock: false },
    { id: 2, nombre: "Camisa NodeJS", precio: 40, cantidad: 1 ,stock: true },
    { id: 3, nombre: "Camisa VueJS", precio: 30, cantidad: 1 ,stock: true },
    { id: 4, nombre: "Camisa Angular", precio: 20, cantidad: 1 ,stock: false },
  ]);

  // State para un carrito de compras
  const [carrito, agregarProducto] = useState([])

  /* ---- Footer -----*/
  // obtener feche
  const fecha = new Date().getFullYear();

  /* ---- Header -----*/
  const owner = "Jorge";

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" owner={owner} />

      <h1>Lista de productos</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
