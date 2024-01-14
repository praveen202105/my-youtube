import { createSlice } from "@reduxjs/toolkit";

const searchSlice =createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResults: (state,action) =>{
        
            let res=action.payload
            state=Object.assign(state,res)
             
        },
        
    },
    
});



export const {cacheResults}=searchSlice.actions;

export default searchSlice.reducer;