import { createSlice } from '@reduxjs/toolkit'


const animalsSlice = createSlice({
  name: 'animals',
  initialState: {
    pets: [],
 
  },

  reducers: {
    setPets: (state, action) => {
      state.pets = action.payload.map((pet, index) => ({...pet, id: index, isSelected: false}))
      
    },
  }
})

export const { setPets } = animalsSlice.actions

export default animalsSlice.reducer