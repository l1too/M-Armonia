import tokenAction  from '../actions/tokenAction'
import {createReducer} from '@reduxjs/toolkit'

const initialState = {
  tokenKey: ''
}
const tokenReducer = createReducer(initialState, (login) => {
login.addCase(tokenAction.getTokenKey.fulfilled, (state, action) => {
    const token = action.payload;
      return { tokenKey: token };
})})
export default tokenReducer