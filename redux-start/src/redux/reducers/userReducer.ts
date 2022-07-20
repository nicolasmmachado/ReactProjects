import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "user",
    initialState: {
        name: "Nícolas",
        age: 28
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload.name;
        },
        setAge: (state, action) => {
            state.age = action.payload.age;
        }
    }
});

export const { setName, setAge } = slice.actions;
export default slice.reducer;