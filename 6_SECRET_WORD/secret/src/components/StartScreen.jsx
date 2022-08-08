import styles from"./StartScrenn.module.css"

const StartScreen = () => {

    return(

        <div className={styles.start}>

        <h1> Secret word </h1>
        <p> Clique no botão abaixo para jogar</p>
        <button> Começar o jogo </button>

        </div>

    );

} 


export default StartScreen;