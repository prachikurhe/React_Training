import React, { Component } from 'react'

export class TodoRows extends Component {
  render() {
    return (
          <tr>
            <td>{this.props.item.action}</td>
            <td>
              <input type="checkbox" checked={this.props.item.done} onChange={()=>this.props.callback(this.props.item)}></input>
            </td>
          </tr>
    )
  }
}

export default TodoRows