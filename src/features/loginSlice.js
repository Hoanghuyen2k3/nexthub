import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: false,
  user: {}
};



export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLogin: (state, action)=>{
        return {login: true, user: action}
    },
    userLogout: (state)=>{
        return {login: false, user: {}}
    }
    
  },
  
  
});

export const {userLogin, userLogout  } = loginSlice.actions;


export const selectLogin = (state) => state.login;



export default loginSlice.reducer;
