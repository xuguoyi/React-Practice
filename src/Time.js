import React from 'react'

class Time extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      time: new Date()
    }
  }
  startTime() {
    this.stopTime()
    this.refreshTime()
  }
  refreshTime() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date()
      })
    },1000)
  }
  componentDidMount() {
    this.refreshTime()
  }
  stopTime() {
    clearInterval(this.timer)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
        {this.state.time.toLocaleTimeString()}
        <button onClick={()=>{this.stopTime()}}>Stop</button>
        <button onClick={()=>{this.startTime()}}>Start</button>
      </div>
    )
  }
}

export default Time