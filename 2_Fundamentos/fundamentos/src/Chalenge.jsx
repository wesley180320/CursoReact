

const Chalenge = () =>{

    let a = 2;
    let b = 4;

    return(

        <div>
        <h1>{a}</h1>
        <h2>{b}</h2>
        <button onClick={() => console.log(a+b)}></button>
        </div>
        
    ) 

}

export default Chalenge;