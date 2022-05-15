import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';




const initialState = {
    loading: "idel",
    data: [],
    err: ""
};




const fixclassSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        lodingfixclassDetials: (state, action) => {
            if (state.loading === "idel") {
                state.loading = "loading"
            }
        },
        updatefixclassDetials: (state, action) => {

            if (state.loading === "loading") {
                state.loading = "idel"
                state.data = action.data
            }
        },
        errorfixclassDetials: (state, action) => {
            if (state.loading === "loading") {
                state.loading = "idel"
                state.err = "error"
            }
        }
    },
});


export const fixclassReducer = fixclassSlice.reducer;
export const { lodingfixclassDetials, updatefixclassDetials, errorfixclassDetials } = fixclassSlice.actions;


export const getfixclassDetials = async(dispatch) => {
    dispatch(lodingfixclassDetials());
    await axios.get("http://localhost:2000/").then(val => dispatch(updatefixclassDetials(val))).catch(() => dispatch(errorfixclassDetials()))
}