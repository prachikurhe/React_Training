import React, { Component } from 'react'

export class HeaderComponent extends Component {
    constructor(props){ 
        super(props);
        this.state={
            Header:"My project details",
            Logo:"PMS"
        }
    }

  render() {
    return (
      <div>
        <h1>{this.state.Header}</h1>
        <h1>{this.state.Logo}</h1>
      </div>
    )
  }
}

export default HeaderComponent