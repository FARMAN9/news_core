import React, { Component } from 'react';


export default class Navbar extends Component {
  render() {
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark p-2" /*style={{ backgroundColor: "#E8D8B7" }}*/ id="headerNav">
      <div className="container-fluid">
        <a className="navbar-brand d-block d-lg-none" href="/">
           <img src={process.env.PUBLIC_URL + "/logoX.png"}  height="50" alt="Logo" />
        </a>


        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link mx-2" href="/">
                <img src= {process.env.PUBLIC_URL + "/logoX.png"}  height="80" alt="Logo" />
              </a>
            </li>

          </ul>
        </div>
      </div>
     
    </nav>
  
      </div>
    )
  }
}
