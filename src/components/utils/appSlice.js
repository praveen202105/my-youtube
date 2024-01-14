import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        value:"popular"
    },
    reducers:{
        toggleMenu:(state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;
        },
        openMenu:(state)=>{
            state.isMenuOpen=true;
        },
        value:(state,action)=>{
            // console.log(action.payload);
            state.value = action.payload;
        },
        

    },

});

export const {toggleMenu ,closeMenu,openMenu,value} = appSlice.actions;
export default appSlice.reducer;