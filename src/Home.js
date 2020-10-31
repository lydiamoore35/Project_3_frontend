import React from "react";
import {Link} from "react-router-dom"
import {GlobalContext} from "./App"


const Home = (props) => {

  const {globalState, setGlobalState} = React.useContext(GlobalContext);

  const logout = (<Link to="/"><h2 onClick={() => {
    window.localStorage.removeItem("token");
    setGlobalState({...globalState, token: null})
  }}>Logout</h2></Link>)

  return (
    <>
    <header className="navbar">
      <nav className="navbar2">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/auth/signup">
          <p>Signup</p>
        </Link>
        <Link to="/auth/login">
          <p>Login</p>
        </Link>
        <Link to="/auth/login">
          <p>Add or Find Events</p>
        </Link>
        {globalState.token ? logout : null}
        {/* <span><a href="/">Home</a></span>

        <span><a href="/auth/login">Log In</a></span>

        <span><a href="/auth/signup">Sign Up</a></span>

        <span><a href="/">Log Out</a></span>

        <span><a href="/auth/login">Add Event</a></span>

        <span><a href="/userHomePage">Find Local Projects</a></span> */}
      </nav>
    </header>
    <div className="name">
      <div className="textbox">
        <h1 className="heading">Ubuntu</h1>
        <h5 className="subheading">I AM BECAUSE WE ARE</h5>
        <p className="about">
          Ubuntu is a digital platform for searching local volunteer opportunities. <br></br>Explore different projects that need your help. Sign up and start logging your favorite community projects and add your own for others to view!
        </p>

        <div className="home-buttons"> 
          <a href="/auth/signup">
            <button className="signUp">Sign Up</button>
          </a>

          <a href="/auth/login">
            <button className="logIn">Log In</button>
          </a>
        </div>
      </div>
      <img className="responsive" src="https://dionisopunk.files.wordpress.com/2018/11/the-circle-game-o.jpg?w=580&h=580&crop=1"></img>
    </div>
    <body>
    </body>
    <footer>
      Copyright © 2020 created by Brandon Czaja, Leanne Frisinger, Lydia Moore and Oscar Icochea Calenzani.<br></br>All rights reserved.
    </footer>
    </>
) 
};
export default Home;