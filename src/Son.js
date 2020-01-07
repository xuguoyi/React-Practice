import React from 'react'

class Son extends React.Component{
  constructor(props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
  }
  deleteItem() {
    let {deleteItem, index} = this.props
    deleteItem(index)
  }
  render() {
    let {content} = this.props
    return (
      <div onClick={this.deleteItem}>
        {content}
      </div>
    )
  }
}

export default Son