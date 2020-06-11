import React, { useState } from 'react'
import ToDoView from './ToDoView'
const MainPage = () => {
  const [text, setText]=useState('')
  const [todos, setTodos]=useState([])
  return (
    <main>
      <input/>
      <button onClick={addToDo}>
        Add a todo
      </button>
      {todos.map((_, index)=>{return (<ToDoView key={index}/>)})}
    </main>
  )
  function addToDo(){
    setTodos([...todos, {text: '', checked: false}])
  }
}
export default MainPage