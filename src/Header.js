import React, { Component } from 'react'
import Logo from './Logo'
import Menu from './Menu'

class Header extends Component {


  render() {
    return (
      <div className={`ui fixed menu ${this.props.darkMode ? "inverted" : ""}`}> 
        <Logo />
        <div className="right menu">
          <Menu toggleDarkMode = {this.props.toggleDarkMode} />
        </div>
      </div>
    )
  }
}

export default Header