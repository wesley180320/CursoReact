
const Destruct = ({brand, km , color, newCar}) =>{

    return(

        <div>
            <h2> Detalhes do carro </h2>
            <ul>
                <li> Marca: {brand}</li>
                <li> Km: {km}</li>
                <li> Color: {color}</li>
             {newCar == true ? <li> Novo </li> : <li>Antigo</li>}

            </ul>
        </div>
    )

}

export default Destruct;
