import React from "react";
import "./Footer.css";

const Footer = () => {
  const data = [
    "| Neoland School |",
    "Rick and Morty",
    "| Sergio Fuentes |",
    "CopyRight",
    "| Derechos de Autor |",
  ];

  return (
    <div className="footer">
      <ul className="footer--list">
        {data.map((value) => {
          return (
            <li>
              <p> {value} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
