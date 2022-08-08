import { useState } from "react"

   const Array = () => {

    const [nomes] = useState(["wesley", "joao"])

    const [pessoas] = useState({id:1,name: "wesley", age: 18})
    return (

      <div>
        {nomes.map( (item, i)  => (<h1 key={i}>{item}</h1>) )}     
        <h1 key={pessoas.id}>{pessoas.name} - {pessoas.age} </h1>
      </div>

    )

   }

export default Array;












// import { useState } from "react";

// const Array = () => {
//   const [nomes] = useState(["wesley", "joão"]);

//   const [names, setNames] = useState([
//     { id: 1, name: "wesley", age: 31 },
//     { id: 2, name: "joao", age: 31 },
//   ]);

//   const deletarUsuario = () => {
//     setNames((prevUsers) => {
//       const randoNumber = Math.floor(Math.random() * 4);

//       return prevUsers.filter((name) => randoNumber !== name.id);
//     });
//   };
//   return (
//     <div>
//       <ul>
//         {nomes.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>

//       <ul>
//         {names.map((names) => (
//           <li key={names.id}>
//             {names.name} - {names.age}
//           </li>
//         ))}
//       </ul>
//       <button onClick={deletarUsuario}> Deletar usuário </button>
//     </div>
//   );
// };

// export default Array;
