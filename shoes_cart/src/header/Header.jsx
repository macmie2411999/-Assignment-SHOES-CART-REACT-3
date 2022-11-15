import React, { Component } from 'react';
import imageLogo from "../images/imageLogo.png"
import imageCart from "../images/imageCart.png"

export default class Header extends Component {
  render() {
    return (
      <header className="header fixed-top">
        <div className="container_header">
          <nav className="navbar1 navbar-expand-lg bg-light bg-transparent">
            <div className="container-navbar1">
              <div className="content-navbar1">
                <div className="logo-company">
                  <a href="/home"><img className="logoImage" src={imageLogo}></img></a>
                </div>
                <div className="loginRegister mb-2 mb-lg-0">
                  <a href="/cart"><img className="imageCart" src={imageCart}></img></a>
                  <p className="numberProductIncart">(0)</p>
                  <a className="gotoLogin" href="#">Login</a>
                  <a className="gotoRegister" href="/register">Register</a>
                </div>
              </div>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Men</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Woman</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Kid</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Sport</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
