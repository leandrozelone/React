import React from "react";

function Welcome({ gender, name }) {
  switch (gender) {
    case "male":
      return <h1>Bem-Vindo, {name}</h1>;
    case "fame":
      return <h1>Bem-Vinda, {name}</h1>;
    default:
      break;
  }
}

export default Welcome;
