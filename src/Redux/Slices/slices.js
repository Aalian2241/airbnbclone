import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    mapVisibility:false,
    toggleModal:false 
}

export const Slice = createSlice({ 
  name: 'nav',
  initialState,
  reducers: { 
    setMapVisibility: (state, action)=> {
      state.mapVisibility= action.payload;
    },
    setToggleModal:(state,action)=>{
      state.toggleModal = action.payload;
    }
     
  },
});


// sending the data layer
export const { setMapVisibility,setToggleModal } = Slice.actions 
  
// grabbing the data layer: SELECTORS
export const selectMapVisibility = (state) =>state.nav.mapVisibility
export const selectToggleModal = (state) =>state.nav.toggleModal


export default Slice.reducer