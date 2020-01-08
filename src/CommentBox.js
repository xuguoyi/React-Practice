import React from 'react'

class CommentBox extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }
  add = () => {
    this.props.add(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }
  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.inputChange}/>
        <div>共有{this.props.len}条评论</div>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

export default CommentBox