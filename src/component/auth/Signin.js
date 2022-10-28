import React from 'react'
import { Typography,TextField ,Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {signIn} from '../../store/actions/Authactions'
import authreducer from '../../store/reducers/Authreducer';
import { Navigate } from 'react-router-dom';
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
export default function Signin() {
  const auth=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  const classes=usestyles()
  const [creds,setCreds] =useState({
    email:"",
    password:""
  })
  const handlerSubmit=(e)=>{
    e.preventDefault()
    dispatch(signIn(creds))
    setCreds({
      email:"",
      password:""
    })
    }
    if(auth._id) return <Navigate to="/"/>
  return (
    <div className={classes.space}>
    <form className={classes.styles}
    noValidate
    onSubmit={handlerSubmit}
    autoComplete='off'>
      <Typography >
        <h1>SignIn</h1>
      </Typography>
      <TextField className={classes.space}
      id="Email"
      label="Email"
      variant="outlined"
      value={creds.email}
      onChange={e=>setCreds({...creds,email:e.target.value})}
      fullWidth
      />
            <TextField className={classes.space}
      id="Password"
      type=""
      label="enterpassword"
      variant="outlined"
      value={creds.password}
      onChange={e=>setCreds({...creds,password:e.target.value})}
      fullWidth
      />
<Button
className={classes.space}
variant="contained"
color="primary"
type="submit">
  SignIn
</Button>
    </form>
    </div>
  )
}
