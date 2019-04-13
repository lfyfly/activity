import React, { PureComponent } from 'react'
class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'react App.js'
    }
  }
  render() {
    const {msg} = this.state
    return (
      <div>
        <h1>{msg}</h1>
      </div>
    )
  }
}

export default App