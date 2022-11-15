import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div className="main_register">
        <div className="container_register">
          <div className="title_register">Registration</div>
          <div className="content_register">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" id="userFullName" placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="text" id="userEmail" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input type="text" id="userPhoneNumber" placeholder="Enter your number" required />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input type="password" id="userPassword" placeholder="Enter your password" required />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input type="password" id="userConfirmPassword" placeholder="Confirm your password" required />
                </div>
                <div className="input-box gender-details">
                  <input type="radio" name="gender" defaultValue="true" id="dot-1" defaultChecked="checked" />
                  <input type="radio" name="gender" defaultValue="false" id="dot-2" />
                  <span className="gender-title">Gender</span>
                  <div className="category">
                    <label htmlFor="dot-1">
                      <span className="dot one" />
                      <span className="gender">Male</span>
                    </label>
                    <label htmlFor="dot-2">
                      <span className="dot two" />
                      <span className="gender">Female</span>
                    </label>
                  </div>
                </div>
              </div>
              <div id="alert-email" className="details input-box" style={{ display: 'none', color: 'red', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
              </div>
              <div id="alert-phonenumber" className="details input-box" style={{ display: 'none', color: 'red', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
              </div>
              <div id="alert-password-match" className="details input-box" style={{ display: 'none', color: 'red', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
              </div>
              <div id="alert-password-length" className="details input-box" style={{ display: 'none', color: 'red', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
              </div>
              <div id="alert-register" className="details input-box" style={{ display: 'none', color: 'rgb(9, 237, 28)', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
              </div>
              <div className="button" id="buttonSubmit">
                <input type="submit" defaultValue="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>

    )
  }
}
