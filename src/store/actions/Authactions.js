import axios from "axios"
import url from "../../api/Index"
import { toast} from "react-toastify"

export const signUp=(user)=> {
    return(dispatch) => {
        axios.post(`${url}/signup`,user)
        .then(token=>{
            localStorage.setItem("token",token.data)
            dispatch({
                type:"signUp_Todo",
                token: token.data
            })
        })
        .catch((error) =>{
            console.log(error.response)
            toast.error(error.response?.data,{
                position:toast.POSITION.BOTTOM_LEFT
            })
        })
    }

}
export const loaduser=()=>{
    return(dispatch,getState)=>{
        const token=getState().auth.token
        if(token){
            dispatch({
                type:"user_load",
                token
            })
        }
        else{
            return null
        }
    }

    
}
export const signIn=(cred)=> {
    return(dispatch) => {
        axios.post(`${url}/signin`,cred)
        .then(token=>{
            localStorage.setItem("token",token.data)
            dispatch({
                type:"signIn_Todo",
                token: token.data
            })
        })
        .catch((error) =>{
            console.log(error.response)
            toast.error(error.response?.data,{
                position:toast.POSITION.BOTTOM_LEFT
            })
        })
    }

}
export const signOut=()=>{
    return(dispatch)=>{
        dispatch({
                type:"sign_Out"
        })

    }
}
