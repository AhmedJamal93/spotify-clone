import React from 'react';
import './App.css';
import axios from 'axios';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Player from './components/Player/Player';
import {fetchAlbums, searchQuery} from './components/api/';

class App extends React.Component{
  state = {
    loginActive:0,
    first:'',
    last:'',
    email:'',
    password:'',
    loggedin:false,
    navbarActive:0,
    activePage:'Home',
    error:false,
    errorMessage:'',
    menuOpen:false,
    trending:[],
    search:'',
    searchResults:[]
  }

  async componentDidMount(){
    const data = await fetchAlbums()
    this.setState({
      trending:data
    })
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
      .then( res => {
        if(res.data.rows.length > 0){
          alert('Email Already Exists! Please Enter Different Email or Sign In!')
        } else {
          axios.post('http://localhost:5000/users', newUser)
          .then(res => {
            const defaultLibraries = ['Made For You', 'Recently Played', 'Liked Songs', 'Albums', 'Artists', 'Podcasts']
            
            defaultLibraries.map(library => {
              const userLibrary = {
                id:res.data.rows[0].id,
                title:library
                }
                axios.post('http://localhost:5000/users/library/:id', userLibrary)
            })
            
          })
          alert(`New User With The Email: ${this.state.email} Has Been Registered! Thank You!`)
          this.setState({
            loginActive:0
          })
        }
      })
    })
  }

  handleSignIn = (email, password) => {
    this.setState({
      email,
      password
    }, () => {
      axios.get('http://localhost:5000/users/details', {params:{email:this.state.email, password:this.state.password}})
      .then(res => {
        console.log(res.data)
        if(res.data === false){
          this.setState({
            error:true,
            errorMessage:'The Email and/or Password are Invalid! Please Try Again!'
          })
        } else {
          this.setState({
            first:res.data.first,
            last:res.data.last,
            loggedin:true
          })
          alert(`Welcome Back ${this.state.first} ${this.state.last}`)
        }
      })
    })
  }

   handleSearch = (search) => {
    this.setState({
      search
    }, async() => {
      const searchData = await searchQuery(this.state.search)
      this.setState({
        searchResults:searchData
      }, () => {console.log(this.state.searchResults)})
    })
  }

  handleOpenMenu = () => {
    if(this.state.menuOpen){
      this.setState({
        menuOpen:false
      })
    }else {
      this.setState({
        menuOpen:true
      })
    }
  }

  handleSignOut = () => {
    this.setState({
      loginActive:0,
      first:'',
      last:'',
      email:'',
      password:'',
      loggedin:false,
      navbarActive:0,
      activePage:'Home',
      error:false,
      errorMessage:'',
      menuOpen:false,
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
          handleSignIn={this.handleSignIn}
          errorMessage={this.state.errorMessage}/>
      }
      {this.state.loggedin && 
        <div className="screen" >
          <div className="home">
            <div className="navbar">
            <Navbar 
              handleNavbarChange={this.handleNavbarChange}
              navbarActive={this.state.navbarActive}
              />
            </div>
            <Main 
              header={this.state.activePage}
              first={this.state.first}
              last={this.state.last}
              handleOpenMenu={this.handleOpenMenu}
              menuOpen={this.state.menuOpen}
              handleSignOut={this.handleSignOut}
              trending={this.state.trending}
              handleSearch={this.handleSearch}
              search={this.state.search}/>
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
