import "./App.css";
import Imagem from "./assets/download.jpg";
import Teste from "./Components/Teste";
import Array from "./Components/Array";
import ConditionalRender from "./Components/ConditionalRender";
import Props from "./Components/Props";
import Destruct from "./Components/Destruct";
import Children from "./Components/Children";
import ExecuteFunction from "./Components/ExecuteFunction";
import UserDetails from "./Components/UserDetails";

function App() {
  const cars = [
    { id: 1, brand: "ferrari", color: "amarelo", km: 250, newCar: false },
    { id: 2, brand: "alpine", color: "dourado", km: 0, newCar: true },
  ];

  const pessoas = [
    { id: 1, name: "Luana", job: "professor", age: 18 },
    { id: 2, name: "Wesley", job: "Desenvolvedor", age: 22 },
    { id: 3, name: "Joao", job: "Desenvolvedor", age: 15 },
  ];

  function showMenssage() {
    return console.log("Clicou");
  }

  return (
    <div className="App">
      <img src="/img1.jpg" alt="Paisagem"></img>

      <img src={Imagem} alt="segunda imagem"></img>

      <Teste />
      <Array />
      <ConditionalRender />
      <Props name="wesley" />
      <Destruct brand="gol" km={100} color="Vermelho" newCar={false} />
      {/* Reaproveitando */}
      <Destruct brand="up" km={0} color="Vermelho" newCar={true} />
      {/* utilizando array */}
      {cars.map((car) => (
        <Destruct
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* Children */}
      <Children>
        <p> Funcionou </p>
      </Children>
      {/* Execute Function */}

      <ExecuteFunction myFunction={showMenssage} />
      {/* Desafio */}
      {pessoas.map((pessoa) => (
        <UserDetails
          job={pessoa.job}
          age={pessoa.age}
          key={pessoa.id}
          name={pessoa.name}
        />
      ))}
    </div>
  );
}

export default App;
