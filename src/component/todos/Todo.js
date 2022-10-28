import React from 'react'
import { Typography,Button,ButtonGroup } from '@material-ui/core';
import { Create , Delete, CheckCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { checkTodo } from '../../store/actions/Todoaction';
import { deleteTodo } from '../../store/actions/Todoaction';
const usestyles=makeStyles({
  todostyles:{
    margin:"20px auto",
    padding:"20px",
    border:"2px solid #bdbdbd",
    borderRadius:"3px",
    
    justifyContent:"sapce-between"
  },
  style:{
    color:"#8f8f8f"
  },
  space:{
    marginLeft:"250px"
  },
  iscomplete:{
    color:"green",

  },
  check:{
    textDecoration:"line-through"
  }
})
export default function Todo({todo,setTodo}) {
  const classes=usestyles();
  const dispatch=useDispatch();
 const handleCheck=(id)=>{
  dispatch(checkTodo(id))

 }
 const handleDeleteClick=(id)=>{
  dispatch(deleteTodo(id))

 }
  const handleUpdateClick=()=>{
    setTodo(todo)
    window.scrollTo({
      top:0,
      left:0,
      behavior:"smooth"
    })
  } 
  return (
    <div  className={classes.todostyles}>
      <div>
        { todo.isComplete?
        <Typography variant="subtitle1" className={classes.check}>
         <h3> {todo.name}</h3>
          </Typography>
          :(<Typography variant="subtitle1" >
         <h3> {todo.name}</h3>
           </Typography>)}
        <Typography variant="body2" className={classes.style}>
        Added:{moment(todo.date).fromNow()}
        </Typography>
        <Typography variant="body2" className={classes.style}>
        Author:{todo.author}

</Typography>
      </div>
      <div>
          <ButtonGroup size="small" aria-label="outlined primary button group" className={classes.space}>
          <Button onClick={()=> handleCheck(todo._id)}>
          {  
          todo.isComplete? (
          <CheckCircle color="action" className={classes.iscomplete}/>):   
                (<CheckCircle color="action" />
                )} </Button>
            
            <Button onClick={()=> handleUpdateClick()}>
              <Create color="primary"/>
            </Button>
            <Button onClick={()=> handleDeleteClick(todo._id)}>
              <Delete color="secondary"/>
            </Button>
          </ButtonGroup>
        </div>
    </div>
  )
}
