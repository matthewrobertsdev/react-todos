import React, { useState } from 'react'
import ToDoView from './ToDoView'
import EditButton from './EditButton'
import { v4 as uuidv4 } from 'uuid';

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
        {todos.map((todo, _) => {
          return (
            <ToDoView key={todo.uuid} todo={todo} editing={editing} toggleChecked={
                //checked is togglable
                () => toggleCheckBox(todo.uuid)
              } delete={
                //deletable
                () => deleteTodo(todo.uuid)
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
    setTodos([...todos, {uuid: uuidv4(), text: text, checked: false }])
    setText('')
  }
  //for updating the text's state when the input is typed in
  function updateInput(event) {
    setText(event.target.value)
  }
  //toggle checked by uuid
  function toggleCheckBox(uuid) {
    let updatedToDos = [...todos]
    var foundToDo=todos.find(todo=>todo.uuid===uuid)
    foundToDo.checked = !foundToDo.checked
    setTodos(updatedToDos)
  }
  //delete by uuid
  function deleteTodo(uuid) {
    let updatedToDos = [...todos]
    updatedToDos=todos.filter(todo=>todo.uuid!==uuid)
    setTodos(updatedToDos)
    if (updatedToDos.length === 0) {
      setEditing(false)
    }
  }
}
export default MainPage