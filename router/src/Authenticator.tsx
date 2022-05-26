import { Navigate } from "react-router-dom";

type Props = {
    children: JSX.Element;
}

export const Authenticator = ({ children }: Props) => {
    const login = true;

    if (login) {
        return children;
    } else {
        return <Navigate to={"/login"}/>;
    }
}