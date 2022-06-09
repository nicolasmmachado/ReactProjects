import { reducerActionType } from "../types/reducerActionType";

export type UserType = {
    name: string;
    age: number;
}

export const initialState: UserType = {
    name: "Nícolas",
    age: 28
}

export const userReducer = (state: UserType, action:reducerActionType ) => {
    switch (action.type) {
        case "changeName" :
            return {...state, name: action.payload.name};
        break;
        case "changeAge" :
            return {...state, name: action.payload.age};
        break;
        case "changeAll" :
            return {...state, name: action.payload.name, age: action.payload.age};
        break;
    }
    return state;
}