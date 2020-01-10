import React from 'react'

class CommentList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  deleteItem = () => {
    this.props.delete(this.props.index)
  }
  render() {
    return (
      <div>
        {this.props.list}<span onClick={this.deleteItem}>X</span>
      </div>
    )
  }
}

export default CommentList