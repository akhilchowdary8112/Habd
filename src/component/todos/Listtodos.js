import React from 'react';
import { Typography }  from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import {getTodos} from"../../store/actions/Todoaction";

import Todo from './Todo';
 const useStyle=makeStyles({
  todostyle:{
    margin:"20px auto",
    padding:"20px",
    borderRadius:"9px",
    boxShadow:"0px 0px 12px -3px #000000"
  }
 })
export default function Listtodos({setTodo}) {
  const classes=useStyle()
  const todos=useSelector((state)=>state.todos)
  const dispatch=useDispatch();
  useEffect(()=>{
    console.log("Use Effect");
    console.log(todos);
  })
  useEffect(()=>{
    console.log(getTodos());
    dispatch(getTodos())
  },[])
  return (
    <div className={classes.todostyle}>
      <Typography  variant="h5">
{    todos.length>0?"These are your works need to check":"Add your tasks don't be lazy:"}
      </Typography>
      {todos && todos.map((todo)=>{
        return(
          <Todo
          todo={todo}
          key={todo._id}
          setTodo={setTodo}/>
        )
      })}
    </div>
  )
}
