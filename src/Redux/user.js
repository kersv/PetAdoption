import { createSlice } from '@reduxjs/toolkit'




const userSlice = createSlice({
  name: 'user',
  initialState: {
    userEmail: null,
 
  },

  reducers: {
    setCurrentUser: (state, action) => {

      console.log(action.payload.userEmail)
      state.userEmail = action.payload.userEmail
    },
    setUserLogOut: (state) => {
      state.userEmail = null
    }
  }
})

export const { setCurrentUser, setUserLogOut } = userSlice.actions

export default userSlice.reducer