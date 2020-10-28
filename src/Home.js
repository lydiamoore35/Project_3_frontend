import React from "react";

const Home = (props) => {

  return (
    <>
    <header className="navbar">
      <nav>
        <span><a href="/">Home</a></span>
        <span><a href="/auth/signup">Sign Up</a></span>
        <span><a href="/auth/login">Log In</a></span>
        <span><a href="/auth/logout">Log Out</a></span>
        <span><a href="/">Find Local Projects</a></span>
      </nav>
    </header>
    <div className="name">
      <div className="textbox">
      <h1 className="heading">Ubuntu</h1>
      <h5 className="subheading">I AM BECAUSE WE ARE</h5>
      <p className="about">
      Ubuntu is a digital platform for searching local volunteer opportunities. <br></br>Explore different projects that need your help. Sign up and start logging your favorite community projects and add your own for others to view!</p>
      </div>
      <img className="responsive" src="https://dionisopunk.files.wordpress.com/2018/11/the-circle-game-o.jpg?w=580&h=580&crop=1"></img>
    </div>
    <body>
    {/* <Form title="SIGNUP">
        <div className="signupField">
          <form action="/auth/signup" method="post">
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit" value="signup" />
          </form>
        </div>
      </Form> */}
    </body>
    <footer>
      Copyright © 2020 created by Brandon Czaja, Leanne Frisinger, Lydia Moore and Oscar Icochea Calenzani.<br></br>All rights reserved.
    </footer>
    </>
) 
 

};
export default Home;
