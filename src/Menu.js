import React from 'react'
import {browserHistory,Router, Route, Link } from 'react-router'
import ColorDiv from './ColorDiv'

class ExampleList extends React.Component{
  render() {
    return (
      <div>
        <ul>
          <li>
            小例子
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class Menu extends React.Component{
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={ExampleList}></Route>
          <Route path='/colorDiv' component={ColorDiv}></Route>
        </Router>
      </div>
      
    )
  }
}

export default Menu