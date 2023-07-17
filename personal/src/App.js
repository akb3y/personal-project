import './App.css'
import React from 'react'
import Header from './components/header/Header.jsx'
import About from './components/middle/About/About.jsx'
import Projects from './components/middle/Projects.jsx'
import Contact from './components/middle/Contact.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 'about',
    }
    this.setPage = this.setPage.bind(this)
  }

  setPage(e) {
    this.setState({ page: e })
  }

  render() {
    let middle =
      this.state.page === 'about' ? (
        <About />
      ) : this.state.page === 'project' ? (
        <Projects />
      ) : this.state.page === 'contact' ? (
        <Contact />
      ) : null

    return (
      <div className='App'>
        <Header page={this.state.page} setPage={this.setPage} />
        {middle}
      </div>
    )
  }
}

export default App
