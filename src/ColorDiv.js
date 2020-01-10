import React from 'react'
import ColorContent from './ColorContent'
import ColorText from './ColorText'

class ColorDiv extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let divStyle = {
      border: '1px solid #ccc',
      width: '100px',
      height: '150px',
      boxShadow: '5px 0 5px #ccc'
    }
    return (
      <div style={divStyle}>
        <ColorContent bgColor={this.props.color}/>
        <ColorText bgColor={this.props.color}/>
      </div>
    )
  }
}

export default ColorDiv