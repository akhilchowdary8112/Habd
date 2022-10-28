import React from 'react'
import Addtodos from "./Addtodos"
import Listtodos from "./Listtodos"
import { useState } from 'react'
export default function Todos() {
  const [ todo, setTodo]=useState({
    name:"",
    isComplete:false

  })
  return (
    <div>
      <Addtodos todo={todo} setTodo={setTodo}/>
      <Listtodos setTodo={setTodo}/>
      
    </div>
  )
}
