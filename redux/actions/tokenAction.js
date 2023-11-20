import { createAsyncThunk} from "@reduxjs/toolkit";

const getTokenKey = createAsyncThunk('getTokenKey', async(tokenx)=>{
    return(tokenx)
})
const tokenAction ={
    getTokenKey
}

export default tokenAction;