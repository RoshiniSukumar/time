import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';




const initialState = {
    loading: "idel",
    data: [],
    err: ""
};




const classSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        lodingclassDetials: (state, action) => {
            if (state.loading === "idel") {
                state.loading = "loading"
            }
        },
        updateclassDetials: (state, action) => {

            if (state.loading === "loading") {
                state.loading = "idel"
                state.data = action.data
            }
        },
        errorclassDetials: (state, action) => {
            if (state.loading === "loading") {
                state.loading = "idel"
                state.err = "error"
            }
        }
    },
});


export const classReducer = classSlice.reducer;
export const { lodingclassDetials, updateclassDetials, errorclassDetials } = classSlice.actions;


export const getclassDetials = async(dispatch) => {
    dispatch(lodingclassDetials());
    await axios.get("http://localhost:2000/").then(val => dispatch(updateclassDetials(val))).catch(() => dispatch(errorclassDetials()))
}