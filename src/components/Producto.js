import React, { useState } from "react";

const Producto = ({carrito, agregarProducto, producto, productos }) => {

  const { id, nombre, precio, stock } = producto;

  // onclick -> Agregar producto al carrito
  const agregarAlCarrito = producto => {
    agregarProducto([
      ...carrito,
      producto
    ]);
  };

  // Eliminar producto del carrito
  const eliminarProducto = id => {
    const productos = carrito.filter(producto => producto.id !== id)

    // colorar los productos en el state
    agregarProducto(productos)
  }

  // State para agregar o quitar productos
  const [ cantidad , setCantidad ] = useState(1);
  const agregarCantidad = () => {
    setCantidad(prevCantidad => prevCantidad + 1)
  }
  const eliminarCantidad = () => {
    setCantidad(prevCantidad => prevCantidad - 1)
  }

  const elementProducto = (
    <div>
      <h2>{nombre}</h2>
      <p>{stock ? `Producto disponible ✅` : `Producto sin stock ❌`}</p>
      <h1>&#36;{precio}</h1>
      <button
        disabled={stock ? false : true}
        type="button"
        onClick={() => {
          let exist;

          carrito.forEach(element => {
            if (element.id === id) exist = true
          })

          if (!exist) agregarAlCarrito(producto)

        }}
      >Agrega al 🛒</button>
    </div>
  )

  const elementCarrito = (
    <div>
      <h2 id={id}>{nombre}</h2>
      <h1>&#36;{precio}</h1>
      <p>Cantidad: {cantidad}</p>
      <button
        onClick={()=> agregarCantidad(1)}
      >+</button>
      <button
        onClick={()=> cantidad ? eliminarCantidad(1) : null }
      >-</button>
      <button
        type="button"
        onClick={() => eliminarProducto(id)}
      >Eliminar producto</button>
    </div>
  )

  return  productos ? elementProducto : elementCarrito
};

export default Producto;
