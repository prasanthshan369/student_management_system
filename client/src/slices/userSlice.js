import {createSlice} from '@reduxjs/toolkit'
import axios from '../axios';
const initialState={
    user:null
}
export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
        logout:(state,action)=>{
            state.user=null;
        }
    }
})

export const {setUser,logout}=userSlice.actions
export const getUser=(state)=>state.userInfo.user;
export default userSlice.reducer;

export const handleLogins=(token)=>{
    console.log('runnign');
    return async(dispatch)=>{
        const {data}=await axios.get('/user/getdata',{
            headers:{
                Authorization:token,
            }
        })
    dispatch(setUser(data))

    }
}