import React from 'react'
import{BrowserRouter,Switch,Route,Routes} from 'react-router-dom'
import Todos from './component/todos/Todos';
import Signin from './component/auth/Signin';
import Signup from './component/auth/Signup';
import Nav from './component/navbar/Nav';
import { Container, makeStyles } from '@material-ui/core';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {loaduser} from './store/actions/Authactions'

function App() {
  const  dispatch=useDispatch()
  useEffect(()=>{
    dispatch(loaduser())
  },[])

 
  return (
<>
<BrowserRouter>
<ToastContainer>
  
</ToastContainer>
<Container maxWidth="md" >
<Nav/>
</Container>
<Container maxWidth="sm">
<Routes>
  <Route path="/Signin" element={<Signin/>}/>
  <Route path="Signup" element={<Signup/>}/>
  <Route path="/" exact element={<Todos/>}/>
  </Routes>
  </Container>
</BrowserRouter>
</>
  );
}

export default App;
