import React from 'react';
import './App.css';
import axios from 'axios';
import Login from './components/Login/Login'

class App extends React.Component{
  state = {
    loginActive:0,
    first:'',
    last:'',
    email:'',
    password:''

  }

  handleLoginChange = (index) => {
    this.setState({
      loginActive:index
    })
  }

  handleSignUp = (first, last, email, password) => {
    this.setState({
      first:first,
      last,
      email,
      password
    }, () => {
      const newUser = {
        first:this.state.first,
        last:this.state.last,
        email:this.state.email,
        password:this.state.password
      }
      console.log(newUser)
      axios.post('http://localhost:5000/users', newUser)
    })
  }

  handleSignIn = (email, password) => {
    this.setState({
      email,
      password
    }, () => {

      axios.get('http://localhost:5000/users', {params:{email:this.state.email}})
    })
  }

render(){
  return(
    <div className="app">
        <Login 
          handleLoginChange={this.handleLoginChange}
          loginActive={this.state.loginActive}
          handleSignUp={this.handleSignUp}
          handleSignIn={this.handleSignIn}/>
    </div>
  )
}

}

export default App;
