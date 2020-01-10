import React from 'react'

class ColorText extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>{this.props.bgColor}</div>
    )
  }
}

export default ColorText