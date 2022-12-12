import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import TodoRows from "./components/TodoRows";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Prachi",
      todoItem: [
        { action: "By milk", done: false },
        { action: "Dentist at 5  pm", done: false },
        { action: "Go to gym", done: false },
      ],
      newTodo:'',
    };
  }
  toggleDone=(todo)=>{
    this.setState({
      todoItem:this.state.todoItem.map((item)=>
      item.action===todo.action?{...item,done:!item.done}:item)
    })
  }
  newTodo=()=>{
    this.setState({
       todoItem:[
        ...this.state.todoItem,{action:this.state.newTodo,done:false},
       ]
    })
  }
  updateValue=(event)=>{
    this.setState({newTodo:event.target.value})
  }
  todoRow = () =>
    this.state.todoItem.map((item) => (
      <TodoRows key={item.action} item={item} callback={this.toggleDone}/>
    ));

  // changeStateData=()=>{
  //   this.setState({
  //     userName:this.state.userName==='Prachi'?'Sachin':'Prachi',
  //   })
  // }
  render = () => {
    return (
      <div className="container">
        <div className="row">
          <Navbar name={this.state.userName}/>
          {/* <button className='btn btn-secondary m-2' onClick={this.changeStateData}>Change</button> */}
          <div className="col-12"><input className="form-control" value={this.state.newTodo} onChange={this.updateValue}/>
          <button className='btn btn-primary' onClick={this.newTodo}>Add</button>
          </div>
          <div className="col-12">
            <table className="table">
              <thead> 
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                  <th>Delete Task</th>
                </tr>
              </thead>
              <tbody>{this.todoRow()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
