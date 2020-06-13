import React from 'react'

//the edit button (for toggling delete)
const EditButton = (props) => {
  return (
      <button onClick={props.toggleEditing} disabled={getDisabledState()}>
        {getText()}
      </button>
  )
  //text explains state
  function getText(){
    if (props.editing){
      return 'Done editing'
    } else {
      return 'Edit todos'
    }
  }
  //disabled when count is 0
  function getDisabledState(){
    if (props.todosCount>0) {
      return false
    } else {
      return true
    }
  }
}
export default EditButton