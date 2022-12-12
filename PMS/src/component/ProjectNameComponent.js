import React, { Component } from 'react'

export class ProjectNameComponent extends Component {
  render() {
    return (
        <div>
           <li onClick={()=>{
                    this.props.statushandler(this.props.index)}}
                    className={this.props.list.completed?'completed':''}>
                    {this.props.list.name}
                    <button onClick={(event)=>{
                        event.stopPropagation();
                        this.props.deleteList(this.props.index)}}>Remove List</button>
                </li>
                    <h1>{this.props.list.name}</h1>
          
        </div>
    )
  }
}

export default ProjectNameComponent