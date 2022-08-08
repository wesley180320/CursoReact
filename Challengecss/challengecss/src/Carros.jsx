import styles from "./Carros.module.css"

const Carros = ({id,marca}) => {
  
  return (
    <>
        <div className={styles.Container}>
          <p> {id}</p>
          <p>{marca}</p>
        </div>
    </>
  );
};

export default Carros;
