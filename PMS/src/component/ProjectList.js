import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent';
import ProjectNameComponent from './ProjectNameComponent';
import Listform from './Listform';

class ProjectList extends React.Component{
  constructor(props){
      super(props);
      this.showStatus=this.showStatus.bind(this);
      this.updateList=this.updateList.bind(this);
      this.addList=this.addList.bind(this);
      this.deleteList=this.deleteList.bind(this);
      this.state={
          list:[{name:"Merk",completed:false},
                 {name:"SLB",completed:false},
                 {name:"JD",completed:false}],
                 currentList:''
      }

  }
  updateList(newList){
      this.setState({
          currentList:newList.target.value
      })

  }

  showStatus(index){
      var list = this.state.list;
      var list1 = list[index];
      list1.completed=!list1.completed;
      this.setState({
          list:list
      });
      console.log(this.state.list[index]);
  }
  
  addList(event){
      event.preventDefault();
      console.log("List is trigerred");
      let list = this.state.list;
      let currentList = this.state.currentList;
      list.push({
          name:currentList,
          completed:false
      });
      this.setState({
          list:list,
          currentList:''
      });
  }
  deleteList(Listtobedeleted){
      console.log("You have clicked delete button",Listtobedeleted);
      let list=this.state.list;
      list.splice(Listtobedeleted,1);
      this.setState({
          list:list
      });
  }
  render(){
      return(
          <div> 
              <h1> Project Management System</h1>
              <hr/>
              <section>

                  <Listform currentList={this.state.currentList}
                  updateList={this.updateList}
                  addList={this.naddList}/>
              </section>
              <ul>
                  
                  {this.state.list.map((list,index)=>{
                     return <ProjectNameComponent
                      key={list.name} 
                      list={list}  
                      index={index} 
                      statushandler={this.showStatus}
                      deleteList={this.deleteList}/>;
                  })}

                  
              </ul>
              
          </div>
      );
  }
}

export default ProjectList