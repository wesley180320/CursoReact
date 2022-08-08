import { useState } from "react";

const MyForm = ({user}) => {
  
  const [name, setName] = useState(user ? user.name :"");

  const [email, setEmail] = useState(user ? user.email : "");
  
  const [bios, setBios] = useState();
  
  const [role, setRole] = useState();

  const pegarDadoInput = (e) => {
    setName(e.target.value);
  };


  {
    /* Enviar o formulario  */
  }

  const hadleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setBios("");
    console.log("Enviar formulário");
    console.log(name, email, bios, role);
  };

  return (
    <form onSubmit={hadleSubmit}>
      <div>
        {/* 1 - criacao de form */}
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          onChange={pegarDadoInput}
          value={name}
        />
      </div>

      {/* 2 - label envolvendo input */}
      <label>
        <span>Email:</span>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

     {/* 3 - TextArea */}

     <label htmlFor="bios">

     <span> Bios </span>  
     <textarea name="bios" placeholder="Descrição do usuário"  onChange={ (e) => setBios(e.target.value)}  value={bios}></textarea>
    
    </label>
     
    
     {/* 3 - Select */}

   <label htmlFor="options">

   <span> Options </span>

   <select name="role" onChange={(e) => setRole(e.target.value) } value = {role}>
    <option value="user"> Usuário </option>
    <option value="administrador">Administrador</option>
    <option value="editor"> Editor </option>
   </select>

   </label>

      <input type="submit" value="Enviar" />
    </form>
  );
};

export default MyForm;
