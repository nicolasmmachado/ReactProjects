/*import "./styles.css";

export const Botao = () =>{
    return(
        <button className="botao"> Usando botao importado</button>
    );
}*/

//maneira module de importação e funcionamento

import styles from "./styles.module.css";

export const Botao = () => {
    return(
        <button className={styles.botao}></button>
    );
}