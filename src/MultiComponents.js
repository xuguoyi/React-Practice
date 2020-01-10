import React from 'react'

class Three extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.props.sex}</p>
      </div>
    )
  }
}

class Two extends React.Component{
  render() {
    return (
      <div>
        <Three {...this.props}/>
      </div>
    )
  }
}
class One extends React.Component {
  render() {
    return (
      <div>
        <Two {...this.props}/>
      </div>
    )
  }
}
class MultiComponents extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <div>
        {/* 多层属性传递可以直接{...this.props} */}
        <One name="Leo" age="30" sex="man"/>
      </div>
    )
  }
}
export default MultiComponents