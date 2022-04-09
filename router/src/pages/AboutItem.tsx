import { useParams, useNavigate } from "react-router-dom"

export const AboutItem = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    }

    const handleHomeClick = () => {
        let nome = "nicolas";
        navigate("/");
        //navigate(`/sobre/${nome}`);   podemos passar até mesmo coisas dinamicas aqui
    }

    return (
        <div>
            Sobre {params.slug} ({params.slug?.length}).
            <button onClick={handleBackClick}>Voltar</button><br />
            <button onClick={handleHomeClick}>Home</button>
        </div>
    )
}