import { LOGIN_ERROR,LOGIN_LOADING,LOGIN_SUCCESS } from "./action";

const initState = {
    loading: false,
    isAuthenticated: false,
    token: "",
    error: false
}

const loginReducer = (state = initState,{type,payload})=>{
    switch(type){
        case LOGIN_LOADING:
            return {...state,loading:true};
        case LOGIN_SUCCESS:
            return {...state,loading:false,isAuthenticated:true,token:payload,error:false};
        case LOGIN_ERROR:
            return {...state,loading:false,isAuthenticated:false,token:"",error:true};
        default:
            return state;
    }
}

export {loginReducer};