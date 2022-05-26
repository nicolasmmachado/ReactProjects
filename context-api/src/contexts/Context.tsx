import React, { createContext } from "react";

interface Props {
    children: React.ReactNode
}

type ContextType = {
    name: string;
    age: number;
}

const initialState = {
    name: "Nícolas",
    age: 28
}

export const Context = createContext<ContextType>(initialState);

export const ContextProvider = ({ children }: Props) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    );
}