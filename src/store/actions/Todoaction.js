import axios from "axios"
import {setHeader} from "../../api/Index"
import { toast} from "react-toastify"
import url from'../../api/Index'


export const getTodos=()=>{
    return(dispatch) => {
        axios.get(`${url}/routes`,setHeader())
        .then(todos=>{
            dispatch({
                type:"Get_Todo",
                todos
            })
        })
        .catch(error =>{
            console.log(error.response)
        })
    }

}
export const updateTodo=(updateTodo,id)=>{
    return(dispatch) => {
        axios.put(`${url}/routes/${id}`,updateTodo,setHeader())
        .then(todos=>{
            dispatch({
                type:"Update_Todo",
                todos
            })
        })
        .catch(error =>{
            console.log(error.response)
            toast.error(error.response?.data,{
                position:toast.POSITION.BOTTOM_RIGHT})
        })
    }

}

export const addTodo=(newTodo) =>{
    return(dispatch,getState) => {
        const author=getState().auth.name
        const uid=getState().auth._id
        axios.post(`${url}/routes`,{...newTodo,author,uid},setHeader())
        .then(todo =>{
            dispatch({
                type:"Add_Todo",
                todo
            })
        })
        .catch(error =>{
            toast.error(error.response?.data,{
                position:toast.POSITION.BOTTOM_RIGHT})
        })
    }
}
export const checkTodo=(id)=>{
    return(dispatch) => {
        axios.patch(`${url}/routes/${id}`,{},setHeader())
        .then(todos=>{
            console.log(todos)
            dispatch({
                type:"check_Todo",
                todos
            })
        })
        .catch(error =>{
            console.log(error.response)
            toast.error(error.response?.data,{
                position:toast.POSITION.BOTTOM_RIGHT})
        })
    }

}

export const deleteTodo=(id)=>{
    return(dispatch) => {
        axios.delete(`${url}/routes/${id}`,setHeader(),{})
        .then(()=>{
            dispatch({
                type:"delete_Todo",
                id
            })
        })
        .catch(error =>{
            console.log(error.response)
            toast.error(error.response?.data,{
                position:toast.POSITION.BOTTOM_RIGHT})
        })
    }

}