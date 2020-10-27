import React from "react";

const Display = (props) => {

  return (
    <>
    <header className="nav-bar">
      <nav>
        <span><a href="/">Home</a></span>
        {/* BC: Does not need auth */}
        <span><a href="/auth/signup">Sign Up</a></span>
        <span><a href="/auth/login">Log In</a></span>
        <span><a href="/auth/logout">Log Out</a></span>
        {/* BC: Homepage: Does not need auth */}
        <span><a href="/">Find Local Projects</a></span>
      </nav>
    </header>
    <div className="name">
      <h1 className="ubuntu">Ubuntu</h1>
      <h5 className="logo">I AM BECAUSE WE ARE</h5>
    </div>
    <body className="about">
      Ubuntu is a digital platform for searching local volunteer opportunities. Explore different porjects close to you that need your help. Sign up and start logging your favorite community projects and add your own for others to view!
    </body>
    <footer>
      Copyright © 2020 created by Brandon Czaja, Leanne Frisinger, Lydia Moore and Oscar Icochea Calenzani.<br></br>All rights reserved.
    </footer>
    </>
) 
 

};
export default Display;
