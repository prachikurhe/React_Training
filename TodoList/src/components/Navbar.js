import React, { Component } from 'react'

export class Navbar extends Component {
  render=()=> {
    return (
        <div className="col-12">
          <h2 className="bg-primary text-white text-center p2">
            {this.props.name} To do list
          </h2>
        </div>

    )
  }
}

export default Navbar