import { Link, useSearchParams } from "react-router-dom";

export const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const setOrder = (order: "asc" | "desc") => {
        searchParams.set("order", order);
        setSearchParams(searchParams);
    }

    return (
        <div>
            Sobre nosso site
            <ul>
                Filtro: {searchParams.get("filter")} <br />
                Ordem: {searchParams.get("order")}
                <hr />
                <button onClick={() => setOrder("asc")}>Ascendente</button> <br />
                <button onClick={() => setOrder("desc")}>Descendente</button>
                <hr />
                <li><Link to="/about/bonieky">Bonieky</Link></li>
                <li><Link to="/about/pedro">Pedro</Link></li>
            </ul>
        </div>
    )
}