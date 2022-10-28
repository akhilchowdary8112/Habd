import React from 'react'
import { useDispatch } from 'react-redux'
import { TextField,Button } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { addTodo,updateTodo } from '../../store/actions/Todoaction'

const usestyles=makeStyles({
   fontStyle:{
    margin:"0px auto",
    padding:"30px",
    borderRadius:"9px",
    boxShadow:"0px 0px 12px -3px #000000",
    display:"flex",
    justifyContent:"space-between"
    },
    submitButton:{
        marginLeft:"20px"
    }
})

export default function Addtodos({todo,setTodo}){
    const dispatch=useDispatch()
    const classes=usestyles()
    
    const handleSubmit= e =>{
      e.preventDefault()
      
      if(todo._id){
        const id=todo._id
        const updatedTodo={
          name:todo.name,
          isComplete:todo.isComplete,
          date:todo.date,
          author:todo.author,
          uid:todo.uid

        }
        dispatch(updateTodo(updatedTodo, id))

      }
      else{
        console.log("adding")
          const newTodo ={
            ...todo,
            date: new Date(),
          }
      dispatch(addTodo(newTodo))
        }
    
      setTodo({
        name:"",
        isComplete:false
      })
    }
  return (
    <div>
      <form className={classes.fontStyle} noValidate a utoComplete="off" onSubmit={handleSubmit} >
        <TextField
        id="enter-todo"
        label="enterTodo"
        autoFocus
        variant='outlined'
        fullWidth
        value={todo.name}
        onChange={(e)=>setTodo({ ...todo,name:e.target.value})}/>
        <Button className={classes.submitButton} color="primary" variant="contained" type="Submit">
            <Send/>
        </Button>
      </form>
    </div>
  )
}
