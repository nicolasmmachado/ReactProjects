import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../contexts/Context";

export const Login = () => {
    const {state, dispatch} = useContext(Context);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const handleClick = () => {
        dispatch({
            type: "changeAll",
            payload: {
                name: "Drillk",
                age: 18
            }
        })
    }

    const handleWrite = () => {
        dispatch({
            type: "changeAll",
            payload: {
                name: name,
                age: age
            }
        })
    }

    return (
        <div>
            Login <br />
            <input type="text" 
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input type="number" 
                placeholder="Idade"
                value={age === 0 ? "" : age}
                onChange={e => setAge(parseInt(e.target.value))}
            />
            <br />
            <p>{state.theme.status}</p>
            <Link to="/info"> Tela de informação </Link>
            <button onClick={handleClick}>Trocar Nome</button>
            <button onClick={handleWrite}>Trocar Tudo</button>
        </div>
    )
}