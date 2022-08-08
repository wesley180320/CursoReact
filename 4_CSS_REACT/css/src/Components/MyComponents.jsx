import "./MyComponents.css"

const MyComponents = () => {
  
  
  const redTitle = true;

  return (
    <>
      <h1> Css do component </h1>
      <p> Este e o meu parágrafo do componente </p>
     
     {/* Classe diâmica */}
     <h2 className={redTitle ? " red-title" : "title" }>

     Este titulo vai ter classe dinâmica

     </h2>

    </>
  );
};

export default MyComponents;
