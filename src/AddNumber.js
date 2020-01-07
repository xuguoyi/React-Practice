import React from 'react'

class AddNumber extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }
  addNumber() {
    let num = this.state.num
    this.setState({
      num: ++num
    })
  }
  render() {
    return (
      <div>
        <button onClick={()=>{this.addNumber()}}>{this.state.num}</button>
      </div>
    )
  }
}

export default AddNumber