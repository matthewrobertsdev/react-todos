import React from 'react';
const ToDoView = (props) => {
  return (
    <div>
    <input type='checkbox'/>
    {props.text}
    </div>
  )
}
export default ToDoView