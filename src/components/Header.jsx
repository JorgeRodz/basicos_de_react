import React from "react";
import "./Header.css";

const Header = ({ titulo }) => {
  const edad = 15;
  let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

  return (
    <header>
      <h1>{titulo}</h1>
      <h2 className="header-1">
        Desde el Header. Edad: {edad}. Mensaje: {mensaje}
      </h2>
    </header>
  );
};

export default Header;
