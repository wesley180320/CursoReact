const Events = () => {


    const apertarBotao = () => {

        console.log("apertou o botao")

    }


    const imprimirTela = (x) =>{

        if(x == true){

            return <h1> deu certo</h1>

        }else{

            return <h1> Não deu certo </h1>
        
        }

    }

    return(

        <div>
            <div>
                <button onClick={apertarBotao} > Clique aqui </button>
                <button onClick={() => console.log("clicou2")}> CLique aqui também</button>
            </div>
          {imprimirTela(true)}
        </div>
       
    )

}

export default Events;