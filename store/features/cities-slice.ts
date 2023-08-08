import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    value: object
}

const initialState = {
    value: {
    cities: []
    }
}

export const cities = createSlice({
    name: 'cities',
    initialState: initialState,
    reducers:{

    }
})