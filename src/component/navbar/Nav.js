import React from 'react'
import { AppBar,Typography,Toolbar,Button} from '@material-ui/core'
import {Link, useNavigate} from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {signOut} from'../../store/actions/Authactions'

const usestyle=makeStyles({
  root1:{
    flexGrow: 1
  },
  linkstyle:{
    color:"black",
    textDecoration: "none",
    marginLeft:10 
  },
  styles:{
    margin:"0px auto",
    padding:"30px",
    borderRadius:"9px",
    boxShadow:"0px 0px 12px -3px #000000"
  },
  space:{
    
    margin:"10px"
  }

})
export default function Nav() {
  const dispatch=useDispatch()
  const auth=useSelector(state=>state.auth)
  const classes=usestyle();
  const history=useNavigate()
  const handleSignOut=()=>{
    dispatch(signOut())
    history("/signin")

  }

  return (
    
   <AppBar position="static"><Toolbar>

   
    <Typography variant="h6" className={classes.root1}>
    Start with HabD
    </Typography>
    {auth._id ?(
    <div>
      <Typography variant="h6" className={classes.root1}>
    </Typography>
      <Typography variant="subtitle2" className={classes.root1}>
    <center>logged as {auth.name}</center>

    </Typography>
    
    <Button onClick={()=>handleSignOut()}
className={classes.space}
variant="contained"
color="Danger"
type="submit">
  SignOut
</Button>

    </div>):(<div>
      <button className={classes.linkstyle.marginLeft}>
      <Link className={classes.linkstyle} to="/signin">
      <Button
className={classes.space}
variant="contained"
color="primary"
type="submit">
  SignIn
</Button>
      </Link>
    </button>
    <button >
    <Link className={classes.linkstyle} to="/signup">
    <Button
className={classes.space}
variant="contained"
color="primary"
type="submit">
  SignUp
</Button>
      </Link>
    </button>

    </div>)}
    
  
    </Toolbar>
   </AppBar>
  )
}
