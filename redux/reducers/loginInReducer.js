import { createReducer } from "@reduxjs/toolkit"
import loginAction from "../actions/loginForm"
const initialState = {
    id: "",
    name: "",
    logged: false,
    token: "",
}

const loginInReducer = createReducer(initialState, (login) => {
    login.addCase(loginAction.getToken.fulfilled, function (state, action) {
            return {token: action.payload}
        })
     
        login.addCase(loginAction.logOut.fulfilled, (state, action) => {
            const { success } = action.payload;
            if (success) {
              return { token: "" };
            }
        })
    })
export default loginInReducer


