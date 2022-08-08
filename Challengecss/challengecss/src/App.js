import { useState } from "react";
import "./App.css";
import Carros from "./Carros";

function App() {


  const [carro,] = useState([
    { id: 1, marca: "Ferrari" },
    { id: 2, marca: "Chevrolet" },
    { id: 3, marca: "Alpine" },
  ]);

  return (
    <div className="App">
      {carro.map((car) => (
        <Carros key={car.id} id={car.id} marca={car.marca} />
      ))}
    </div>
  );
}

export default App;
