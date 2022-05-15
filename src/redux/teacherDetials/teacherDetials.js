import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';




const initialState = {
    loading: "idel",
    data: [],
    err: ""
};




const teacherSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        lodingTeacherDetials: (state, action) => {
            if (state.loading === "idel") {
                state.loading = "loading"
            }
        },
        updateTeacherDetials: (state, action) => {

            if (state.loading === "loading") {
                state.loading = "idel"
                state.data = action.data
            }
        },
        errorTeacherDetials: (state, action) => {
            if (state.loading === "loading") {
                state.loading = "idel"
                state.err = "error"
            }
        }
    },
});


export const teacherReducer = teacherSlice.reducer;
export const { lodingTeacherDetials, updateTeacherDetials, errorTeacherDetials } = teacherSlice.actions;


export const getTeacherDetials = async(dispatch) => {
    dispatch(lodingTeacherDetials());
    await axios.get("http://localhost:2000/").then(val => dispatch(updateTeacherDetials(val))).catch(() => dispatch(errorTeacherDetials()))
}