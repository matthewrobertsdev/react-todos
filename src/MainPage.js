import React, { useState } from 'react'
import ToDoView from './ToDoView'

// page responsible for working with todos
const MainPage = () => {

  //state
  //text state for input
  const [text, setText]=useState('')
  //todos state for page
  const [todos, setTodos]=useState([])

  //view
  return (
    //main content of page
    <main>
      {/* controlled conponent */}
      <input onChange={updateInput} value={text}/>
      {/* add todo object with text
          change in state will cause ToDoViews to bve re-rendered
       */}
      <button onClick={addToDo}>
        Add a todo
      </button>
      <button>
        Edit todos
      </button>
      {/* ToDoViews will be in an unordered list */}
      <ul>
        {/* render one view for every todo object */}
        {todos.map((_, index)=>{return (<ToDoView key={index} index={index} 
        text={todos[index].text}/>)})}
      </ul>
    </main>
  )

  //functions
  //add todo object with current text from state and not checked
  function addToDo(){
    setTodos([...todos, {text: text, checked: false}])
    setText('')
  }
  //for updating the text's state when the input is typed in
  function updateInput(event){
    setText(event.target.value)
  }
}
export default MainPage