import React, {Component,Fragment} from 'react';

import Son from './Son'
import AddNumber from './AddNumber'
import Time from './Time'
import CommentDom from './CommentDom'
import ColorDiv from './ColorDiv'
import MultiComponents from './MultiComponents'
import LifeCycle from './LifeCycle'
import './index.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }
    // this.inputChange = this.inputChange.bind(this)
    // this.btnClick = this.btnClick.bind(this)
    // this.itemClick = this.itemClick.bind(this)
  }
  btnClick = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  itemClick(index) {
    let list = [...this.state.list]
    list.splice(index,1)
    this.setState({list})
  }
  getItem() {
    return (
      this.state.list.map((item,index) => {
        return (<Son key={index} content={item} index={index} deleteItem={this.itemClick}/>)
      })
    )
  }
  render() {
    let xxx = {
      background: '#f00',
      color: '#fff'
    }
    return (
      // 替代div，可不渲染div
      <Fragment>
        <div>
          {/* 三种css的写法 */}
          <input className="input-style" value={this.state.inputValue} onChange={(e)=>{this.inputChange(e)}}/>
          {/* <button style={{background: '#f00', color: '#fff'}} onClick={()=>{this.btnClick()}}>Add</button> */}
          <button style={xxx} onClick={()=>{this.btnClick()}}>Add</button>
        </div>
        {/* 三种写法 */}
        <ul>
            {
              this.state.list.map((item,index) => {
                return <li key={index} onClick={()=>{this.itemClick(index)}}>{item}</li>
              })
            }
        </ul>
        <ul>
          {
            this.state.list.map((item,index) => {
              return <Son key={index} content={item} index={index} deleteItem={()=>{this.itemClick()}}/>
            })
          }
        </ul>
        <ul>{this.getItem()}</ul>
        <AddNumber />
        <Time />
        <CommentDom />
        <ColorDiv color="#ffa737"/>
        <MultiComponents />
        <LifeCycle />
      </Fragment>
    );
  }
}
// 另外一种写法
// import React from 'react'
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>你好，世界！</h1>
//       </div>
//     )
//   }
// } 

export default App;
