import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/Context";

export const ShowData = () => {
    const navigate = useNavigate();

    const backPage = () => {
        navigate("/");
    }

    const { state, dispatch } = useContext(Context);

    return(
        <div>
            <button onClick={backPage}>Voltar ao Login</button>
            Informação de {state.user.name}.
            Essa pessoa tem {state.user.age} anos.
        </div>
    )
}