import React from 'react'

export const Listform = (props) => {
  return (
    <div>
        <form onSubmit={props.addList}>
        <input type="text" value={props.currentList} onChange={props.updateList}></input>
        <button type="submit">AddList</button>

        </form>
    </div>
  )
}
export default Listform;
