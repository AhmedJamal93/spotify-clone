import React from 'react';
import './App.css';
import axios from 'axios';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Player from './components/Player/Player';

class App extends React.Component{
  state = {
    loginActive:0,
    first:'test',
    last:'test',
    email:'',
    password:'',
    loggedin:true,
    navbarActive:0,
    activePage:'Home',
  }

  handleLoginChange = (index) => {
    this.setState({
      loginActive:index
    })
  }

  handleNavbarChange = (index, title) => {
    this.setState({
      navbarActive:index,
      activePage:title
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
      axios.get('http://localhost:5000/users', {params:{email:this.state.email}})
      .then(res => {
        if(res.data.rows.length > 0){
          alert('Email Already Exists! Please Enter Different Email or Sign In!')
        } else {
          axios.post('http://localhost:5000/users', newUser)
          alert(`New User With The Email: ${this.state.email} Has Been Registered! Thank You!`)
        }
      })
    })
  }

  handleSignIn = (email, password) => {
    this.setState({
      email,
      password
    }, () => {
      axios.get('http://localhost:5000/users/details', {params:{email:this.state.email}})
      .then(res => {
        if(res.data.rows.length > 0){
          if (this.state.password === res.data.rows[0].password){
            this.setState({
              first:res.data.rows[0].firstname,
              last:res.data.rows[0].lastname
            })
            alert(`Welcome Back ${res.data.rows[0].firstname} ${res.data.rows[0].lastname}`)
            this.setState({
              loggedin:true
            })
          } else {
            alert('Password incorrect, Please Try Again!')
          }
        } else {
          alert("Email Does Not Exist! Please Sign In With a Different Email Address or Sign Up! Thank You!")
        }
      })
    })
  }

render(){
  return(
    <div className="app">
      {!this.state.loggedin && 
        <Login 
          handleLoginChange={this.handleLoginChange}
          loginActive={this.state.loginActive}
          handleSignUp={this.handleSignUp}
          handleSignIn={this.handleSignIn}/>
      }
      {this.state.loggedin && 
        <div className="screen" >
          <div className="home">
            <Navbar 
              handleNavbarChange={this.handleNavbarChange}
              navbarActive={this.state.navbarActive}
              />
            <Main 
              header={this.state.activePage}
              first={this.state.first}
              last={this.state.last}/>
          </div>
          <div className="player">
            <Player />
          </div>
        </div>
      }
    </div>
  )
}

}

export default App;
