import React from 'react'
import CommentList from './CommentList'
import CommentBox from './CommentBox'

class CommentDom extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      lists: ['第一条评论']
    }
  }
  addList = (value) => {
    this.setState({
      lists: [...this.state.lists, value]
    })
  }
  deleteList = (index) => {
    let list = [...this.state.lists]
    list.splice(index,1)
    this.setState({
      lists: list
    })
  }
  render() {
    return (
      <div>
        <h1>留言板</h1>
        {
          this.state.lists.map((item, index) => {
            return <CommentList key={index} list={item} index={index} delete={this.deleteList}/>
          })
        }
        <CommentBox len={this.state.lists.length} add={this.addList}/>
      </div>
    )
  }
}

export default CommentDom