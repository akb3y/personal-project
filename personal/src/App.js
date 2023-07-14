import './App.css';
import React from 'react'
import Header from "./components/header/Header.jsx"
import Home from './components/middle/Home.jsx'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      page: 'home',
    }
    this.setPage = this.setPage.bind(this)
  }

  setPage(e){
      this.setState({ page: e })
  }

render(){
let middle = this.state.page === 'home' ? <Home setPage={this.setPage} /> : this.state.page === 'about' ? <p>about</p> : null

  return (
    <div className="App">
      <h1 className='name'>Alisha Barraw</h1>
      <Header page={this.state.page} setPage={this.setPage} />
      {middle}
    </div>
  );
}
}

export default App;
