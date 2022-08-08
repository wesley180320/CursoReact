const { useState } = require("react")



const ConditionalRender = () => {


  const [x, setX] = useState(false);

  const [name, setName] = useState("wesley")

  return(

    <div>

    {x && <p>Olá mundo</p>}

    <button onClick={() => setX(true)}> Clique aqui 1 </button>
 
     {/* Operador ternário  */}
     {name == "wesley" ? <p> olá {name}</p> : <p> não é o wesley</p>}
    </div>
  )

}

export default ConditionalRender;






// import { useState } from "react";

// const ConditionalRender = () => {
//   const [x, setX] = useState(false);

//   const [name] = useState("joao");

//   return (
//     <div>
//       <h1>Isso rerá exibido</h1>

//       {x && <p> se x for igual a true será exibido </p>}

//       <button onClick={() => setX(true)}> Clique aqui </button>

//       <h1> If ternario </h1>
//       {name == "joao" ? <p> Nome e joao</p> : <p> O nome não e igual a joao</p>}
//     </div>
//   );
// };

// export default ConditionalRender;
