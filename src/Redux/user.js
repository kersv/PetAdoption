import { createSlice } from '@reduxjs/toolkit'




const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: null,
    userEmail: null,
 
  },

  reducers: {
    setCurrentUser: (state, action) => {
      console.log(action.payload.userName)
      console.log(action.payload.userEmail)
      state.userName = action.payload.userName
      state.userEmail = action.payload.userEmail
    },
    setUserLogOut: (state) => {
      state.userName = null
      state.userEmail = null
    }
  }
})

export const { setCurrentUser, setUserLogOut } = userSlice.actions

export default userSlice.reducer