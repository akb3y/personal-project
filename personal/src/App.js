import './App.css'
import React from 'react'
import Desktop from './components/Desktop.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      mobile: true,
    }
  }

  render() {
    let view = this.state.mobile ? <p>Hello World</p> : <Desktop />


    return (
        <>{view}</>
    )
  }
}

export default App
