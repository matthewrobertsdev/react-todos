import React from 'react';
const ToDoView = (props) => {
  return (
    <li>
    <input type='checkbox'/>
    {props.text}
    </li>
  )
}
export default ToDoView