import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    mapVisibility:false,
    toggleModal:false,
    destination:null,
    guest:{
      Adults:0,
      Children:0,
      Infants:0,
      Pets:0
    },
    totalGuests:0,
    checkinDate:{
      month:null,
      day:null,
      year:null,
    },
    checkOutDate:{
      month:null,
      day:null,
      year:null,},
    navRef:null,
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
    },
    setDestination:(state,action)=>{
      state.destination = action.payload
    },
    setGuest:(state,action)=>{
      state.guest = action.payload
    },
    setTotalGuests:(state,action)=>{
      state.totalGuests = action.payload
    },
    setCheckinDate:(state,action)=>{
      state.checkinDate = action.payload
    },
    setCheckoutDate:(state,action)=>{
      state.checkOutDate = action.payload
    },
    setNavRef:(state,action)=>{
      state.navRef = action.payload
    }
  },
});


// sending the data layer
export const { setMapVisibility,setToggleModal,setDestination, setGuest, setTotalGuests, setCheckinDate, setCheckoutDate, setNavRef } = Slice.actions 
  
// grabbing the data layer: SELECTORS
export const selectMapVisibility = (state) =>state.nav.mapVisibility
export const selectToggleModal = (state) =>state.nav.toggleModal
export const selectDestination = (state) =>state.nav.destination
export const selectGuest = (state) =>state.nav.guest
export const selectTotalGuests = (state) =>state.nav.totalGuests
export const selectCheckinDate = (state) =>state.nav.checkinDate
export const selectCheckoutDate =(state) => state.nav.checkOutDate
export const selectNavRef = (state) => state.nav.navRef
export default Slice.reducer