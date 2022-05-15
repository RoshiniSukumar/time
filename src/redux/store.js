import { configureStore } from "@reduxjs/toolkit";
import { teacherReducer } from "./teacherDetials/teacherDetials"
import { classReducer } from "./classDetails/classDetails"
import { fixclassReducer } from "./fixClassDetails/fixclassDetails"

export const store = configureStore({ reducer: { teacherReducer } });