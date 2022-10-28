import React from 'react'
import { Typography,TextField ,Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { signUp } from '../../store/actions/Authactions';
 import {Navigate} from 'react-router-dom'
const usestyles=makeStyles({
  styles:{
    margin:"0px auto",
    padding:"30px",
    borderRadius:"9px",
    boxShadow:"0px 0px 12px -3px #000000"
  },
  space:{
    marginTop:"20px"
  }
})
export default function Signup() {
  const classes=usestyles()
  const dispatch=useDispatch()
  const auth=useSelector(state=>state.auth)
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:""

  })
  const Handlersubmit= (e)=> {
    e.preventDefault()
    dispatch(signUp(user))
    setUser({
    name:"",
    email:"",
    password:""
    })
  }
  if(auth._id) return <Navigate to="/"/>
  return (
    <div className={classes.space}>
    <form className={classes.styles}
    noValidate
    autoComplete='off' onSubmit={Handlersubmit}>
      <Typography >
      <h1>SignUp</h1>
      </Typography>
      <TextField className={classes.space}
      id="name"
      label="name"
      variant="outlined"
      value={user.name}
      onChange={(e)=>setUser({...user,name:e.target.value})}
      fullWidth
      />
      <TextField className={classes.space}
      id="Email"
      label="Email"
      variant="outlined"
      value={user.email}
      onChange={(e)=>setUser({...user,email:e.target.value})}
      fullWidth
      />
            <TextField className={classes.space}
      id="Password"
      type=""
      label="enterpassword"
      variant="outlined"
      value={user.password}
      onChange={(e)=>setUser({...user,password:e.target.value})}
      fullWidth
      />
<Button className={classes.space}
variant="contained"
color="primary"
type="submit">
 Signup
</Button>
    </form>
    </div>
  )
}
