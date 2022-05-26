import { useNavigate } from "react-router-dom";

export const ShowData = () => {
    const navigate = useNavigate();

    const backPage = () => {
        navigate("/");
    }

    return(
        <div>
            <button onClick={backPage}>Voltar ao Login</button>
            Informação
        </div>
    )
}