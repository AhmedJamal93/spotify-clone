import React from 'react';
import './App.css';
import Login from './components/Login/Login'

class App extends React.Component{
  state = {
    loginActive:0
  }

  handleLoginChange = (index) => {
    this.setState({
      loginActive:index
    })
  }

render(){
  return(
    <div className="app">
        <Login 
          handleLoginChange={this.handleLoginChange}
          loginActive={this.state.loginActive}/>
    </div>
  )
}

}

export default App;
