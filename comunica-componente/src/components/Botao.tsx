type Props = {
    text:string;
    exFunction: (txt:string) => void;
}

export const Botao = ({text, exFunction}:Props) => {
    
    const handleClick =() =>{
        exFunction("Valor diferente.");
    }

    return(<button onClick={handleClick}>{text}</button>);
}

