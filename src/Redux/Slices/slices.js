import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    mapVisibility:false
}

export const Slice = createSlice({ 
  name: 'nav',
  initialState,
  reducers: { 
    setMapVisibility: (state, action)=> {
      state.mapVisibility= action.payload;
    },
     
  },
});


// sending the data layer
export const { setMapVisibility } = Slice.actions 
  
// grabbing the data layer: SELECTORS
export const selectMapVisibility = (state) =>state.nav.mapVisibility


export default Slice.reducer