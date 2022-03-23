/*type Props = {
    src?: string,
    alt: string,
    name: string;
}

export const Photo = ({src, alt, name}: Props) =>{
    return (<>
        <img src={src} alt={alt} />
        <p>{name}</p>
    </>);
}*/

import {ReactNode} from "react";

type Props = {
    children: ReactNode;
}

export const Photo = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
}