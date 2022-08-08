

const UserDetails = ({name,job,age}) => {


  return (
    <>
      <h1> Habilitação </h1>
     
     <h2>{name}</h2>
     <p>{age}</p>
     <p>{job}</p>

      {age >= 18 ? (
        <p> Pode tirar habilitação name: {name} - idade: {age}</p>
      ) : (
        <p>Não pode tirar habilitação {name} - idade: { age }</p>
      )}
    </>
  );
};

export default UserDetails;
