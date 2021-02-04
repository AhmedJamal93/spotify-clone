import React from 'react';
import './App.css';
import axios from 'axios';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

class App extends React.Component{
  state = {
    loginActive:0,
    first:'',
    last:'',
    email:'',
    password:'',
    loggedin:true,
    navbarActive:0
  }

  handleLoginChange = (index) => {
    this.setState({
      loginActive:index
    })
  }

  handleNavbarChange = (index) => {
    this.setState({
      navbarActive:index
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
        <div className="home">
          <Navbar 
            handleNavbarChange={this.handleNavbarChange}
            navbarActive={this.state.navbarActive}/>
          <Main />
        </div>
      }
    </div>
  )
}

}

export default App;
