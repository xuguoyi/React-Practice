import React from 'react'

class ColorContent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let bgCentent = {
      height: '100px',
      width: '100px',
      backgroundColor: this.props.bgColor
    }
    return (
      <div style={bgCentent}></div>
    )
  }
}

export default ColorContent