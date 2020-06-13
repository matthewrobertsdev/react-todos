import React, { useState } from 'react'
import ToDoView from './ToDoView'
import EditButton from './EditButton'

// page responsible for working with todos
const MainPage = () => {

  //state
  //text state for input
  const [text, setText] = useState('')
  //todos state for page
  const [todos, setTodos] = useState([])
  //editing state for the page
  const [editing, setEditing] = useState(false)

  //view
  return (
    //main content of page
    <main>
      {/* title */}
      <h1 className='center-text'>To Dos</h1>
      {/* inputs/controls */}
      <div className='ten-left-margin'>
        {/* controlled conponent */}
        <input onChange={updateInput} value={text} />
        {/* add todo object with text
          change in state will cause ToDoViews to be re-rendered
       */}
        <button onClick={addToDo}>
          Add a todo
      </button>
        <EditButton editing={editing} toggleEditing={
          () => setEditing(!editing)
        } todosCount={todos.length} />
      </div>
      {/* ToDoViews will be in an unordered list */}
      <ul>
        {/* render one view for every todo object */}
        {todos.map((_, index) => {
          return (
            <ToDoView key={index} index={index}
              todo={todos[index]} editing={editing} toggleChecked={
                //checked is togglable
                () => toggleCheckBox(index)
              } delete={
                //deletable
                () => deleteTodo(index)
              } />
          )
        }
        )}
      </ul>
    </main>
  )

  //functions
  //add todo object with current text from state and not checked
  //also clear text state of this page
  function addToDo() {
    setTodos([...todos, { text: text, checked: false }])
    setText('')
  }
  //for updating the text's state when the input is typed in
  function updateInput(event) {
    setText(event.target.value)
  }
  //toggle checked by index
  function toggleCheckBox(index) {
    const updatedToDos = [...todos]
    updatedToDos[index].checked = !todos[index].checked
    setTodos(updatedToDos)
  }
  //delete by index
  function deleteTodo(index) {
    let updatedToDos = [...todos]
    updatedToDos.splice(index, 1)
    setTodos(updatedToDos)
    if (updatedToDos.length === 0) {
      setEditing(false)
    }
  }
}
export default MainPage