import React from 'react';

//basic view for a todo
const ToDoView = (props) => {
  return (
    <li>
      {/* toggable */}
    <input type='checkbox' onChange={props.toggleChecked} checked={props.todo.checked}/>
    {props.todo.text}
    {/* delete button is present if editing */}
    {getDeleteButton()}
    </li>
  )
  // delete button is returned only if editing
  function getDeleteButton(){
    if (props.editing){
      return <button onClick={props.delete}>Delete</button>
    } else {
      return null
    }
  }
}
export default ToDoView