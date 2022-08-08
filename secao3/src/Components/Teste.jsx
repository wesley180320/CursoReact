import { useState } from "react";


const Teste = () =>{

    const [name,setName] = useState("wesley");

    return (

        <div>
            <h1>{name}</h1>
            <button onClick={() =>setName("Joao")}> Mudar nome </button>
        </div>

    )

}

export default  Teste;