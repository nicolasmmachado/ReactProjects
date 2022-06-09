/*import { createContext } from "react";     //primeiro teste, bem mais simples

interface Props {
    children: React.ReactNode;
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
}*/


import { createContext, useReducer } from "react";
import { UserType, userReducer, initialState } from "../reducers/ContextReducer";
import { ThemeType, themeReducer, themeInitialState } from "../reducers/ThemeReducer";
import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
    user: UserType, 
    theme: ThemeType
}

interface Props {
    children: React.ReactNode;
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>
}

const userInitialState = {
    user: initialState,
    theme: themeInitialState
    
}

export const Context = createContext<ContextType>({
    state: userInitialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
})

export const ContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(mainReducer, userInitialState);

    return (
        <Context.Provider value={{ state, dispatch}}>
            {children}
        </Context.Provider>
    )
}