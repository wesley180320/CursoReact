import React from "react";

const TemplateExprepressions = () => {
 
    const name = "wesley";
 
  const funcinonario = {
    name: "joao",
    job: "programador",
  };

  return (
    <div>
      <h1> Meu nome é {name}</h1>
      <p>
        Funcionario {funcinonario.name}, {funcinonario.job}
      </p>
    </div>
  );
};

export default TemplateExprepressions;