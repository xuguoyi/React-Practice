import React from 'react'

class LifeCycle extends React.Component{
  render() {
    return (
      <div>
        componentWillMount
        componentDidMount
        componentWillUnmount
        componentWillUpdate
        componentDidUpdate
        shouldComponentUpdate
        componentWillReceiveProps
      </div>
    )
  }
}

export default LifeCycle